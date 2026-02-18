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

console.log(`Total Cauca Cities in Master: ${caucaCities.length}`);

const cityDataPath = path.join(__dirname, '..', 'lib', 'city-data.ts');
const cityDataContent = fs.readFileSync(cityDataPath, 'utf8');

const extractObject = (name) => {
    const start = cityDataContent.indexOf(`export const ${name}`);
    if (start === -1) return '';
    const openBrace = cityDataContent.indexOf('{', start);
    let closeBrace = openBrace;
    let stack = 1;
    while (stack > 0 && closeBrace < cityDataContent.length) {
        closeBrace++;
        if (cityDataContent[closeBrace] === '{') stack++;
        if (cityDataContent[closeBrace] === '}') stack--;
    }
    return cityDataContent.substring(openBrace, closeBrace + 1);
};

const imagesContent = extractObject('cityImages');
const overviewsContent = extractObject('cityOverviews');

// Special mappings for collision cities
const specialMappings = {
    'morales': 'cauca-morales',
    'santa rosa': 'cauca-santa rosa',
    'argelia': 'cauca-argelia',
    'páez': 'cauca-páez',
    'florencia': 'cauca-florencia',
    'bolívar': 'cauca-bolívar',
    'popayán': 'cauca-popayán',
    'sucre': 'cauca-sucre',
};

const missingImages = [];
const missingOverviews = [];

caucaCities.forEach(city => {
    const lowerCity = city.toLowerCase();
    const key = specialMappings[lowerCity] || lowerCity;

    const regex = new RegExp(`'${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'\\s*:`);
    if (!regex.test(imagesContent)) {
        missingImages.push(`${city} (key: ${key})`);
    }

    const overviewRegex = new RegExp(`'${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'\\s*:`);
    if (!overviewRegex.test(overviewsContent)) {
        missingOverviews.push(`${city} (key: ${key})`);
    }
});

console.log(`\nMissing from cityImages: ${missingImages.length}`);
if (missingImages.length > 0) console.log(missingImages);

console.log(`Missing from cityOverviews: ${missingOverviews.length}`);
if (missingOverviews.length > 0) console.log(missingOverviews);

const checkForDuplicates = (content, name) => {
    const keys = [];
    const lines = content.split('\n');
    lines.forEach(line => {
        const match = line.match(/'([^']+)'\s*:/);
        if (match) keys.push(match[1]);
    });
    const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
    if (duplicates.length > 0) {
        console.log(`\nDuplicate keys in ${name}:`, [...new Set(duplicates)]);
    } else {
        console.log(`No duplicate keys in ${name}.`);
    }
};

checkForDuplicates(imagesContent, 'cityImages');
checkForDuplicates(overviewsContent, 'cityOverviews');

// Check images exist in public/images
const publicPath = path.join(__dirname, '..', 'public', 'images');
const existingFiles = fs.readdirSync(publicPath);
const missingFiles = [];

caucaCities.forEach(city => {
    const normalize = (str) => str.toLowerCase()
        .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
        .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n')
        .replace(/\s+/g, '_');

    const lowerCity = city.toLowerCase();
    const key = specialMappings[lowerCity] || lowerCity;
    const normalizedKey = normalize(key.replace('cauca-', ''));

    const specificName = `city_${normalizedKey}_cauca.png`;
    const simpleName = `city_${normalize(city)}.png`;

    if (!existingFiles.includes(specificName) && !existingFiles.includes(simpleName)) {
        missingFiles.push(`${city} -> ${specificName}`);
    }
});

console.log(`\nMissing image files: ${missingFiles.length}`);
if (missingFiles.length > 0) console.log(missingFiles);

if (missingImages.length === 0 && missingOverviews.length === 0 && missingFiles.length === 0) {
    console.log('\n✅ All Cauca cities are fully integrated!');
}
