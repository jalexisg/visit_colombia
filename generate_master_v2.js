const fs = require('fs');

// 1. Core geography
const cityDepts = JSON.parse(fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia.json', 'utf8'));

// 2. Extract specific descriptions from city-data.ts
const cityDataContent = fs.readFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/lib/city-data.ts', 'utf8');
const overviews = {};
const overviewRegex = /'([^']+)':\s*'([^']+)'/g;
let match;
while ((match = overviewRegex.exec(cityDataContent)) !== null) {
    overviews[match[1]] = match[2];
}

// 3. Define definitive Gastronomy & Landmarks (Manual Grounding based on website content)
const regionalGrounding = {
    "Santander": {
        "food": ["Hormigas Culonas (fried ants)", "Mute Santandereano (hearty soup)", "Pepitoria", "Arepa de Maíz Pelao", "Bocadillo Veleño"],
        "general_tips": ["Chicamocha Canyon is the main natural landmark.", "Avoid mentioning coastal landscapes; Santander is Andean."]
    },
    "Boyacá": {
        "food": ["Cocido Boyacense", "Arepas Boyacenses", "Chicha", "Aguapanela with cheese"],
        "general_tips": ["Famous for cold climate, paramos, and wool crafts (nobsa)."]
    },
    "Antioquia": {
        "food": ["Bandeja Paisa", "Mazamorra", "Arepa de Mote", "Chorizo Antioqueño"],
        "general_tips": ["Hacienda Napoles is in Puerto Triunfo.", "Guatape is the land of zocalos."]
    }
};

const master = {
    cities: {},
    regional_context: regionalGrounding
};

for (const [city, departments] of Object.entries(cityDepts)) {
    master.cities[city] = {
        departments: departments,
        ground_truth: {}
    };

    departments.forEach(dept => {
        const specificKey = `${dept.toLowerCase()}-${city.toLowerCase()}`;
        const genericKey = city.toLowerCase();

        let desc = overviews[specificKey] || overviews[genericKey] || "A beautiful destination in Colombia.";

        // Enhance description for key cities like San Gil
        if (city === "san gil") desc = "Colombia's adventure capital. Famous for rafting in the Fonce River, paragliding in Curiti/Chicamocha, and the Gallineral Park.";
        if (city === "nobsa") desc = "The wool capital of Colombia. Famous for high-quality ruanas, blankets, and traditional weaving crafts.";

        master.cities[city].ground_truth[dept] = {
            description: desc,
            recommended_food: regionalGrounding[dept] ? regionalGrounding[dept].food : ["Local traditional dishes"],
            warnings: regionalGrounding[dept] ? regionalGrounding[dept].general_tips : []
        };
    });
}

fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', JSON.stringify(master, null, 2));
console.log('Successfully created multi-layered colombia_master.json.');
