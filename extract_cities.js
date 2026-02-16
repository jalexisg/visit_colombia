const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/departments.json', 'utf8'));

const mapping = {};
data.forEach(dept => {
    // Some departments might have cities directly, some might have them in cityCapital
    // However, the user wants ALL cities. 
    // Looking at the JSON structure from previous grep, it seems like municipalities/cities might be in a 'cities' array if present, or we might need another source.
    // Wait, let's see if 'cities' is populated in departments.json.
    if (dept.cities && Array.isArray(dept.cities)) {
        mapping[dept.name] = dept.cities.map(c => c.name);
    } else if (dept.cityCapital) {
        mapping[dept.name] = [dept.cityCapital.name];
    } else {
        mapping[dept.name] = [];
    }
});

console.log(JSON.stringify(mapping, null, 2));
