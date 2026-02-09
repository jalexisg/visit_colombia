const API_BASE_URL = 'https://api-colombia.com/api/v1';

async function listDepartments() {
    console.log(`\nFetching All Departments...`);
    const res = await fetch(`${API_BASE_URL}/Department`);
    const depts = await res.json();
    depts.forEach(d => console.log(`${d.name} (${d.id})`));
}

listDepartments();
