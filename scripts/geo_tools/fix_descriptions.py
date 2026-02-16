import json
import os

path = '/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json'

with open(path, 'r', encoding='utf-8') as f:
    master = json.load(f)

regional = master.get("regional_context", {})

count = 0
for city_name, data in master['cities'].items():
    for dept, truth in data['ground_truth'].items():
        # Better regional logic
        reg_data = regional.get(dept, {})
        
        # 1. Fix Description if generic or image path
        desc = truth.get('description', '')
        if not desc or desc.startswith('/images/') or desc.endswith('.png') or "charming Colombian municipality" in desc:
            tips = reg_data.get('general_tips', [])
            if tips:
                new_desc = f"A beautiful municipality in {dept}, known for its {tips[0].lower().strip('.')}. It offers a unique cultural and natural experience."
            else:
                new_desc = f"A beautiful municipality in {dept} rich in tradition, culture, and beautiful landscapes."
            truth['description'] = new_desc
            count += 1
            
        # 2. Fix Food if generic
        foods = truth.get('recommended_food', [])
        if not foods or "Local traditional dishes" in foods:
            reg_foods = reg_data.get('food', [])
            if reg_foods:
                truth['recommended_food'] = reg_foods
                count += 1

with open(path, 'w', encoding='utf-8') as f:
    json.dump(master, f, indent=2, ensure_ascii=False)

print(f"Audit complete. Fixed/Enhanced {count} entries using regional context.")
