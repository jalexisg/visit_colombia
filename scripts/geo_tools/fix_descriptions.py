import json
import os

path = '/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json'

with open(path, 'r', encoding='utf-8') as f:
    master = json.load(f)

count = 0
for city_name, data in master['cities'].items():
    for dept, truth in data['ground_truth'].items():
        desc = truth.get('description', '')
        if desc.startswith('/images/') or desc.endswith('.png') or desc.endswith('.jpg'):
            # Build a description from warnings or a generic one
            warnings = truth.get('warnings', [])
            if warnings:
                new_desc = f"A beautiful municipality known for its {warnings[0].lower().strip('.')}. It offers a unique cultural and natural experience."
            else:
                new_desc = "A charming Colombian municipality rich in tradition, culture, and beautiful landscapes."
            
            truth['description'] = new_desc
            count += 1

with open(path, 'w', encoding='utf-8') as f:
    json.dump(master, f, indent=2, ensure_ascii=False)

print(f"Fixed {count} city descriptions.")
