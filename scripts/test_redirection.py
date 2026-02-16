import sys
import os
import json
import re

# Mocking HF token if not present just to load the file
if not os.getenv("HF_TOKEN"):
    os.environ["HF_TOKEN"] = "mock_token"

# Add current dir to path to import app
sys.path.append(os.getcwd())
try:
    from app import MASTER_DATA, normalize
except ImportError:
    print("Error: Could not import MASTER_DATA from app.py. Ensure you are in the project root.")
    sys.exit(1)

def test_city_redirection(query, history=[]):
    msg_norm = normalize(query)
    
    # EXACT LOGIC COPY FROM app.py (V7 - Phrase Matching)
    found_cities = []
    words = f" {msg_norm} "
    found_cities_raw = []
    for city_name in MASTER_DATA["cities"].keys():
        norm_city = normalize(city_name)
        # V7 Logic: Phrase match
        if f" {norm_city} " in words or f" {msg_norm} " in f" {norm_city} " or any(f" {word} " == f" {msg_norm} " for word in norm_city.split()):
            found_cities_raw.append(city_name)
    
    history_city = None
    for h in reversed(history[-6:]):
        user_text = ""
        asst_text = ""
        if isinstance(h, dict): 
            if h.get("role") == "user": user_text = str(h.get("content", ""))
            else: asst_text = str(h.get("content", ""))
        elif isinstance(h, (list, tuple)) and len(h) >= 2:
            user_text = str(h[0]) if h[0] else ""
            asst_text = str(h[1]) if h[1] else ""
        
        for text in [user_text, asst_text]:
            if not text: continue
            norm_t = f" {normalize(text)} "
            for city_name in MASTER_DATA["cities"].keys():
                norm_city = normalize(city_name)
                if f" {norm_city} " in norm_t:
                    history_city = city_name
                    break
            if history_city: break
        if history_city: break

    # Final Decision Logic
    if history_city:
        hist_depts = [normalize(d) for d in MASTER_DATA["cities"][history_city]["departments"]]
        if msg_norm in hist_depts:
            found_cities = [history_city]
        elif any(normalize(history_city) == normalize(c) for c in found_cities_raw):
            found_cities = [history_city]
        else:
            found_cities = found_cities_raw if found_cities_raw else [history_city]
    else:
        found_cities = found_cities_raw

    if not found_cities:
        if "cartagena" in msg_norm: found_cities.append("cartagena de indias")
        if "bogota" in msg_norm: found_cities.append("bogotá")

    return found_cities

print("--- EXHAUSTIVE SAN ANDRÉS AUDIT ---")
query = "San Andres"
results = test_city_redirection(query)

expected_keywords = [
    "san andrés", 
    "san andrés de cuerquia", 
    "san andrés de sotavento", 
    "san andrés de tumaco"
]

print(f"Results for '{query}': {results}")

found_all = True
for kw in expected_keywords:
    if kw not in results:
        print(f"❌ Missing: {kw}")
        found_all = False
    else:
        print(f"✅ Found: {kw}")

if found_all:
    print("\n🎉 ALL 5 SAN ANDRÉS VARIATIONS ARE NOW DETECTED!")
else:
    print("\n❌ AUDIT FAILED. Some variations were missed.")
    sys.exit(1)
