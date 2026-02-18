const fs = require('fs');
const path = require('path');

const chocoCities = [
    'istmina', 'acandí', 'alto baudo', 'atrato', 'bagadó',
    'bahía solano', 'bajo baudó', 'bojaya', 'cértegui', 'condoto',
    'juradó', 'lloró', 'medio atrato', 'medio baudó', 'medio san juan',
    'nóvita', 'nuquí', 'río iro', 'río quito', 'choco-riosucio',
    'sipí', 'unguía', 'el litoral del san juan', 'el cantón del san pablo',
    'el carmen de atrato', 'san josé del palmar', 'belén de bajira',
    'carmen del darien', 'tadó', 'unión panamericana'
];

async function verify() {
    console.log('--- Chocó Verification ---');

    const cityDataPath = path.join(process.cwd(), 'lib/city-data.ts');
    const content = fs.readFileSync(cityDataPath, 'utf8');

    // 1. Check Image Mappings
    console.log('\nChecking image mappings...');
    let missingImages = [];
    chocoCities.forEach(city => {
        if (!content.includes(`'${city}': '/images/`)) {
            missingImages.push(city);
        }
    });
    console.log(`Missing images in cityImages: ${missingImages.length}`);
    if (missingImages.length > 0) console.log(missingImages);

    // 2. Check Overviews
    console.log('\nChecking overviews...');
    let missingOverviews = [];
    chocoCities.forEach(city => {
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
    chocoCities.forEach(city => {
        let fileName;
        if (city === 'el cantón del san pablo') fileName = 'city_el_canton_del_san_pablo.png';
        else if (city === 'unión panamericana') fileName = 'city_union_panamericana.png';
        else {
            fileName = `city_${city.replace('choco-', '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_")}_choco.png`;
        }

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
