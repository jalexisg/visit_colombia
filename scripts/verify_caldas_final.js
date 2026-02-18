
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

console.log(`Total Caldas Cities in Master: ${caldasCities.length}`);

// 3. Load city-data.ts content
const cityDataPath = path.join(__dirname, '..', 'lib', 'city-data.ts');
const cityDataContent = fs.readFileSync(cityDataPath, 'utf8');

// Simple regex to parse the object content (fragile, but specific for this check)
const extractObject = (name) => {
    const start = cityDataContent.indexOf(`export const ${name}`);
    if (start === -1) return {};
    const openBrace = cityDataContent.indexOf('{', start);
    let closeBrace = openBrace;
    let stack = 1;
    while (stack > 0 && closeBrace < cityDataContent.length) {
        closeBrace++;
        if (cityDataContent[closeBrace] === '{') stack++;
        if (cityDataContent[closeBrace] === '}') stack--;
    }
    const content = cityDataContent.substring(openBrace, closeBrace + 1);
    // Remove comments
    const cleanContent = content.replace(/\/\/.*$/gm, '');
    try {
        // Need to quote keys to make it valid JSON-like for evaluation
        // This is a hacky way to parse TS object literals without a full parser
        // We will just Regex check for keys existence
        return content;
    } catch (e) {
        return content;
    }
};

const imagesContent = extractObject('cityImages');
const overviewsContent = extractObject('cityOverviews');

const missingImages = [];
const missingOverviews = [];

// Special mappings we used
const specialMappings = {
    'palestina': 'caldas-palestina',
    'riosucio': 'caldas-riosucio',
    'risaralda': 'caldas-risaralda',
    'salamina': 'caldas-salamina',
    'san josé': 'caldas-san josé',
    'victoria': 'caldas-victoria'
};

caldasCities.forEach(city => {
    const lowerCity = city.toLowerCase();
    const key = specialMappings[lowerCity] || lowerCity;

    // Check in Images (simple string match for key: 'value')
    // We look for 'key': or 'key': (with spaces)
    const regex = new RegExp(`'${key}'\\s*:`);

    if (!regex.test(imagesContent)) {
        missingImages.push(key);
    }

    if (!regex.test(overviewsContent)) {
        missingOverviews.push(key);
    }
});

console.log(`Missing from cityImages: ${missingImages.length}`);
if (missingImages.length > 0) console.log(missingImages);

console.log(`Missing from cityOverviews: ${missingOverviews.length}`);
if (missingOverviews.length > 0) console.log(missingOverviews);

// Duplicate check
const checkForDuplicates = (content, name) => {
    const keys = [];
    const lines = content.split('\n');
    lines.forEach(line => {
        const match = line.match(/'([^']+)'\s*:/);
        if (match) {
            keys.push(match[1]);
        }
    });

    const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
    const caldasDuplicates = duplicates.filter(d => d.includes('caldas') || caldasCities.includes(d));

    if (caldasDuplicates.length > 0) {
        console.log(`Duplicate keys in ${name} (Caldas related):`, [...new Set(caldasDuplicates)]);
    } else {
        console.log(`No duplicate keys in ${name}.`);
    }
};

checkForDuplicates(imagesContent, 'cityImages');
checkForDuplicates(overviewsContent, 'cityOverviews');
