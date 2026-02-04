#!/usr/bin/env python3
"""
Add global agricultural regions for satellite download.

This adds major agricultural regions from around the world 
with known coordinates for satellite data collection.
"""

import json
from pathlib import Path
from datetime import datetime

# Output path
OUTPUT_PATH = Path(__file__).parent.parent.parent / "data" / "global" / "global_subnational_yields.jsonl"

# Major agricultural regions worldwide
# Format: (country_iso3, region_name, crop, lat, lon)
GLOBAL_REGIONS = [
    # === USA - Corn Belt ===
    ("USA", "Iowa_Central", "corn", 42.0, -93.5),
    ("USA", "Iowa_Northwest", "corn", 42.8, -95.5),
    ("USA", "Illinois_Central", "corn", 40.1, -89.0),
    ("USA", "Illinois_North", "corn", 41.5, -89.5),
    ("USA", "Nebraska_East", "corn", 41.0, -97.0),
    ("USA", "Nebraska_Central", "corn", 41.0, -99.5),
    ("USA", "Minnesota_South", "corn", 44.0, -94.5),
    ("USA", "Minnesota_West", "corn", 45.0, -96.0),
    ("USA", "Indiana_Central", "corn", 40.0, -86.0),
    ("USA", "Ohio_West", "corn", 40.5, -84.0),
    ("USA", "Kansas_Northeast", "corn", 39.5, -96.0),
    ("USA", "South_Dakota_East", "corn", 44.0, -97.5),
    
    # === USA - Soy Belt ===
    ("USA", "Iowa_South", "soy", 41.0, -93.5),
    ("USA", "Illinois_South", "soy", 38.5, -89.5),
    ("USA", "Missouri_North", "soy", 40.0, -93.0),
    ("USA", "Arkansas_Northeast", "soy", 35.5, -90.5),
    ("USA", "Mississippi_Delta", "soy", 33.5, -90.5),
    ("USA", "North_Dakota_Southeast", "soy", 46.0, -98.0),
    
    # === USA - Wheat Belt ===
    ("USA", "Kansas_Central", "wheat", 38.5, -99.0),
    ("USA", "Kansas_West", "wheat", 38.0, -100.5),
    ("USA", "Oklahoma_North", "wheat", 36.5, -98.0),
    ("USA", "Texas_Panhandle", "wheat", 35.5, -101.5),
    ("USA", "Montana_Northeast", "wheat", 48.0, -109.0),
    ("USA", "North_Dakota_North", "wheat", 48.5, -100.0),
    
    # === Argentina - Pampas ===
    ("ARG", "Buenos_Aires_North", "soy", -34.0, -61.0),
    ("ARG", "Buenos_Aires_South", "soy", -37.0, -60.0),
    ("ARG", "Cordoba_East", "soy", -32.0, -63.0),
    ("ARG", "Santa_Fe_South", "soy", -33.0, -61.5),
    ("ARG", "Entre_Rios", "soy", -32.0, -59.0),
    ("ARG", "Cordoba_South", "corn", -33.5, -64.0),
    ("ARG", "Buenos_Aires_West", "corn", -35.0, -63.0),
    ("ARG", "Santa_Fe_Central", "corn", -31.5, -61.0),
    ("ARG", "La_Pampa_East", "wheat", -36.5, -64.0),
    ("ARG", "Buenos_Aires_Southwest", "wheat", -38.0, -62.0),
    
    # === India - Major Agricultural States ===
    ("IND", "Punjab_Central", "wheat", 31.0, 75.5),
    ("IND", "Punjab_South", "wheat", 30.5, 75.0),
    ("IND", "Haryana_North", "wheat", 29.5, 76.5),
    ("IND", "Uttar_Pradesh_West", "wheat", 29.0, 78.0),
    ("IND", "Uttar_Pradesh_Central", "wheat", 27.0, 80.0),
    ("IND", "Madhya_Pradesh_North", "wheat", 24.5, 77.5),
    ("IND", "Rajasthan_East", "wheat", 26.5, 75.5),
    ("IND", "Maharashtra_Central", "soy", 20.0, 77.0),
    ("IND", "Madhya_Pradesh_West", "soy", 23.0, 76.0),
    ("IND", "Rajasthan_Southeast", "soy", 24.5, 76.0),
    ("IND", "West_Bengal_South", "rice", 23.0, 88.0),
    ("IND", "Bihar_Central", "rice", 25.5, 85.5),
    ("IND", "Andhra_Pradesh_East", "rice", 16.0, 80.5),
    ("IND", "Tamil_Nadu_East", "rice", 11.0, 79.5),
    
    # === China - Major Agricultural Regions ===
    ("CHN", "Heilongjiang_Central", "soy", 47.0, 127.0),
    ("CHN", "Heilongjiang_East", "soy", 46.5, 130.0),
    ("CHN", "Jilin_Central", "corn", 44.0, 126.0),
    ("CHN", "Liaoning_Central", "corn", 42.0, 123.0),
    ("CHN", "Shandong_Central", "wheat", 36.5, 118.0),
    ("CHN", "Henan_Central", "wheat", 34.5, 114.0),
    ("CHN", "Hebei_South", "wheat", 37.0, 115.0),
    ("CHN", "Jiangsu_North", "rice", 34.0, 119.0),
    ("CHN", "Anhui_Central", "rice", 32.0, 117.0),
    ("CHN", "Hunan_Central", "rice", 28.0, 112.0),
    
    # === Australia ===
    ("AUS", "New_South_Wales_West", "wheat", -33.0, 147.0),
    ("AUS", "Victoria_Northwest", "wheat", -36.0, 142.0),
    ("AUS", "South_Australia_Southeast", "wheat", -35.0, 139.5),
    ("AUS", "Western_Australia_Wheatbelt", "wheat", -31.5, 117.0),
    ("AUS", "Queensland_Darling_Downs", "soy", -27.5, 151.5),
    
    # === Ukraine (pre-conflict key areas) ===
    ("UKR", "Poltava", "corn", 49.5, 34.5),
    ("UKR", "Cherkasy", "corn", 49.5, 32.0),
    ("UKR", "Vinnytsia", "wheat", 49.0, 28.5),
    ("UKR", "Kirovohrad", "wheat", 48.5, 32.5),
    ("UKR", "Kharkiv", "soy", 49.5, 36.0),
    ("UKR", "Dnipropetrovsk", "soy", 48.5, 35.0),
    
    # === France ===
    ("FRA", "Beauce_Central", "wheat", 48.0, 1.5),
    ("FRA", "Picardy", "wheat", 49.5, 2.5),
    ("FRA", "Champagne", "wheat", 49.0, 4.0),
    ("FRA", "Aquitaine", "corn", 44.0, -0.5),
    ("FRA", "Midi_Pyrenees", "corn", 43.5, 1.5),
    
    # === Canada - Prairies ===
    ("CAN", "Saskatchewan_South", "wheat", 50.5, -107.0),
    ("CAN", "Saskatchewan_Central", "wheat", 52.0, -106.0),
    ("CAN", "Alberta_South", "wheat", 50.0, -113.0),
    ("CAN", "Manitoba_South", "wheat", 49.5, -98.0),
    ("CAN", "Manitoba_Central", "soy", 50.5, -98.5),
    ("CAN", "Ontario_Southwest", "corn", 42.5, -81.5),
    
    # === Russia ===
    ("RUS", "Krasnodar", "wheat", 45.5, 39.0),
    ("RUS", "Rostov", "wheat", 47.0, 40.0),
    ("RUS", "Stavropol", "wheat", 45.0, 42.0),
    ("RUS", "Voronezh", "wheat", 51.5, 39.5),
    ("RUS", "Saratov", "wheat", 51.5, 46.0),
    
    # === Indonesia ===
    ("IDN", "Java_Central", "rice", -7.0, 110.5),
    ("IDN", "Java_East", "rice", -7.5, 112.5),
    ("IDN", "Sulawesi_South", "rice", -5.0, 120.0),
    ("IDN", "Sumatra_North", "rice", 3.5, 98.5),
    
    # === Thailand ===
    ("THA", "Central_Plains", "rice", 15.0, 100.5),
    ("THA", "Northeast_Isan", "rice", 16.0, 103.0),
    ("THA", "Chiang_Mai", "rice", 18.5, 99.0),
    
    # === Vietnam ===
    ("VNM", "Mekong_Delta", "rice", 10.0, 105.5),
    ("VNM", "Red_River_Delta", "rice", 21.0, 106.0),
]

def generate_years():
    """Generate records for multiple years."""
    years = [2018, 2019, 2020, 2021, 2022, 2023]
    records = []
    
    for country, region, crop, lat, lon in GLOBAL_REGIONS:
        for year in years:
            record = {
                "country_iso3": country,
                "admin_level": "admin_2",
                "admin_code": f"{country}_{region}",
                "admin_name": region.replace("_", " "),
                "crop": crop,
                "year": year,
                "yield_kg_ha": None,  # Will be filled from satellite data
                "area_planted_ha": None,
                "production_tonnes": None,
                "yield_anomaly_pct": None,
                "stress_label": None,
                "centroid_lat": lat,
                "centroid_lon": lon,
                "bbox_west": lon - 0.5,
                "bbox_south": lat - 0.5,
                "bbox_east": lon + 0.5,
                "bbox_north": lat + 0.5,
                "data_source": "global_regions_v1",
                "source_url": None,
                "retrieved_date": datetime.now().isoformat()
            }
            records.append(record)
    
    return records


def main():
    # Load existing Brazil data
    existing = []
    if OUTPUT_PATH.exists():
        with open(OUTPUT_PATH) as f:
            for line in f:
                if line.strip():
                    existing.append(json.loads(line))
        print(f"Loaded {len(existing)} existing records")
    
    # Get existing keys to avoid duplicates
    existing_keys = set()
    for rec in existing:
        key = (rec.get("admin_code"), rec.get("year"))
        existing_keys.add(key)
    
    # Generate new global records
    new_records = generate_years()
    
    # Filter out duplicates
    added = 0
    with open(OUTPUT_PATH, 'a') as f:
        for rec in new_records:
            key = (rec["admin_code"], rec["year"])
            if key not in existing_keys:
                f.write(json.dumps(rec) + "\n")
                existing_keys.add(key)
                added += 1
    
    print(f"Added {added} new global region records")
    print(f"Total regions: {len(GLOBAL_REGIONS)}")
    print(f"Countries: {len(set(r[0] for r in GLOBAL_REGIONS))}")
    
    # Summary by country
    from collections import Counter
    country_counts = Counter(r[0] for r in GLOBAL_REGIONS)
    print("\nRegions by country:")
    for country, count in country_counts.most_common():
        print(f"  {country}: {count} regions")


if __name__ == "__main__":
    main()
