
const fs = require('fs');
const path = require('path');

// 1. Load Master List
const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const cities = masterData.cities;

// 2. Filter for Caquetá
const caquetaCities = [];
for (const [cityName, data] of Object.entries(cities)) {
    if (data.departments && data.departments.includes('Caquetá')) {
        caquetaCities.push(cityName);
    }
}

console.log(`Total Caquetá Cities in Master: ${caquetaCities.length}`);

// 3. Load city-data.ts content
const cityDataPath = path.join(__dirname, '..', 'lib', 'city-data.ts');
const cityDataContent = fs.readFileSync(cityDataPath, 'utf8');

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
    try {
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
    'albania': 'caquetá-albania',
    'puerto rico': 'caquetá-puerto rico',
    'valparaíso': 'caquetá-valparaíso'
};

caquetaCities.forEach(city => {
    const lowerCity = city.toLowerCase();
    const key = specialMappings[lowerCity] || lowerCity;

    // Check in Images
    const regex = new RegExp(`'${key}'\\s*:`);

    // For Overviews, we used the simple name as key because the object structure allows duplicates if keys are same? 
    // Wait, TS object keys must be unique. 
    // In cityOverviews, did I use 'caqueta-albania' or 'albania'?
    // I used 'albania'. This WILL cause a collision if 'albania' already exists for another department.
    // Let me check if 'albania' exists elsewhere.
    // If it does, my previous edit might have created a duplicate key or overwritten it.
    // The previous edit added:
    // 'albania': ...
    // If 'albania' (La Guajira) was already there, I now have two 'albania' keys or I overwrote it.
    // I should check for this.

    if (!regex.test(imagesContent)) {
        missingImages.push(key);
    }

    // For overviews, check safely
    // If I used simple names in overviews, I need to check if that simple name is present.
    const overviewKey = lowerCity; // I used simple names in my update for overviews
    const overviewRegex = new RegExp(`'${overviewKey}'\\s*:`);

    if (!overviewRegex.test(overviewsContent)) {
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

    if (duplicates.length > 0) {
        console.log(`Duplicate keys in ${name}:`, [...new Set(duplicates)]);
    } else {
        console.log(`No duplicate keys in ${name}.`);
    }
};

checkForDuplicates(imagesContent, 'cityImages');
checkForDuplicates(overviewsContent, 'cityOverviews');
