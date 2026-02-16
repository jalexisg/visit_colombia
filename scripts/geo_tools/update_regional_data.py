import json
import os

path = '/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json'

with open(path, 'r', encoding='utf-8') as f:
    master = json.load(f)

# Expanded Regional Context
master["regional_context"] = {
    "Santander": {
      "food": [
        "Hormigas Culonas (Savory fried ants)",
        "Mute Santandereano (Savory meat and corn soup)",
        "Pepitoria (Savory rice with blood and viscera)",
        "Arepa de Maíz Pelao",
        "Bocadillo Veleño (Guava paste)"
      ],
      "general_tips": [
        "Andean mountains and deep canyons (Chicamocha).",
        "NO beaches.",
        "NO Caribbean influence.",
        "Climate is temperate to warm mountain air."
      ]
    },
    "Boyacá": {
      "food": [
        "Cocido Boyacense",
        "Arepas Boyacenses",
        "Chicha",
        "Aguapanela with cheese"
      ],
      "general_tips": [
        "Cold mountain climate.",
        "Hand-woven wool crafts.",
        "Colonial heritage."
      ]
    },
    "Antioquia": {
      "food": [
        "Bandeja Paisa",
        "Mazamorra",
        "Arepa de Mote",
        "Chorizo Antioqueño"
      ],
      "general_tips": [
        "Coffee region.",
        "Mountainous terrain.",
        "Flower culture."
      ]
    },
    "San Andrés y Providencia": {
      "food": [
        "Rundown (Savory seafood and coconut milk stew)",
        "Crab Soup",
        "Fried Fish with Patacón",
        "Coconut Rice"
      ],
      "general_tips": [
        "Caribbean Sea.",
        "Sea of Seven Colors.",
        "Coral reefs and beaches.",
        "Island culture."
      ]
    },
    "Caldas": {
      "food": [
        "Bandeja Paisa",
        "Mazamorra",
        "Arepas de Queso",
        "Coffee-based desserts",
        "Asado de res"
      ],
      "general_tips": [
        "Manizales is the City of Open Doors.",
        "Coffee heartland.",
        "Steep streets and Andean views.",
        "Home to the Nevado del Ruiz volcano."
      ]
    },
    "Risaralda": {
      "food": [
        "Bandeja Paisa",
        "Chorizo Santarrosano",
        "Mazamorra",
        "Clear coffee"
      ],
      "general_tips": [
        "Pereira is the capital.",
        "Part of the Coffee Triangle.",
        "Hot springs in Santa Rosa de Cabal."
      ]
    },
    "Quindío": {
      "food": [
        "Bandeja Paisa",
        "Trucha al Ajillo (Trout with garlic)",
        "Patacón con todo",
        "Coffee candy"
      ],
      "general_tips": [
        "Armenia is the capital.",
        "Salento and Cocora Valley (Wax Palms).",
        "National Coffee Park."
      ]
    },
    "Valle del Cauca": {
      "food": [
        "Lulada",
        "Cholao",
        "Chuleta Valluna",
        "Arroz Atollado",
        "Pandebono"
      ],
      "general_tips": [
        "Cali is the Salsa Capital of the world.",
        "Pacific coast influence (Buenaventura).",
        "Warm tropical climate.",
        "Sugar cane plantations."
      ]
    },
    "Huila": {
      "food": [
        "Asado Huilense",
        "Achiras",
        "Tamal Huilense",
        "Juan Valerio"
      ],
      "general_tips": [
        "Neiva is the capital.",
        "San Agustín Archeological Park.",
        "Tatacoa Desert.",
        "Magdalena River source."
      ]
    },
    "Magdalena": {
      "food": [
        "Cayeye (Mashed green banana with cheese)",
        "Fried Fish",
        "Arroz con coco",
        "Sancocho de Pescado"
      ],
      "general_tips": [
        "Santa Marta is the oldest city.",
        "Tayrona National Park.",
        "Sierra Nevada (highest coastal range).",
        "Caribbean beaches."
      ]
    },
    "Bolívar": {
      "food": [
        "Arepa de Huevo",
        "Posta Negra Cartagenera",
        "Cazuela de Mariscos",
        "Coconut Rice"
      ],
      "general_tips": [
        "Cartagena (Walled City and UNESCO site).",
        "Rosario Islands.",
        "Strong colonial and African heritage."
      ]
    },
    "Atlántico": {
      "food": [
        "Arroz de Lisa",
        "Butifarra Soledeña",
        "Arepa de Huevo",
        "Mote de Queso"
      ],
      "general_tips": [
        "Barranquilla (Biggest Carnival in Colombia).",
        "Mouth of the Magdalena River (Bocas de Ceniza).",
        "Puerta de Oro de Colombia."
      ]
    },
    "Cundinamarca": {
      "food": [
        "Ajiaco Santaferreño",
        "Sopa de Pan",
        "Fritanga",
        "Cuajada con melao"
      ],
      "general_tips": [
        "Bogotá surroundings.",
        "Cold mountain paramos.",
        "Salt Cathedral in Zipaquirá."
      ]
    },
    "Bogotá D.C.": {
      "food": [
        "Ajiaco Santaferreño",
        "Puchero",
        "Chocolate con queso y almojábanas",
        "Tamal Bogotano"
      ],
      "general_tips": [
        "Capital city.",
        "High altitude (2,600m).",
        "Museums (Gold Museum) and Monserrate hill."
      ]
    }
}

# Now propagate this data to cities with generic info
count = 0
for city_name, data in master['cities'].items():
    for dept, truth in data['ground_truth'].items():
        reg_data = master["regional_context"].get(dept, {})
        
        # Audit description
        desc = truth.get('description', '')
        if not desc or "rich in tradition, culture" in desc or "A beautiful destination" in desc:
            tips = reg_data.get('general_tips', [])
            if tips:
                truth['description'] = f"A beautiful municipality in {dept}, known for its {tips[0].lower().strip('.')}. It offers a unique cultural and natural experience."
                count += 1
            elif dept in master["regional_context"]:
                truth['description'] = f"A beautiful municipality in {dept} rich in tradition, culture, and beautiful landscapes."
                count += 1

        # Audit food
        foods = truth.get('recommended_food', [])
        if not foods or "Local traditional dishes" in foods:
            reg_foods = reg_data.get('food', [])
            if reg_foods:
                truth['recommended_food'] = reg_foods
                count += 1

with open(path, 'w', encoding='utf-8') as f:
    json.dump(master, f, indent=2, ensure_ascii=False)

print(f"Propagated regional data. Updated {count} entries.")
