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

def test_city_redirection(query):
    msg_norm = normalize(query)
    found_cities = []
    words = f" {msg_norm} "

    # SYNC WITH app.py LOGIC
    for city_name in MASTER_DATA["cities"].keys():
        norm_city = normalize(city_name)
        if f" {norm_city} " in words or any(f" {word} " == f" {msg_norm} " for word in norm_city.split()):
            found_cities.append(city_name)
    
    # Priority check for Cartagena/Bogota (Common failures)
    if not found_cities:
        if "cartagena" in msg_norm: found_cities.append("cartagena de indias")
        if "bogota" in msg_norm: found_cities.append("bogotá")
        if "leiva" in msg_norm: found_cities.append("villa de leyva")
        if "leyva" in msg_norm: found_cities.append("villa de leyva")
    
    if found_cities:
        # For simplicity in testing, just take the first
        target_city = found_cities[0]
        city_data = MASTER_DATA["cities"][target_city]
        depts_list = city_data["departments"]
        
        if len(depts_list) == 1:
            dept = depts_list[0]
            truth = city_data["ground_truth"].get(dept, {})
            city_id = truth.get("id")
            return f"FOUND: {target_city} (ID: {city_id})"
        else:
            return f"FOUND: {target_city} (AMBIGUOUS: {depts_list})"
    else:
        return "NOT_FOUND"

test_list = [
    "Nobsa",
    "Bucaramanga",
    "Cartagena",
    "Cartagena de Indias",
    "Santa Marta",
    "Neiva",
    "Manizales",
    "Cali",
    "Medellin",
    "Bogota",
    "Bogotá D.C.",
    "Villa de Leyva",
    "San Andres"
]

print("--- ASSISTANT DETECTION TEST (V2) ---")
for city in test_list:
    res = test_city_redirection(city)
    print(f"{city:20} -> {res}")
