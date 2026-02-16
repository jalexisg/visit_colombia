const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function listDeptCities(deptId, targets) {
    try {
        const res = await fetch(`${API_BASE_URL}/Department/${deptId}/cities`);
        const cities = await res.json();

        targets.forEach(target => {
            const match = cities.find(c => c.name.toLowerCase().includes(target.toLowerCase()));
            if (match) {
                console.log(`${target}: ${match.id}`);
            } else {
                console.log(`${target}: Not Found in Dept ${deptId}`);
            }
        });
    } catch (e) { console.error(e); }
}

async function findCities() {
    await listDeptCities(5, ['Bogotá']);
    await listDeptCities(6, ['Cartagena']);
    await listDeptCities(2, ['Medellín', 'Guatapé', 'Puerto Triunfo']);
    await listDeptCities(20, ['Santa Marta']);
    await listDeptCities(25, ['Armenia', 'Montenegro']);
    await listDeptCities(26, ['Pereira']);
    await listDeptCities(8, ['Manizales']);
    await listDeptCities(22, ['Ipiales']);
    await listDeptCities(18, ['San Agustín', 'Villavieja']);
    await listDeptCities(15, ['Zipaquirá']);
}

findCities();
