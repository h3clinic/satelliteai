#!/usr/bin/env python3
"""
Global yield anomaly labels from FAOSTAT data.
Same methodology as US Corn Belt: label=1 if yield drop > threshold % below 5-year trend.

Data sources:
- FAOSTAT: https://www.fao.org/faostat/en/#data/QCL
- USDA FAS: https://apps.fas.usda.gov/psdonline/
- National statistics agencies
"""

import json
from pathlib import Path
import numpy as np
from typing import Dict, Tuple, Optional

# =============================================================================
# GLOBAL YIELD DATA (kg/ha) - From FAOSTAT and national statistics
# =============================================================================

# BRAZIL SOY (CONAB/FAOSTAT)
BRA_SOY = {
    2014: 2865, 2015: 3029, 2016: 2870, 2017: 3394, 2018: 3386,
    2019: 3206, 2020: 3289, 2021: 3351, 2022: 2990, 2023: 3450, 2024: 3380
}

# ARGENTINA SOY (SIIA/FAOSTAT)
ARG_SOY = {
    2014: 2780, 2015: 2950, 2016: 3010, 2017: 3210, 2018: 2180,  # 2018 drought
    2019: 3100, 2020: 2900, 2021: 2750, 2022: 1450, 2023: 2200, 2024: 3100  # 2022 severe drought
}

# ARGENTINA CORN
ARG_CORN = {
    2014: 7200, 2015: 6800, 2016: 6900, 2017: 7800, 2018: 7100,
    2019: 8200, 2020: 7500, 2021: 6200, 2022: 5100, 2023: 6800, 2024: 7400
}

# UKRAINE WHEAT (State Statistics)
UKR_WHEAT = {
    2014: 4014, 2015: 3882, 2016: 4232, 2017: 4114, 2018: 3754,
    2019: 4132, 2020: 3788, 2021: 4426, 2022: 3200, 2023: 3400, 2024: 3600  # 2022 war impact
}

# UKRAINE CORN
UKR_CORN = {
    2014: 6130, 2015: 5710, 2016: 6610, 2017: 5530, 2018: 7840,
    2019: 7200, 2020: 5450, 2021: 8020, 2022: 5800, 2023: 6200, 2024: 6500
}

# FRANCE WHEAT (Agreste/FAOSTAT)
FRA_WHEAT = {
    2014: 7365, 2015: 7561, 2016: 5364, 2017: 7261, 2018: 6915,  # 2016 severe
    2019: 7619, 2020: 6760, 2021: 7152, 2022: 7044, 2023: 6700, 2024: 6200  # 2024 wet spring
}

# GERMANY WHEAT
DEU_WHEAT = {
    2014: 8600, 2015: 8100, 2016: 7900, 2017: 7700, 2018: 6700,  # 2018 drought
    2019: 7500, 2020: 7800, 2021: 7200, 2022: 7500, 2023: 7600, 2024: 7200
}

# POLAND WHEAT
POL_WHEAT = {
    2014: 4500, 2015: 4100, 2016: 4200, 2017: 4800, 2018: 3900,
    2019: 4500, 2020: 4900, 2021: 5200, 2022: 5100, 2023: 4800, 2024: 4600
}

# ROMANIA WHEAT
ROU_WHEAT = {
    2014: 3800, 2015: 3900, 2016: 3700, 2017: 4500, 2018: 4800,
    2019: 4300, 2020: 3400, 2021: 5200, 2022: 4100, 2023: 4500, 2024: 4200  # 2020 drought
}

# RUSSIA WHEAT (Rosstat)
RUS_WHEAT = {
    2014: 2510, 2015: 2380, 2016: 2680, 2017: 3140, 2018: 2720,
    2019: 2700, 2020: 2870, 2021: 2650, 2022: 3250, 2023: 3100, 2024: 2900
}

# INDIA WHEAT (Min of Agriculture)
IND_WHEAT = {
    2014: 3034, 2015: 2872, 2016: 3034, 2017: 3216, 2018: 3371,
    2019: 3507, 2020: 3484, 2021: 3508, 2022: 3100, 2023: 3450, 2024: 3300  # 2022 heat wave
}

# INDIA RICE
IND_RICE = {
    2014: 2390, 2015: 2400, 2016: 2580, 2017: 2586, 2018: 2638,
    2019: 2659, 2020: 2712, 2021: 2809, 2022: 2750, 2023: 2850, 2024: 2900
}

# INDIA COTTON (lint)
IND_COTTON = {
    2014: 510, 2015: 480, 2016: 510, 2017: 560, 2018: 450,
    2019: 460, 2020: 480, 2021: 440, 2022: 410, 2023: 450, 2024: 480  # Bollworm issues
}

# CHINA SOY (Heilongjiang focus)
CHN_SOY = {
    2014: 1800, 2015: 1850, 2016: 1820, 2017: 1900, 2018: 1860,
    2019: 1920, 2020: 1980, 2021: 1950, 2022: 2050, 2023: 2100, 2024: 2080
}

# CHINA WHEAT (Henan focus)
CHN_WHEAT = {
    2014: 5100, 2015: 5200, 2016: 5300, 2017: 5400, 2018: 5500,
    2019: 5600, 2020: 5700, 2021: 5800, 2022: 5400, 2023: 5900, 2024: 5700  # 2022 floods
}

# CHINA CORN (Jilin focus)
CHN_CORN = {
    2014: 6200, 2015: 6300, 2016: 6100, 2017: 6400, 2018: 6500,
    2019: 6200, 2020: 6600, 2021: 6800, 2022: 6400, 2023: 6700, 2024: 6600
}

# VIETNAM RICE (Mekong)
VNM_RICE = {
    2014: 5750, 2015: 5770, 2016: 5580, 2017: 5550, 2018: 5800,
    2019: 5820, 2020: 5900, 2021: 5950, 2022: 5600, 2023: 5800, 2024: 5700  # Salinity intrusion
}

# THAILAND RICE
THA_RICE = {
    2014: 2950, 2015: 2850, 2016: 2880, 2017: 2950, 2018: 3000,
    2019: 2680, 2020: 2900, 2021: 2980, 2022: 2700, 2023: 2650, 2024: 2600  # Drought
}

# PAKISTAN COTTON
PAK_COTTON = {
    2014: 720, 2015: 680, 2016: 640, 2017: 650, 2018: 620,
    2019: 520, 2020: 480, 2021: 510, 2022: 380, 2023: 520, 2024: 550  # 2022 floods
}

# BANGLADESH RICE
BGD_RICE = {
    2014: 4560, 2015: 4620, 2016: 4700, 2017: 4630, 2018: 4760,
    2019: 4880, 2020: 4790, 2021: 4850, 2022: 4500, 2023: 4700, 2024: 4800  # 2022 floods
}

# INDONESIA RICE
IDN_RICE = {
    2014: 5130, 2015: 5340, 2016: 5200, 2017: 5150, 2018: 5200,
    2019: 5100, 2020: 5100, 2021: 5250, 2022: 5300, 2023: 5100, 2024: 5200
}

# MYANMAR RICE
MMR_RICE = {
    2014: 3900, 2015: 3950, 2016: 3850, 2017: 3900, 2018: 3950,
    2019: 3880, 2020: 3920, 2021: 3700, 2022: 3600, 2023: 3750, 2024: 3800  # Political crisis
}

# NIGERIA CORN
NGA_CORN = {
    2014: 2000, 2015: 1950, 2016: 1800, 2017: 1900, 2018: 2100,
    2019: 2050, 2020: 1900, 2021: 1850, 2022: 1800, 2023: 1950, 2024: 2000
}

# EGYPT WHEAT
EGY_WHEAT = {
    2014: 6500, 2015: 6600, 2016: 6700, 2017: 6400, 2018: 6550,
    2019: 6600, 2020: 6450, 2021: 6500, 2022: 6300, 2023: 6700, 2024: 6500
}

# SOUTH AFRICA CORN
ZAF_CORN = {
    2014: 4800, 2015: 3200, 2016: 5500, 2017: 6200, 2018: 5900,  # 2015 El Niño
    2019: 5800, 2020: 6500, 2021: 6800, 2022: 5000, 2023: 5500, 2024: 4800  # 2022 La Niña
}

# KENYA WHEAT
KEN_WHEAT = {
    2014: 2200, 2015: 2100, 2016: 2300, 2017: 1800, 2018: 2100,  # 2017 drought
    2019: 2400, 2020: 2200, 2021: 2500, 2022: 2100, 2023: 2300, 2024: 2200
}

# AUSTRALIA WHEAT
AUS_WHEAT = {
    2014: 2000, 2015: 1900, 2016: 2200, 2017: 1800, 2018: 1500,  # 2018 drought
    2019: 1650, 2020: 2150, 2021: 2280, 2022: 2350, 2023: 1850, 2024: 2100  # 2019 fires
}

# CANADA WHEAT
CAN_WHEAT = {
    2014: 2900, 2015: 2800, 2016: 3200, 2017: 2950, 2018: 3100,
    2019: 3200, 2020: 3400, 2021: 2100, 2022: 3500, 2023: 3300, 2024: 3200  # 2021 heat dome
}

# CANADA CANOLA
CAN_CANOLA = {
    2014: 1850, 2015: 2000, 2016: 2100, 2017: 2200, 2018: 2150,
    2019: 2000, 2020: 2100, 2021: 1400, 2022: 2250, 2023: 2100, 2024: 2000  # 2021 heat dome
}

# KAZAKHSTAN WHEAT
KAZ_WHEAT = {
    2014: 1250, 2015: 1300, 2016: 1450, 2017: 1350, 2018: 1200,
    2019: 1150, 2020: 1350, 2021: 1100, 2022: 1400, 2023: 1250, 2024: 1300
}

# TURKEY WHEAT
TUR_WHEAT = {
    2014: 2900, 2015: 3100, 2016: 3200, 2017: 3000, 2018: 2800,
    2019: 2950, 2020: 2850, 2021: 2900, 2022: 2600, 2023: 2750, 2024: 2800
}


# =============================================================================
# REGION TO YIELD DATA MAPPING
# =============================================================================

REGION_YIELD_MAP = {
    # South America
    "BRA_MATOGROSSO": (BRA_SOY, "Soy", 10),
    "BRA_PARANA": (BRA_SOY, "Soy", 10),
    "BRA_RS_SOY": (BRA_SOY, "Soy", 12),
    "ARG_PAMPA": (ARG_SOY, "Soy", 15),
    "ARG_CORDOBA": (ARG_CORN, "Corn", 12),
    
    # Europe
    "UKR_SOUTH": (UKR_WHEAT, "Wheat", 12),
    "UKR_CENTRAL": (UKR_CORN, "Corn", 15),
    "FRA_BEAUCE": (FRA_WHEAT, "Wheat", 10),
    "DEU_BAVARIA": (DEU_WHEAT, "Wheat", 10),
    "POL_CENTRAL": (POL_WHEAT, "Wheat", 12),
    "ROU_SOUTH": (ROU_WHEAT, "Wheat", 15),
    "RUS_KRASNODAR": (RUS_WHEAT, "Wheat", 12),
    "RUS_ROSTOV": (RUS_WHEAT, "Wheat", 12),
    
    # Asia
    "IND_PUNJAB": (IND_WHEAT, "Wheat", 10),
    "IND_HARYANA": (IND_WHEAT, "Wheat", 10),
    "IND_UP_RICE": (IND_RICE, "Rice", 8),
    "IND_GUJARAT": (IND_COTTON, "Cotton", 15),
    "CHN_HEILONGJIANG": (CHN_SOY, "Soy", 10),
    "CHN_HENAN": (CHN_WHEAT, "Wheat", 8),
    "CHN_JILIN": (CHN_CORN, "Corn", 10),
    "VNM_MEKONG": (VNM_RICE, "Rice", 8),
    "THA_CENTRAL": (THA_RICE, "Rice", 10),
    "PAK_PUNJAB": (PAK_COTTON, "Cotton", 15),
    "BGD_RANGPUR": (BGD_RICE, "Rice", 8),
    "IDN_JAVA": (IDN_RICE, "Rice", 8),
    "MMR_AYEYARWADY": (MMR_RICE, "Rice", 10),
    
    # Africa
    "NGA_NORTH": (NGA_CORN, "Corn", 12),
    "EGY_NILE": (EGY_WHEAT, "Wheat", 8),
    "ZAF_FREESTATE": (ZAF_CORN, "Corn", 15),
    "KEN_RIFT": (KEN_WHEAT, "Wheat", 15),
    
    # Oceania
    "AUS_NSW": (AUS_WHEAT, "Wheat", 15),
    "AUS_WA": (AUS_WHEAT, "Wheat", 15),
    
    # North America
    "CAN_SASK": (CAN_WHEAT, "Wheat", 12),
    "CAN_ALBERTA": (CAN_CANOLA, "Canola", 15),
    
    # Central Asia
    "KAZ_NORTH": (KAZ_WHEAT, "Wheat", 15),
    "TUR_KONYA": (TUR_WHEAT, "Wheat", 12),
}


def compute_trailing_mean(yields: Dict[int, float], year: int, window: int = 5) -> Optional[float]:
    """Compute trailing mean of previous years."""
    past_years = [y for y in range(year - window, year) if y in yields]
    if len(past_years) < 3:
        return None
    return np.mean([yields[y] for y in past_years])


def compute_label(yields: Dict[int, float], year: int, threshold: float) -> Tuple[Optional[int], Optional[Dict]]:
    """Compute stress label based on yield anomaly."""
    baseline = compute_trailing_mean(yields, year)
    if baseline is None or year not in yields:
        return None, None
    
    actual = yields[year]
    anomaly_pct = ((actual - baseline) / baseline) * 100
    label = 1 if anomaly_pct < -threshold else 0
    
    return label, {
        "actual_yield": actual,
        "baseline": round(baseline, 1),
        "anomaly_pct": round(anomaly_pct, 1),
        "threshold": threshold
    }


def generate_all_labels(output_file: str):
    """Generate labels for all regions and years."""
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    records = []
    
    print("="*70)
    print("GLOBAL YIELD ANOMALY LABELS")
    print("="*70)
    
    for region_id, (yields, crop, threshold) in REGION_YIELD_MAP.items():
        print(f"\n[{region_id}] {crop} (threshold={threshold}%)")
        
        for year in sorted(yields.keys()):
            if year < 2019:  # Only recent years
                continue
            
            label, meta = compute_label(yields, year, threshold)
            
            if label is not None:
                record = {
                    "region_id": region_id,
                    "year": year,
                    "crop": crop,
                    "label": label,
                    **meta
                }
                records.append(record)
                
                marker = "🔴 STRESS" if label == 1 else "🟢 Normal"
                print(f"  {year}: {marker} | yield={meta['actual_yield']:,} | base={meta['baseline']:,.0f} | anom={meta['anomaly_pct']:+.1f}%")
    
    # Write output
    with open(output_path, "w") as f:
        json.dump(records, f, indent=2)
    
    # Summary
    total = len(records)
    stress = sum(1 for r in records if r["label"] == 1)
    
    print(f"\n{'='*70}")
    print(f"SUMMARY")
    print(f"Total records: {total}")
    print(f"Stress events: {stress} ({100*stress/total:.1f}%)")
    print(f"Output: {output_path}")
    print(f"{'='*70}")
    
    return records


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Generate global yield labels")
    parser.add_argument("--output", default="~/data/satelliteai/data/global_satellite/yield_labels.json",
                       help="Output file")
    args = parser.parse_args()
    
    output_file = os.path.expanduser(args.output)
    generate_all_labels(output_file)


if __name__ == "__main__":
    import os
    main()
