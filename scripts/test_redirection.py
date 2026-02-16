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
    
    # --- LOGIC V8 (Priority Scan First) ---
    found_cities_raw = []
    found_cities = []
    words = f" {msg_norm} "

    # 1. Broad scan
    for city_name in MASTER_DATA["cities"].keys():
        norm_city = normalize(city_name)
        if f" {norm_city} " in words or f" {msg_norm} " in f" {norm_city} " or any(f" {word} " == f" {msg_norm} " for word in norm_city.split()):
            found_cities_raw.append(city_name)
    
    # 2. PRIORITY SCAN (Moved here from bottom)
    if "cartagena" in msg_norm: found_cities_raw.append("cartagena de indias")
    if "bogota" in msg_norm: found_cities_raw.append("bogotá")

    # 3. Context Scan
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

    # Final Decision
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

    if found_cities:
        target_city = found_cities[0]
        city_data = MASTER_DATA["cities"][target_city]
        depts_list = city_data["departments"]
        
        if len(depts_list) == 1:
            dept = depts_list[0]
            truth = city_data["ground_truth"].get(dept, {})
            city_id = truth.get("id")
            return f"REDIRECT: /cities/{city_id} ({target_city})"
        else:
            matched_dept = None
            for d in depts_list:
                if normalize(d) in msg_norm:
                    matched_dept = d
                    break
            
            if matched_dept:
                truth = city_data["ground_truth"].get(matched_dept, {})
                city_id = truth.get("id")
                return f"REDIRECT: /cities/{city_id} ({target_city})"
            else:
                return f"AMBIGUOUS: {target_city}"
    return "NOT_FOUND"

print("--- REDIRECTION AUDIT (HIJACKING FIX) ---")

# Case: History contains "Visit Colombia", User says "Cartagena"
# Expected: Cartagena (ID 210), NOT Colombia (ID 665)
hist_hijack = [["Hi", "Welcome to Visit Colombia AI Assistant!"]]
query = "what to visit in cartagena"
res = test_city_redirection(query, hist_hijack)
expected_id = "210"

print(f"Query with 'Colombia' in history: {res}")

if expected_id in res:
    print("\n✅ HIJACKING FIXED! Cartagena takes priority.")
else:
    print("\n❌ HIJACKING STILL PRESENT.")
    print(f"Expected ID {expected_id} (Cartagena). Got: {res}")
    sys.exit(1)
