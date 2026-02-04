# Global Crop Stress Detection Pipeline

This pipeline downloads sub-national crop yield data and satellite imagery to train models for early crop stress detection.

## Data Sources

### Brazil (IBGE PAM)
- **Source**: Instituto Brasileiro de Geografia e Estatística (IBGE)
- **API**: SIDRA API - https://apisidra.ibge.gov.br/
- **Level**: Municipality (admin_2)
- **Coverage**: 11 major soy/corn states, 2015-2024
- **Crops**: Soy, Corn, Wheat, Rice, Cotton, Sugarcane, Coffee

### India (APY) - ⚠️ PROTOTYPE ONLY
- **Source**: Manual entry based on published agricultural statistics
- **Level**: State (admin_1)
- **Status**: Sample/synthetic data for pipeline testing
- **NOT for production use** - needs real API integration

### Satellite Data (Sentinel-2)
- **Source**: Microsoft Planetary Computer
- **Collection**: sentinel-2-l2a
- **Bands**: B02 (Blue), B03 (Green), B04 (Red), B08 (NIR), B11 (SWIR)
- **Indices**: NDVI, EVI, NDWI

## Pipeline Scripts

### 1. `schema.py`
Data contract definitions for consistent cross-country format.

### 2. `brazil_ibge_pipeline.py`
Downloads Brazil municipality-level yields from IBGE SIDRA API.

```bash
# Test mode: Mato Grosso only, 2022-2023
python brazil_ibge_pipeline.py --test

# Full download: 4 states, soy + corn
python brazil_ibge_pipeline.py --states MT PR RS GO --crops soy corn --years 2018 2019 2020 2021 2022 2023
```

**Output**: `data/brazil/brazil_subnational_yields.jsonl`

### 3. `india_apy_pipeline.py`
Processes India state-level agricultural statistics.

```bash
# Create sample data for testing
python india_apy_pipeline.py --sample
```

**Output**: `data/india/india_subnational_yields.jsonl`

### 4. `combine_global_data.py`
Merges country datasets and creates training labels.

```bash
python combine_global_data.py
```

**Output**: 
- `data/global/global_subnational_yields.jsonl`
- `data/global/training_labels.json`

### 5. `download_satellite.py`
Downloads Sentinel-2 monthly statistics for labeled regions.

```bash
# Quick test: 5 regions, 2 years
python download_satellite.py --test

# Production: all regions
python download_satellite.py --years 2018 2019 2020 2021 2022 2023
```

**Output**: `data/global/satellite_monthly_stats.jsonl`

### 6. `train_global_model.py`
Trains XGBoost classifier on satellite features.

```bash
python train_global_model.py
```

**Output**: `models/global_stress_model.json`, `models/global_stress_model.ubj`

## Current Statistics

### ✅ Real + Reproducible
| Source | Records | Stress Events | Notes |
|--------|---------|---------------|-------|
| Brazil IBGE | 272 | 34 (12.5%) | Real API, municipality-level |

### ⚠️ Prototype Only (NOT for claims)
| Source | Records | Stress Events | Notes |
|--------|---------|---------------|-------|
| India Sample | 54 | 8 | Synthetic, for pipeline testing only |

### Satellite Data
- 52 monthly observations (test run)
- Features: NDVI (mean, std, min, max, p10, p50, p90), EVI, NDWI
- Growing season months by region/crop

## Key Improvements Over Initial Approach

1. **Sub-national yields** instead of FAO national averages
   - Brazil: Municipality-level (admin_2) from IBGE PAM
   - India: State-level (admin_1) from APY statistics

2. **Proper coordinate transformation** for UTM satellite tiles

3. **Validated stress labels** from historical anomalies
   - 2022 India wheat heatwave detected ✓
   - Brazil regional droughts detected ✓

4. **Consistent data schema** across countries

## TODO

- [ ] Download more satellite data for stress regions
- [ ] Integrate WorldCereal crop masks for better pixel sampling
- [ ] Add USA NASS county-level data
- [ ] Update AgriSentinel UI to show real model predictions

## Running the Full Pipeline

```bash
# 1. Download Brazil yields
python brazil_ibge_pipeline.py --states MT PR RS GO --crops soy corn

# 2. Create India sample data
python india_apy_pipeline.py --sample

# 3. Combine into global dataset
python combine_global_data.py

# 4. Download satellite data (takes time!)
python download_satellite.py --years 2018 2019 2020 2021 2022 2023

# 5. Train model
python train_global_model.py
```
