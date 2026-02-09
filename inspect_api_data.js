const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function checkData() {
    try {
        console.log('Fetching generic Natural Areas...');
        const res = await fetch(`${API_BASE_URL}/NaturalArea`);
        const areas = await res.json();
        if (areas.length > 0) {
            console.log('First Natural Area structure:', JSON.stringify(areas[0], null, 2));
        }

        console.log('\nFetching generic Touristic Attractions...');
        const res2 = await fetch(`${API_BASE_URL}/TouristicAttraction`);
        const attractions = await res2.json();
        if (attractions.length > 0) {
            console.log('First Touristic Attraction structure:', JSON.stringify(attractions[0], null, 2));
        }

    } catch (e) {
        console.error(e);
    }
}

checkData();
