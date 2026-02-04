#!/usr/bin/env python3
"""
Add detailed district-level regions for major agricultural countries.

India alone has 700+ districts - we should have at least 100+ key agricultural districts.
Same for USA counties, Brazil municipalities, etc.
"""

import json
from pathlib import Path
from datetime import datetime

OUTPUT_PATH = Path(__file__).parent.parent.parent / "data" / "global" / "global_subnational_yields.jsonl"

# =============================================================================
# INDIA - Major Agricultural Districts by State
# =============================================================================
INDIA_DISTRICTS = [
    # Punjab (Wheat/Rice belt) - 22 districts
    ("IND", "Punjab_Ludhiana", "wheat", 30.9, 75.85),
    ("IND", "Punjab_Amritsar", "wheat", 31.63, 74.87),
    ("IND", "Punjab_Patiala", "wheat", 30.34, 76.38),
    ("IND", "Punjab_Jalandhar", "wheat", 31.33, 75.58),
    ("IND", "Punjab_Bathinda", "wheat", 30.21, 74.95),
    ("IND", "Punjab_Sangrur", "wheat", 30.23, 75.84),
    ("IND", "Punjab_Moga", "wheat", 30.82, 75.17),
    ("IND", "Punjab_Ferozepur", "wheat", 30.93, 74.61),
    ("IND", "Punjab_Gurdaspur", "wheat", 32.04, 75.4),
    ("IND", "Punjab_Hoshiarpur", "wheat", 31.53, 75.91),
    ("IND", "Punjab_Ludhiana_Rice", "rice", 30.9, 75.85),
    ("IND", "Punjab_Amritsar_Rice", "rice", 31.63, 74.87),
    ("IND", "Punjab_Patiala_Rice", "rice", 30.34, 76.38),
    ("IND", "Punjab_Sangrur_Rice", "rice", 30.23, 75.84),
    
    # Haryana (Wheat/Rice) - 15 districts
    ("IND", "Haryana_Karnal", "wheat", 29.69, 76.98),
    ("IND", "Haryana_Kurukshetra", "wheat", 29.97, 76.83),
    ("IND", "Haryana_Ambala", "wheat", 30.38, 76.78),
    ("IND", "Haryana_Hisar", "wheat", 29.15, 75.72),
    ("IND", "Haryana_Sirsa", "wheat", 29.53, 75.03),
    ("IND", "Haryana_Fatehabad", "wheat", 29.52, 75.45),
    ("IND", "Haryana_Jind", "wheat", 29.32, 76.32),
    ("IND", "Haryana_Kaithal", "wheat", 29.8, 76.4),
    ("IND", "Haryana_Panipat", "wheat", 29.39, 76.97),
    ("IND", "Haryana_Sonipat", "wheat", 28.99, 77.02),
    ("IND", "Haryana_Karnal_Rice", "rice", 29.69, 76.98),
    ("IND", "Haryana_Kurukshetra_Rice", "rice", 29.97, 76.83),
    
    # Uttar Pradesh (Wheat/Rice/Sugarcane) - 25 districts
    ("IND", "UP_Meerut", "wheat", 28.98, 77.7),
    ("IND", "UP_Muzaffarnagar", "wheat", 29.47, 77.7),
    ("IND", "UP_Saharanpur", "wheat", 29.97, 77.55),
    ("IND", "UP_Agra", "wheat", 27.18, 78.02),
    ("IND", "UP_Mathura", "wheat", 27.49, 77.68),
    ("IND", "UP_Aligarh", "wheat", 27.88, 78.08),
    ("IND", "UP_Bulandshahr", "wheat", 28.41, 77.85),
    ("IND", "UP_Moradabad", "wheat", 28.83, 78.78),
    ("IND", "UP_Bareilly", "wheat", 28.36, 79.42),
    ("IND", "UP_Lucknow", "wheat", 26.85, 80.95),
    ("IND", "UP_Kanpur", "wheat", 26.45, 80.35),
    ("IND", "UP_Allahabad", "wheat", 25.43, 81.85),
    ("IND", "UP_Varanasi", "wheat", 25.32, 83.0),
    ("IND", "UP_Gorakhpur", "rice", 26.76, 83.37),
    ("IND", "UP_Deoria", "rice", 26.5, 83.78),
    ("IND", "UP_Basti", "rice", 26.8, 82.73),
    ("IND", "UP_Azamgarh", "rice", 26.07, 83.18),
    
    # Madhya Pradesh (Soy/Wheat) - 20 districts
    ("IND", "MP_Indore", "soy", 22.72, 75.86),
    ("IND", "MP_Ujjain", "soy", 23.18, 75.78),
    ("IND", "MP_Dewas", "soy", 22.97, 76.05),
    ("IND", "MP_Ratlam", "soy", 23.33, 75.04),
    ("IND", "MP_Mandsaur", "soy", 24.07, 75.07),
    ("IND", "MP_Neemuch", "soy", 24.47, 74.87),
    ("IND", "MP_Shajapur", "soy", 23.43, 76.27),
    ("IND", "MP_Sehore", "soy", 23.2, 77.08),
    ("IND", "MP_Hoshangabad", "soy", 22.75, 77.72),
    ("IND", "MP_Bhopal", "wheat", 23.26, 77.41),
    ("IND", "MP_Gwalior", "wheat", 26.22, 78.18),
    ("IND", "MP_Vidisha", "wheat", 23.52, 77.82),
    ("IND", "MP_Sagar", "wheat", 23.84, 78.74),
    
    # Maharashtra (Soy/Cotton) - 18 districts
    ("IND", "MH_Nagpur", "soy", 21.15, 79.08),
    ("IND", "MH_Amravati", "soy", 20.93, 77.75),
    ("IND", "MH_Akola", "soy", 20.7, 77.0),
    ("IND", "MH_Washim", "soy", 20.11, 77.13),
    ("IND", "MH_Yavatmal", "soy", 20.39, 78.12),
    ("IND", "MH_Wardha", "soy", 20.75, 78.6),
    ("IND", "MH_Buldhana", "soy", 20.53, 76.18),
    ("IND", "MH_Latur", "soy", 18.4, 76.57),
    ("IND", "MH_Osmanabad", "soy", 18.18, 76.04),
    ("IND", "MH_Nanded", "soy", 19.15, 77.3),
    ("IND", "MH_Parbhani", "soy", 19.27, 76.78),
    ("IND", "MH_Jalna", "soy", 19.84, 75.88),
    ("IND", "MH_Aurangabad", "soy", 19.88, 75.34),
    
    # Rajasthan (Wheat/Mustard) - 15 districts
    ("IND", "RJ_Jaipur", "wheat", 26.92, 75.79),
    ("IND", "RJ_Alwar", "wheat", 27.56, 76.61),
    ("IND", "RJ_Bharatpur", "wheat", 27.22, 77.49),
    ("IND", "RJ_Sikar", "wheat", 27.62, 75.14),
    ("IND", "RJ_Jhunjhunu", "wheat", 28.13, 75.4),
    ("IND", "RJ_Churu", "wheat", 28.3, 74.97),
    ("IND", "RJ_Ganganagar", "wheat", 29.92, 73.88),
    ("IND", "RJ_Hanumangarh", "wheat", 29.58, 74.33),
    ("IND", "RJ_Kota", "soy", 25.18, 75.83),
    ("IND", "RJ_Bundi", "soy", 25.44, 75.64),
    ("IND", "RJ_Jhalawar", "soy", 24.6, 76.16),
    ("IND", "RJ_Baran", "soy", 25.1, 76.52),
    
    # Bihar (Rice/Wheat) - 12 districts
    ("IND", "BR_Patna", "rice", 25.61, 85.14),
    ("IND", "BR_Muzaffarpur", "rice", 26.12, 85.39),
    ("IND", "BR_Vaishali", "rice", 25.99, 85.22),
    ("IND", "BR_Saran", "rice", 25.91, 84.75),
    ("IND", "BR_Siwan", "rice", 26.22, 84.36),
    ("IND", "BR_Gopalganj", "rice", 26.47, 84.44),
    ("IND", "BR_Begusarai", "wheat", 25.42, 86.13),
    ("IND", "BR_Samastipur", "wheat", 25.86, 85.78),
    ("IND", "BR_Darbhanga", "wheat", 26.17, 85.9),
    
    # West Bengal (Rice) - 10 districts
    ("IND", "WB_Bardhaman", "rice", 23.23, 87.87),
    ("IND", "WB_Hooghly", "rice", 22.91, 88.24),
    ("IND", "WB_Nadia", "rice", 23.47, 88.55),
    ("IND", "WB_Murshidabad", "rice", 24.18, 88.27),
    ("IND", "WB_Birbhum", "rice", 23.85, 87.62),
    ("IND", "WB_Bankura", "rice", 23.23, 87.07),
    ("IND", "WB_MidnaproreW", "rice", 22.42, 87.33),
    ("IND", "WB_MidnaporeE", "rice", 22.28, 87.92),
    
    # Andhra Pradesh / Telangana (Rice) - 10 districts
    ("IND", "AP_Krishna", "rice", 16.17, 81.13),
    ("IND", "AP_Guntur", "rice", 16.3, 80.45),
    ("IND", "AP_WestGodavari", "rice", 16.92, 81.33),
    ("IND", "AP_EastGodavari", "rice", 17.0, 82.0),
    ("IND", "TS_Karimnagar", "rice", 18.44, 79.13),
    ("IND", "TS_Nizamabad", "rice", 18.67, 78.1),
    ("IND", "TS_Warangal", "rice", 17.98, 79.59),
    ("IND", "TS_Nalgonda", "rice", 17.05, 79.27),
    
    # Tamil Nadu (Rice) - 8 districts
    ("IND", "TN_Thanjavur", "rice", 10.79, 79.14),
    ("IND", "TN_Tiruvarur", "rice", 10.77, 79.64),
    ("IND", "TN_Nagapattinam", "rice", 10.77, 79.84),
    ("IND", "TN_Tiruchirappalli", "rice", 10.79, 78.69),
    ("IND", "TN_Cuddalore", "rice", 11.75, 79.77),
    ("IND", "TN_Villupuram", "rice", 11.94, 79.49),
    
    # Gujarat (Cotton/Groundnut) - 10 districts
    ("IND", "GJ_Ahmedabad", "cotton", 23.03, 72.58),
    ("IND", "GJ_Mehsana", "cotton", 23.59, 72.38),
    ("IND", "GJ_Banaskantha", "cotton", 24.18, 72.43),
    ("IND", "GJ_Sabarkantha", "cotton", 23.63, 73.0),
    ("IND", "GJ_Kheda", "cotton", 22.75, 72.68),
    ("IND", "GJ_Anand", "cotton", 22.56, 72.95),
    ("IND", "GJ_Vadodara", "cotton", 22.31, 73.18),
    ("IND", "GJ_Bharuch", "cotton", 21.7, 72.99),
    ("IND", "GJ_Rajkot", "cotton", 22.3, 70.8),
    ("IND", "GJ_Junagadh", "groundnut", 21.52, 70.46),
    
    # Karnataka (Rice/Sugarcane) - 8 districts
    ("IND", "KA_Belgaum", "sugarcane", 15.85, 74.5),
    ("IND", "KA_Bagalkot", "sugarcane", 16.18, 75.7),
    ("IND", "KA_Shimoga", "rice", 13.93, 75.57),
    ("IND", "KA_Mandya", "rice", 12.52, 76.9),
    ("IND", "KA_Mysore", "rice", 12.3, 76.64),
    ("IND", "KA_Hassan", "rice", 13.0, 76.1),
    ("IND", "KA_Davangere", "rice", 14.47, 75.92),
    ("IND", "KA_Bellary", "rice", 15.14, 76.92),
]

# =============================================================================
# USA - More County-level detail
# =============================================================================
USA_COUNTIES = [
    # Iowa - More counties
    ("USA", "IA_Story", "corn", 42.04, -93.46),
    ("USA", "IA_Polk", "corn", 41.69, -93.57),
    ("USA", "IA_Hamilton", "corn", 42.38, -93.71),
    ("USA", "IA_Webster", "corn", 42.43, -94.18),
    ("USA", "IA_Kossuth", "corn", 43.2, -94.21),
    ("USA", "IA_Palo_Alto", "corn", 43.08, -94.68),
    ("USA", "IA_Emmet", "corn", 43.38, -94.68),
    ("USA", "IA_OBrien", "corn", 43.08, -95.51),
    ("USA", "IA_Plymouth", "corn", 42.74, -96.21),
    ("USA", "IA_Sioux", "corn", 43.08, -96.18),
    ("USA", "IA_Lyon", "corn", 43.38, -96.21),
    ("USA", "IA_Cherokee", "soy", 42.74, -95.51),
    ("USA", "IA_Buena_Vista", "soy", 42.74, -95.01),
    ("USA", "IA_Pocahontas", "soy", 42.74, -94.51),
    
    # Illinois - More counties
    ("USA", "IL_McLean", "corn", 40.49, -88.85),
    ("USA", "IL_Champaign", "corn", 40.14, -88.2),
    ("USA", "IL_Vermilion", "corn", 40.18, -87.73),
    ("USA", "IL_Iroquois", "corn", 40.75, -87.82),
    ("USA", "IL_Ford", "corn", 40.6, -88.22),
    ("USA", "IL_Livingston", "corn", 40.89, -88.56),
    ("USA", "IL_LaSalle", "corn", 41.34, -89.09),
    ("USA", "IL_DeKalb", "corn", 41.89, -88.77),
    ("USA", "IL_Lee", "corn", 41.75, -89.3),
    ("USA", "IL_Whiteside", "corn", 41.75, -89.91),
    ("USA", "IL_Bureau", "soy", 41.4, -89.53),
    ("USA", "IL_Henry", "soy", 41.35, -90.13),
    
    # Nebraska - More counties
    ("USA", "NE_Lancaster", "corn", 40.78, -96.68),
    ("USA", "NE_Saunders", "corn", 41.23, -96.63),
    ("USA", "NE_Dodge", "corn", 41.58, -96.65),
    ("USA", "NE_Cuming", "corn", 41.92, -96.79),
    ("USA", "NE_Platte", "corn", 41.43, -97.52),
    ("USA", "NE_Colfax", "corn", 41.58, -97.08),
    ("USA", "NE_Butler", "corn", 41.23, -97.13),
    ("USA", "NE_York", "corn", 40.88, -97.6),
    ("USA", "NE_Seward", "corn", 40.88, -97.1),
    ("USA", "NE_Hamilton", "soy", 40.88, -98.03),
    ("USA", "NE_Clay", "soy", 40.52, -98.05),
    ("USA", "NE_Fillmore", "soy", 40.52, -97.6),
    
    # Minnesota - More counties
    ("USA", "MN_Blue_Earth", "corn", 44.03, -94.07),
    ("USA", "MN_Martin", "corn", 43.68, -94.55),
    ("USA", "MN_Faribault", "corn", 43.68, -93.95),
    ("USA", "MN_Freeborn", "corn", 43.68, -93.35),
    ("USA", "MN_Mower", "corn", 43.68, -92.75),
    ("USA", "MN_Waseca", "corn", 44.03, -93.55),
    ("USA", "MN_Steele", "corn", 44.03, -93.05),
    ("USA", "MN_Dodge", "corn", 44.03, -92.85),
    ("USA", "MN_Cottonwood", "soy", 44.0, -95.18),
    ("USA", "MN_Jackson", "soy", 43.68, -95.18),
    ("USA", "MN_Nobles", "soy", 43.68, -95.75),
    ("USA", "MN_Rock", "soy", 43.68, -96.25),
    
    # Indiana - Counties
    ("USA", "IN_Tippecanoe", "corn", 40.38, -86.89),
    ("USA", "IN_White", "corn", 40.75, -86.87),
    ("USA", "IN_Cass", "corn", 40.75, -86.35),
    ("USA", "IN_Carroll", "corn", 40.6, -86.56),
    ("USA", "IN_Clinton", "corn", 40.3, -86.47),
    ("USA", "IN_Boone", "corn", 40.05, -86.47),
    ("USA", "IN_Hamilton", "soy", 40.05, -86.0),
    ("USA", "IN_Madison", "soy", 40.15, -85.72),
    ("USA", "IN_Delaware", "soy", 40.22, -85.4),
    ("USA", "IN_Randolph", "soy", 40.15, -85.02),
    
    # Kansas - Wheat counties
    ("USA", "KS_Sumner", "wheat", 37.23, -97.48),
    ("USA", "KS_Sedgwick", "wheat", 37.68, -97.46),
    ("USA", "KS_Reno", "wheat", 37.95, -98.08),
    ("USA", "KS_McPherson", "wheat", 38.38, -97.65),
    ("USA", "KS_Rice", "wheat", 38.35, -98.2),
    ("USA", "KS_Barton", "wheat", 38.48, -98.75),
    ("USA", "KS_Stafford", "wheat", 37.95, -98.68),
    ("USA", "KS_Pratt", "wheat", 37.65, -98.73),
    ("USA", "KS_Kiowa", "wheat", 37.45, -99.28),
    ("USA", "KS_Edwards", "wheat", 37.88, -99.32),
    ("USA", "KS_Ford", "wheat", 37.68, -99.88),
    ("USA", "KS_Finney", "wheat", 38.0, -100.75),
]

# =============================================================================
# ARGENTINA - More Pampas detail
# =============================================================================
ARGENTINA_REGIONS = [
    # Buenos Aires Province
    ("ARG", "BA_Pergamino", "soy", -33.9, -60.57),
    ("ARG", "BA_Junin", "soy", -34.59, -60.95),
    ("ARG", "BA_ChivilcoyN", "soy", -34.9, -60.02),
    ("ARG", "BA_9deJulio", "soy", -35.45, -60.88),
    ("ARG", "BA_Trenque_Lauquen", "soy", -35.97, -62.73),
    ("ARG", "BA_Pehuajo", "soy", -35.81, -61.9),
    ("ARG", "BA_Carlos_Casares", "soy", -35.62, -61.37),
    ("ARG", "BA_General_Villegas", "soy", -35.03, -63.02),
    ("ARG", "BA_Lincoln", "corn", -34.87, -61.53),
    ("ARG", "BA_Bragado", "corn", -35.12, -60.49),
    ("ARG", "BA_25deMayo", "corn", -35.43, -60.17),
    ("ARG", "BA_Bolivar", "corn", -36.23, -61.1),
    
    # Cordoba Province
    ("ARG", "CB_Marcos_Juarez", "soy", -32.7, -62.1),
    ("ARG", "CB_Union", "soy", -32.93, -62.9),
    ("ARG", "CB_General_Roca", "soy", -34.73, -63.38),
    ("ARG", "CB_Juarez_Celman", "soy", -33.1, -63.5),
    ("ARG", "CB_Rio_Cuarto", "soy", -33.13, -64.35),
    ("ARG", "CB_San_Martin", "corn", -31.58, -62.08),
    ("ARG", "CB_San_Justo", "corn", -31.35, -62.53),
    
    # Santa Fe Province
    ("ARG", "SF_Caseros", "soy", -33.05, -61.17),
    ("ARG", "SF_Constitucion", "soy", -33.23, -60.33),
    ("ARG", "SF_Rosario", "soy", -33.0, -60.65),
    ("ARG", "SF_General_Lopez", "soy", -33.68, -61.42),
    ("ARG", "SF_Belgrano", "corn", -32.58, -61.52),
    ("ARG", "SF_Iriondo", "corn", -32.73, -61.18),
    
    # Entre Rios Province
    ("ARG", "ER_Parana", "soy", -31.73, -60.52),
    ("ARG", "ER_Diamante", "soy", -32.07, -60.65),
    ("ARG", "ER_Victoria", "soy", -32.62, -60.17),
    ("ARG", "ER_Gualeguaychu", "soy", -33.0, -58.52),
]

# =============================================================================
# CHINA - More Agricultural Regions
# =============================================================================
CHINA_REGIONS = [
    # Heilongjiang (Soy/Corn belt)
    ("CHN", "HLJ_Harbin", "soy", 45.75, 126.65),
    ("CHN", "HLJ_Qiqihar", "soy", 47.35, 123.97),
    ("CHN", "HLJ_Jiamusi", "soy", 46.8, 130.35),
    ("CHN", "HLJ_Mudanjiang", "corn", 44.58, 129.6),
    ("CHN", "HLJ_Daqing", "corn", 46.58, 125.0),
    ("CHN", "HLJ_Suihua", "corn", 46.63, 126.98),
    ("CHN", "HLJ_Heihe", "soy", 50.25, 127.53),
    
    # Jilin (Corn)
    ("CHN", "JL_Changchun", "corn", 43.88, 125.32),
    ("CHN", "JL_Siping", "corn", 43.17, 124.35),
    ("CHN", "JL_Songyuan", "corn", 45.18, 124.82),
    ("CHN", "JL_Baicheng", "corn", 45.62, 122.83),
    ("CHN", "JL_Liaoyuan", "corn", 42.9, 125.15),
    
    # Henan (Wheat)
    ("CHN", "HN_Zhengzhou", "wheat", 34.75, 113.65),
    ("CHN", "HN_Kaifeng", "wheat", 34.8, 114.35),
    ("CHN", "HN_Luoyang", "wheat", 34.68, 112.45),
    ("CHN", "HN_Xinxiang", "wheat", 35.3, 113.88),
    ("CHN", "HN_Anyang", "wheat", 36.1, 114.35),
    ("CHN", "HN_Puyang", "wheat", 35.77, 115.03),
    ("CHN", "HN_Shangqiu", "wheat", 34.43, 115.65),
    ("CHN", "HN_Zhoukou", "wheat", 33.63, 114.65),
    
    # Shandong (Wheat/Corn)
    ("CHN", "SD_Jinan", "wheat", 36.67, 116.98),
    ("CHN", "SD_Dezhou", "wheat", 37.43, 116.3),
    ("CHN", "SD_Liaocheng", "wheat", 36.45, 115.98),
    ("CHN", "SD_Heze", "wheat", 35.23, 115.48),
    ("CHN", "SD_Jining", "wheat", 35.42, 116.58),
    ("CHN", "SD_Weifang", "corn", 36.72, 119.1),
    ("CHN", "SD_Zibo", "corn", 36.8, 118.05),
    
    # Hubei/Hunan (Rice)
    ("CHN", "HB_Wuhan", "rice", 30.58, 114.27),
    ("CHN", "HB_Jingzhou", "rice", 30.33, 112.23),
    ("CHN", "HB_Xiangyang", "rice", 32.02, 112.15),
    ("CHN", "HuN_Changsha", "rice", 28.23, 112.93),
    ("CHN", "HuN_Changde", "rice", 29.03, 111.68),
    ("CHN", "HuN_Yueyang", "rice", 29.37, 113.12),
    
    # Jiangsu/Anhui (Rice)
    ("CHN", "JS_Nanjing", "rice", 32.05, 118.78),
    ("CHN", "JS_Yangzhou", "rice", 32.4, 119.43),
    ("CHN", "JS_Nantong", "rice", 32.0, 120.85),
    ("CHN", "AH_Hefei", "rice", 31.82, 117.23),
    ("CHN", "AH_Wuhu", "rice", 31.35, 118.38),
    ("CHN", "AH_Chuzhou", "rice", 32.3, 118.32),
]

def generate_records(regions_list):
    """Generate yield records for multiple years."""
    years = [2018, 2019, 2020, 2021, 2022, 2023]
    records = []
    
    for country, region, crop, lat, lon in regions_list:
        for year in years:
            record = {
                "country_iso3": country,
                "admin_level": "admin_2",
                "admin_code": f"{country}_{region}",
                "admin_name": region.replace("_", " "),
                "crop": crop,
                "year": year,
                "yield_kg_ha": None,
                "area_planted_ha": None,
                "production_tonnes": None,
                "yield_anomaly_pct": None,
                "stress_label": None,
                "centroid_lat": lat,
                "centroid_lon": lon,
                "bbox_west": lon - 0.3,
                "bbox_south": lat - 0.3,
                "bbox_east": lon + 0.3,
                "bbox_north": lat + 0.3,
                "data_source": "expanded_regions_v2",
                "source_url": None,
                "retrieved_date": datetime.now().isoformat()
            }
            records.append(record)
    
    return records


def main():
    # Load existing
    existing_keys = set()
    if OUTPUT_PATH.exists():
        with open(OUTPUT_PATH) as f:
            for line in f:
                if line.strip():
                    rec = json.loads(line)
                    key = (rec.get("admin_code"), rec.get("year"))
                    existing_keys.add(key)
        print(f"Loaded {len(existing_keys)} existing records")
    
    # Combine all new regions
    all_regions = INDIA_DISTRICTS + USA_COUNTIES + ARGENTINA_REGIONS + CHINA_REGIONS
    new_records = generate_records(all_regions)
    
    # Add only new ones
    added = 0
    with open(OUTPUT_PATH, 'a') as f:
        for rec in new_records:
            key = (rec["admin_code"], rec["year"])
            if key not in existing_keys:
                f.write(json.dumps(rec) + "\n")
                existing_keys.add(key)
                added += 1
    
    print(f"\nAdded {added} new region-year records")
    print(f"\nNew regions breakdown:")
    print(f"  India districts: {len(INDIA_DISTRICTS)}")
    print(f"  USA counties: {len(USA_COUNTIES)}")
    print(f"  Argentina regions: {len(ARGENTINA_REGIONS)}")
    print(f"  China regions: {len(CHINA_REGIONS)}")
    print(f"  TOTAL new regions: {len(all_regions)}")


if __name__ == "__main__":
    main()
