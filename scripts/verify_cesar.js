const fs = require('fs');
const path = require('path');

// Mocking the data structure from city-data.ts
const cesarCities = [
    'aguachica', 'agustín codazzi', 'astrea', 'becerril', 'bosconia',
    'chimichagua', 'chiriguaná', 'curumaní', 'el copey', 'el paso',
    'gamarra', 'gonzález', 'la gloria', 'manaure', 'pailitas',
    'pelaya', 'pueblo bello', 'la paz', 'san alberto', 'san diego',
    'san martín', 'tamalameque', 'río de oro', 'la jagua de ibirico'
];

async function verify() {
    console.log('--- Cesar Verification ---');

    const cityDataPath = path.join(process.cwd(), 'lib/city-data.ts');
    const content = fs.readFileSync(cityDataPath, 'utf8');

    // 1. Check Image Mappings
    console.log('\nChecking image mappings...');
    let missingImages = [];
    cesarCities.forEach(city => {
        if (!content.includes(`'${city}': '/images/`)) {
            missingImages.push(city);
        }
    });
    console.log(`Missing images in cityImages: ${missingImages.length}`);
    if (missingImages.length > 0) console.log(missingImages);

    // 2. Check Overviews
    console.log('\nChecking overviews...');
    let missingOverviews = [];
    cesarCities.forEach(city => {
        // Simple check for presence in the file after the image mappings
        const overviewFound = content.lastIndexOf(`'${city}': '`) > content.lastIndexOf('cityImages');
        if (!overviewFound) {
            missingOverviews.push(city);
        }
    });
    console.log(`Missing overviews in cityOverviews: ${missingOverviews.length}`);
    if (missingOverviews.length > 0) console.log(missingOverviews);

    // 3. Check physical image files
    console.log('\nChecking physical image files...');
    let missingFiles = [];
    cesarCities.forEach(city => {
        // Special case for la jagua to match my manual copy
        const fileName = city === 'la jagua de ibirico' ? 'city_la_jagua_de_ibirico.png' : `city_${city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_")}_cesar.png`;
        const filePath = path.join(process.cwd(), 'public/images', fileName);
        if (!fs.existsSync(filePath)) {
            missingFiles.push(fileName);
        }
    });
    console.log(`Missing physical files: ${missingFiles.length}`);
    if (missingFiles.length > 0) console.log(missingFiles);

    console.log('\n--- Verification Complete ---');
}

verify();
