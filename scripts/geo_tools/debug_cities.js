const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function listDeptCities(deptId) {
    console.log(`\nFetching Cities for Dept ID ${deptId}...`);
    const res = await fetch(`${API_BASE_URL}/Department/${deptId}/cities`);
    const cities = await res.json();
    cities.forEach(c => console.log(`${c.name} (${c.id})`));
}

async function debug() {
    await listDeptCities(15); // Cundinamarca
    await listDeptCities(5);  // Bolívar
}

debug();
