#!/usr/bin/env python3
"""
Download Sentinel-2 satellite data for ALL major agricultural regions worldwide.
Using Microsoft Planetary Computer (FREE, no auth required).

Strategy: Same as US Corn Belt - monthly NDVI/EVI stats for subnational regions
"""

import json
import os
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional
import time
import traceback

import numpy as np

# Check dependencies
try:
    import planetary_computer
    import pystac_client
    import rasterio
    from rasterio.windows import Window
    import pyproj
except ImportError as e:
    print(f"Missing dependency: {e}")
    print("Install with: pip install planetary-computer pystac-client rasterio pyproj")
    exit(1)

# =============================================================================
# GLOBAL AGRICULTURAL REGIONS - Coordinates verified via satellite imagery
# =============================================================================

GLOBAL_REGIONS = {
    # === SOUTH AMERICA ===
    "BRA_MATOGROSSO": {
        "name": "Brazil Mato Grosso",
        "bbox": [-58.0, -14.0, -53.0, -10.0],
        "crop": "Soy",
        "country": "Brazil",
        "state": "Mato Grosso"
    },
    "BRA_PARANA": {
        "name": "Brazil Paraná",
        "bbox": [-54.0, -26.0, -49.0, -22.5],
        "crop": "Soy",
        "country": "Brazil", 
        "state": "Paraná"
    },
    "BRA_RS_SOY": {
        "name": "Brazil Rio Grande do Sul",
        "bbox": [-55.0, -30.5, -50.0, -27.5],
        "crop": "Soy",
        "country": "Brazil",
        "state": "Rio Grande do Sul"
    },
    "ARG_PAMPA": {
        "name": "Argentina Pampas",
        "bbox": [-63.0, -37.0, -58.0, -32.0],
        "crop": "Soy",
        "country": "Argentina",
        "state": "Buenos Aires"
    },
    "ARG_CORDOBA": {
        "name": "Argentina Córdoba",
        "bbox": [-65.0, -33.0, -62.0, -30.0],
        "crop": "Corn",
        "country": "Argentina",
        "state": "Córdoba"
    },
    
    # === EUROPE ===
    "UKR_SOUTH": {
        "name": "Ukraine Southern",
        "bbox": [33.0, 46.0, 36.0, 48.5],
        "crop": "Wheat",
        "country": "Ukraine",
        "state": "Kherson"
    },
    "UKR_CENTRAL": {
        "name": "Ukraine Central",
        "bbox": [30.0, 49.0, 34.0, 51.0],
        "crop": "Corn",
        "country": "Ukraine",
        "state": "Kyiv Oblast"
    },
    "FRA_BEAUCE": {
        "name": "France Beauce",
        "bbox": [1.0, 47.5, 2.5, 48.5],
        "crop": "Wheat",
        "country": "France",
        "state": "Centre-Val de Loire"
    },
    "DEU_BAVARIA": {
        "name": "Germany Bavaria",
        "bbox": [10.5, 48.0, 12.5, 49.5],
        "crop": "Wheat",
        "country": "Germany",
        "state": "Bavaria"
    },
    "POL_CENTRAL": {
        "name": "Poland Central",
        "bbox": [16.5, 51.5, 19.0, 53.0],
        "crop": "Wheat",
        "country": "Poland",
        "state": "Wielkopolska"
    },
    "ROU_SOUTH": {
        "name": "Romania Wallachia",
        "bbox": [25.0, 43.5, 28.0, 45.0],
        "crop": "Wheat",
        "country": "Romania",
        "state": "Wallachia"
    },
    "RUS_KRASNODAR": {
        "name": "Russia Krasnodar",
        "bbox": [38.0, 44.5, 41.0, 46.5],
        "crop": "Wheat",
        "country": "Russia",
        "state": "Krasnodar"
    },
    "RUS_ROSTOV": {
        "name": "Russia Rostov",
        "bbox": [38.5, 46.5, 42.0, 48.5],
        "crop": "Wheat",
        "country": "Russia",
        "state": "Rostov"
    },
    
    # === ASIA ===
    "IND_PUNJAB": {
        "name": "India Punjab",
        "bbox": [74.5, 30.0, 76.5, 32.0],
        "crop": "Wheat",
        "country": "India",
        "state": "Punjab"
    },
    "IND_HARYANA": {
        "name": "India Haryana",
        "bbox": [75.5, 28.5, 77.5, 30.5],
        "crop": "Wheat",
        "country": "India",
        "state": "Haryana"
    },
    "IND_UP_RICE": {
        "name": "India Uttar Pradesh",
        "bbox": [80.0, 26.0, 83.0, 28.0],
        "crop": "Rice",
        "country": "India",
        "state": "Uttar Pradesh"
    },
    "IND_GUJARAT": {
        "name": "India Gujarat Cotton",
        "bbox": [71.0, 21.5, 73.5, 23.5],
        "crop": "Cotton",
        "country": "India",
        "state": "Gujarat"
    },
    "CHN_HEILONGJIANG": {
        "name": "China Heilongjiang",
        "bbox": [126.0, 46.0, 130.0, 48.5],
        "crop": "Soy",
        "country": "China",
        "state": "Heilongjiang"
    },
    "CHN_HENAN": {
        "name": "China Henan",
        "bbox": [112.5, 33.5, 115.5, 35.5],
        "crop": "Wheat",
        "country": "China",
        "state": "Henan"
    },
    "CHN_JILIN": {
        "name": "China Jilin Corn",
        "bbox": [124.0, 43.0, 127.0, 45.0],
        "crop": "Corn",
        "country": "China",
        "state": "Jilin"
    },
    "VNM_MEKONG": {
        "name": "Vietnam Mekong Delta",
        "bbox": [105.0, 9.5, 106.5, 11.0],
        "crop": "Rice",
        "country": "Vietnam",
        "state": "An Giang"
    },
    "THA_CENTRAL": {
        "name": "Thailand Central Plains",
        "bbox": [99.5, 14.5, 101.0, 16.0],
        "crop": "Rice",
        "country": "Thailand",
        "state": "Central"
    },
    "PAK_PUNJAB": {
        "name": "Pakistan Punjab",
        "bbox": [71.0, 29.5, 73.5, 31.5],
        "crop": "Cotton",
        "country": "Pakistan",
        "state": "Punjab"
    },
    "BGD_RANGPUR": {
        "name": "Bangladesh Rangpur",
        "bbox": [88.5, 25.0, 90.0, 26.5],
        "crop": "Rice",
        "country": "Bangladesh",
        "state": "Rangpur"
    },
    "IDN_JAVA": {
        "name": "Indonesia East Java",
        "bbox": [111.5, -8.0, 114.0, -6.5],
        "crop": "Rice",
        "country": "Indonesia",
        "state": "East Java"
    },
    "MMR_AYEYARWADY": {
        "name": "Myanmar Ayeyarwady",
        "bbox": [94.0, 16.0, 96.0, 18.0],
        "crop": "Rice",
        "country": "Myanmar",
        "state": "Ayeyarwady"
    },
    
    # === AFRICA ===
    "NGA_NORTH": {
        "name": "Nigeria Northern",
        "bbox": [7.0, 11.0, 9.5, 13.0],
        "crop": "Corn",
        "country": "Nigeria",
        "state": "Kaduna"
    },
    "ETH_OROMIA": {
        "name": "Ethiopia Oromia",
        "bbox": [38.0, 7.5, 40.0, 9.5],
        "crop": "Coffee",
        "country": "Ethiopia",
        "state": "Oromia"
    },
    "EGY_NILE": {
        "name": "Egypt Nile Delta",
        "bbox": [30.0, 30.5, 32.0, 31.5],
        "crop": "Wheat",
        "country": "Egypt",
        "state": "Beheira"
    },
    "ZAF_FREESTATE": {
        "name": "South Africa Free State",
        "bbox": [26.0, -29.5, 28.5, -27.5],
        "crop": "Corn",
        "country": "South Africa",
        "state": "Free State"
    },
    "KEN_RIFT": {
        "name": "Kenya Rift Valley",
        "bbox": [35.0, -1.0, 37.0, 1.0],
        "crop": "Wheat",
        "country": "Kenya",
        "state": "Nakuru"
    },
    
    # === OCEANIA ===
    "AUS_NSW": {
        "name": "Australia NSW Wheat",
        "bbox": [147.0, -35.0, 150.0, -32.5],
        "crop": "Wheat",
        "country": "Australia",
        "state": "New South Wales"
    },
    "AUS_WA": {
        "name": "Australia Western Wheat",
        "bbox": [116.0, -33.0, 118.5, -30.5],
        "crop": "Wheat",
        "country": "Australia",
        "state": "Western Australia"
    },
    
    # === NORTH AMERICA (Canada) ===
    "CAN_SASK": {
        "name": "Canada Saskatchewan",
        "bbox": [-108.0, 51.0, -104.0, 53.0],
        "crop": "Wheat",
        "country": "Canada",
        "state": "Saskatchewan"
    },
    "CAN_ALBERTA": {
        "name": "Canada Alberta",
        "bbox": [-114.0, 51.0, -111.0, 53.0],
        "crop": "Canola",
        "country": "Canada",
        "state": "Alberta"
    },
    
    # === CENTRAL ASIA ===
    "KAZ_NORTH": {
        "name": "Kazakhstan Northern",
        "bbox": [68.0, 51.0, 72.0, 53.0],
        "crop": "Wheat",
        "country": "Kazakhstan",
        "state": "Kostanay"
    },
    "TUR_KONYA": {
        "name": "Turkey Konya",
        "bbox": [32.0, 37.5, 34.0, 39.0],
        "crop": "Wheat",
        "country": "Turkey",
        "state": "Konya"
    },
}

# Years to download (matching growing seasons)
YEARS = [2019, 2020, 2021, 2022, 2023, 2024]
MONTHS = list(range(1, 13))  # All months


class GlobalSatelliteDownloader:
    """Download Sentinel-2 monthly stats for global regions."""
    
    STAC_URL = "https://planetarycomputer.microsoft.com/api/stac/v1"
    COLLECTION = "sentinel-2-l2a"
    
    def __init__(self, output_dir: str):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.catalog = pystac_client.Client.open(
            self.STAC_URL, 
            modifier=planetary_computer.sign_inplace
        )
        self.checkpoint_file = self.output_dir / "checkpoint.json"
        self.output_file = self.output_dir / "global_monthly_stats.jsonl"
        print(f"Connected to Planetary Computer STAC API")
        print(f"Output: {self.output_file}")
    
    def load_checkpoint(self) -> set:
        """Load completed tasks from checkpoint."""
        if self.checkpoint_file.exists():
            with open(self.checkpoint_file) as f:
                return set(json.load(f).get("completed", []))
        return set()
    
    def save_checkpoint(self, completed: set):
        """Save checkpoint."""
        with open(self.checkpoint_file, "w") as f:
            json.dump({"completed": list(completed)}, f)
    
    def compute_stats(self, arr: np.ndarray) -> Dict:
        """Compute statistics for an array."""
        valid = arr[~np.isnan(arr)]
        if len(valid) < 10:
            return None
        return {
            "mean": float(np.mean(valid)),
            "std": float(np.std(valid)),
            "p05": float(np.percentile(valid, 5)),
            "p10": float(np.percentile(valid, 10)),
            "p25": float(np.percentile(valid, 25)),
            "p50": float(np.percentile(valid, 50)),
            "p75": float(np.percentile(valid, 75)),
            "p90": float(np.percentile(valid, 90)),
            "p95": float(np.percentile(valid, 95)),
            "n_valid": int(len(valid))
        }
    
    def download_region_month(self, region_id: str, year: int, month: int) -> Optional[Dict]:
        """Download and compute stats for a region-month."""
        region = GLOBAL_REGIONS[region_id]
        bbox = region["bbox"]
        
        # Define date range for the month
        start_date = f"{year}-{month:02d}-01"
        if month == 12:
            end_date = f"{year}-12-31"
        else:
            end_date = f"{year}-{month+1:02d}-01"
        
        try:
            # Search for scenes
            search = self.catalog.search(
                collections=[self.COLLECTION],
                bbox=bbox,
                datetime=f"{start_date}/{end_date}",
                query={"eo:cloud_cover": {"lt": 30}}
            )
            items = list(search.items())
            
            if not items:
                return None
            
            # Sort by cloud cover, take best scene
            items.sort(key=lambda x: x.properties.get("eo:cloud_cover", 100))
            item = items[0]
            
            # Download bands
            bands = {}
            for band_name in ["B04", "B08", "B03", "B11"]:  # Red, NIR, Green, SWIR
                asset = item.assets.get(band_name)
                if not asset:
                    continue
                    
                with rasterio.open(asset.href) as src:
                    # Read a sample area (center 512x512 pixels)
                    height, width = src.height, src.width
                    center_row, center_col = height // 2, width // 2
                    window = Window(center_col - 256, center_row - 256, 512, 512)
                    
                    try:
                        data = src.read(1, window=window).astype(np.float32)
                        # Scale to reflectance (Sentinel-2 scale factor)
                        data = data / 10000.0
                        data[data < 0] = np.nan
                        data[data > 1] = np.nan
                        bands[band_name] = data
                    except:
                        continue
            
            if "B04" not in bands or "B08" not in bands:
                return None
            
            red = bands["B04"]
            nir = bands["B08"]
            
            # Compute NDVI
            ndvi = np.where((nir + red) > 0, (nir - red) / (nir + red), np.nan)
            
            # Compute EVI if green available
            evi = None
            if "B03" in bands:
                green = bands["B03"]
                evi = 2.5 * (nir - red) / (nir + 6*red - 7.5*green + 1)
                evi = np.clip(evi, -1, 1)
            
            # Compute NDWI if SWIR available
            ndwi = None
            if "B11" in bands:
                swir = bands["B11"]
                ndwi = np.where((nir + swir) > 0, (nir - swir) / (nir + swir), np.nan)
            
            # Compute stats
            ndvi_stats = self.compute_stats(ndvi)
            if ndvi_stats is None:
                print(f"    No valid NDVI data")
                return None
            
            # Build result
            result = {
                "region_id": region_id,
                "region_name": region["name"],
                "country": region["country"],
                "state": region["state"],
                "crop": region["crop"],
                "year": year,
                "month": month,
                "scene_date": item.datetime.strftime("%Y-%m-%d"),
                "cloud_cover": item.properties.get("eo:cloud_cover", -1),
                "ndvi": ndvi_stats,
            }
            
            if evi is not None:
                evi_stats = self.compute_stats(evi)
                if evi_stats:
                    result["evi"] = evi_stats
            if ndwi is not None:
                ndwi_stats = self.compute_stats(ndwi)
                if ndwi_stats:
                    result["ndwi"] = ndwi_stats
            
            return result
            
        except Exception as e:
            print(f"    Error: {e}")
            return None
    
    def run(self, regions: List[str] = None, years: List[int] = None):
        """Run the download pipeline."""
        regions = regions or list(GLOBAL_REGIONS.keys())
        years = years or YEARS
        
        completed = self.load_checkpoint()
        total_tasks = len(regions) * len(years) * len(MONTHS)
        done = 0
        
        print(f"\n{'='*70}")
        print(f"GLOBAL SATELLITE DATA DOWNLOAD")
        print(f"Regions: {len(regions)}")
        print(f"Years: {years}")
        print(f"Total tasks: {total_tasks}")
        print(f"Already completed: {len(completed)}")
        print(f"{'='*70}\n")
        
        with open(self.output_file, "a") as f:
            for region_id in regions:
                region = GLOBAL_REGIONS[region_id]
                print(f"\n[{region_id}] {region['name']} ({region['crop']})")
                
                for year in years:
                    for month in MONTHS:
                        task_id = f"{region_id}_{year}_{month}"
                        done += 1
                        
                        if task_id in completed:
                            continue
                        
                        print(f"  {year}-{month:02d}...", end=" ", flush=True)
                        
                        result = self.download_region_month(region_id, year, month)
                        
                        if result:
                            result["task_id"] = task_id
                            f.write(json.dumps(result) + "\n")
                            f.flush()
                            completed.add(task_id)
                            print(f"✓ NDVI={result['ndvi']['mean']:.3f}")
                        else:
                            print("✗ no data")
                        
                        # Checkpoint every 10 tasks
                        if len(completed) % 10 == 0:
                            self.save_checkpoint(completed)
                        
                        # Rate limiting
                        time.sleep(0.5)
                
                # Save checkpoint after each region
                self.save_checkpoint(completed)
        
        print(f"\n{'='*70}")
        print(f"DOWNLOAD COMPLETE")
        print(f"Total records: {len(completed)}")
        print(f"Output: {self.output_file}")
        print(f"{'='*70}")


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Download global satellite data")
    parser.add_argument("--output", default="~/data/agrisentinel/data/global_satellite", 
                       help="Output directory")
    parser.add_argument("--regions", nargs="+", help="Specific regions to download")
    parser.add_argument("--years", nargs="+", type=int, help="Specific years")
    args = parser.parse_args()
    
    output_dir = os.path.expanduser(args.output)
    downloader = GlobalSatelliteDownloader(output_dir)
    downloader.run(regions=args.regions, years=args.years)


if __name__ == "__main__":
    main()
