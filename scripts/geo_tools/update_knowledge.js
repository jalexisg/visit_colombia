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

// 3. Define definitive Gastronomy & Landmarks (Extremely explicit for Anti-Hallucination)
const regionalGrounding = {
    "Santander": {
        "food": ["Hormigas Culonas (Savory fried ants)", "Mute Santandereano (Savory meat and corn soup)", "Pepitoria (Savory rice with blood and viscera)", "Arepa de Maíz Pelao", "Bocadillo Veleño (Guava paste)"],
        "general_tips": ["Andean mountains and deep canyons (Chicamocha).", "NO beaches.", "NO Caribbean influence.", "Climate is temperate to warm mountain air."]
    },
    "Boyacá": {
        "food": ["Cocido Boyacense", "Arepas Boyacenses", "Chicha", "Aguapanela with cheese"],
        "general_tips": ["Cold mountain climate.", "Hand-woven wool crafts.", "Colonial heritage."]
    },
    "Antioquia": {
        "food": ["Bandeja Paisa", "Mazamorra", "Arepa de Mote", "Chorizo Antioqueño"],
        "general_tips": ["Coffee region.", "Mountainous terrain.", "Flower culture."]
    },
    "San Andrés y Providencia": {
        "food": ["Rundown (Savory seafood and coconut milk stew)", "Crab Soup", "Fried Fish with Patacón", "Coconut Rice"],
        "general_tips": ["Caribbean Sea.", "Sea of Seven Colors.", "Coral reefs and beaches.", "Island culture.", "NO fried ants."]
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

        // Manual override for critical disambiguation cases
        if (city === "san andrés" && dept === "Santander") {
            desc = "A historic mountain town in the Andean region of Garcia Rovira. It features colonial architecture and is surrounded by steep green mountains. WARNING: This is NOT the Caribbean island; there are NO beaches here.";
        }
        if (city === "san andrés" && dept === "San Andrés y Providencia") {
            desc = "A paradise Caribbean island famous for its Sea of Seven Colors, white sand beaches, and vibrant Afro-Caribbean culture. Hub for scuba diving and duty-free shopping.";
        }
        if (city === "san gil") {
            desc = "Colombia's adventure capital. Known for white-water rafting on the Fonce River, paragliding over Chicamocha, and the serene Gallineral Park.";
        }

        master.cities[city].ground_truth[dept] = {
            description: desc,
            recommended_food: regionalGrounding[dept] ? regionalGrounding[dept].food : ["Local traditional dishes"],
            warnings: regionalGrounding[dept] ? regionalGrounding[dept].general_tips : []
        };
    });
}

fs.writeFileSync('/Users/Alexis/Desktop/githubroot/github/visit_colombia/colombia_master.json', JSON.stringify(master, null, 2));
console.log('Successfully created Anti-Hallucination V4 Master JSON.');
