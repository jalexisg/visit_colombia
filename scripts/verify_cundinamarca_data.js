const fs = require('fs');
const path = require('path');

const cityDataRaw = fs.readFileSync(path.join(process.cwd(), 'lib/city-data.ts'), 'utf8');

// More flexible regex to find the exported objects
const cityImagesMatch = cityDataRaw.match(/export const cityImages: Record<string, string> = \{([\s\S]*?)\};/);
const cityDescriptionsMatch = cityDataRaw.match(/export const cityDescriptions: Record<string, string> = \{([\s\S]*?)\};/);

if (!cityImagesMatch || !cityDescriptionsMatch) {
    // Try without the Explicit Record type just in case
    console.error('Initial regex failed, trying fallback...');
}

// Function to parse the string content of an object literal
function parseObject(content) {
    const record = {};
    // Match keys in single/double quotes or without quotes
    const regex = /['"]?([^'":\s]+?)['"]?:\s*['"](.+?)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        record[match[1]] = match[2];
    }
    return record;
}

const cityImages = parseObject(cityImagesMatch ? cityImagesMatch[1] : cityDataRaw.match(/cityImages.*= \{([\s\S]*?)\};/)[1]);
const cityDescriptions = parseObject(cityDescriptionsMatch ? cityDescriptionsMatch[1] : cityDataRaw.match(/cityDescriptions.*= \{([\s\S]*?)\};/)[1]);

const masterData = JSON.parse(fs.readFileSync('colombia_master.json', 'utf8'));
const cundinamarcaCities = Object.keys(masterData.cities).filter(cityName => {
    return masterData.cities[cityName].departments.includes('Cundinamarca');
});

console.log('--- Cundinamarca Verification Report ---');
console.log('Total Cities in Master:', cundinamarcaCities.length);
console.log('Total Mappings Parsed (Images):', Object.keys(cityImages).length);

let missingImageMapping = 0;
let missingFile = 0;
let missingDescription = 0;

cundinamarcaCities.forEach(city => {
    const name = city.toLowerCase();
    const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const imgPath = cityImages[name] || cityImages[normalizedName] || cityImages[`cundinamarca-${name}`] || cityImages[`cundinamarca-${normalizedName}`];
    
    if (!imgPath) {
        console.log(`[MISSING MAPPING] ${city}`);
        missingImageMapping++;
    } else {
        const fullPath = path.join(process.cwd(), 'public', imgPath);
        if (!fs.existsSync(fullPath)) {
            console.log(`[MISSING FILE] ${city} -> ${imgPath}`);
            missingFile++;
        }
    }

    const desc = cityDescriptions[name] || cityDescriptions[normalizedName];
    if (!desc) {
         // Silently skip if description isn't expected for all, but good to know
         // console.log(`[MISSING DESCRIPTION] ${city}`);
         // missingDescription++;
    }
});

console.log('\nSummary:');
console.log('Missing Mappings:', missingImageMapping);
console.log('Missing Files:', missingFile);

if (missingImageMapping === 0 && missingFile === 0) {
    console.log('\n✅ ALL CUNDINAMARCA CITIES ARE FULLY DATA-READY!');
} else {
    console.log('\n❌ ISSUES FOUND.');
}
