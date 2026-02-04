#!/usr/bin/env python3
"""
Global Satellite Data Download Pipeline

Downloads Sentinel-2 monthly statistics for sub-national regions with yield labels.

Features:
1. Uses training_labels.json to get regions with stress labels
2. Samples pixels within admin boundary centroids
3. Computes monthly NDVI, EVI, NDWI statistics
4. Outputs JSONL format compatible with training pipeline

Data Sources:
- Sentinel-2 L2A via Microsoft Planetary Computer (free, no auth)
- STAC API: https://planetarycomputer.microsoft.com/api/stac/v1/

Usage:
    # Quick test: 5 regions, 1 year
    python download_global_satellite.py --test
    
    # Full download: all regions, 2018-2023
    python download_global_satellite.py --years 2018 2019 2020 2021 2022 2023
    
    # Specific country
    python download_global_satellite.py --country BRA --years 2020 2021 2022
"""

import os
import sys
import json
import time
import warnings
from pathlib import Path
from datetime import datetime, date
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass, asdict
from collections import defaultdict

import numpy as np
import requests

# Suppress warnings
warnings.filterwarnings('ignore')

# Try imports
try:
    import planetary_computer as pc
    import pystac_client
    import rasterio
    from rasterio.windows import from_bounds
    HAS_DEPS = True
except ImportError as e:
    print(f"Missing dependency: {e}")
    print("Install: pip install planetary-computer pystac-client rasterio")
    HAS_DEPS = False


# =============================================================================
# CONSTANTS
# =============================================================================

STAC_URL = "https://planetarycomputer.microsoft.com/api/stac/v1"

# Sentinel-2 bands we need
BANDS = {
    "B02": "blue",
    "B03": "green",
    "B04": "red",
    "B08": "nir",
    "B11": "swir",
    "SCL": "scl"  # Scene classification
}

# SCL values for valid pixels (vegetation, bare soil)
VALID_SCL = [4, 5, 6]  # 4=vegetation, 5=bare soil, 6=water (exclude)

# Growing season months by region/crop
GROWING_SEASONS = {
    # Brazil soy: Oct-Mar (Southern Hemisphere summer)
    ("BRA", "soy"): [10, 11, 12, 1, 2, 3],
    # Brazil corn (safrinha): Feb-Jul
    ("BRA", "corn"): [2, 3, 4, 5, 6, 7],
    # India soy (kharif): Jun-Oct
    ("IND", "soy"): [6, 7, 8, 9, 10],
    # India wheat (rabi): Nov-Apr
    ("IND", "wheat"): [11, 12, 1, 2, 3, 4],
    # India rice (kharif): Jun-Nov
    ("IND", "rice"): [6, 7, 8, 9, 10, 11],
    # USA corn: Apr-Sep
    ("USA", "corn"): [4, 5, 6, 7, 8, 9],
    # USA soy: May-Oct
    ("USA", "soy"): [5, 6, 7, 8, 9, 10],
}

# Default: Apr-Oct (temperate Northern Hemisphere)
DEFAULT_GROWING_SEASON = [4, 5, 6, 7, 8, 9, 10]


# =============================================================================
# DATA STRUCTURES
# =============================================================================

@dataclass
class SatelliteStats:
    """Monthly satellite statistics for a region."""
    admin_code: str
    country: str
    crop: str
    year: int
    month: int
    
    # NDVI stats
    ndvi_mean: float
    ndvi_std: float
    ndvi_min: float
    ndvi_max: float
    ndvi_p10: float
    ndvi_p50: float
    ndvi_p90: float
    
    # EVI stats
    evi_mean: float
    evi_std: float
    
    # NDWI stats
    ndwi_mean: float
    ndwi_std: float
    
    # Coverage
    valid_pixels: int
    total_pixels: int
    cloud_pct: float
    
    # Metadata
    scene_count: int
    centroid_lat: float
    centroid_lon: float


# =============================================================================
# SATELLITE FUNCTIONS
# =============================================================================

def get_stac_client():
    """Get STAC client for Planetary Computer."""
    catalog = pystac_client.Client.open(
        STAC_URL,
        modifier=pc.sign_inplace
    )
    return catalog


def compute_indices(
    red: np.ndarray,
    nir: np.ndarray,
    blue: np.ndarray,
    swir: np.ndarray
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Compute vegetation indices."""
    
    # Avoid division by zero
    eps = 1e-10
    
    # NDVI = (NIR - Red) / (NIR + Red)
    ndvi = (nir - red) / (nir + red + eps)
    
    # EVI = 2.5 * (NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1)
    evi = 2.5 * (nir - red) / (nir + 6*red - 7.5*blue + 1 + eps)
    
    # NDWI = (NIR - SWIR) / (NIR + SWIR)
    ndwi = (nir - swir) / (nir + swir + eps)
    
    return ndvi, evi, ndwi


def transform_coords(lat: float, lon: float, crs) -> Tuple[float, float]:
    """Transform lat/lon to image CRS."""
    from pyproj import Transformer
    transformer = Transformer.from_crs("EPSG:4326", crs, always_xy=True)
    x, y = transformer.transform(lon, lat)
    return x, y


def search_scenes(
    catalog,
    lat: float,
    lon: float,
    year: int,
    month: int,
    buffer_deg: float = 0.1  # ~10km buffer
) -> List:
    """Search for Sentinel-2 scenes covering a location."""
    
    # Create bounding box
    bbox = [
        lon - buffer_deg,
        lat - buffer_deg,
        lon + buffer_deg,
        lat + buffer_deg
    ]
    
    # Date range for month
    if month == 12:
        start_date = f"{year}-{month:02d}-01"
        end_date = f"{year+1}-01-01"
    else:
        start_date = f"{year}-{month:02d}-01"
        end_date = f"{year}-{month+1:02d}-01"
    
    # Search
    try:
        search = catalog.search(
            collections=["sentinel-2-l2a"],
            bbox=bbox,
            datetime=f"{start_date}/{end_date}",
            query={"eo:cloud_cover": {"lt": 50}}  # Max 50% cloud
        )
        items = list(search.items())
        return items
    except Exception as e:
        print(f"    Search error: {e}")
        return []


def read_scene_data(
    item,
    lat: float,
    lon: float,
    size: int = 64  # 64x64 pixels = ~640m at 10m resolution
) -> Optional[Dict[str, np.ndarray]]:
    """Read band data from a scene around a point."""
    
    try:
        data = {}
        
        # Get signed URLs
        red_url = pc.sign(item.assets["B04"].href)
        nir_url = pc.sign(item.assets["B08"].href)
        blue_url = pc.sign(item.assets["B02"].href)
        swir_url = pc.sign(item.assets["B11"].href)
        scl_url = pc.sign(item.assets["SCL"].href)
        
        # Read red band to get transform and CRS
        with rasterio.open(red_url) as src:
            # Transform lat/lon to image CRS (usually UTM)
            x, y = transform_coords(lat, lon, src.crs)
            row, col = src.index(x, y)
            
            # Define window
            half = size // 2
            window = rasterio.windows.Window(
                col - half, row - half,
                size, size
            )
            
            # Check bounds
            if (col - half < 0 or row - half < 0 or
                col + half > src.width or row + half > src.height):
                return None
            
            data["red"] = src.read(1, window=window).astype(np.float32)
            img_crs = src.crs
        
        # Read other bands with same window
        with rasterio.open(nir_url) as src:
            data["nir"] = src.read(1, window=window).astype(np.float32)
        
        with rasterio.open(blue_url) as src:
            data["blue"] = src.read(1, window=window).astype(np.float32)
        
        # SWIR is 20m, need to rescale window
        with rasterio.open(swir_url) as src:
            swir_window = rasterio.windows.Window(
                (col - half) // 2, (row - half) // 2,
                size // 2, size // 2
            )
            swir_small = src.read(1, window=swir_window).astype(np.float32)
            # Upsample to 10m
            data["swir"] = np.repeat(np.repeat(swir_small, 2, axis=0), 2, axis=1)
        
        # SCL is 20m
        with rasterio.open(scl_url) as src:
            scl_window = rasterio.windows.Window(
                (col - half) // 2, (row - half) // 2,
                size // 2, size // 2
            )
            scl_small = src.read(1, window=scl_window)
            data["scl"] = np.repeat(np.repeat(scl_small, 2, axis=0), 2, axis=1)
        
        return data
        
    except Exception as e:
        return None


def process_region_month(
    catalog,
    admin_code: str,
    country: str,
    crop: str,
    year: int,
    month: int,
    lat: float,
    lon: float
) -> Optional[SatelliteStats]:
    """Process satellite data for one region-month."""
    
    # Search for scenes
    items = search_scenes(catalog, lat, lon, year, month)
    
    if not items:
        return None
    
    # Collect data from all scenes
    all_ndvi = []
    all_evi = []
    all_ndwi = []
    valid_count = 0
    total_count = 0
    
    for item in items[:5]:  # Max 5 scenes per month
        data = read_scene_data(item, lat, lon)
        
        if data is None:
            continue
        
        # Compute indices
        ndvi, evi, ndwi = compute_indices(
            data["red"] / 10000,  # Scale to reflectance
            data["nir"] / 10000,
            data["blue"] / 10000,
            data["swir"] / 10000
        )
        
        # Mask invalid pixels
        scl = data["scl"]
        valid_mask = np.isin(scl, VALID_SCL)
        
        if valid_mask.sum() > 100:  # Need at least 100 valid pixels
            all_ndvi.extend(ndvi[valid_mask].tolist())
            all_evi.extend(evi[valid_mask].tolist())
            all_ndwi.extend(ndwi[valid_mask].tolist())
            valid_count += valid_mask.sum()
            total_count += valid_mask.size
    
    if not all_ndvi or len(all_ndvi) < 100:
        return None
    
    # Convert to arrays
    ndvi_arr = np.array(all_ndvi)
    evi_arr = np.array(all_evi)
    ndwi_arr = np.array(all_ndwi)
    
    # Clip outliers
    ndvi_arr = np.clip(ndvi_arr, -1, 1)
    evi_arr = np.clip(evi_arr, -1, 1)
    ndwi_arr = np.clip(ndwi_arr, -1, 1)
    
    # Compute stats
    stats = SatelliteStats(
        admin_code=admin_code,
        country=country,
        crop=crop,
        year=year,
        month=month,
        
        ndvi_mean=float(np.mean(ndvi_arr)),
        ndvi_std=float(np.std(ndvi_arr)),
        ndvi_min=float(np.min(ndvi_arr)),
        ndvi_max=float(np.max(ndvi_arr)),
        ndvi_p10=float(np.percentile(ndvi_arr, 10)),
        ndvi_p50=float(np.percentile(ndvi_arr, 50)),
        ndvi_p90=float(np.percentile(ndvi_arr, 90)),
        
        evi_mean=float(np.mean(evi_arr)),
        evi_std=float(np.std(evi_arr)),
        
        ndwi_mean=float(np.mean(ndwi_arr)),
        ndwi_std=float(np.std(ndwi_arr)),
        
        valid_pixels=valid_count,
        total_pixels=total_count,
        cloud_pct=100 * (1 - valid_count / max(total_count, 1)),
        
        scene_count=len(items),
        centroid_lat=lat,
        centroid_lon=lon
    )
    
    return stats


# =============================================================================
# MAIN PIPELINE
# =============================================================================

def load_training_labels(path: Path) -> Dict:
    """Load training labels from JSON."""
    with open(path) as f:
        return json.load(f)


def get_growing_season(country: str, crop: str) -> List[int]:
    """Get growing season months for country-crop pair."""
    key = (country, crop)
    return GROWING_SEASONS.get(key, DEFAULT_GROWING_SEASON)


def download_satellite_data(
    labels_path: Path,
    output_path: Path,
    years: List[int] = None,
    countries: List[str] = None,
    max_regions: int = None,
    test_mode: bool = False
):
    """Download satellite data for all labeled regions."""
    
    if not HAS_DEPS:
        print("Missing dependencies. Cannot proceed.")
        return
    
    # Load labels
    labels = load_training_labels(labels_path)
    print(f"Loaded {len(labels)} region-crop combinations")
    
    # Filter
    if countries:
        labels = {k: v for k, v in labels.items() if v["country"] in countries}
        print(f"Filtered to {len(labels)} regions for countries: {countries}")
    
    if test_mode:
        # Take first 5 regions
        labels = dict(list(labels.items())[:5])
        years = years or [2022, 2023]
        print(f"Test mode: {len(labels)} regions, years {years}")
    
    years = years or list(range(2018, 2024))
    
    if max_regions:
        labels = dict(list(labels.items())[:max_regions])
    
    # Connect to STAC
    print("\nConnecting to Planetary Computer...")
    catalog = get_stac_client()
    print("Connected!")
    
    # Process each region
    all_stats = []
    
    for i, (key, info) in enumerate(labels.items()):
        admin_code = key.split(":")[0]  # Remove crop suffix
        country = info["country"]
        crop = info["crop"]
        lat, lon = info["centroid"]
        
        if lat == 0 and lon == 0:
            print(f"  [{i+1}/{len(labels)}] Skipping {admin_code} - no coordinates")
            continue
        
        print(f"\n[{i+1}/{len(labels)}] {admin_code} ({country} {crop}) @ {lat:.2f}, {lon:.2f}")
        
        # Get growing season
        months = get_growing_season(country, crop)
        
        for year in years:
            # Check if we have labels for this year
            if str(year) not in info["years"]:
                continue
            
            year_label = info["years"][str(year)]
            print(f"  {year}: yield={year_label['yield']:.0f}, stress={year_label.get('stress')}")
            
            for month in months:
                # Adjust year for Southern Hemisphere seasons
                query_year = year
                if country == "BRA" and month in [1, 2, 3]:
                    query_year = year  # Growing year continues into next calendar year
                
                stats = process_region_month(
                    catalog, admin_code, country, crop,
                    query_year, month, lat, lon
                )
                
                if stats:
                    all_stats.append(asdict(stats))
                    print(f"    {year}-{month:02d}: NDVI={stats.ndvi_mean:.3f}")
                else:
                    print(f"    {year}-{month:02d}: No data")
                
                time.sleep(0.5)  # Rate limiting
    
    # Save results
    print(f"\n\nDownloaded {len(all_stats)} monthly observations")
    
    # Convert numpy types to Python types for JSON serialization
    def convert_numpy(obj):
        if isinstance(obj, dict):
            return {k: convert_numpy(v) for k, v in obj.items()}
        elif isinstance(obj, (np.integer, np.int64)):
            return int(obj)
        elif isinstance(obj, (np.floating, np.float64)):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        return obj
    
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w') as f:
        for s in all_stats:
            f.write(json.dumps(convert_numpy(s)) + "\n")
    
    print(f"Saved to: {output_path}")
    
    # Summary
    by_country = defaultdict(int)
    for s in all_stats:
        by_country[s["country"]] += 1
    
    print("\nBy country:")
    for c, n in by_country.items():
        print(f"  {c}: {n} observations")


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Download satellite data for training")
    parser.add_argument("--labels", default=os.path.expanduser("~/data/agrisentinel/data/global/training_labels.json"))
    parser.add_argument("--output", default=os.path.expanduser("~/data/agrisentinel/data/global/satellite_monthly_stats.jsonl"))
    parser.add_argument("--years", nargs="+", type=int, default=None)
    parser.add_argument("--countries", nargs="+", default=None)
    parser.add_argument("--max-regions", type=int, default=None)
    parser.add_argument("--test", action="store_true", help="Quick test: 5 regions, 2022-2023")
    
    args = parser.parse_args()
    
    download_satellite_data(
        labels_path=Path(args.labels),
        output_path=Path(args.output),
        years=args.years,
        countries=args.countries,
        max_regions=args.max_regions,
        test_mode=args.test
    )


if __name__ == "__main__":
    main()
