#!/usr/bin/env python3
"""
Brazil IBGE PAM Data Pipeline
==============================

Downloads sub-national (municipality-level) crop yield data from IBGE SIDRA API.
PAM = Produção Agrícola Municipal (Municipal Agricultural Production)

Data source: https://sidra.ibge.gov.br/tabela/5457
API docs: https://apisidra.ibge.gov.br/

Key tables:
- Table 5457: Área plantada, área colhida, quantidade produzida, rendimento médio e valor da produção
  (Planted area, harvested area, production quantity, average yield, production value)

Admin hierarchy:
- Brazil has 27 UFs (states + DF)
- Brazil has 5,570 municipalities
- For MVP: focus on top soy/corn states (Mato Grosso, Paraná, Rio Grande do Sul, Goiás)

Growing seasons (Southern Hemisphere):
- Soy: planted Oct-Dec, harvested Feb-May (safrinha: Feb-Mar planted, Jun-Jul harvested)
- Corn (1st crop): planted Sep-Nov, harvested Jan-Apr
- Corn (2nd crop/safrinha): planted Jan-Mar, harvested Jun-Aug
"""

import os
import json
import time
import requests
from pathlib import Path
from dataclasses import dataclass, asdict
from typing import Optional, List, Dict
from datetime import datetime

# Import schema
import sys
sys.path.append(str(Path(__file__).parent))
from schema import (
    SubNationalYield, Crop, AdminLevel, DataSource,
    compute_stress_label, validate_yield_record
)


# =============================================================================
# IBGE CONFIGURATION
# =============================================================================

IBGE_API_BASE = "https://apisidra.ibge.gov.br/values"

# Table 5457: Municipal Agricultural Production
# Variables:
#   109: Área plantada (hectares)
#   216: Área colhida (hectares)  
#   214: Quantidade produzida (toneladas)
#   112: Rendimento médio (kg/ha)

TABLE_ID = "5457"
VARIABLES = {
    "area_planted": "8331",  # Área plantada ou destinada à colheita (Hectares)
    "area_harvested": "216", # Área colhida (Hectares)
    "production": "214",     # Quantidade produzida (Toneladas)
    "yield": "112"           # Rendimento médio (kg/ha)
}

# IBGE crop codes (from classification 782)
# Full list: https://apisidra.ibge.gov.br/desctabapi.aspx?c=5457
IBGE_CROPS = {
    "soy": "40124",     # Soja (em grão)
    "corn": "40122",    # Milho (em grão)
    "wheat": "40127",   # Trigo (em grão)
    "rice": "40102",    # Arroz (em casca)
    "cotton": "40099",  # Algodão herbáceo (em caroço)
    "sugarcane": "40106",  # Cana-de-açúcar
    "coffee": "40139",  # Café (em grão) Total
}

# Key soy/corn states (focus for MVP)
SOY_CORN_STATES = {
    "51": {"name": "Mato Grosso", "abbrev": "MT"},
    "41": {"name": "Paraná", "abbrev": "PR"},
    "43": {"name": "Rio Grande do Sul", "abbrev": "RS"},
    "52": {"name": "Goiás", "abbrev": "GO"},
    "50": {"name": "Mato Grosso do Sul", "abbrev": "MS"},
    "29": {"name": "Bahia", "abbrev": "BA"},
    "35": {"name": "São Paulo", "abbrev": "SP"},
    "31": {"name": "Minas Gerais", "abbrev": "MG"},
    "17": {"name": "Tocantins", "abbrev": "TO"},
    "21": {"name": "Maranhão", "abbrev": "MA"},
    "22": {"name": "Piauí", "abbrev": "PI"},
}

# Year range
YEARS = list(range(2010, 2025))


# =============================================================================
# MUNICIPALITY CENTROIDS
# =============================================================================

# Pre-computed centroids for key municipalities (would load from IBGE geojson in production)
# Format: {ibge_code: (lat, lon, name)}
# These are the top 50 soy-producing municipalities

TOP_SOY_MUNICIPALITIES = {
    # Mato Grosso
    "5107909": (-13.5, -56.1, "Sorriso"),
    "5108006": (-13.7, -55.8, "Nova Mutum"),
    "5105507": (-15.0, -55.3, "Lucas do Rio Verde"),
    "5107958": (-12.5, -55.7, "Sinop"),
    "5106257": (-13.0, -57.0, "Nova Ubiratã"),
    "5104526": (-13.5, -54.0, "Querência"),
    "5106240": (-12.2, -57.4, "Nova Maringá"),
    "5106224": (-11.9, -55.5, "Ipiranga do Norte"),
    "5101902": (-14.0, -52.2, "Canarana"),
    "5107065": (-13.0, -53.0, "São José do Rio Claro"),
    # Paraná
    "4102802": (-24.0, -50.6, "Castro"),
    "4128203": (-24.7, -50.4, "Tibagi"),
    "4100103": (-23.3, -50.6, "Arapoti"),
    "4104808": (-24.8, -53.2, "Cascavel"),
    "4127700": (-24.0, -52.4, "Toledo"),
    # Rio Grande do Sul
    "4314407": (-28.5, -54.4, "Palmeira das Missões"),
    "4305108": (-28.3, -53.0, "Cruz Alta"),
    "4307104": (-28.1, -55.0, "Giruá"),
    "4320008": (-28.8, -54.8, "São Luiz Gonzaga"),
    "4311403": (-28.0, -51.1, "Lagoa Vermelha"),
    # Goiás
    "5212253": (-16.2, -49.3, "Cristalina"),
    "5212055": (-17.8, -51.5, "Rio Verde"),
    "5208707": (-18.0, -49.5, "Jataí"),
    "5216304": (-15.4, -47.3, "Formosa"),
    # Mato Grosso do Sul
    "5003207": (-22.2, -54.8, "Dourados"),
    "5006606": (-22.5, -55.5, "Ponta Porã"),
    "5005004": (-21.5, -55.0, "Maracaju"),
    "5007406": (-22.8, -54.5, "Rio Brilhante"),
    # Bahia
    "2903201": (-12.2, -46.0, "Barreiras"),
    "2919553": (-12.8, -45.8, "Luís Eduardo Magalhães"),
    "2909307": (-11.5, -46.4, "Formosa do Rio Preto"),
}


def get_municipality_coords(ibge_code: str) -> tuple:
    """Get centroid coordinates for a municipality."""
    if ibge_code in TOP_SOY_MUNICIPALITIES:
        lat, lon, _ = TOP_SOY_MUNICIPALITIES[ibge_code]
        return lat, lon
    # Fallback: would query IBGE API or use geojson
    return 0.0, 0.0


# =============================================================================
# IBGE API FUNCTIONS
# =============================================================================

def build_sidra_url(
    table: str,
    variable: str,
    state_code: Optional[str] = None,  # Filter by state, or None for all
    period: str = "all",  # Years
    crop_code: str = "39"  # IBGE crop code
) -> str:
    """
    Build SIDRA API URL for PAM (Produção Agrícola Municipal) data.
    
    API Format: /values/t/{table}/n6/{territory}/v/{variable}/p/{period}/c782/{crop}
    
    For municipalities in a specific state: n6/in n3 {state_code}
    For all municipalities: n6/all
    
    Reference: https://apisidra.ibge.gov.br/
    """
    # n6 = municipality level
    # To filter by state: "in n3 {state_code}"
    if state_code:
        territory = f"in n3 {state_code}"
    else:
        territory = "all"
    
    # Note: c782 is the classification for crop products in PAM
    url = f"{IBGE_API_BASE}/t/{table}/n6/{territory}/v/{variable}/p/{period}/c782/{crop_code}"
    return url


def fetch_ibge_data(url: str, retries: int = 3) -> Optional[List[dict]]:
    """Fetch data from IBGE SIDRA API with retries."""
    headers = {"Accept": "application/json"}
    
    for attempt in range(retries):
        try:
            print(f"  Fetching: {url[:100]}...")
            resp = requests.get(url, headers=headers, timeout=60)
            
            if resp.status_code == 200:
                data = resp.json()
                # First row is header
                if len(data) > 1:
                    return data[1:]  # Skip header row
                return []
            else:
                print(f"    HTTP {resp.status_code}: {resp.text[:100]}")
                
        except Exception as e:
            print(f"    Error (attempt {attempt + 1}): {e}")
            time.sleep(2 ** attempt)
    
    return None


def parse_ibge_row(row: dict, crop: str) -> Optional[dict]:
    """Parse a single IBGE data row.
    
    SIDRA response structure:
    - D1C: Municipality code (7-digit IBGE code)
    - D1N: Municipality name (e.g., "Água Boa - MT")
    - D2C: Variable code (112=yield, 109=area, 214=production)
    - D3C: Year
    - D4C: Crop code
    - V: Value (can be "..." for no data, "-" for not applicable)
    """
    try:
        # Extract fields - NOTE: D1C is municipality, D2C is variable!
        ibge_code = row.get("D1C", "")  # Municipality code (with state prefix)
        muni_name = row.get("D1N", "")  # Municipality name like "Sorriso - MT"
        year_str = row.get("D3C", "")   # Year
        value = row.get("V", "")        # Value
        
        if not value or value == "-" or value == "...":
            return None
        
        if not year_str or not ibge_code:
            return None
            
        year = int(year_str)
        
        # Clean value (Brazilian format uses . for thousands, , for decimal)
        # e.g., "3.480" = 3480, "3.480,5" = 3480.5
        value_clean = value.replace(".", "").replace(",", ".")
        value_float = float(value_clean)
        
        return {
            "ibge_code": ibge_code,
            "name": muni_name,
            "year": year,
            "value": value_float
        }
    except Exception as e:
        return None


# =============================================================================
# DATA DOWNLOAD
# =============================================================================

def download_state_crop_data(
    state_code: str,
    crop: str,
    years: List[int],
    output_dir: Path
) -> List[SubNationalYield]:
    """Download yield data for one state, one crop, multiple years."""
    
    state_info = SOY_CORN_STATES.get(state_code, {"name": state_code, "abbrev": state_code})
    print(f"\n{'='*60}")
    print(f"Downloading: {state_info['name']} ({state_info['abbrev']}) - {crop}")
    print(f"{'='*60}")
    
    records = []
    
    # Build URL for yield data (variable 112 = rendimento médio kg/ha)
    period = ",".join(str(y) for y in years)
    crop_code = IBGE_CROPS.get(crop)
    if not crop_code:
        print(f"  Unknown crop: {crop}")
        return records
    
    # Fetch yield data
    url_yield = build_sidra_url(
        table=TABLE_ID,
        variable=VARIABLES["yield"],
        state_code=state_code,
        period=period,
        crop_code=crop_code
    )
    
    # Also get area and production
    url_area = build_sidra_url(
        table=TABLE_ID,
        variable=VARIABLES["area_planted"],
        state_code=state_code,
        period=period,
        crop_code=crop_code
    )
    
    url_prod = build_sidra_url(
        table=TABLE_ID,
        variable=VARIABLES["production"],
        state_code=state_code,
        period=period,
        crop_code=crop_code
    )
    
    # Fetch all three
    yield_data = fetch_ibge_data(url_yield)
    time.sleep(1)  # Rate limiting
    area_data = fetch_ibge_data(url_area)
    time.sleep(1)
    prod_data = fetch_ibge_data(url_prod)
    
    if not yield_data:
        print(f"  No yield data returned")
        return records
    
    # Parse yield data
    yields_by_muni_year = {}
    for row in yield_data:
        parsed = parse_ibge_row(row, crop)
        if parsed:
            key = (parsed["ibge_code"], parsed["year"])
            yields_by_muni_year[key] = {
                "yield_kg_ha": parsed["value"],
                "name": parsed["name"]
            }
    
    # Parse area data
    if area_data:
        for row in area_data:
            parsed = parse_ibge_row(row, crop)
            if parsed:
                key = (parsed["ibge_code"], parsed["year"])
                if key in yields_by_muni_year:
                    yields_by_muni_year[key]["area_ha"] = parsed["value"]
    
    # Parse production data
    if prod_data:
        for row in prod_data:
            parsed = parse_ibge_row(row, crop)
            if parsed:
                key = (parsed["ibge_code"], parsed["year"])
                if key in yields_by_muni_year:
                    yields_by_muni_year[key]["production_t"] = parsed["value"]
    
    print(f"  Found {len(yields_by_muni_year)} municipality-year records")
    
    # Build time series by municipality for anomaly calculation
    muni_yields = {}  # {ibge_code: {year: yield}}
    for (ibge_code, year), data in yields_by_muni_year.items():
        if ibge_code not in muni_yields:
            muni_yields[ibge_code] = {}
        muni_yields[ibge_code][year] = data["yield_kg_ha"]
    
    # Create SubNationalYield records
    for (ibge_code, year), data in yields_by_muni_year.items():
        # Compute anomaly
        label, anomaly, baseline = compute_stress_label(
            muni_yields[ibge_code], year, threshold_pct=10.0
        )
        
        # Get coordinates
        lat, lon = get_municipality_coords(ibge_code)
        
        record = SubNationalYield(
            country_iso3="BRA",
            admin_level=AdminLevel.ADMIN_2,
            admin_code=ibge_code,
            admin_name=data["name"],
            crop=Crop(crop),
            year=year,
            yield_kg_ha=data["yield_kg_ha"],
            area_planted_ha=data.get("area_ha", 0),
            production_tonnes=data.get("production_t", 0),
            yield_anomaly_pct=anomaly,
            stress_label=label,
            centroid_lat=lat,
            centroid_lon=lon,
            data_source=DataSource.IBGE_PAM,
            source_url=url_yield,
            retrieved_date=datetime.now().isoformat()
        )
        
        # Validate
        errors = validate_yield_record(record)
        if not errors:
            records.append(record)
        elif lat != 0:  # Only warn if we have coords
            print(f"    Validation errors for {ibge_code}: {errors}")
    
    print(f"  Created {len(records)} valid records")
    return records


def download_brazil_data(
    output_dir: str,
    crops: List[str] = ["soy", "corn"],
    states: List[str] = None,
    years: List[int] = None
) -> Path:
    """Download all Brazil sub-national yield data."""
    
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    if states is None:
        states = list(SOY_CORN_STATES.keys())
    if years is None:
        years = list(range(2015, 2025))
    
    all_records = []
    
    for crop in crops:
        for state_code in states:
            try:
                records = download_state_crop_data(
                    state_code, crop, years, output_path
                )
                all_records.extend(records)
                time.sleep(2)  # Rate limiting between states
            except Exception as e:
                print(f"  Error downloading {state_code} {crop}: {e}")
    
    # Save all records
    output_file = output_path / "brazil_subnational_yields.jsonl"
    with open(output_file, "w") as f:
        for record in all_records:
            f.write(json.dumps(record.to_dict()) + "\n")
    
    # Summary
    print(f"\n{'='*60}")
    print(f"BRAZIL DATA DOWNLOAD COMPLETE")
    print(f"{'='*60}")
    print(f"Total records: {len(all_records)}")
    
    # Stats by crop
    for crop in crops:
        crop_records = [r for r in all_records if r.crop.value == crop]
        stress = sum(1 for r in crop_records if r.stress_label == 1)
        with_coords = sum(1 for r in crop_records if r.centroid_lat != 0)
        print(f"  {crop}: {len(crop_records)} records, {stress} stress events, {with_coords} with coords")
    
    print(f"\nOutput: {output_file}")
    
    return output_file


# =============================================================================
# MAIN
# =============================================================================

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Download Brazil IBGE PAM data")
    parser.add_argument("--output-dir", default=os.path.expanduser("~/data/satelliteai/data/brazil"),
                       help="Output directory")
    parser.add_argument("--crops", nargs="+", default=["soy", "corn"],
                       help="Crops to download")
    parser.add_argument("--states", nargs="+", default=None,
                       help="State codes or abbreviations (e.g., 51, MT)")
    parser.add_argument("--years", nargs="+", type=int, default=list(range(2015, 2025)),
                       help="Years to download")
    parser.add_argument("--test", action="store_true",
                       help="Test mode: just Mato Grosso 2022-2023")
    
    args = parser.parse_args()
    
    # Map abbreviations to codes
    abbrev_to_code = {v["abbrev"]: k for k, v in SOY_CORN_STATES.items()}
    
    if args.states:
        resolved_states = []
        for s in args.states:
            if s in SOY_CORN_STATES:
                resolved_states.append(s)  # Already a code
            elif s.upper() in abbrev_to_code:
                resolved_states.append(abbrev_to_code[s.upper()])
            else:
                print(f"Unknown state: {s}")
        args.states = resolved_states if resolved_states else None
    
    if args.test:
        print("TEST MODE: Mato Grosso only, 2022-2023")
        download_brazil_data(
            args.output_dir,
            crops=["soy"],
            states=["51"],  # Mato Grosso
            years=[2022, 2023]
        )
    else:
        download_brazil_data(
            args.output_dir,
            crops=args.crops,
            states=args.states,
            years=args.years
        )


if __name__ == "__main__":
    main()
