const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function findParks() {
    try {
        console.log('Fetching Natural Areas...');
        const res = await fetch(`${API_BASE_URL}/NaturalArea`);
        const areas = await res.json();

        console.log('Listing ALL Natural Areas:');
        areas.forEach(area => {
            console.log(`Park: ${area.name} (ID: ${area.id})`);
        });

    } catch (e) {
        console.error(e);
    }
}

findParks();
