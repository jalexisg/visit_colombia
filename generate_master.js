const fs = require('fs');

// 1. Load basic city-department mapping
const cityDepts = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia.json', 'utf8'));

// 2. Load descriptions from city-data.ts
const cityDataContent = fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/lib/city-data.ts', 'utf8');

// Simple extraction of cityOverviews keys and values
const overviews = {};
const overviewRegex = /'([^']+)':\s*'([^']+)'/g;
let match;
while ((match = overviewRegex.exec(cityDataContent)) !== null) {
    overviews[match[1]] = match[2];
}

// 3. Load department info
const deptsRaw = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/departments.json', 'utf8'));
const deptInfo = {};
deptsRaw.forEach(d => {
    deptInfo[d.name] = d.description;
});

// 4. Merge everything into a Master Object
const master = {
    cities: {},
    departments: deptInfo
};

for (const [city, departments] of Object.entries(cityDepts)) {
    master.cities[city] = {
        departments: departments,
        info: {}
    };

    departments.forEach(dept => {
        // Try specific key: 'antioquia-barbosa'
        const specificKey = `${dept.toLowerCase()}-${city.toLowerCase()}`;
        // Try generic key: 'barbosa'
        const genericKey = city.toLowerCase();

        const desc = overviews[specificKey] || overviews[genericKey] || "";
        if (desc) {
            master.cities[city].info[dept] = desc;
        }
    });
}

// 5. Add specific grounding for critical towns (Santander/Antioquia)
// Ground Truth for Barbosa, Santander
if (master.cities['barbosa'] && master.cities['barbosa'].info['Santander']) {
    master.cities['barbosa'].info['Santander'] = "A vital commercial crossroads in Santander situated along the Suarez River. Known for its traditional snacks like 'Veleño' bocadillo and 'Arepa de Maíz Pelao'. NOT to be confused with Barbosa, Antioquia.";
}
// Ground Truth for San Andres, Santander
if (master.cities['san andrés'] && master.cities['san andrés'].info['Santander']) {
    master.cities['san andrés'].info['Santander'] = "A picturesque colonial town in the Garcia Rovira province of Santander. Famous for its Andean landscapes and tradition of 'Mute Santandereano' and 'Pepitoria'. NOT the island department.";
}

fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', JSON.stringify(master, null, 2));
console.log('Successfully created colombia_master.json.');
