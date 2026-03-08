import { getCityImage, getCityOverview } from '../lib/city-data';

const huilaCities = [
    'Acevedo', 'Agrado', 'Aipe', 'Algeciras', 'Altamira', 'Baraya', 'Campoalegre',
    'Colombia', 'Elías', 'Garzón', 'Gigante', 'Guadalupe', 'Hobo', 'Íquira',
    'Isnos', 'La Argentina', 'La Plata', 'Nátaga', 'Neiva', 'Oporapa', 'Paicol',
    'Palermo', 'Palestina', 'Pital', 'Pitalito', 'Rivera', 'Saladoblanco',
    'San Agustín', 'Santa María', 'Suaza', 'Tarqui', 'Tello', 'Teruel',
    'Tesalia', 'Timaná', 'Villavieja', 'Yaguará'
];

console.log('--- Huila Department Final Verification (37/37) ---');

let passedCount = 0;
let failedCities: string[] = [];

huilaCities.forEach(cityName => {
    const image = getCityImage(cityName, 'Huila');
    const overview = getCityOverview(cityName, undefined, 'Huila');

    const hasCustomImage = !image.includes('source.unsplash.com') && !image.includes('placeholder') && image.startsWith('/images');
    const hasCustomOverview = overview.length > 50;

    if (hasCustomImage && hasCustomOverview) {
        passedCount++;
    } else {
        failedCities.push(cityName);
    }
});

console.log(`\nResults: ${passedCount}/${huilaCities.length} PASSED`);

if (failedCities.length > 0) {
    console.log('\n❌ FAILED CITIES:');
    failedCities.forEach(city => {
        const img = getCityImage(city, 'Huila');
        console.log(`- ${city}: Image="${img}"`);
    });
} else {
    console.log('\n✅ ALL HUILA MUNICIPALITIES VERIFIED SUCCESSFULLY!');
}
