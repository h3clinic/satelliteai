#!/bin/bash
# =============================================================================
# GLOBAL SATELLITE DATA PIPELINE
# Downloads Sentinel-2 data, creates yield labels, trains model
# Same strategy as US Corn Belt (AUROC 0.87)
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DATA_DIR="$HOME/data/agrisentinel/data/global_satellite"
MODEL_DIR="$HOME/data/agrisentinel/models/global"

echo "=============================================="
echo "AGRISENTINEL GLOBAL DATA PIPELINE"
echo "=============================================="
echo ""
echo "Script directory: $SCRIPT_DIR"
echo "Data directory: $DATA_DIR"
echo "Model directory: $MODEL_DIR"
echo ""

# Create directories
mkdir -p "$DATA_DIR"
mkdir -p "$MODEL_DIR"

# Check Python dependencies
echo "Checking dependencies..."
python3 -c "import planetary_computer, pystac_client, rasterio, xgboost" 2>/dev/null || {
    echo "Installing dependencies..."
    pip install planetary-computer pystac-client rasterio xgboost scikit-learn pyproj
}

# Step 1: Generate yield labels (fast, uses FAO data)
echo ""
echo "=============================================="
echo "STEP 1: Generating yield labels from FAO data"
echo "=============================================="
python3 "$SCRIPT_DIR/create_global_yield_labels.py" --output "$DATA_DIR/yield_labels.json"

# Step 2: Download satellite data (this takes time)
echo ""
echo "=============================================="
echo "STEP 2: Downloading Sentinel-2 satellite data"
echo "=============================================="
echo "This will download ~40 regions × 6 years × 12 months = ~2800 scenes"
echo "Estimated time: 4-8 hours (with rate limiting)"
echo ""
echo "You can start training with partial data after ~200 downloads"
echo ""

# Option to skip download if data exists
if [ -f "$DATA_DIR/global_monthly_stats.jsonl" ]; then
    LINES=$(wc -l < "$DATA_DIR/global_monthly_stats.jsonl")
    echo "Found existing data: $LINES records"
    if [ "$LINES" -gt 200 ]; then
        echo "Sufficient data for training. Skipping download."
        echo "(Run with --force-download to re-download)"
    fi
else
    python3 "$SCRIPT_DIR/download_global_satellite.py" --output "$DATA_DIR"
fi

# Step 3: Train model
echo ""
echo "=============================================="
echo "STEP 3: Training global crop stress model"
echo "=============================================="
python3 "$SCRIPT_DIR/train_global_model.py" \
    --satellite "$DATA_DIR/global_monthly_stats.jsonl" \
    --labels "$DATA_DIR/yield_labels.json" \
    --output "$MODEL_DIR"

echo ""
echo "=============================================="
echo "PIPELINE COMPLETE"
echo "=============================================="
echo "Data: $DATA_DIR"
echo "Model: $MODEL_DIR"
echo ""
echo "Next: Run update_farm_risks.py to apply model to farms"
