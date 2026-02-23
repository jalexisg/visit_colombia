const fs = require('fs');
const data = JSON.parse(fs.readFileSync('colombia_master.json', 'utf8'));

const cundinamarcaCities = data
    .filter(city => city.department === 'Cundinamarca')
    .map(city => city.city.toLowerCase());

console.log('Cundinamarca Cities:', JSON.stringify(cundinamarcaCities, null, 2));
console.log('Total:', cundinamarcaCities.length);
