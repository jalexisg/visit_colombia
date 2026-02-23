const fs = require('fs');
const data = JSON.parse(fs.readFileSync('colombia_master.json', 'utf8'));

const cundinamarcaCities = [];
for (const [cityName, cityData] of Object.entries(data.cities)) {
    if (cityData.departments && cityData.departments.includes('Cundinamarca')) {
        cundinamarcaCities.push(cityName);
    }
}

cundinamarcaCities.sort();

console.log('Cundinamarca Cities:', JSON.stringify(cundinamarcaCities, null, 2));
console.log('Total:', cundinamarcaCities.length);
