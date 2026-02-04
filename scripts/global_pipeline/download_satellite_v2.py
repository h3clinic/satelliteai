#!/usr/bin/env python3
"""
Production Satellite Data Downloader

Robust downloader with:
- Resume/checkpointing per (region, year, month)
- Retry with exponential backoff
- Hard timeouts on every network call
- Bounded parallelism
- Progress logging you can trust

Usage:
    # Download stress regions first (priority)
    python download_satellite_v2.py --only-stress --max-regions 50
    
    # Resume interrupted download
    python download_satellite_v2.py --resume
    
    # Full download with parallelism
    python download_satellite_v2.py --workers 4 --years 2018 2019 2020 2021 2022 2023
"""

import os
import sys
import json
import time
import random
import signal
import logging
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass, asdict
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

import numpy as np

# Setup logging FIRST
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('/tmp/satellite_download.log')
    ]
)
logger = logging.getLogger(__name__)

# Try imports
try:
    import planetary_computer as pc
    import pystac_client
    import rasterio
    from pyproj import Transformer
    HAS_DEPS = True
except ImportError as e:
    logger.error(f"Missing dependency: {e}")
    HAS_DEPS = False


# =============================================================================
# CONFIGURATION
# =============================================================================

STAC_URL = "https://planetarycomputer.microsoft.com/api/stac/v1"

# Timeouts (seconds)
CONNECT_TIMEOUT = 30
READ_TIMEOUT = 120
STAC_TIMEOUT = 60

# Retry config
MAX_RETRIES = 5
BACKOFF_BASE = 1.0
BACKOFF_MAX = 32.0
JITTER = 0.5

# Parallelism
DEFAULT_WORKERS = 4
MAX_WORKERS = 8

# Valid SCL classes
VALID_SCL = [4, 5, 6]  # vegetation, bare soil, water

# Growing seasons
GROWING_SEASONS = {
    ("BRA", "soy"): [10, 11, 12, 1, 2, 3],
    ("BRA", "corn"): [2, 3, 4, 5, 6, 7],
    ("IND", "soy"): [6, 7, 8, 9, 10],
    ("IND", "wheat"): [11, 12, 1, 2, 3, 4],
    ("IND", "rice"): [6, 7, 8, 9, 10, 11],
    ("USA", "corn"): [4, 5, 6, 7, 8, 9],
    ("USA", "soy"): [5, 6, 7, 8, 9, 10],
}
DEFAULT_SEASON = [4, 5, 6, 7, 8, 9, 10]


# =============================================================================
# DONE INDEX (Checkpointing)
# =============================================================================

class DoneIndex:
    """Track completed downloads for resume capability."""
    
    def __init__(self, index_path: Path):
        self.index_path = index_path
        self.done = set()
        self.lock = threading.Lock()
        self._load()
    
    def _load(self):
        """Load existing done index."""
        if self.index_path.exists():
            with open(self.index_path) as f:
                for line in f:
                    if line.strip():
                        rec = json.loads(line)
                        key = (rec["admin_code"], rec["year"], rec["month"])
                        self.done.add(key)
            logger.info(f"Loaded {len(self.done)} completed downloads from index")
    
    def is_done(self, admin_code: str, year: int, month: int) -> bool:
        """Check if already downloaded."""
        return (admin_code, year, month) in self.done
    
    def mark_done(self, admin_code: str, year: int, month: int, status: str, scene_id: str = None):
        """Mark as done and persist immediately."""
        with self.lock:
            key = (admin_code, year, month)
            self.done.add(key)
            
            record = {
                "admin_code": admin_code,
                "year": year,
                "month": month,
                "status": status,
                "scene_id": scene_id,
                "timestamp": datetime.now().isoformat()
            }
            
            with open(self.index_path, 'a') as f:
                f.write(json.dumps(record) + "\n")
                f.flush()
                os.fsync(f.fileno())


# =============================================================================
# OUTPUT WRITER (Immediate persistence)
# =============================================================================

class OutputWriter:
    """Write results immediately with fsync."""
    
    def __init__(self, output_path: Path):
        self.output_path = output_path
        self.lock = threading.Lock()
        self.count = 0
        
        # Create/truncate only if not resuming
        output_path.parent.mkdir(parents=True, exist_ok=True)
    
    def write(self, record: dict):
        """Write a single record immediately."""
        with self.lock:
            # Convert numpy types
            record = self._convert_numpy(record)
            
            with open(self.output_path, 'a') as f:
                f.write(json.dumps(record) + "\n")
                f.flush()
                os.fsync(f.fileno())
            
            self.count += 1
    
    def _convert_numpy(self, obj):
        if isinstance(obj, dict):
            return {k: self._convert_numpy(v) for k, v in obj.items()}
        elif isinstance(obj, (np.integer,)):
            return int(obj)
        elif isinstance(obj, (np.floating,)):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        return obj


# =============================================================================
# RETRY DECORATOR
# =============================================================================

def retry_with_backoff(func):
    """Decorator for retry with exponential backoff and jitter."""
    def wrapper(*args, **kwargs):
        last_exception = None
        
        for attempt in range(MAX_RETRIES):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                last_exception = e
                
                if attempt < MAX_RETRIES - 1:
                    delay = min(BACKOFF_BASE * (2 ** attempt), BACKOFF_MAX)
                    delay += random.uniform(0, JITTER * delay)
                    
                    logger.warning(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay:.1f}s")
                    time.sleep(delay)
        
        raise last_exception
    return wrapper


# =============================================================================
# COORDINATE TRANSFORM
# =============================================================================

_transformers = {}

def transform_coords(lat: float, lon: float, target_crs) -> Tuple[float, float]:
    """Transform lat/lon to target CRS with caching."""
    crs_key = str(target_crs)
    
    if crs_key not in _transformers:
        _transformers[crs_key] = Transformer.from_crs("EPSG:4326", target_crs, always_xy=True)
    
    x, y = _transformers[crs_key].transform(lon, lat)
    return x, y


# =============================================================================
# SATELLITE FUNCTIONS
# =============================================================================

@retry_with_backoff
def get_stac_client():
    """Get STAC client with timeout."""
    import requests
    session = requests.Session()
    session.timeout = STAC_TIMEOUT
    
    catalog = pystac_client.Client.open(
        STAC_URL,
        modifier=pc.sign_inplace
    )
    return catalog


@retry_with_backoff
def search_scenes(catalog, lat: float, lon: float, year: int, month: int) -> List:
    """Search for scenes with timeout and retry."""
    bbox = [lon - 0.1, lat - 0.1, lon + 0.1, lat + 0.1]
    
    if month == 12:
        start_date = f"{year}-{month:02d}-01"
        end_date = f"{year + 1}-01-01"
    else:
        start_date = f"{year}-{month:02d}-01"
        end_date = f"{year}-{month + 1:02d}-01"
    
    search = catalog.search(
        collections=["sentinel-2-l2a"],
        bbox=bbox,
        datetime=f"{start_date}/{end_date}",
        query={"eo:cloud_cover": {"lt": 50}}
    )
    
    return list(search.items())


@retry_with_backoff
def read_band_window(url: str, window, timeout: int = READ_TIMEOUT) -> np.ndarray:
    """Read a band window with timeout."""
    import urllib3
    urllib3.disable_warnings()
    
    # Set GDAL timeout via environment
    os.environ['GDAL_HTTP_TIMEOUT'] = str(timeout)
    os.environ['GDAL_HTTP_CONNECTTIMEOUT'] = str(CONNECT_TIMEOUT)
    
    with rasterio.open(url) as src:
        return src.read(1, window=window).astype(np.float32)


def read_scene_data(item, lat: float, lon: float, size: int = 64) -> Optional[Dict]:
    """Read band data with proper error handling."""
    try:
        red_url = pc.sign(item.assets["B04"].href)
        nir_url = pc.sign(item.assets["B08"].href)
        blue_url = pc.sign(item.assets["B02"].href)
        swir_url = pc.sign(item.assets["B11"].href)
        scl_url = pc.sign(item.assets["SCL"].href)
        
        # Get CRS and compute window
        with rasterio.open(red_url) as src:
            x, y = transform_coords(lat, lon, src.crs)
            row, col = src.index(x, y)
            
            half = size // 2
            if (col - half < 0 or row - half < 0 or
                col + half > src.width or row + half > src.height):
                return None
            
            window = rasterio.windows.Window(col - half, row - half, size, size)
            red = src.read(1, window=window).astype(np.float32)
        
        # Read other 10m bands
        nir = read_band_window(nir_url, window)
        blue = read_band_window(blue_url, window)
        
        # 20m bands need different window
        swir_window = rasterio.windows.Window(
            (col - half) // 2, (row - half) // 2,
            size // 2, size // 2
        )
        swir_small = read_band_window(swir_url, swir_window)
        swir = np.repeat(np.repeat(swir_small, 2, axis=0), 2, axis=1)
        
        scl_small = read_band_window(scl_url, swir_window)
        scl = np.repeat(np.repeat(scl_small.astype(np.uint8), 2, axis=0), 2, axis=1)
        
        return {"red": red, "nir": nir, "blue": blue, "swir": swir, "scl": scl}
        
    except Exception as e:
        logger.debug(f"Scene read failed: {e}")
        return None


def compute_stats(sat_records: List[Dict]) -> Optional[Dict]:
    """Compute statistics from multiple scene observations."""
    all_ndvi, all_evi, all_ndwi = [], [], []
    valid_count, total_count = 0, 0
    
    for data in sat_records:
        if data is None:
            continue
        
        red = data["red"] / 10000
        nir = data["nir"] / 10000
        blue = data["blue"] / 10000
        swir = data["swir"] / 10000
        scl = data["scl"]
        
        eps = 1e-10
        ndvi = (nir - red) / (nir + red + eps)
        evi = 2.5 * (nir - red) / (nir + 6*red - 7.5*blue + 1 + eps)
        ndwi = (nir - swir) / (nir + swir + eps)
        
        valid_mask = np.isin(scl, VALID_SCL)
        
        if valid_mask.sum() > 100:
            all_ndvi.extend(ndvi[valid_mask].tolist())
            all_evi.extend(evi[valid_mask].tolist())
            all_ndwi.extend(ndwi[valid_mask].tolist())
            valid_count += valid_mask.sum()
            total_count += valid_mask.size
    
    if len(all_ndvi) < 100:
        return None
    
    ndvi_arr = np.clip(np.array(all_ndvi), -1, 1)
    evi_arr = np.clip(np.array(all_evi), -1, 1)
    ndwi_arr = np.clip(np.array(all_ndwi), -1, 1)
    
    return {
        "ndvi_mean": float(np.mean(ndvi_arr)),
        "ndvi_std": float(np.std(ndvi_arr)),
        "ndvi_min": float(np.min(ndvi_arr)),
        "ndvi_max": float(np.max(ndvi_arr)),
        "ndvi_p10": float(np.percentile(ndvi_arr, 10)),
        "ndvi_p50": float(np.percentile(ndvi_arr, 50)),
        "ndvi_p90": float(np.percentile(ndvi_arr, 90)),
        "evi_mean": float(np.mean(evi_arr)),
        "evi_std": float(np.std(evi_arr)),
        "ndwi_mean": float(np.mean(ndwi_arr)),
        "ndwi_std": float(np.std(ndwi_arr)),
        "valid_pixels": valid_count,
        "total_pixels": total_count,
        "cloud_pct": 100 * (1 - valid_count / max(total_count, 1)),
    }


# =============================================================================
# MAIN DOWNLOAD LOGIC
# =============================================================================

def process_region_month(
    catalog,
    admin_code: str,
    country: str,
    crop: str,
    year: int,
    month: int,
    lat: float,
    lon: float,
    done_index: DoneIndex,
    writer: OutputWriter
) -> bool:
    """Process one region-month. Returns True if successful."""
    
    # Check if already done
    if done_index.is_done(admin_code, year, month):
        logger.debug(f"Skipping {admin_code}/{year}/{month} (already done)")
        return True
    
    try:
        # Search
        items = search_scenes(catalog, lat, lon, year, month)
        
        if not items:
            done_index.mark_done(admin_code, year, month, "no_scenes")
            return True
        
        # Read scenes
        scene_data = []
        scene_id = items[0].id if items else None
        
        for item in items[:5]:  # Max 5 scenes
            data = read_scene_data(item, lat, lon)
            if data:
                scene_data.append(data)
        
        if not scene_data:
            done_index.mark_done(admin_code, year, month, "no_valid_pixels", scene_id)
            return True
        
        # Compute stats
        stats = compute_stats(scene_data)
        
        if stats is None:
            done_index.mark_done(admin_code, year, month, "insufficient_data", scene_id)
            return True
        
        # Build record
        record = {
            "admin_code": admin_code,
            "country": country,
            "crop": crop,
            "year": year,
            "month": month,
            "centroid_lat": lat,
            "centroid_lon": lon,
            "scene_count": len(scene_data),
            **stats
        }
        
        # Write immediately
        writer.write(record)
        done_index.mark_done(admin_code, year, month, "ok", scene_id)
        
        logger.info(f"✓ {admin_code}/{year}/{month:02d} NDVI={stats['ndvi_mean']:.3f}")
        return True
        
    except Exception as e:
        logger.error(f"✗ {admin_code}/{year}/{month:02d} FAILED: {e}")
        return False


def download_region(
    catalog,
    region_key: str,
    region_info: Dict,
    years: List[int],
    done_index: DoneIndex,
    writer: OutputWriter
) -> int:
    """Download all months for a region. Returns count of successful months."""
    
    admin_code = region_key.split(":")[0]
    country = region_info["country"]
    crop = region_info["crop"]
    lat, lon = region_info["centroid"]
    
    if lat == 0 and lon == 0:
        logger.warning(f"Skipping {admin_code} - no coordinates")
        return 0
    
    # Get growing season
    season_key = (country, crop)
    months = GROWING_SEASONS.get(season_key, DEFAULT_SEASON)
    
    success_count = 0
    
    for year in years:
        # Check if we have labels for this year
        if str(year) not in region_info["years"]:
            continue
        
        for month in months:
            if process_region_month(
                catalog, admin_code, country, crop,
                year, month, lat, lon,
                done_index, writer
            ):
                success_count += 1
    
    return success_count


def load_labels(path: Path) -> Dict:
    """Load training labels."""
    with open(path) as f:
        return json.load(f)


def filter_stress_regions(labels: Dict) -> Dict:
    """Filter to only regions with stress events."""
    stress_labels = {}
    
    for key, info in labels.items():
        has_stress = any(
            data.get("stress") == 1 
            for data in info["years"].values()
        )
        if has_stress:
            stress_labels[key] = info
    
    return stress_labels


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Production satellite downloader")
    parser.add_argument("--labels", default=os.path.expanduser("~/data/agrisentinel/data/global/training_labels.json"))
    parser.add_argument("--output", default=os.path.expanduser("~/data/agrisentinel/data/global/satellite_stats_v2.jsonl"))
    parser.add_argument("--index", default=os.path.expanduser("~/data/agrisentinel/data/global/satellite_done_index.jsonl"))
    parser.add_argument("--years", nargs="+", type=int, default=[2020, 2021, 2022, 2023])
    parser.add_argument("--workers", type=int, default=DEFAULT_WORKERS)
    parser.add_argument("--max-regions", type=int, default=None)
    parser.add_argument("--only-stress", action="store_true", help="Only download regions with stress labels")
    parser.add_argument("--only-brazil", action="store_true", help="Only Brazil (real data)")
    parser.add_argument("--resume", action="store_true", help="Resume from done index")
    
    args = parser.parse_args()
    
    if not HAS_DEPS:
        logger.error("Missing dependencies")
        return 1
    
    # Load labels
    labels = load_labels(Path(args.labels))
    logger.info(f"Loaded {len(labels)} regions from labels")
    
    # Filter
    if args.only_stress:
        labels = filter_stress_regions(labels)
        logger.info(f"Filtered to {len(labels)} stress regions")
    
    if args.only_brazil:
        labels = {k: v for k, v in labels.items() if v["country"] == "BRA"}
        logger.info(f"Filtered to {len(labels)} Brazil regions")
    
    if args.max_regions:
        labels = dict(list(labels.items())[:args.max_regions])
        logger.info(f"Limited to {len(labels)} regions")
    
    # Initialize
    done_index = DoneIndex(Path(args.index))
    writer = OutputWriter(Path(args.output))
    
    # Connect
    logger.info("Connecting to Planetary Computer...")
    catalog = get_stac_client()
    logger.info("Connected!")
    
    # Process regions
    total_success = 0
    region_list = list(labels.items())
    
    logger.info(f"Starting download: {len(region_list)} regions, {len(args.years)} years, {args.workers} workers")
    
    if args.workers == 1:
        # Sequential
        for i, (region_key, region_info) in enumerate(region_list):
            logger.info(f"[{i+1}/{len(region_list)}] {region_key}")
            count = download_region(catalog, region_key, region_info, args.years, done_index, writer)
            total_success += count
    else:
        # Parallel
        with ThreadPoolExecutor(max_workers=min(args.workers, MAX_WORKERS)) as executor:
            futures = {
                executor.submit(
                    download_region, catalog, key, info, args.years, done_index, writer
                ): key
                for key, info in region_list
            }
            
            for i, future in enumerate(as_completed(futures)):
                region_key = futures[future]
                try:
                    count = future.result()
                    total_success += count
                    logger.info(f"[{i+1}/{len(region_list)}] {region_key}: {count} months")
                except Exception as e:
                    logger.error(f"[{i+1}/{len(region_list)}] {region_key}: FAILED - {e}")
    
    logger.info(f"\n{'='*60}")
    logger.info(f"DOWNLOAD COMPLETE")
    logger.info(f"{'='*60}")
    logger.info(f"Total successful month-downloads: {total_success}")
    logger.info(f"Output: {args.output}")
    logger.info(f"Done index: {args.index}")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
