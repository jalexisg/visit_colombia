const { getCityImage, getCityOverview } = require('./lib/city-data.ts');
const fs = require('fs');

console.log('--- Cundinamarca Integration Verification ---');

const testCities = [
    { name: 'Agua de Dios', dept: 'Cundinamarca' },
    { name: 'Albán', dept: 'Cundinamarca' },
    { name: 'Anapoima', dept: 'Cundinamarca' },
    { name: 'Fusagasugá', dept: 'Cundinamarca' },
    { name: 'Bogotá', dept: 'Cundinamarca' }
];

testCities.forEach(city => {
    const img = getCityImage(city.name, city.dept);
    const desc = getCityOverview(city.name, 'No description found', city.dept);

    console.log(`\nCity: ${city.name}`);
    console.log(`Image: ${img}`);
    console.log(`Description: ${desc.substring(0, 50)}...`);

    // Check if image file exists physically
    const imagePath = `public${img}`;
    if (fs.existsSync(imagePath)) {
        console.log('✅ Image file exists');
    } else {
        console.log('❌ Image file MISSING at ' + imagePath);
    }
});
