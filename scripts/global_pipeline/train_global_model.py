#!/usr/bin/env python3
"""
Train Global Crop Stress Model

Trains XGBoost classifier on satellite time series to predict yield stress.

Features:
- Monthly NDVI/EVI/NDWI statistics
- Growing season aggregations
- Leave-one-region-out cross-validation
- Balanced class weights for imbalanced data

Usage:
    python train_global_model.py
    python train_global_model.py --output models/global_stress_model.json
"""

import os
import sys
import json
import warnings
from pathlib import Path
from typing import List, Dict, Tuple, Optional
from collections import defaultdict

import numpy as np

warnings.filterwarnings('ignore')

try:
    from xgboost import XGBClassifier
    from sklearn.metrics import (
        accuracy_score, precision_score, recall_score, f1_score,
        roc_auc_score, confusion_matrix
    )
    HAS_SKLEARN = True
except ImportError:
    print("Missing sklearn/xgboost. Install: pip install scikit-learn xgboost")
    HAS_SKLEARN = False


def load_satellite_stats(path: Path) -> List[dict]:
    """Load satellite monthly stats."""
    records = []
    with open(path) as f:
        for line in f:
            if line.strip():
                records.append(json.loads(line))
    return records


def load_yield_labels(path: Path) -> Dict:
    """Load yield labels."""
    with open(path) as f:
        return json.load(f)


def extract_region_year_features(sat_records: List[dict]) -> Optional[np.ndarray]:
    """Extract features from monthly satellite data for one region-year."""
    
    sat_records = sorted(sat_records, key=lambda x: x["month"])
    
    ndvi_values = [r["ndvi_mean"] for r in sat_records]
    evi_values = [r["evi_mean"] for r in sat_records]
    ndwi_values = [r["ndwi_mean"] for r in sat_records]
    
    if len(ndvi_values) < 3:
        return None
    
    ndvi_arr = np.array(ndvi_values)
    ndvi_mean = np.mean(ndvi_arr)
    ndvi_std = np.std(ndvi_arr)
    ndvi_min = np.min(ndvi_arr)
    ndvi_max = np.max(ndvi_arr)
    ndvi_range = ndvi_max - ndvi_min
    
    # NDVI trend
    if len(ndvi_arr) >= 3:
        x = np.arange(len(ndvi_arr))
        coeffs = np.polyfit(x, ndvi_arr, 1)
        ndvi_trend = coeffs[0]
    else:
        ndvi_trend = 0
    
    # Early/mid/late season
    n = len(ndvi_arr)
    third = n // 3
    ndvi_early = np.mean(ndvi_arr[:max(1, third)])
    ndvi_mid = np.mean(ndvi_arr[third:2*third] if third > 0 else ndvi_arr)
    ndvi_late = np.mean(ndvi_arr[2*third:] if third > 0 else ndvi_arr)
    
    evi_arr = np.array(evi_values)
    evi_mean = np.mean(evi_arr)
    evi_std = np.std(evi_arr)
    
    ndwi_arr = np.array(ndwi_values)
    ndwi_mean = np.mean(ndwi_arr)
    ndwi_std = np.std(ndwi_arr)
    
    n_obs = len(sat_records)
    
    return np.array([
        ndvi_mean, ndvi_std, ndvi_min, ndvi_max, ndvi_range,
        ndvi_trend, ndvi_early, ndvi_mid, ndvi_late,
        evi_mean, evi_std,
        ndwi_mean, ndwi_std,
        n_obs
    ])


def create_features(
    satellite_data: List[dict],
    labels: Dict
) -> Tuple[np.ndarray, np.ndarray, List[str], List[dict]]:
    """Create feature matrix from satellite data and labels."""
    
    sat_by_region_year = defaultdict(list)
    for s in satellite_data:
        key = (s["admin_code"], s["year"], s["crop"])
        sat_by_region_year[key].append(s)
    
    X_list = []
    y_list = []
    metadata = []
    
    for label_key, label_info in labels.items():
        admin_code = label_key.split(":")[0]
        crop = label_info["crop"]
        country = label_info["country"]
        
        for year_str, year_data in label_info["years"].items():
            year = int(year_str)
            stress = year_data.get("stress")
            
            if stress is None:
                continue
            
            sat_key = (admin_code, year, crop)
            sat_records = sat_by_region_year.get(sat_key, [])
            
            if len(sat_records) < 3:
                continue
            
            features = extract_region_year_features(sat_records)
            
            if features is None:
                continue
            
            X_list.append(features)
            y_list.append(stress)
            metadata.append({
                "admin_code": admin_code,
                "year": year,
                "crop": crop,
                "country": country,
                "yield": year_data.get("yield")
            })
    
    if not X_list:
        return None, None, None, None
    
    feature_names = [
        "ndvi_mean", "ndvi_std", "ndvi_min", "ndvi_max", "ndvi_range",
        "ndvi_trend", "ndvi_early", "ndvi_mid", "ndvi_late",
        "evi_mean", "evi_std",
        "ndwi_mean", "ndwi_std",
        "n_observations"
    ]
    
    return np.array(X_list), np.array(y_list), feature_names, metadata


def train_model(
    X: np.ndarray,
    y: np.ndarray,
    feature_names: List[str],
    metadata: List[dict]
) -> Tuple:
    """Train XGBoost with leave-one-region-out CV."""
    
    print(f"\nTraining on {len(X)} samples ({sum(y)} stress, {len(y)-sum(y)} normal)")
    
    regions = list(set(m["admin_code"] for m in metadata))
    print(f"Regions for LORO CV: {len(regions)}")
    
    all_preds = np.zeros(len(y))
    all_probs = np.zeros(len(y))
    
    for region in regions:
        train_mask = np.array([m["admin_code"] != region for m in metadata])
        test_mask = ~train_mask
        
        if sum(test_mask) == 0 or sum(train_mask) == 0:
            continue
        
        X_train, X_test = X[train_mask], X[test_mask]
        y_train = y[train_mask]
        
        scale_pos_weight = (sum(y_train == 0) / max(1, sum(y_train == 1)))
        
        model = XGBClassifier(
            n_estimators=100,
            max_depth=3,
            learning_rate=0.1,
            scale_pos_weight=scale_pos_weight,
            random_state=42,
            verbosity=0
        )
        model.fit(X_train, y_train)
        
        all_preds[test_mask] = model.predict(X_test)
        all_probs[test_mask] = model.predict_proba(X_test)[:, 1]
    
    metrics = {
        "accuracy": float(accuracy_score(y, all_preds)),
        "precision": float(precision_score(y, all_preds, zero_division=0)),
        "recall": float(recall_score(y, all_preds, zero_division=0)),
        "f1": float(f1_score(y, all_preds, zero_division=0)),
    }
    
    if len(set(y)) > 1:
        try:
            metrics["auroc"] = float(roc_auc_score(y, all_probs))
        except:
            pass
    
    print("\n" + "="*60)
    print("LORO Cross-Validation Results")
    print("="*60)
    for k, v in metrics.items():
        print(f"  {k}: {v:.3f}")
    
    cm = confusion_matrix(y, all_preds)
    print(f"\nConfusion Matrix: TN={cm[0,0]}, FP={cm[0,1]}, FN={cm[1,0]}, TP={cm[1,1]}")
    
    # Final model
    scale_pos_weight = (sum(y == 0) / max(1, sum(y == 1)))
    final_model = XGBClassifier(
        n_estimators=100, max_depth=3, learning_rate=0.1,
        scale_pos_weight=scale_pos_weight, random_state=42, verbosity=0
    )
    final_model.fit(X, y)
    
    print("\nFeature Importance:")
    for name, imp in sorted(zip(feature_names, final_model.feature_importances_), key=lambda x: -x[1])[:5]:
        print(f"  {name}: {imp:.3f}")
    
    return final_model, metrics


def diagnose_data_gap(satellite_data: List[dict], labels: Dict):
    """Diagnose why we don't have enough training data."""
    
    # Get satellite coverage
    sat_coverage = set()
    for s in satellite_data:
        sat_coverage.add((s["admin_code"], s["year"]))
    
    # Get labeled stress events
    missing_stress = []
    covered_stress = []
    
    for label_key, label_info in labels.items():
        admin_code = label_key.split(":")[0]
        
        for year_str, year_data in label_info["years"].items():
            year = int(year_str)
            stress = year_data.get("stress")
            
            if stress == 1:
                if (admin_code, year) in sat_coverage:
                    covered_stress.append((admin_code, year, label_info["country"]))
                else:
                    missing_stress.append((admin_code, year, label_info["country"], label_info["centroid"]))
    
    print("\n" + "="*60)
    print("DATA GAP DIAGNOSIS")
    print("="*60)
    print(f"Satellite coverage: {len(sat_coverage)} region-years")
    print(f"Labeled stress events: {len(covered_stress) + len(missing_stress)}")
    print(f"  - Covered by satellite: {len(covered_stress)}")
    print(f"  - MISSING satellite data: {len(missing_stress)}")
    
    if missing_stress:
        print(f"\nMissing stress region-years (need satellite download):")
        for admin, year, country, centroid in missing_stress[:20]:
            print(f"  {admin} ({country}) {year} @ {centroid}")
        
        if len(missing_stress) > 20:
            print(f"  ... and {len(missing_stress) - 20} more")
        
        print(f"\n>>> ACTION: Run satellite downloader with --only-stress flag:")
        print(f"    python download_satellite_v2.py --only-stress --only-brazil")


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--satellite", default=os.path.expanduser("~/data/agrisentinel/data/global/satellite_monthly_stats.jsonl"))
    parser.add_argument("--labels", default=os.path.expanduser("~/data/agrisentinel/data/global/training_labels.json"))
    parser.add_argument("--output", default=os.path.expanduser("~/data/agrisentinel/models/global_stress_model.json"))
    parser.add_argument("--min-stress", type=int, default=10, help="Minimum stress samples required")
    args = parser.parse_args()
    
    if not HAS_SKLEARN:
        return
    
    print("Loading data...")
    satellite_data = load_satellite_stats(Path(args.satellite))
    labels = load_yield_labels(Path(args.labels))
    print(f"  Satellite: {len(satellite_data)}, Labels: {len(labels)}")
    
    print("\nCreating features...")
    X, y, feature_names, metadata = create_features(satellite_data, labels)
    
    if X is None:
        print("\n❌ No valid training samples!")
        diagnose_data_gap(satellite_data, labels)
        return 1
    
    n_stress = int(sum(y))
    n_normal = len(y) - n_stress
    print(f"  Samples: {len(X)}")
    print(f"  Stress: {n_stress} ({100*n_stress/len(y):.1f}%)")
    print(f"  Normal: {n_normal} ({100*n_normal/len(y):.1f}%)")
    
    # Check minimum stress samples
    if n_stress < args.min_stress:
        print(f"\n❌ Insufficient stress samples: {n_stress} < {args.min_stress}")
        diagnose_data_gap(satellite_data, labels)
        return 1
    
    model, metrics = train_model(X, y, feature_names, metadata)
    
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w') as f:
        json.dump({"feature_names": feature_names, "metrics": metrics, "n_samples": len(X)}, f, indent=2)
    
    model.save_model(str(output_path.parent / "global_stress_model.ubj"))
    print(f"\nSaved to {output_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
