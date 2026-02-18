const fs = require('fs');
const path = require('path');

const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

const deptName = 'Bolívar';
const deptCities = [];

const cities = masterData.cities;

for (const cityName in cities) {
    if (cities[cityName].departments && cities[cityName].departments.includes(deptName)) {
        deptCities.push(cityName);
    }
}

console.log(`${deptName} Cities:`, deptCities.sort());
console.log('Total:', deptCities.length);
