const fs = require('fs');
const path = require('path');

const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

const deptName = 'Córdoba';
const deptCities = [];

for (const [cityName, data] of Object.entries(masterData.cities)) {
    if (data.departments && data.departments.includes(deptName)) {
        deptCities.push(cityName);
    }
}

console.log(`${deptName} Cities:`, deptCities.sort());
console.log('Total:', deptCities.length);
