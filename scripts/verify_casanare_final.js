
const fs = require('fs');
const path = require('path');

const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const cities = masterData.cities;

const casanareCities = [];
for (const [cityName, data] of Object.entries(cities)) {
    if (data.departments && data.departments.includes('Casanare')) {
        casanareCities.push(cityName);
    }
}

console.log(`Total Casanare Cities in Master: ${casanareCities.length}`);

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

const specialMappings = {
    'sabanalarga': 'casanare-sabanalarga',
    'villanueva': 'casanare-villanueva',
};

const missingImages = [];
const missingOverviews = [];

casanareCities.forEach(city => {
    const lowerCity = city.toLowerCase();
    const key = specialMappings[lowerCity] || lowerCity;

    const regex = new RegExp(`'${key}'\\s*:`);
    if (!regex.test(imagesContent)) {
        missingImages.push(key);
    }

    const overviewRegex = new RegExp(`'${key}'\\s*:`);
    if (!overviewRegex.test(overviewsContent)) {
        missingOverviews.push(key);
    }
});

console.log(`Missing from cityImages: ${missingImages.length}`);
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
        console.log(`Duplicate keys in ${name}:`, [...new Set(duplicates)]);
    } else {
        console.log(`No duplicate keys in ${name}.`);
    }
};

checkForDuplicates(imagesContent, 'cityImages');
checkForDuplicates(overviewsContent, 'cityOverviews');
