
const fs = require('fs');
const path = require('path');

// 1. Load Master List
const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const cities = masterData.cities;

// 2. Filter for Casanare
const casanareCities = [];
for (const [cityName, data] of Object.entries(cities)) {
    if (data.departments && data.departments.includes('Casanare')) {
        casanareCities.push(cityName);
    }
}

console.log(`Total Casanare Cities: ${casanareCities.length}`);

// 3. Check for existing images
const publicPath = path.join(__dirname, '..', 'public', 'images');
const existingFiles = fs.readdirSync(publicPath);

const missingImages = [];
const existingImages = [];

casanareCities.forEach(city => {
    const normalize = (str) => str.toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n').replace(/\s+/g, '_');
    const simpleName = `city_${normalize(city)}.png`;
    const specificName = `city_${normalize(city)}_casanare.png`;
    const hyphenName = `city-${normalize(city)}.png`; // Legacy format

    if (existingFiles.includes(simpleName) || existingFiles.includes(specificName) || existingFiles.includes(hyphenName)) {
        existingImages.push(city);
        console.log(`Found: ${city} -> ${existingFiles.includes(specificName) ? specificName : (existingFiles.includes(simpleName) ? simpleName : hyphenName)}`);
    } else {
        missingImages.push(city);
    }
});

console.log(`Missing Images: ${missingImages.length}`);
console.log(missingImages);
