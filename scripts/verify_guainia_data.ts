import { getCityImage, getCityOverview } from '../lib/city-data';

const citiesToVerify = [
    { name: 'Barranco Minas', dept: 'Guainía' },
    { name: 'Mapiripana', dept: 'Guainía' },
    { name: 'San Felipe', dept: 'Guainía' },
    { name: 'Puerto Colombia', dept: 'Guainía' },
    { name: 'Inírida', dept: 'Guainía' }
];

console.log('--- Guainía City Data Verification ---');

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
