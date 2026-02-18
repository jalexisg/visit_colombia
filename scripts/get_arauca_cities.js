const fs = require('fs');
const path = require('path');

const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

const araucaCities = [];

for (const [cityName, data] of Object.entries(masterData.cities)) {
    if (data.departments && data.departments.includes('Arauca')) {
        araucaCities.push(cityName);
    }
}

console.log('Arauca Cities:', araucaCities.sort());
console.log('Total:', araucaCities.length);
