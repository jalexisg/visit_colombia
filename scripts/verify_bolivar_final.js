
const fs = require('fs');
const path = require('path');

// 1. Read proper city data (mocking the structure or reading the file directly if possible)
// Since city-data.ts is TS, we'll read it as text and regex parse it for this quick check.
const cityDataPath = path.join(__dirname, '../lib/city-data.ts');
const cityDataContent = fs.readFileSync(cityDataPath, 'utf8');

// Extract keys from cityImages
const imageKeys = [];
const imageBlockRegex = /export const cityImages: Record<string, string> = {([\s\S]*?)};/;
const imageMatch = cityDataContent.match(imageBlockRegex);
if (imageMatch) {
    const lines = imageMatch[1].split('\n');
    lines.forEach(line => {
        const match = line.match(/'([^']+)':/);
        if (match) imageKeys.push(match[1]);
    });
}

// Extract keys from cityOverviews
const overviewKeys = [];
const overviewBlockRegex = /export const cityOverviews: Record<string, string> = {([\s\S]*?)};/;
const overviewMatch = cityDataContent.match(overviewBlockRegex);
if (overviewMatch) {
    const lines = overviewMatch[1].split('\n');
    lines.forEach(line => {
        const match = line.match(/'([^']+)':/);
        if (match) overviewKeys.push(match[1]);
    });
}

// 2. Load Master List
const masterPath = path.join(__dirname, '..', 'colombia_master.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const cities = masterData.cities;
const bolivarCities = [];
for (const cityName in cities) {
    if (cities[cityName].departments && cities[cityName].departments.includes('Bolívar')) {
        bolivarCities.push(cityName.toLowerCase());
    }
}

// 3. Verify
console.log(`Total Bolívar Cities in Master: ${bolivarCities.length}`);

const missingImages = bolivarCities.filter(c => !imageKeys.includes(c));
const missingOverviews = bolivarCities.filter(c => !overviewKeys.includes(c));

console.log(`Missing from cityImages: ${missingImages.length}`);
if (missingImages.length > 0) console.log(missingImages);

console.log(`Missing from cityOverviews: ${missingOverviews.length}`);
if (missingOverviews.length > 0) console.log(missingOverviews);

// 4. Check Duplicate Keys (Regex might find them if they exist)
const uniqueImageKeys = new Set(imageKeys);
if (imageKeys.length !== uniqueImageKeys.size) {
    console.log(`CRITICAL: Duplicate keys found in cityImages! (${imageKeys.length} vs ${uniqueImageKeys.size})`);
    // Find duplicates
    const duplicates = imageKeys.filter((item, index) => imageKeys.indexOf(item) !== index);
    console.log(duplicates);
} else {
    console.log('No duplicate keys in cityImages.');
}

const uniqueOverviewKeys = new Set(overviewKeys);
if (overviewKeys.length !== uniqueOverviewKeys.size) {
    console.log(`CRITICAL: Duplicate keys found in cityOverviews! (${overviewKeys.length} vs ${uniqueOverviewKeys.size})`);
    const duplicates = overviewKeys.filter((item, index) => overviewKeys.indexOf(item) !== index);
    console.log(duplicates);
} else {
    console.log('No duplicate keys in cityOverviews.');
}
