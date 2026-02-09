const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function findCities() {
    try {
        console.log('Fetching Cities...');
        const res = await fetch(`${API_BASE_URL}/City`);
        const cities = await res.json();

        const targets = [
            'Bogotá', 'Cartagena', 'Medellín', 'Santa Marta', 'Armenia',
            'Pereira', 'Manizales', 'Ipiales', 'Zipaquirá', 'San Agustín',
            'Guatapé', 'Puerto Triunfo' // for Hacienda Napoles
        ];

        console.log('Searching for target cities:');
        targets.forEach(target => {
            const match = cities.find(c => c.name.toLowerCase().includes(target.toLowerCase()));
            if (match) {
                console.log(`${target}: ${match.id}`);
            } else {
                console.log(`${target}: Not Found`);
            }
        });

    } catch (e) {
        console.error(e);
    }
}

findCities();
