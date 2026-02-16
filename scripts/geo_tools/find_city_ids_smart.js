const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function fetchCitiesByDept(deptId) {
    const res = await fetch(`${API_BASE_URL}/Department/${deptId}/cities`);
    return res.json();
}

async function findCities() {
    try {
        console.log('Fetching Cities by Department...');

        const depts = [
            { id: 15, name: 'Cundinamarca', targets: ['Bogotá', 'Zipaquirá'] },
            { id: 2, name: 'Antioquia', targets: ['Medellín', 'Guatapé', 'Puerto Triunfo'] },
            { id: 5, name: 'Bolívar', targets: ['Cartagena'] },
            { id: 17, name: 'Caldas', targets: ['Manizales'] },
            { id: 24, name: 'Risaralda', targets: ['Pereira'] },
            { id: 23, name: 'Quindío', targets: ['Armenia'] }, // Montenegro? for Parque del Cafe
            { id: 13, name: 'Magdalena', targets: ['Santa Marta'] },
            { id: 20, name: 'Nariño', targets: ['Ipiales'] },
            { id: 16, name: 'Huila', targets: ['San Agustín', 'Villavieja'] }, // Villavieja for Tatacoa
        ];

        for (const dept of depts) {
            const cities = await fetchCitiesByDept(dept.id);
            dept.targets.forEach(target => {
                const match = cities.find(c => c.name.toLowerCase().includes(target.toLowerCase()));
                if (match) {
                    console.log(`${target}: ${match.id}`);
                } else {
                    console.log(`${target}: Not Found`);
                }
            });
        }

        // Also check Montenegro for Parque del Cafe
        const quindioCities = await fetchCitiesByDept(23);
        const montenegro = quindioCities.find(c => c.name.toLowerCase().includes('montenegro'));
        if (montenegro) console.log(`Montenegro: ${montenegro.id}`);

    } catch (e) {
        console.error(e);
    }
}

findCities();
