const fs = require('fs');

async function updateWithIDs() {
    try {
        console.log('Fetching Departments from API...');
        const deptRes = await fetch('https://api-colombia.com/api/v1/Department');
        const depts = await deptRes.json();
        const deptMap = {};
        depts.forEach(d => {
            deptMap[d.id] = d.name.toLowerCase();
        });

        console.log('Fetching all cities from API...');
        const res = await fetch('https://api-colombia.com/api/v1/City');
        const allCities = await res.json();

        console.log('Loading Master Data...');
        const master = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', 'utf8'));

        console.log('Mapping IDs...');
        let updatedCount = 0;
        let missingCount = 0;

        for (const city in master.cities) {
            const departments = master.cities[city].departments;

            departments.forEach(deptName => {
                // Find match by name and department
                const match = allCities.find(c => {
                    const apiCityName = c.name.toLowerCase();
                    const masterCityName = city.toLowerCase();
                    const apiDeptName = deptMap[c.departmentId] || "";
                    const targetDeptName = deptName.toLowerCase()
                        .replace(' y providencia', '')
                        .replace('norte de santander', 'norte de santander'); // just in case

                    return (apiCityName === masterCityName || apiCityName.includes(masterCityName)) &&
                        (apiDeptName.includes(targetDeptName) || targetDeptName.includes(apiDeptName));
                });

                if (match) {
                    master.cities[city].ground_truth[deptName].id = match.id;
                    updatedCount++;
                } else {
                    missingCount++;
                }
            });
        }

        fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', JSON.stringify(master, null, 2));
        console.log(`Success! Updated ${updatedCount} city entries with IDs. Missing: ${missingCount}`);

    } catch (e) {
        console.error('Error:', e);
    }
}

updateWithIDs();
