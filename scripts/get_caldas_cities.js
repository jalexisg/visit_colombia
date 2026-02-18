
const fs = require('fs');
const path = require('path');

// 1. Load Master List
const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const cities = masterData.cities;

// 2. Filter for Caldas
const caldasCities = [];
for (const [cityName, data] of Object.entries(cities)) {
    if (data.departments && data.departments.includes('Caldas')) {
        caldasCities.push(cityName);
    }
}

console.log(`Total cities in Caldas: ${caldasCities.length}`);

// 3. Check for existing images
const publicDir = path.join(__dirname, '..', 'public', 'images');
const missingImages = [];
const existingImages = [];

caldasCities.forEach(city => {
    const normalizeCity = city.toLowerCase().replace(/ /g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Check various patterns
    const patterns = [
        `city_${normalizeCity}.png`,
        `city_${normalizeCity}_caldas.png`,
        `city-${normalizeCity}.png` // Check for hyphens too
    ];

    let found = false;
    for (const p of patterns) {
        if (fs.existsSync(path.join(publicDir, p))) {
            found = true;
            existingImages.push(city);
            break;
        }
    }

    if (!found) {
        missingImages.push(city);
    }
});

console.log(`Found images for: ${existingImages.length} cities.`);
console.log(`Missing images for: ${missingImages.length} cities.`);
console.log('Missing:', missingImages);
