
const fs = require('fs');
const path = require('path');

const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const cities = masterData.cities;

const caucaCities = [];
for (const [cityName, data] of Object.entries(cities)) {
    if (data.departments && data.departments.includes('Cauca')) {
        caucaCities.push(cityName);
    }
}

console.log(`Total Cauca Cities: ${caucaCities.length}`);

const publicPath = path.join(__dirname, '..', 'public', 'images');
const existingFiles = fs.readdirSync(publicPath);

const missingImages = [];
const existingImages = [];

caucaCities.forEach(city => {
    const normalize = (str) => str.toLowerCase()
        .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
        .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n')
        .replace(/\s+/g, '_');
    const simpleName = `city_${normalize(city)}.png`;
    const specificName = `city_${normalize(city)}_cauca.png`;
    const hyphenName = `city-${normalize(city)}.png`;

    if (existingFiles.includes(simpleName) || existingFiles.includes(specificName) || existingFiles.includes(hyphenName)) {
        existingImages.push(city);
        const found = existingFiles.includes(specificName) ? specificName : (existingFiles.includes(simpleName) ? simpleName : hyphenName);
        console.log(`Found: ${city} -> ${found}`);
    } else {
        missingImages.push(city);
    }
});

console.log(`Missing Images: ${missingImages.length}`);
console.log(missingImages);
