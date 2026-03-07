import { getCityImage, getCityOverview } from '../lib/city-data';

const citiesToVerify = [
    { name: 'Palermo', dept: 'Huila' },
    { name: 'Palestina', dept: 'Huila' },
    { name: 'El Pital', dept: 'Huila' },
    { name: 'Saladoblanco', dept: 'Huila' },
    { name: 'Santa María', dept: 'Huila' },
    { name: 'Tarqui', dept: 'Huila' },
    { name: 'Tello', dept: 'Huila' }
];

console.log('--- Huila Batch 4 Partial Verification ---');

citiesToVerify.forEach(city => {
    const image = getCityImage(city.name, city.dept);
    const overview = getCityOverview(city.name, undefined, city.dept);

    console.log(`\nCity: ${city.name} (${city.dept})`);
    console.log(`Image: ${image}`);
    console.log(`Overview: ${overview.substring(0, 50)}...`);

    if (image.includes('source.unsplash.com') || image.includes('placeholder')) {
        console.log('❌ FAILED: Unexpected image path (possible fallback used)');
    } else {
        console.log('✅ PASSED: Custom image mapping found');
    }
});
