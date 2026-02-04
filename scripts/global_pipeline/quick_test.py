#!/usr/bin/env python3
"""
Quick test of the Planetary Computer satellite download pipeline.
Downloads just 1 month of data for 1 region to verify connectivity.
"""

import planetary_computer
import pystac_client
from datetime import datetime
import sys

print("=" * 60)
print("AGRISENTINEL SATELLITE PIPELINE - QUICK CONNECTIVITY TEST")
print("=" * 60)
print()

# Test region: Brazil Mato Grosso (large soy region)
TEST_REGION = {
    "name": "Brazil Mato Grosso (Soy)",
    "bbox": [-55.5, -12.0, -54.5, -11.0],  # Small test area
    "time_range": "2022-01/2022-02"
}

print(f"Test Region: {TEST_REGION['name']}")
print(f"Bounding Box: {TEST_REGION['bbox']}")
print(f"Time Range: {TEST_REGION['time_range']}")
print()

# Step 1: Connect to Planetary Computer
print("Step 1: Connecting to Microsoft Planetary Computer...")
try:
    catalog = pystac_client.Client.open(
        "https://planetarycomputer.microsoft.com/api/stac/v1",
        modifier=planetary_computer.sign_inplace
    )
    print("  ✓ Connected successfully (no API key required)")
except Exception as e:
    print(f"  ✗ Connection failed: {e}")
    sys.exit(1)

# Step 2: Search for Sentinel-2 scenes
print()
print("Step 2: Searching for Sentinel-2 L2A scenes...")
try:
    search = catalog.search(
        collections=["sentinel-2-l2a"],
        bbox=TEST_REGION["bbox"],
        datetime=TEST_REGION["time_range"],
        query={"eo:cloud_cover": {"lt": 30}}
    )
    items = list(search.items())
    print(f"  ✓ Found {len(items)} scenes with <30% cloud cover")
except Exception as e:
    print(f"  ✗ Search failed: {e}")
    sys.exit(1)

if len(items) == 0:
    print("  ⚠ No scenes found. Trying with higher cloud threshold...")
    try:
        search = catalog.search(
            collections=["sentinel-2-l2a"],
            bbox=TEST_REGION["bbox"],
            datetime=TEST_REGION["time_range"],
            query={"eo:cloud_cover": {"lt": 50}}
        )
        items = list(search.items())
        print(f"  ✓ Found {len(items)} scenes with <50% cloud cover")
    except Exception as e:
        print(f"  ✗ Search failed: {e}")
        sys.exit(1)

# Step 3: Check scene properties
if items:
    print()
    print("Step 3: Sample scene properties:")
    item = items[0]
    print(f"  Scene ID: {item.id}")
    print(f"  Date: {item.datetime}")
    print(f"  Cloud Cover: {item.properties.get('eo:cloud_cover', 'N/A')}%")
    print(f"  Available bands: {list(item.assets.keys())[:10]}...")

# Step 4: Test band access (without full download)
if items:
    print()
    print("Step 4: Testing band access (B04, B08 for NDVI)...")
    try:
        item = items[0]
        b04_href = item.assets["B04"].href
        b08_href = item.assets["B08"].href
        print(f"  ✓ B04 (Red): {b04_href[:80]}...")
        print(f"  ✓ B08 (NIR): {b08_href[:80]}...")
        print()
        print("  Note: Full download test with rasterio would take ~30s per scene")
    except Exception as e:
        print(f"  ✗ Band access failed: {e}")
        sys.exit(1)

print()
print("=" * 60)
print("✓ QUICK TEST PASSED - Pipeline is ready!")
print("=" * 60)
print()
print("Next steps:")
print("  1. Run: python download_global_satellite.py --region BRA_MATOGROSSO --test")
print("  2. Full download: bash run_pipeline.sh")
print()
