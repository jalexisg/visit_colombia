const fs = require('fs');

// 1. Get departments from departments.json
const deptsData = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/departments.json', 'utf8'));
const mapping = {};

deptsData.forEach(d => {
    mapping[d.name] = new Set();
    if (d.cityCapital) mapping[d.name].add(d.cityCapital.name);
});

// 2. Parse city-data.ts for more cities
const cityDataContent = fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/lib/city-data.ts', 'utf8');
const hyphenatedRegex = /'([^']*-)([^']*)'/g;
let match;
while ((match = hyphenatedRegex.exec(cityDataContent)) !== null) {
    const deptPart = match[1].replace('-', '').trim();
    const cityPart = match[2].trim();

    // Normalize dept names a bit (e.g., santander -> Santander)
    for (const dName of Object.keys(mapping)) {
        if (dName.toLowerCase() === deptPart.toLowerCase()) {
            mapping[dName].add(cityPart);
        }
    }
}

// Convert Sets to Arrays and sort
const finalMapping = {};
Object.keys(mapping).sort().forEach(d => {
    finalMapping[d] = Array.from(mapping[d]).sort();
});

console.log(JSON.stringify(finalMapping, null, 2));
