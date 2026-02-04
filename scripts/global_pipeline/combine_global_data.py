#!/usr/bin/env python3
"""
Combine Global Subnational Yield Data

Merges data from:
- Brazil (IBGE PAM): Municipality-level (admin_2)
- India (APY): State-level (admin_1)
- USA (NASS): County-level (admin_2) - to be added

Creates unified training dataset for global crop stress model.
"""

import os
import json
from pathlib import Path
from datetime import datetime
from typing import List, Dict
from collections import defaultdict


def load_jsonl(path: Path) -> List[dict]:
    """Load JSONL file."""
    records = []
    with open(path, 'r') as f:
        for line in f:
            if line.strip():
                records.append(json.loads(line))
    return records


def combine_global_data(
    brazil_path: Path,
    india_path: Path,
    usa_path: Path = None,
    output_path: Path = None
) -> List[dict]:
    """Combine all country datasets into one."""
    
    all_records = []
    
    # Brazil
    if brazil_path.exists():
        brazil_data = load_jsonl(brazil_path)
        print(f"Brazil: {len(brazil_data)} records")
        all_records.extend(brazil_data)
    
    # India
    if india_path.exists():
        india_data = load_jsonl(india_path)
        print(f"India: {len(india_data)} records")
        all_records.extend(india_data)
    
    # USA (if available)
    if usa_path and usa_path.exists():
        usa_data = load_jsonl(usa_path)
        print(f"USA: {len(usa_data)} records")
        all_records.extend(usa_data)
    
    print(f"\nTotal: {len(all_records)} records")
    
    # Statistics
    by_country = defaultdict(list)
    by_crop = defaultdict(list)
    
    for r in all_records:
        by_country[r["country_iso3"]].append(r)
        by_crop[r["crop"]].append(r)
    
    print("\n" + "="*60)
    print("COMBINED GLOBAL DATASET SUMMARY")
    print("="*60)
    
    print("\nBy Country:")
    for country, recs in sorted(by_country.items()):
        stress = sum(1 for r in recs if r.get("stress_label") == 1)
        print(f"  {country}: {len(recs)} records, {stress} stress events ({100*stress/len(recs):.1f}%)")
    
    print("\nBy Crop:")
    for crop, recs in sorted(by_crop.items()):
        stress = sum(1 for r in recs if r.get("stress_label") == 1)
        years = sorted(set(r["year"] for r in recs))
        print(f"  {crop}: {len(recs)} records, years {min(years)}-{max(years)}, {stress} stress events")
    
    # Save if output path provided
    if output_path:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w') as f:
            for r in all_records:
                f.write(json.dumps(r) + "\n")
        print(f"\nSaved to: {output_path}")
    
    return all_records


def create_training_labels(
    records: List[dict],
    output_path: Path
) -> Dict:
    """
    Create training labels file compatible with satellite download pipeline.
    
    Format:
    {
        "admin_code": {
            "country": "BRA",
            "name": "Sorriso - MT",
            "crop": "soy",
            "centroid": [lat, lon],
            "years": {
                "2020": {"yield": 3500, "anomaly": -2.1, "stress": 0},
                "2021": {"yield": 3100, "anomaly": -12.5, "stress": 1},
                ...
            }
        }
    }
    """
    
    # Group by admin_code + crop
    grouped = defaultdict(lambda: {
        "country": None,
        "name": None,
        "crop": None,
        "centroid": [0, 0],
        "years": {}
    })
    
    for r in records:
        key = f"{r['admin_code']}:{r['crop']}"
        
        grouped[key]["country"] = r["country_iso3"]
        grouped[key]["name"] = r["admin_name"]
        grouped[key]["crop"] = r["crop"]
        grouped[key]["centroid"] = [r["centroid_lat"], r["centroid_lon"]]
        grouped[key]["years"][str(r["year"])] = {
            "yield": r["yield_kg_ha"],
            "area": r["area_planted_ha"],
            "anomaly": r.get("yield_anomaly_pct"),
            "stress": r.get("stress_label")
        }
    
    # Convert to dict
    labels = dict(grouped)
    
    # Save
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w') as f:
        json.dump(labels, f, indent=2)
    
    print(f"\nCreated training labels: {output_path}")
    print(f"  Unique admin-crop combinations: {len(labels)}")
    
    # Count years with stress labels
    total_years = 0
    stress_years = 0
    for key, data in labels.items():
        for year, ydata in data["years"].items():
            if ydata.get("stress") is not None:
                total_years += 1
                if ydata["stress"] == 1:
                    stress_years += 1
    
    print(f"  Years with labels: {total_years}")
    print(f"  Stress events: {stress_years} ({100*stress_years/total_years:.1f}%)")
    
    return labels


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Combine global yield data")
    parser.add_argument("--brazil", default=os.path.expanduser("~/data/agrisentinel/data/brazil/brazil_subnational_yields.jsonl"))
    parser.add_argument("--india", default=os.path.expanduser("~/data/agrisentinel/data/india/india_subnational_yields.jsonl"))
    parser.add_argument("--usa", default=None)
    parser.add_argument("--output-dir", default=os.path.expanduser("~/data/agrisentinel/data/global"))
    
    args = parser.parse_args()
    
    output_dir = Path(args.output_dir)
    
    # Combine data
    records = combine_global_data(
        brazil_path=Path(args.brazil),
        india_path=Path(args.india),
        usa_path=Path(args.usa) if args.usa else None,
        output_path=output_dir / "global_subnational_yields.jsonl"
    )
    
    # Create training labels
    create_training_labels(
        records=records,
        output_path=output_dir / "training_labels.json"
    )


if __name__ == "__main__":
    main()
