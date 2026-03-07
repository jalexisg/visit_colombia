import { getCityImage, getCityOverview } from '../lib/city-data';

const citiesToVerify = [
    { name: 'La Plata', dept: 'Huila' },
    { name: 'Timaná', dept: 'Huila' },
    { name: 'Suaza', dept: 'Huila' },
    { name: 'Altamira', dept: 'Huila' },
    { name: 'Campoalegre', dept: 'Huila' },
    { name: 'Aipe', dept: 'Huila' },
    { name: 'Algeciras', dept: 'Huila' },
    { name: 'Baraya', dept: 'Huila' },
    { name: 'Colombia', dept: 'Huila' }
];

console.log('--- Huila Batch 2 Verification ---');

citiesToVerify.forEach(city => {
    // Specifically test huila-colombia if name is Colombia, as it's the safest way 
    // to access it if there is a conflict. Let's test standard lookup first.
    let searchName = city.name.toLowerCase();
    if (searchName === 'colombia') {
        searchName = 'huila-colombia';
    }

    // Test direct mapping
    const image = getCityImage(searchName, city.dept);
    const overview = getCityOverview(searchName, undefined, city.dept);

    console.log(`\nCity: ${city.name} (${city.dept}) [Searched as: ${searchName}]`);
    console.log(`Image: ${image}`);
    console.log(`Overview: ${overview.substring(0, 50)}...`);

    if (image.includes('source.unsplash.com') || image.includes('placeholder')) {
        console.log('❌ FAILED: Unexpected image path (possible fallback used)');
    } else {
        console.log('✅ PASSED: Custom image mapping found');
    }
});
