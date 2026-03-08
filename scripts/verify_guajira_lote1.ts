import { getCityImage, getCityOverview } from '../lib/city-data';

const destinationsToVerify = [
    { name: 'Riohacha', dept: 'Guajira' },
    { name: 'Uribia', dept: 'Guajira' },
    { name: 'Cabo de la Vela', dept: 'Guajira' },
    { name: 'Punta Gallinas', dept: 'Guajira' },
    { name: 'Manaure', dept: 'Guajira' },
    { name: 'Maicao', dept: 'Guajira' },
    { name: 'Dibulla', dept: 'Guajira' },
    { name: 'Palomino', dept: 'Guajira' },
    { name: 'San Juan del César', dept: 'Guajira' }
];

console.log('--- La Guajira Lote 1 Verification ---');

destinationsToVerify.forEach(dest => {
    const image = getCityImage(dest.name, dest.dept);
    const overview = getCityOverview(dest.name, undefined, dest.dept);

    console.log(`\nDestination: ${dest.name} (${dest.dept})`);
    console.log(`Image: ${image}`);
    console.log(`Overview: ${overview.substring(0, 50)}...`);

    const isImageValid = image.startsWith('/images/cities/guajira/') || image === '/images/city_riohacha.png';
    // Actually Riohacha was updated to /images/cities/guajira/riohacha.png
    const isOverviewValid = overview.length > 50;

    if (isImageValid && isOverviewValid) {
        console.log('✅ PASSED');
    } else {
        console.log('❌ FAILED: Predefined key check failed.');
    }
});
