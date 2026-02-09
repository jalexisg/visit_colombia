const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function checkCity() {
    try {
        console.log('Fetching generic Cities...');
        const res = await fetch(`${API_BASE_URL}/City`);
        const cities = await res.json();
        if (cities.length > 0) {
            console.log('First City structure:', JSON.stringify(cities[0], null, 2));
        }
    } catch (e) {
        console.error(e);
    }
}

checkCity();
