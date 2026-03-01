const fs = require('fs');
const path = require('path');

const masterData = JSON.parse(fs.readFileSync('colombia_master.json', 'utf8'));
const cundinamarcaCities = Object.keys(masterData.cities).filter(cityName => {
    return masterData.cities[cityName].departments.includes('Cundinamarca');
});

const publicImagesDir = path.join(process.cwd(), 'public', 'images');

console.log('--- Cundinamarca File Existence Check ---');
console.log('Total Cities to check:', cundinamarcaCities.length);

let missing = 0;
cundinamarcaCities.forEach(city => {
    const fileName = 'city_' + city.toLowerCase().replace(/ /g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "") + '_cundinamarca.png';
    const filePath = path.join(publicImagesDir, fileName);
    if (!fs.existsSync(filePath)) {
        console.log(`[MISSING] ${city} -> ${fileName}`);
        missing++;
    }
});

console.log('\nSummary:');
console.log('Missing Files:', missing);

if (missing === 0) {
    console.log('\n✅ ALL 117 CUNDINAMARCA IMAGES ARE PRESENT ON DISK!');
} else {
    console.log('\n❌ ISSUES FOUND.');
}
