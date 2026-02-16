const fs = require('fs');

async function updateWithIDs() {
    try {
        console.log('Fetching all cities from API...');
        const res = await fetch('https://api-colombia.com/api/v1/City');
        const allCities = await res.json();

        console.log('Loading Master Data...');
        const master = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', 'utf8'));

        console.log('Mapping IDs...');
        let updatedCount = 0;

        for (const city in master.cities) {
            const depts = master.cities[city].departments;

            depts.forEach(dept => {
                // Find match by name and department
                // Note: API might have subtle spelling differences
                const match = allCities.find(c =>
                    (c.name.toLowerCase() === city.toLowerCase() ||
                        c.name.toLowerCase().includes(city.toLowerCase())) &&
                    (c.department && c.department.name.toLowerCase().includes(dept.toLowerCase().replace(' y providencia', '')))
                );

                if (match) {
                    master.cities[city].ground_truth[dept].id = match.id;
                    updatedCount++;
                }
            });
        }

        fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', JSON.stringify(master, null, 2));
        console.log(`Success! Updated ${updatedCount} city entries with IDs.`);

    } catch (e) {
        console.error('Error:', e);
    }
}

updateWithIDs();
