const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function findParks() {
    try {
        console.log('Fetching Natural Areas...');
        const res = await fetch(`${API_BASE_URL}/NaturalArea`);
        const areas = await res.json();

        const targets = [
            'Tayrona', 'Cocuy', 'Amacayacu', 'Nevados', 'Rosario', 'Macarena', 'Iguaque', 'Tuparro'
        ];

        console.log('Searching for target parks:');
        targets.forEach(target => {
            const matches = areas.filter(a => a.name.toLowerCase().includes(target.toLowerCase()));
            matches.forEach(m => {
                console.log(`Found: ${m.name} (ID: ${m.id})`);
            });
        });

    } catch (e) {
        console.error(e);
    }
}

findParks();
