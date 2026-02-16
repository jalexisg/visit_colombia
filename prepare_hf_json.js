const fs = require('fs');

// Load the raw data from marcovega's JSON
const rawData = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/all_colombia.json', 'utf8'));

// We want a mapping of { "city_name": ["Dept1", "Dept2"] }
const cityMap = {};

rawData.forEach(item => {
    const dept = item.departamento;
    item.ciudades.forEach(city => {
        const normalized = city.toLowerCase().trim();
        if (!cityMap[normalized]) {
            cityMap[normalized] = [];
        }
        if (!cityMap[normalized].includes(dept)) {
            cityMap[normalized].push(dept);
        }
    });
});

// Add specific edge cases mentioned by user if missing (San Andres, Santander case)
// Checking if San Andres is in Santander in the raw data...
const sanAndres = cityMap['san andrés'] || [];
if (!sanAndres.includes('Santander')) {
    sanAndres.push('Santander');
    cityMap['san andrés'] = sanAndres;
}

// Write the mapping to a clean JSON
fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia.json', JSON.stringify(cityMap, null, 2));
console.log('Successfully created colombia.json with mappings for Hugging Face.');
