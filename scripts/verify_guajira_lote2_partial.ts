import { getCityImage, getCityOverview } from '../lib/city-data';

const destinationsToVerify = [
    { name: 'Fonseca', dept: 'Guajira' },
    { name: 'Barrancas', dept: 'Guajira' },
    { name: 'Villanueva', dept: 'Guajira' },
    { name: 'Albania', dept: 'Guajira' },
    { name: 'Hatonuevo', dept: 'Guajira' },
    { name: 'Distracción', dept: 'Guajira' }
];

console.log('--- La Guajira Lote 2 Partial Verification ---');

destinationsToVerify.forEach(dest => {
    const image = getCityImage(dest.name, dest.dept);
    const overview = getCityOverview(dest.name, undefined, dest.dept);

    console.log(`\nDestination: ${dest.name} (${dest.dept})`);
    console.log(`Image: ${image}`);
    console.log(`Overview: ${overview.substring(0, 50)}...`);

    const isImageValid = image.startsWith('/images/cities/guajira/');
    const isOverviewValid = overview.length > 50;

    if (isImageValid && isOverviewValid) {
        console.log('✅ PASSED');
    } else {
        console.log('❌ FAILED: Integration check failed.');
    }
});
