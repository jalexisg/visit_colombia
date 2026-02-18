const fs = require('fs');
const path = require('path');

const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

const deptName = 'Bolívar';
const imagesDir = path.join(__dirname, '../public/images');
const existingImages = fs.readdirSync(imagesDir);

const cities = masterData.cities;
const bolivarCities = [];

for (const cityName in cities) {
    if (cities[cityName].departments && cities[cityName].departments.includes(deptName)) {
        bolivarCities.push(cityName);
    }
}

const missing = [];
const found = [];

bolivarCities.forEach(city => {
    const normalized = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_").toLowerCase();

    // Check various patterns
    const patterns = [
        `city_${normalized}.png`,
        `city_${normalized}_bolivar.png`,
        `city_${normalized.replace(/_/g, '-')}.png`, // some are hyphens
        `city-${normalized}.png`, // Cartagena format
        `city-${normalized.replace(/_/g, '-')}.png`
    ];

    // Special cases
    if (city === 'cartagena de indias') patterns.push('city_cartagena.png', 'city-cartagena.png');
    if (city === 'mompós') patterns.push('city_mompos.png', 'city_santa_cruz_de_mompos.png');

    const match = existingImages.find(img => patterns.includes(img));

    if (match) {
        found.push({ city, image: match });
    } else {
        missing.push(city);
    }
});

console.log('Found:', found.length);
console.log('Missing:', missing.length);
console.log('Missing Cities:', missing);
console.log('Found Map:', found.map(f => `${f.city} -> ${f.image}`));
