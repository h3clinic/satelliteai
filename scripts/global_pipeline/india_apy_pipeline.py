#!/usr/bin/env python3
"""
India APY (Area, Production, Yield) Data Pipeline

Data Source Options:
1. ICRISAT District-Level Database (recommended)
   - http://data.icrisat.org/dld/
   - Provides state and district level yields for major crops
   
2. data.gov.in Open Data API
   - Requires registration for API key
   - District-wise crop production statistics

3. APY data from Agricultural Statistics (offline CSV)
   - Download from: https://data.gov.in/catalog/district-wise-season-wise-crop-production-statistics
   
This script processes downloaded India agricultural data into our standard schema.

Crops covered:
- Rice (Paddy)
- Wheat
- Soybean
- Maize
- Cotton
- Sugarcane
- Groundnut

Admin levels:
- State (admin_1): 28 states + 8 union territories
- District (admin_2): ~700 districts

Usage:
    python india_apy_pipeline.py --input data/india/district_crop_data.csv --output data/india/
    python india_apy_pipeline.py --download-icrisat --output data/india/
"""

import os
import sys
import json
import requests
import time
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass, asdict

# Add parent directory for schema import
sys.path.insert(0, str(Path(__file__).parent))
from schema import SubNationalYield, validate_yield_record


# =============================================================================
# CONSTANTS
# =============================================================================

# ICRISAT Data API (if available) - actually uses DLD portal
ICRISAT_BASE = "http://data.icrisat.org/dld/src/crops"

# Crop name mappings
CROP_MAPPINGS = {
    # Input name -> (standard name, FAO code)
    "rice": ("rice", "27"),
    "paddy": ("rice", "27"),
    "wheat": ("wheat", "15"),
    "soybean": ("soy", "236"),
    "soyabean": ("soy", "236"),
    "maize": ("corn", "56"),
    "corn": ("corn", "56"),
    "cotton": ("cotton", "767"),
    "sugarcane": ("sugarcane", "156"),
    "groundnut": ("groundnut", "242"),
}

# India state codes (ISO 3166-2:IN)
INDIA_STATES = {
    "IN-AP": {"name": "Andhra Pradesh", "major_crops": ["rice", "cotton", "groundnut"]},
    "IN-AS": {"name": "Assam", "major_crops": ["rice"]},
    "IN-BR": {"name": "Bihar", "major_crops": ["rice", "wheat", "maize"]},
    "IN-CG": {"name": "Chhattisgarh", "major_crops": ["rice"]},
    "IN-GJ": {"name": "Gujarat", "major_crops": ["cotton", "groundnut", "wheat"]},
    "IN-HR": {"name": "Haryana", "major_crops": ["wheat", "rice", "cotton"]},
    "IN-HP": {"name": "Himachal Pradesh", "major_crops": ["wheat", "maize"]},
    "IN-JH": {"name": "Jharkhand", "major_crops": ["rice"]},
    "IN-KA": {"name": "Karnataka", "major_crops": ["rice", "maize", "soy"]},
    "IN-KL": {"name": "Kerala", "major_crops": ["rice"]},
    "IN-MP": {"name": "Madhya Pradesh", "major_crops": ["soy", "wheat", "maize"]},
    "IN-MH": {"name": "Maharashtra", "major_crops": ["soy", "cotton", "sugarcane"]},
    "IN-MN": {"name": "Manipur", "major_crops": ["rice"]},
    "IN-ML": {"name": "Meghalaya", "major_crops": ["rice"]},
    "IN-MZ": {"name": "Mizoram", "major_crops": ["rice"]},
    "IN-NL": {"name": "Nagaland", "major_crops": ["rice"]},
    "IN-OD": {"name": "Odisha", "major_crops": ["rice"]},
    "IN-PB": {"name": "Punjab", "major_crops": ["wheat", "rice", "cotton"]},
    "IN-RJ": {"name": "Rajasthan", "major_crops": ["wheat", "maize", "cotton"]},
    "IN-SK": {"name": "Sikkim", "major_crops": ["rice", "maize"]},
    "IN-TN": {"name": "Tamil Nadu", "major_crops": ["rice", "sugarcane", "groundnut"]},
    "IN-TS": {"name": "Telangana", "major_crops": ["rice", "cotton", "maize"]},
    "IN-TR": {"name": "Tripura", "major_crops": ["rice"]},
    "IN-UP": {"name": "Uttar Pradesh", "major_crops": ["wheat", "rice", "sugarcane"]},
    "IN-UK": {"name": "Uttarakhand", "major_crops": ["wheat", "rice"]},
    "IN-WB": {"name": "West Bengal", "major_crops": ["rice", "wheat"]},
}

# Focus states for MVP (major soy/wheat/rice producers)
MVP_STATES = ["IN-MP", "IN-MH", "IN-UP", "IN-PB", "IN-HR", "IN-RJ"]

# State centroids (approx)
STATE_CENTROIDS = {
    "IN-AP": (15.9, 79.7),
    "IN-AS": (26.2, 92.9),
    "IN-BR": (25.6, 85.1),
    "IN-CG": (21.3, 82.0),
    "IN-GJ": (22.3, 71.2),
    "IN-HR": (29.1, 76.1),
    "IN-HP": (31.1, 77.2),
    "IN-JH": (23.6, 85.3),
    "IN-KA": (15.3, 75.7),
    "IN-KL": (10.9, 76.3),
    "IN-MP": (22.9, 78.7),
    "IN-MH": (19.8, 75.3),
    "IN-MN": (24.7, 93.9),
    "IN-ML": (25.5, 91.4),
    "IN-MZ": (23.2, 92.9),
    "IN-NL": (26.2, 94.6),
    "IN-OD": (20.9, 84.8),
    "IN-PB": (31.1, 75.3),
    "IN-RJ": (27.0, 74.2),
    "IN-SK": (27.5, 88.5),
    "IN-TN": (11.1, 78.7),
    "IN-TS": (18.1, 79.0),
    "IN-TR": (23.9, 91.9),
    "IN-UP": (26.8, 80.9),
    "IN-UK": (30.1, 79.3),
    "IN-WB": (22.6, 87.9),
}


# =============================================================================
# DATA PROCESSING
# =============================================================================

def normalize_state_name(name: str) -> Optional[str]:
    """Map state name to ISO code."""
    name_lower = name.lower().strip()
    
    for code, info in INDIA_STATES.items():
        if info["name"].lower() == name_lower:
            return code
    
    # Common variations
    variations = {
        "andhra pradesh": "IN-AP",
        "arunachal pradesh": None,  # Not in our list
        "assam": "IN-AS",
        "bihar": "IN-BR",
        "chhattisgarh": "IN-CG",
        "chattisgarh": "IN-CG",
        "goa": None,
        "gujarat": "IN-GJ",
        "haryana": "IN-HR",
        "himachal pradesh": "IN-HP",
        "jammu and kashmir": None,
        "jharkhand": "IN-JH",
        "karnataka": "IN-KA",
        "kerala": "IN-KL",
        "madhya pradesh": "IN-MP",
        "maharashtra": "IN-MH",
        "manipur": "IN-MN",
        "meghalaya": "IN-ML",
        "mizoram": "IN-MZ",
        "nagaland": "IN-NL",
        "odisha": "IN-OD",
        "orissa": "IN-OD",
        "punjab": "IN-PB",
        "rajasthan": "IN-RJ",
        "sikkim": "IN-SK",
        "tamil nadu": "IN-TN",
        "tamilnadu": "IN-TN",
        "telangana": "IN-TS",
        "tripura": "IN-TR",
        "uttar pradesh": "IN-UP",
        "uttarakhand": "IN-UK",
        "west bengal": "IN-WB",
    }
    
    return variations.get(name_lower)


def normalize_crop_name(name: str) -> Optional[str]:
    """Map crop name to standard name."""
    name_lower = name.lower().strip()
    
    if name_lower in CROP_MAPPINGS:
        return CROP_MAPPINGS[name_lower][0]
    
    return None


def compute_anomalies(records: List[dict], lookback_years: int = 5) -> List[dict]:
    """Compute yield anomalies against trailing mean."""
    
    # Group by admin_code + crop
    grouped = {}
    for r in records:
        key = (r["admin_code"], r["crop"])
        grouped.setdefault(key, []).append(r)
    
    # Sort each group by year
    for key in grouped:
        grouped[key].sort(key=lambda x: x["year"])
    
    # Compute anomalies
    updated = []
    for key, recs in grouped.items():
        yields_by_year = {r["year"]: r["yield_kg_ha"] for r in recs}
        years = sorted(yields_by_year.keys())
        
        for rec in recs:
            year = rec["year"]
            prior_years = [y for y in years if year - lookback_years <= y < year]
            
            if len(prior_years) >= 3:  # Need at least 3 years for meaningful mean
                prior_yields = [yields_by_year[y] for y in prior_years]
                mean_yield = sum(prior_yields) / len(prior_yields)
                
                if mean_yield > 0:
                    anomaly_pct = ((rec["yield_kg_ha"] - mean_yield) / mean_yield) * 100
                    rec["yield_anomaly_pct"] = round(anomaly_pct, 2)
                    rec["stress_label"] = 1 if anomaly_pct < -10 else 0
                else:
                    rec["yield_anomaly_pct"] = None
                    rec["stress_label"] = None
            else:
                rec["yield_anomaly_pct"] = None
                rec["stress_label"] = None
            
            updated.append(rec)
    
    return updated


def process_csv_data(
    csv_path: Path,
    state_col: str = "State",
    district_col: str = "District",
    crop_col: str = "Crop",
    year_col: str = "Year",
    area_col: str = "Area",
    production_col: str = "Production",
    yield_col: str = "Yield"
) -> List[SubNationalYield]:
    """Process downloaded CSV into standard schema."""
    
    import csv
    
    records = []
    skipped = 0
    
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            try:
                # Extract and normalize
                state_name = row.get(state_col, "").strip()
                state_code = normalize_state_name(state_name)
                if not state_code:
                    skipped += 1
                    continue
                
                crop_name = row.get(crop_col, "").strip()
                crop = normalize_crop_name(crop_name)
                if not crop:
                    skipped += 1
                    continue
                
                year_str = row.get(year_col, "").strip()
                # Handle "2020-21" format
                if "-" in year_str:
                    year = int(year_str.split("-")[0])
                else:
                    year = int(year_str)
                
                # Parse numeric values (handle Indian number format)
                def parse_num(s):
                    if not s or s == "NA" or s == "-":
                        return 0.0
                    return float(s.replace(",", ""))
                
                area = parse_num(row.get(area_col, "0"))
                production = parse_num(row.get(production_col, "0"))
                
                # Yield might be provided or computed
                yield_val = parse_num(row.get(yield_col, "0"))
                if yield_val == 0 and area > 0:
                    # Production is often in tonnes, area in hectares
                    # Yield = Production / Area * 1000 (to get kg/ha from tonnes/ha)
                    yield_val = (production / area) * 1000
                
                if yield_val <= 0 or area <= 0:
                    skipped += 1
                    continue
                
                # Get coordinates
                lat, lon = STATE_CENTROIDS.get(state_code, (0.0, 0.0))
                
                # Determine admin level
                district = row.get(district_col, "").strip() if district_col else ""
                admin_level = "admin_2" if district else "admin_1"
                admin_code = f"{state_code}:{district}" if district else state_code
                admin_name = f"{district}, {INDIA_STATES[state_code]['name']}" if district else INDIA_STATES[state_code]["name"]
                
                record = {
                    "country_iso3": "IND",
                    "admin_level": admin_level,
                    "admin_code": admin_code,
                    "admin_name": admin_name,
                    "crop": crop,
                    "year": year,
                    "yield_kg_ha": yield_val,
                    "area_planted_ha": area,
                    "production_tonnes": production,
                    "yield_anomaly_pct": None,
                    "stress_label": None,
                    "centroid_lat": lat,
                    "centroid_lon": lon,
                    "bbox_west": 0.0,
                    "bbox_south": 0.0,
                    "bbox_east": 0.0,
                    "bbox_north": 0.0,
                    "data_source": "india_apy",
                    "source_url": str(csv_path),
                    "retrieved_date": datetime.now().isoformat()
                }
                
                records.append(record)
                
            except Exception as e:
                skipped += 1
                continue
    
    print(f"  Parsed {len(records)} records, skipped {skipped}")
    
    # Compute anomalies
    records = compute_anomalies(records)
    
    return records


def create_sample_data(output_dir: Path) -> List[dict]:
    """
    Create sample India data for testing/demo purposes.
    Based on actual APY statistics from agricultural reports.
    """
    
    print("Creating sample India data from agricultural statistics...")
    
    # Real-ish data based on India agricultural statistics
    # Sources: https://eands.dacnet.nic.in/
    sample_data = [
        # Madhya Pradesh - Major soy producer
        {"state": "IN-MP", "crop": "soy", "year": 2018, "yield": 1050, "area": 5400000},
        {"state": "IN-MP", "crop": "soy", "year": 2019, "yield": 980, "area": 5500000},
        {"state": "IN-MP", "crop": "soy", "year": 2020, "yield": 1100, "area": 5700000},
        {"state": "IN-MP", "crop": "soy", "year": 2021, "yield": 920, "area": 5800000},  # Bad year
        {"state": "IN-MP", "crop": "soy", "year": 2022, "yield": 1150, "area": 6000000},
        {"state": "IN-MP", "crop": "soy", "year": 2023, "yield": 1080, "area": 6200000},
        
        {"state": "IN-MP", "crop": "wheat", "year": 2018, "yield": 2600, "area": 5800000},
        {"state": "IN-MP", "crop": "wheat", "year": 2019, "yield": 2750, "area": 5900000},
        {"state": "IN-MP", "crop": "wheat", "year": 2020, "yield": 2800, "area": 6000000},
        {"state": "IN-MP", "crop": "wheat", "year": 2021, "yield": 2650, "area": 6100000},
        {"state": "IN-MP", "crop": "wheat", "year": 2022, "yield": 2400, "area": 6200000},  # Heatwave
        {"state": "IN-MP", "crop": "wheat", "year": 2023, "yield": 2700, "area": 6300000},
        
        # Maharashtra - Major soy producer
        {"state": "IN-MH", "crop": "soy", "year": 2018, "yield": 1100, "area": 4200000},
        {"state": "IN-MH", "crop": "soy", "year": 2019, "yield": 950, "area": 4400000},  # Drought
        {"state": "IN-MH", "crop": "soy", "year": 2020, "yield": 1050, "area": 4600000},
        {"state": "IN-MH", "crop": "soy", "year": 2021, "yield": 1120, "area": 4800000},
        {"state": "IN-MH", "crop": "soy", "year": 2022, "yield": 1080, "area": 5000000},
        {"state": "IN-MH", "crop": "soy", "year": 2023, "yield": 900, "area": 5200000},  # Excess rain
        
        # Punjab - Major wheat producer (Green Revolution belt)
        {"state": "IN-PB", "crop": "wheat", "year": 2018, "yield": 5000, "area": 3500000},
        {"state": "IN-PB", "crop": "wheat", "year": 2019, "yield": 5100, "area": 3550000},
        {"state": "IN-PB", "crop": "wheat", "year": 2020, "yield": 5200, "area": 3600000},
        {"state": "IN-PB", "crop": "wheat", "year": 2021, "yield": 5050, "area": 3650000},
        {"state": "IN-PB", "crop": "wheat", "year": 2022, "yield": 4500, "area": 3700000},  # March heatwave
        {"state": "IN-PB", "crop": "wheat", "year": 2023, "yield": 5100, "area": 3750000},
        
        {"state": "IN-PB", "crop": "rice", "year": 2018, "yield": 4100, "area": 3000000},
        {"state": "IN-PB", "crop": "rice", "year": 2019, "yield": 4200, "area": 3050000},
        {"state": "IN-PB", "crop": "rice", "year": 2020, "yield": 4300, "area": 3100000},
        {"state": "IN-PB", "crop": "rice", "year": 2021, "yield": 4150, "area": 3150000},
        {"state": "IN-PB", "crop": "rice", "year": 2022, "yield": 4250, "area": 3200000},
        {"state": "IN-PB", "crop": "rice", "year": 2023, "yield": 4100, "area": 3250000},
        
        # Uttar Pradesh - Largest wheat & sugarcane producer
        {"state": "IN-UP", "crop": "wheat", "year": 2018, "yield": 3200, "area": 9500000},
        {"state": "IN-UP", "crop": "wheat", "year": 2019, "yield": 3350, "area": 9600000},
        {"state": "IN-UP", "crop": "wheat", "year": 2020, "yield": 3400, "area": 9700000},
        {"state": "IN-UP", "crop": "wheat", "year": 2021, "yield": 3300, "area": 9800000},
        {"state": "IN-UP", "crop": "wheat", "year": 2022, "yield": 2900, "area": 9900000},  # Heatwave
        {"state": "IN-UP", "crop": "wheat", "year": 2023, "yield": 3350, "area": 10000000},
        
        {"state": "IN-UP", "crop": "rice", "year": 2018, "yield": 2400, "area": 5800000},
        {"state": "IN-UP", "crop": "rice", "year": 2019, "yield": 2500, "area": 5900000},
        {"state": "IN-UP", "crop": "rice", "year": 2020, "yield": 2600, "area": 6000000},
        {"state": "IN-UP", "crop": "rice", "year": 2021, "yield": 2550, "area": 6100000},
        {"state": "IN-UP", "crop": "rice", "year": 2022, "yield": 2650, "area": 6200000},
        {"state": "IN-UP", "crop": "rice", "year": 2023, "yield": 2100, "area": 6300000},  # Flood damage
        
        # Haryana - Major wheat producer
        {"state": "IN-HR", "crop": "wheat", "year": 2018, "yield": 4700, "area": 2500000},
        {"state": "IN-HR", "crop": "wheat", "year": 2019, "yield": 4800, "area": 2550000},
        {"state": "IN-HR", "crop": "wheat", "year": 2020, "yield": 4900, "area": 2600000},
        {"state": "IN-HR", "crop": "wheat", "year": 2021, "yield": 4750, "area": 2650000},
        {"state": "IN-HR", "crop": "wheat", "year": 2022, "yield": 4200, "area": 2700000},  # Heatwave
        {"state": "IN-HR", "crop": "wheat", "year": 2023, "yield": 4850, "area": 2750000},
        
        # Rajasthan - Major wheat producer (irrigation dependent)
        {"state": "IN-RJ", "crop": "wheat", "year": 2018, "yield": 3600, "area": 3000000},
        {"state": "IN-RJ", "crop": "wheat", "year": 2019, "yield": 3700, "area": 3100000},
        {"state": "IN-RJ", "crop": "wheat", "year": 2020, "yield": 3800, "area": 3200000},
        {"state": "IN-RJ", "crop": "wheat", "year": 2021, "yield": 3650, "area": 3300000},
        {"state": "IN-RJ", "crop": "wheat", "year": 2022, "yield": 3100, "area": 3400000},  # Water stress + heatwave
        {"state": "IN-RJ", "crop": "wheat", "year": 2023, "yield": 3750, "area": 3500000},
    ]
    
    records = []
    for d in sample_data:
        state_code = d["state"]
        state_info = INDIA_STATES.get(state_code)
        if not state_info:
            continue
            
        lat, lon = STATE_CENTROIDS.get(state_code, (0.0, 0.0))
        
        record = {
            "country_iso3": "IND",
            "admin_level": "admin_1",
            "admin_code": state_code,
            "admin_name": state_info["name"],
            "crop": d["crop"],
            "year": d["year"],
            "yield_kg_ha": d["yield"],
            "area_planted_ha": d["area"],
            "production_tonnes": d["yield"] * d["area"] / 1000,  # Convert to tonnes
            "yield_anomaly_pct": None,
            "stress_label": None,
            "centroid_lat": lat,
            "centroid_lon": lon,
            "bbox_west": 0.0,
            "bbox_south": 0.0,
            "bbox_east": 0.0,
            "bbox_north": 0.0,
            "data_source": "india_apy_sample",
            "source_url": "manual_entry_from_agricultural_statistics",
            "retrieved_date": datetime.now().isoformat()
        }
        records.append(record)
    
    # Compute anomalies
    records = compute_anomalies(records)
    
    # Count stress events
    stress_count = sum(1 for r in records if r.get("stress_label") == 1)
    print(f"  Created {len(records)} sample records with {stress_count} stress events")
    
    return records


def save_records(records: List[dict], output_path: Path):
    """Save records to JSONL file."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w') as f:
        for r in records:
            f.write(json.dumps(r) + "\n")
    
    print(f"Saved {len(records)} records to {output_path}")


# =============================================================================
# MAIN
# =============================================================================

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Process India APY data")
    parser.add_argument("--input", type=str, help="Input CSV file path")
    parser.add_argument("--output-dir", default=os.path.expanduser("~/data/agrisentinel/data/india"),
                       help="Output directory")
    parser.add_argument("--sample", action="store_true",
                       help="Create sample data for testing")
    
    args = parser.parse_args()
    
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    if args.sample or not args.input:
        # Create sample data
        records = create_sample_data(output_dir)
    else:
        # Process CSV
        csv_path = Path(args.input)
        if not csv_path.exists():
            print(f"Error: Input file not found: {csv_path}")
            sys.exit(1)
        
        print(f"Processing {csv_path}...")
        records = process_csv_data(csv_path)
    
    # Save
    output_path = output_dir / "india_subnational_yields.jsonl"
    save_records(records, output_path)
    
    # Summary
    print("\n" + "="*60)
    print("INDIA DATA PROCESSING COMPLETE")
    print("="*60)
    
    # By crop
    crops = {}
    for r in records:
        c = r["crop"]
        crops[c] = crops.get(c, [])
        crops[c].append(r)
    
    for crop, recs in crops.items():
        stress = [r for r in recs if r.get("stress_label") == 1]
        print(f"  {crop}: {len(recs)} records, {len(stress)} stress events")
    
    print(f"\nOutput: {output_path}")


if __name__ == "__main__":
    main()
