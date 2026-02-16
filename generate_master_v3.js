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

// 3. Define definitive Gastronomy & Landmarks
const regionalGrounding = {
    "Santander": {
        "food": ["Hormigas Culonas (fried ants)", "Mute Santandereano (hearty soup)", "Pepitoria", "Arepa de Maíz Pelao", "Bocadillo Veleño"],
        "general_tips": ["Chicamocha Canyon is the main natural landmark.", "Andean mountains, no sea."]
    },
    "Boyacá": {
        "food": ["Cocido Boyacense", "Arepas Boyacenses", "Chicha", "Aguapanela with cheese"],
        "general_tips": ["Cold climate, paramos, colonial towns."]
    },
    "Antioquia": {
        "food": ["Bandeja Paisa", "Mazamorra", "Arepa de Mote", "Chorizo Antioqueño"],
        "general_tips": ["Paisa culture, coffee, flowers."]
    },
    "San Andrés y Providencia": {
        "food": ["Rundown (seafood stew)", "Crab Soup", "Fried Fish with Patacón", "Coconut Rice"],
        "general_tips": ["Caribbean Sea, Seven Colors Sea, coral reefs.", "NO Hormigas Culonas here."]
    },
    "Bolívar": {
        "food": ["Arroz con Coco", "Pescado Frito", "Arepa de Huevo"],
        "general_tips": ["Cartagena is the main city.", "Caribbean coast."]
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

        // Manual override for common hallucinations
        if (city === "san cristóbal" && dept === "Bolívar") desc = "A picturesque town on the Canal del Dique, known for traditional fishing.";
        if (city === "san gil") desc = "Colombia's adventure capital. Rafting, paragliding, and Gallineral Park.";

        master.cities[city].ground_truth[dept] = {
            description: desc,
            recommended_food: regionalGrounding[dept] ? regionalGrounding[dept].food : ["Local traditional dishes"],
            warnings: regionalGrounding[dept] ? regionalGrounding[dept].general_tips : []
        };
    });
}

fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', JSON.stringify(master, null, 2));
console.log('Successfully created V3 Master JSON.');
