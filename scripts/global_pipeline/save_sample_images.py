#!/usr/bin/env python3
"""
Save sample satellite images for visualization.
Downloads actual Sentinel-2 RGB and NDVI images for display.
"""

import os
import sys
import json
import time
from pathlib import Path
from datetime import datetime
import numpy as np

try:
    import planetary_computer as pc
    import pystac_client
    import rasterio
    from pyproj import Transformer
    from PIL import Image
    HAS_DEPS = True
except ImportError as e:
    print(f"Missing dependency: {e}")
    HAS_DEPS = False

STAC_URL = "https://planetarycomputer.microsoft.com/api/stac/v1"
OUTPUT_DIR = Path(os.path.expanduser("~/data/agrisentinel/public/satellite_images"))


def transform_coords(lat: float, lon: float, crs):
    """Transform lat/lon to image CRS."""
    transformer = Transformer.from_crs("EPSG:4326", crs, always_xy=True)
    x, y = transformer.transform(lon, lat)
    return x, y


def ndvi_to_rgb(ndvi: np.ndarray) -> np.ndarray:
    """Convert NDVI to RGB colormap."""
    # Normalize to 0-1
    ndvi_norm = np.clip((ndvi + 1) / 2, 0, 1)
    
    # Create RGB image
    rgb = np.zeros((*ndvi.shape, 3), dtype=np.uint8)
    
    # Color scale: red -> yellow -> green
    # Red channel
    rgb[:, :, 0] = np.clip(255 * (1 - ndvi_norm * 2), 0, 255).astype(np.uint8)
    # Green channel  
    rgb[:, :, 1] = np.clip(255 * ndvi_norm * 2, 0, 255).astype(np.uint8)
    # Blue channel - low for vegetation colors
    rgb[:, :, 2] = np.clip(50 * (1 - ndvi_norm), 0, 255).astype(np.uint8)
    
    return rgb


def download_sample_image(catalog, lat: float, lon: float, year: int, month: int, 
                          admin_code: str, size: int = 128):
    """Download and save a sample image."""
    
    # Create bounding box
    bbox = [lon - 0.15, lat - 0.15, lon + 0.15, lat + 0.15]
    
    # Date range
    if month == 12:
        start_date = f"{year}-{month:02d}-01"
        end_date = f"{year+1}-01-01"
    else:
        start_date = f"{year}-{month:02d}-01"
        end_date = f"{year}-{month+1:02d}-01"
    
    try:
        search = catalog.search(
            collections=["sentinel-2-l2a"],
            bbox=bbox,
            datetime=f"{start_date}/{end_date}",
            query={"eo:cloud_cover": {"lt": 30}}
        )
        items = list(search.items())
        
        if not items:
            return None
        
        item = items[0]
        
        # Get signed URLs
        red_url = pc.sign(item.assets["B04"].href)
        green_url = pc.sign(item.assets["B03"].href)
        blue_url = pc.sign(item.assets["B02"].href)
        nir_url = pc.sign(item.assets["B08"].href)
        
        # Read bands
        with rasterio.open(red_url) as src:
            x, y = transform_coords(lat, lon, src.crs)
            row, col = src.index(x, y)
            
            half = size // 2
            if (col - half < 0 or row - half < 0 or
                col + half > src.width or row + half > src.height):
                return None
            
            window = rasterio.windows.Window(col - half, row - half, size, size)
            red = src.read(1, window=window).astype(np.float32)
        
        with rasterio.open(green_url) as src:
            green = src.read(1, window=window).astype(np.float32)
        
        with rasterio.open(blue_url) as src:
            blue_band = src.read(1, window=window).astype(np.float32)
        
        with rasterio.open(nir_url) as src:
            nir = src.read(1, window=window).astype(np.float32)
        
        # Create RGB image (true color)
        # Scale to 0-255
        def scale_band(band, min_val=0, max_val=3000):
            return np.clip((band - min_val) / (max_val - min_val) * 255, 0, 255).astype(np.uint8)
        
        rgb = np.stack([
            scale_band(red),
            scale_band(green),
            scale_band(blue_band)
        ], axis=-1)
        
        # Create NDVI image
        eps = 1e-10
        ndvi = (nir - red) / (nir + red + eps)
        ndvi_rgb = ndvi_to_rgb(ndvi)
        
        # Save images
        output_dir = OUTPUT_DIR / admin_code
        output_dir.mkdir(parents=True, exist_ok=True)
        
        rgb_path = output_dir / f"{year}_{month:02d}_rgb.png"
        ndvi_path = output_dir / f"{year}_{month:02d}_ndvi.png"
        
        Image.fromarray(rgb).save(rgb_path)
        Image.fromarray(ndvi_rgb).save(ndvi_path)
        
        return {
            "admin_code": admin_code,
            "year": year,
            "month": month,
            "rgb_path": str(rgb_path.relative_to(OUTPUT_DIR.parent.parent)),
            "ndvi_path": str(ndvi_path.relative_to(OUTPUT_DIR.parent.parent)),
            "scene_id": item.id,
            "cloud_cover": item.properties.get("eo:cloud_cover", 0)
        }
        
    except Exception as e:
        print(f"Error: {e}")
        return None


def main():
    if not HAS_DEPS:
        print("Missing dependencies")
        return 1
    
    # Load labels to get coordinates
    labels_path = Path(os.path.expanduser("~/data/agrisentinel/data/global/training_labels.json"))
    with open(labels_path) as f:
        labels = json.load(f)
    
    # Connect
    print("Connecting to Planetary Computer...")
    catalog = pystac_client.Client.open(STAC_URL, modifier=pc.sign_inplace)
    print("Connected!")
    
    # Create output directory
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Sample: Get a few stress regions and normal regions
    stress_regions = []
    normal_regions = []
    
    for key, info in labels.items():
        if info["country"] != "BRA":
            continue
        admin_code = key.split(":")[0]
        lat, lon = info["centroid"]
        if lat == 0 and lon == 0:
            continue
            
        for year_str, year_data in info["years"].items():
            year = int(year_str)
            if year < 2020:
                continue
            if year_data.get("stress") == 1:
                stress_regions.append((admin_code, lat, lon, year, info["crop"]))
            else:
                normal_regions.append((admin_code, lat, lon, year, info["crop"]))
    
    # Take samples
    stress_sample = stress_regions[:10]
    normal_sample = normal_regions[:10]
    
    all_samples = stress_sample + normal_sample
    results = []
    
    print(f"\nDownloading {len(all_samples)} sample images...")
    
    for i, (admin_code, lat, lon, year, crop) in enumerate(all_samples):
        print(f"\n[{i+1}/{len(all_samples)}] {admin_code} ({crop}) {year}")
        
        # Try peak growing season months
        months = [12, 1, 2] if crop == "soy" else [4, 5, 6]
        
        for month in months:
            query_year = year if month >= 10 else year
            result = download_sample_image(catalog, lat, lon, query_year, month, admin_code)
            
            if result:
                result["crop"] = crop
                result["lat"] = lat
                result["lon"] = lon
                result["is_stress"] = (admin_code, lat, lon, year, crop) in stress_sample
                results.append(result)
                print(f"  ✓ {year}-{month:02d}: saved")
                break
            else:
                print(f"  ✗ {year}-{month:02d}: no data")
        
        time.sleep(0.5)
    
    # Save index
    index_path = OUTPUT_DIR / "index.json"
    with open(index_path, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n\nSaved {len(results)} images to {OUTPUT_DIR}")
    print(f"Index: {index_path}")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
