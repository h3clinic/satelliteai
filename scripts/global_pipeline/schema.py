"""
Global AgriSentinel Data Contract Schema
========================================

This defines the EXACT format for all sub-national yield data across countries.
Every country pipeline MUST produce data matching this schema.

Key principles:
1. Sub-national units (state/province/municipality) - NOT country-level
2. Crop-specific yields - NOT aggregated across crops  
3. Coordinates for centroid - for satellite sampling
4. Consistent units - kg/ha for yield, hectares for area
"""

from dataclasses import dataclass, asdict
from typing import Optional, List, Literal
from enum import Enum
import json

# =============================================================================
# ENUMS
# =============================================================================

class Crop(str, Enum):
    """Supported crops for MVP"""
    CORN = "corn"
    SOY = "soy"
    WHEAT = "wheat"
    RICE = "rice"
    # Phase 2
    COTTON = "cotton"
    SUGARCANE = "sugarcane"
    COFFEE = "coffee"


class AdminLevel(str, Enum):
    """Administrative level granularity"""
    ADMIN_1 = "admin_1"  # State/Province/Oblast
    ADMIN_2 = "admin_2"  # County/Municipality/District
    ADMIN_3 = "admin_3"  # Sub-district (rare)


class DataSource(str, Enum):
    """Official data source"""
    # US
    USDA_NASS = "usda_nass"
    
    # Brazil
    IBGE_PAM = "ibge_pam"
    CONAB = "conab"
    
    # India
    DESAGRI_APY = "desagri_apy"
    
    # Argentina
    SIIA = "siia"
    
    # Ukraine
    SSSU = "sssu"
    
    # Generic
    FAO_STAT = "faostat"  # Only for baseline/validation
    USDA_FAS = "usda_fas"


# =============================================================================
# DATA CONTRACT: Sub-National Yield Record
# =============================================================================

@dataclass
class SubNationalYield:
    """
    One yield observation for one admin unit, one crop, one year.
    This is the GROUND TRUTH for training.
    """
    # Identity
    country_iso3: str           # "BRA", "IND", "ARG", "USA", "UKR"
    admin_level: AdminLevel     # admin_1 or admin_2
    admin_code: str             # Official code (FIPS, IBGE code, etc.)
    admin_name: str             # Human readable name
    
    # Crop & Year
    crop: Crop
    year: int                   # Harvest year
    
    # Core data (REQUIRED)
    yield_kg_ha: float          # Yield in kg/ha
    area_planted_ha: float      # Planted area in hectares
    production_tonnes: float    # Total production in metric tonnes
    
    # Derived (computed at ingest)
    yield_anomaly_pct: Optional[float] = None  # vs 5-year trailing mean
    stress_label: Optional[int] = None         # 1=stress, 0=normal
    
    # Geography (for satellite sampling)
    centroid_lat: float = 0.0
    centroid_lon: float = 0.0
    bbox_west: float = 0.0
    bbox_south: float = 0.0
    bbox_east: float = 0.0
    bbox_north: float = 0.0
    
    # Metadata
    data_source: DataSource = DataSource.FAO_STAT
    source_url: str = ""
    retrieved_date: str = ""
    
    def to_dict(self) -> dict:
        d = asdict(self)
        d['admin_level'] = self.admin_level.value
        d['crop'] = self.crop.value
        d['data_source'] = self.data_source.value
        return d
    
    @classmethod
    def from_dict(cls, d: dict) -> 'SubNationalYield':
        d['admin_level'] = AdminLevel(d['admin_level'])
        d['crop'] = Crop(d['crop'])
        d['data_source'] = DataSource(d['data_source'])
        return cls(**d)


# =============================================================================
# DATA CONTRACT: Satellite Features Record
# =============================================================================

@dataclass
class SatelliteFeatures:
    """
    Satellite-derived features for one admin unit, one month.
    Aggregated from multiple sample points within the admin unit's cropland.
    """
    # Identity (must match SubNationalYield)
    country_iso3: str
    admin_code: str
    crop: Crop
    year: int
    month: int  # 1-12
    
    # NDVI statistics (from N sample points)
    ndvi_mean: float
    ndvi_std: float
    ndvi_p10: float
    ndvi_p50: float
    ndvi_p90: float
    
    # EVI statistics
    evi_mean: float
    evi_std: float
    evi_p10: float
    evi_p50: float
    evi_p90: float
    
    # NDWI (water stress indicator)
    ndwi_mean: float
    ndwi_std: float
    
    # Sampling metadata
    n_sample_points: int        # How many points we sampled
    n_valid_pixels: int         # Total valid pixels across samples
    cloud_cover_pct: float      # Average cloud cover
    
    # Scene info
    scene_date: str             # Representative date
    satellite: str = "sentinel-2"
    
    def to_dict(self) -> dict:
        d = asdict(self)
        d['crop'] = self.crop.value
        return d


# =============================================================================
# DATA CONTRACT: Training Sample
# =============================================================================

@dataclass  
class TrainingSample:
    """
    One complete training sample: yield label + satellite time series.
    This is what the model actually sees.
    """
    # Identity
    sample_id: str              # "{country}_{admin_code}_{crop}_{year}"
    country_iso3: str
    admin_code: str
    admin_name: str
    crop: Crop
    year: int
    
    # Label
    stress_label: int           # 0 or 1
    yield_anomaly_pct: float    # Continuous target (optional use)
    
    # Features: satellite time series (e.g., months 4-8 for Northern Hemisphere)
    # List of monthly aggregated features
    monthly_features: List[dict]  # List of SatelliteFeatures.to_dict()
    
    # Temporal features (derived)
    ndvi_peak: float            # Max NDVI during season
    ndvi_greenup_rate: float    # Rate of increase early season
    ndvi_senescence_rate: float # Rate of decrease late season
    ndvi_season_integral: float # Area under NDVI curve
    
    # Metadata
    data_source: DataSource = DataSource.FAO_STAT
    
    def to_dict(self) -> dict:
        d = asdict(self)
        d['crop'] = self.crop.value
        d['data_source'] = self.data_source.value
        return d


# =============================================================================
# COUNTRY BUILD ORDER (ROI-ranked)
# =============================================================================

COUNTRY_BUILD_ORDER = [
    {
        "priority": 1,
        "country": "USA",
        "iso3": "USA", 
        "crops": ["corn", "soy", "wheat"],
        "admin_level": "admin_2",  # County
        "yield_source": "USDA NASS QuickStats",
        "crop_mask": "USDA CDL",
        "status": "DONE",
        "notes": "Already working. 692 county-year samples. AUROC 0.71"
    },
    {
        "priority": 2,
        "country": "Brazil",
        "iso3": "BRA",
        "crops": ["soy", "corn"],
        "admin_level": "admin_2",  # Municipality (5570 units)
        "yield_source": "IBGE PAM (Produção Agrícola Municipal)",
        "yield_url": "https://sidra.ibge.gov.br/tabela/5457",
        "crop_mask": "MapBiomas / CONAB crop maps",
        "status": "TODO",
        "notes": "Mato Grosso alone has 141 municipalities. Rich data."
    },
    {
        "priority": 3,
        "country": "India", 
        "iso3": "IND",
        "crops": ["wheat", "rice"],
        "admin_level": "admin_1",  # State (36 states/UTs)
        "yield_source": "data.desagri.gov.in APY reports",
        "yield_url": "https://data.desagri.gov.in/website/crops-apy-report-web",
        "crop_mask": "NRSC LULC / state agriculture departments",
        "status": "TODO",
        "notes": "Punjab/Haryana wheat, UP rice. Good state-level data."
    },
    {
        "priority": 4,
        "country": "Argentina",
        "iso3": "ARG",
        "crops": ["soy", "corn", "wheat"],
        "admin_level": "admin_1",  # Province (23 provinces)
        "yield_source": "SIIA (Sistema Integrado de Información Agropecuaria)",
        "yield_url": "https://www.argentina.gob.ar/agricultura/siia",
        "crop_mask": "INTA maps",
        "status": "TODO",
        "notes": "Buenos Aires, Córdoba, Santa Fe are key soy provinces."
    },
    {
        "priority": 5,
        "country": "Ukraine",
        "iso3": "UKR",
        "crops": ["wheat", "corn", "sunflower"],
        "admin_level": "admin_1",  # Oblast (24 oblasts)
        "yield_source": "SSSU (State Statistics Service of Ukraine)",
        "yield_url": "https://ukrstat.gov.ua/",
        "crop_mask": "ESA WorldCover / Ukraine Ag Ministry",
        "status": "TODO",
        "notes": "Data may be spotty due to conflict. Pre-2022 is solid."
    },
]


# =============================================================================
# GROWING SEASONS BY CROP & HEMISPHERE
# =============================================================================

GROWING_SEASONS = {
    # Northern Hemisphere (peak ~Aug)
    ("corn", "north"): {"start_month": 4, "peak_month": 8, "end_month": 10},
    ("soy", "north"): {"start_month": 5, "peak_month": 8, "end_month": 10},
    ("wheat_winter", "north"): {"start_month": 10, "peak_month": 6, "end_month": 7},  # Oct->Jul
    ("wheat_spring", "north"): {"start_month": 4, "peak_month": 7, "end_month": 8},
    ("rice_kharif", "north"): {"start_month": 6, "peak_month": 9, "end_month": 11},
    ("rice_rabi", "north"): {"start_month": 11, "peak_month": 3, "end_month": 5},
    
    # Southern Hemisphere (peak ~Feb for summer crops)
    ("soy", "south"): {"start_month": 10, "peak_month": 2, "end_month": 4},
    ("corn", "south"): {"start_month": 9, "peak_month": 1, "end_month": 4},
    ("wheat", "south"): {"start_month": 5, "peak_month": 10, "end_month": 12},
}


def get_growing_season(crop: str, lat: float) -> dict:
    """Get growing season months based on crop and latitude."""
    hemisphere = "north" if lat >= 0 else "south"
    
    # Try specific crop
    key = (crop.lower(), hemisphere)
    if key in GROWING_SEASONS:
        return GROWING_SEASONS[key]
    
    # Fallback defaults
    if hemisphere == "north":
        return {"start_month": 4, "peak_month": 7, "end_month": 10}
    else:
        return {"start_month": 10, "peak_month": 1, "end_month": 4}


# =============================================================================
# STRESS LABEL COMPUTATION
# =============================================================================

def compute_stress_label(
    yields: dict,  # {year: yield_kg_ha}
    target_year: int,
    threshold_pct: float = 10.0,
    min_history: int = 3
) -> tuple:
    """
    Compute stress label using trailing mean methodology.
    
    Returns: (label, anomaly_pct, baseline)
    """
    # Get 5 years before target
    history_years = [y for y in range(target_year - 5, target_year) if y in yields]
    
    if len(history_years) < min_history:
        return None, None, None
    
    baseline = sum(yields[y] for y in history_years) / len(history_years)
    
    if target_year not in yields:
        return None, None, None
    
    actual = yields[target_year]
    anomaly_pct = ((actual - baseline) / baseline) * 100
    label = 1 if anomaly_pct < -threshold_pct else 0
    
    return label, round(anomaly_pct, 2), round(baseline, 2)


# =============================================================================
# VALIDATION
# =============================================================================

def validate_yield_record(record: SubNationalYield) -> List[str]:
    """Validate a yield record, return list of errors."""
    errors = []
    
    if not record.country_iso3 or len(record.country_iso3) != 3:
        errors.append("country_iso3 must be 3-letter ISO code")
    
    if not record.admin_code:
        errors.append("admin_code is required")
    
    if record.yield_kg_ha <= 0:
        errors.append(f"yield_kg_ha must be positive, got {record.yield_kg_ha}")
    
    if record.yield_kg_ha > 20000:  # Sanity check (20 tonnes/ha is extreme)
        errors.append(f"yield_kg_ha seems too high: {record.yield_kg_ha}")
    
    if record.area_planted_ha <= 0:
        errors.append(f"area_planted_ha must be positive")
    
    if record.year < 2000 or record.year > 2030:
        errors.append(f"year {record.year} seems wrong")
    
    if record.centroid_lat == 0 and record.centroid_lon == 0:
        errors.append("centroid coordinates not set")
    
    return errors


if __name__ == "__main__":
    # Print build order
    print("=" * 70)
    print("AGRISENTINEL GLOBAL PIPELINE - BUILD ORDER")
    print("=" * 70)
    
    for country in COUNTRY_BUILD_ORDER:
        status = "✅" if country["status"] == "DONE" else "🔲"
        print(f"\n{status} Priority {country['priority']}: {country['country']} ({country['iso3']})")
        print(f"   Crops: {', '.join(country['crops'])}")
        print(f"   Level: {country['admin_level']}")
        print(f"   Source: {country['yield_source']}")
        print(f"   Notes: {country['notes']}")
