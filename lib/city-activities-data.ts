/**
 * City-specific "Things to Do" data.
 * Keys are lowercase city names (with accent variants for safety).
 * Falls back to department-level suggestions, then generic Colombia suggestions.
 */

const cityThingsToDo: Record<string, string[]> = {
    // ── Bogotá ───────────────────────────────────────────────────────────────
    'bogotá': [
        'Explore La Candelaria — the colonial centre with cobblestone streets and colourful houses.',
        'Visit the Museo del Oro, home to the world\'s largest pre-Columbian gold collection.',
        'Ride the cable car to Monserrate for panoramic views at 3,152 m.',
        'Stroll through Zona Rosa and Parque 93 for world-class dining and nightlife.',
        'See the Botero Museum with 120+ sculptures and paintings — free entry.',
        'Cycle the Ciclovía on Sundays when 120 km of roads are car-free.',
    ],
    'bogota': [
        'Explore La Candelaria — the colonial centre with cobblestone streets and colourful houses.',
        'Visit the Museo del Oro, home to the world\'s largest pre-Columbian gold collection.',
        'Ride the cable car to Monserrate for panoramic views at 3,152 m.',
        'Stroll through Zona Rosa and Parque 93 for world-class dining and nightlife.',
        'See the Botero Museum with 120+ sculptures and paintings — free entry.',
        'Cycle the Ciclovía on Sundays when 120 km of roads are car-free.',
    ],

    // ── Antioquia ────────────────────────────────────────────────────────────
    'medellín': [
        'Ride the iconic Metrocable for aerial views over the Comunas and the valley.',
        'Walk through the open-air Museo de Antioquia and Botero Plaza.',
        'Visit the Parque Arví nature reserve, accessible by cable car above the city.',
        'Explore El Poblado and Laureles neighbourhoods for food and nightlife.',
        'Day-trip to Guatapé and climb El Peñón for stunning reservoir views.',
        'Visit Pueblito Paisa atop Cerro Nutibara for traditional Antioquian architecture.',
    ],
    'medellin': [
        'Ride the iconic Metrocable for aerial views over the Comunas and the valley.',
        'Walk through the open-air Museo de Antioquia and Botero Plaza.',
        'Visit the Parque Arví nature reserve, accessible by cable car above the city.',
        'Explore El Poblado and Laureles neighbourhoods for food and nightlife.',
        'Day-trip to Guatapé and climb El Peñón for stunning reservoir views.',
        'Visit Pueblito Paisa atop Cerro Nutibara for traditional Antioquian architecture.',
    ],
    'guatapé': [
        'Climb the 740 steps carved into El Peñón monolith for breathtaking 360° views.',
        'Take a boat tour around the stunning Guatapé Reservoir and its many islands.',
        'Wander the colourful "Zócalos"-decorated village streets.',
        'Try "arepa de chócolo" and fresh reservoir trout at lakeside restaurants.',
        'Kayak or paddleboard on the calm reservoir at sunset.',
    ],
    'guatape': [
        'Climb the 740 steps carved into El Peñón monolith for breathtaking 360° views.',
        'Take a boat tour around the stunning Guatapé Reservoir and its many islands.',
        'Wander the colourful "Zócalos"-decorated village streets.',
        'Try "arepa de chócolo" and fresh reservoir trout at lakeside restaurants.',
        'Kayak or paddleboard on the calm reservoir at sunset.',
    ],
    'santa fe de antioquia': [
        'Walk the medieval-style cobblestone streets of this "Pueblo Patrimonio."',
        'Cross the Puente de Occidente, one of the oldest suspension bridges in the Americas.',
        'Browse artisan gold and silver jewellery shops in the colonial centre.',
        'Swim in the warm tropical Cauca River at the local beaches.',
        'Taste traditional sancocho, bandeja paisa, and sweet breads at local restaurants.',
    ],
    'jardín': [
        'Admire the stunning neo-Gothic colonial church, one of Antioquia\'s most beautiful.',
        'Ride the cable gondola above coffee-covered hillsides for panoramic views.',
        'Hike to the Reserva Natural El Jardín and its crystal-clear waterfalls.',
        'Sit in the colourful main square and enjoy a tinto coffee while people-watching.',
        'Birdwatch in the cloud forests — one of Colombia\'s premier birding destinations.',
    ],
    'jardin': [
        'Admire the stunning neo-Gothic colonial church, one of Antioquia\'s most beautiful.',
        'Ride the cable gondola above coffee-covered hillsides for panoramic views.',
        'Hike to the Reserva Natural El Jardín and its waterfalls.',
        'Sit in the colourful main square and enjoy a tinto while people-watching.',
        'Birdwatch in the cloud forests — one of Colombia\'s premier birding destinations.',
    ],
    'jericó': [
        'Visit the local Museo Laura Montoya, honouring Colombia\'s first saint.',
        'Hike to the Alto de las Cruces viewpoint for spectacular valley panoramas.',
        'Explore the picturesque main square and colonial church.',
        'Take a mule ride through surrounding coffee and panela farms.',
    ],
    'jerico': [
        'Visit the local Museo Laura Montoya, honouring Colombia\'s first saint.',
        'Hike to the Alto de las Cruces viewpoint for spectacular valley panoramas.',
        'Explore the picturesque main square and colonial church.',
        'Take a mule ride through surrounding coffee and panela farms.',
    ],
    'puerto triunfo': [
        'Visit Hacienda Nápoles Park — Escobar\'s former estate, now a wildlife safari park.',
        'Swim in the natural water parks set within the former estate grounds.',
        'Take a Magdalena River excursion and spot hippos and exotic birds.',
    ],
    'arboletes': [
        'Bathe in the unique natural Volcán de Lodo (mud volcano) — a surreal experience.',
        'Relax on Caribbean beaches and explore the local fishing culture.',
        'Try fresh seafood at beachside restaurants.',
    ],
    'turbo': [
        'Explore the Gulf of Urabá coastline and Afro-Caribbean beach culture.',
        'Take a boat to pristine beaches and mangrove forests of the gulf.',
        'Sample Afro-Colombian seafood specialties like fish sancocho and coconut rice.',
        'Birdwatch in the mangrove forest ecosystems bordering the gulf.',
    ],

    // ── Bolívar / Cartagena ──────────────────────────────────────────────────
    'cartagena': [
        'Walk the legendary Walled City and explore the colourful colonial streets.',
        'Watch the sunset from atop Castillo de San Felipe de Barajas fortress.',
        'Take a boat to Islas del Rosario for coral reef snorkelling and white-sand beaches.',
        'Explore Getsemaní neighbourhood with its street art and vibrant nightlife.',
        'Learn about Afro-Colombian culture from a traditional Palenquera fruit vendor.',
        'Enjoy a rooftop dinner within the Old City walls at sunset.',
    ],
    'mompox': [
        'Walk the enchanting UNESCO-listed colonial streets at dusk.',
        'Visit the baroque Santa Bárbara Church with its iconic octagonal tower.',
        'Browse world-famous filigree gold and silver jewellery workshops.',
        'Take a sunset canoe ride on the Magdalena River.',
        'Spot caimans, iguanas, and exotic birds in the surrounding wetlands.',
    ],

    // ── Santa Marta / Magdalena ──────────────────────────────────────────────
    'santa marta': [
        'Trek to the Lost City (Ciudad Perdida), a 1,000-year-old Teyuna archaeological site.',
        'Explore Tayrona National Park\'s beaches, jungle trails, and wildlife.',
        'Visit Quinta de San Pedro Alejandrino where Simón Bolívar spent his last days.',
        'Snorkel or dive in the coral reefs under the Sierra Nevada foothills.',
        'Take a boat trip to the coves and beaches near Taganga.',
    ],
    'aracataca': [
        'Visit the Casa Museo Gabriel García Márquez, birthplace of the Nobel laureate.',
        'Walk through the real "Macondo" that inspired One Hundred Years of Solitude.',
        'Explore the legendary train station immortalised in García Márquez\'s works.',
        'Sample traditional regional cuisine in the hot banana-zone valley.',
    ],
    'ciénaga': [
        'Visit the Ciénaga Grande de Santa Marta, a UNESCO Ramsar wetland.',
        'Explore the floating village of Nueva Venecia, accessible only by boat.',
        'Try fresh fish from artisan fishermen on the ciénaga.',
        'Birdwatch in one of Colombia\'s most important wetland ecosystems.',
    ],
    'cienaga': [
        'Visit the Ciénaga Grande de Santa Marta, a UNESCO Ramsar wetland.',
        'Explore the floating village of Nueva Venecia, accessible only by boat.',
        'Try fresh fish from artisan fishermen on the ciénaga.',
        'Birdwatch in one of Colombia\'s most important wetland ecosystems.',
    ],

    // ── Valle del Cauca ──────────────────────────────────────────────────────
    'cali': [
        'Take a salsa class with a local instructor in the world\'s salsa capital.',
        'Visit the Cristo Rey statue for panoramic views over the city.',
        'Explore the bohemian San Antonio neighbourhood for cafés and colonial architecture.',
        'Attend a salsa show at one of the legendary "salsatecas" on Avenida 6.',
        'Walk the Bulevar del Río and visit the interactive cultural spaces.',
        'Day-trip to Lago Calima for world-class windsurfing and kiteboarding.',
    ],
    'buga': [
        'Visit the Basilica of the Lord of Miracles, a major pilgrimage site.',
        'Tour the Laguna de Sonso wetland bird reserve.',
        'Sample traditional "manjar blanco" (Buga\'s signature sweet) in the market.',
    ],
    'guadalajara de buga': [
        'Visit the Basilica of the Lord of Miracles, a major pilgrimage site.',
        'Tour the Laguna de Sonso wetland bird reserve.',
        'Sample traditional "manjar blanco" (Buga\'s signature sweet) in the market.',
    ],
    'roldanillo': [
        'Paraglide over the stunning valley — the site of World Cup competitions.',
        'Visit the Museum of Printmaking with murals from the famous Roldanillo art school.',
        'Explore local sugar cane farms and traditional panela production.',
    ],
    'buenaventura': [
        'Try exceptional Pacific cuisine: encocado de cangrejo, ceviche, and arroz con coco.',
        'Take a boat tour to pristine Pacific beaches like La Bocana and Ladrilleros.',
        'Whale watch (July–October) in an important Pacific breeding corridor.',
        'Explore the mangrove forests and wetland channels of the Pacific coast.',
    ],

    // ── Eje Cafetero ─────────────────────────────────────────────────────────
    'armenia': [
        'Visit the Quimbaya Gold Museum with a stunning pre-Columbian collection.',
        'See the iconic wax palms of the Cocora Valley on a day trip.',
        'Tour a traditional coffee hacienda and learn the full bean-to-cup process.',
        'Explore the National Coffee Park for immersive agrotourism experiences.',
    ],
    'salento': [
        'Hike through the Cocora Valley among the world\'s tallest wax palm trees.',
        'Tour a traditional coffee farm and learn sustainable coffee production.',
        'Walk the colourful main street (Calle Real) and browse artisan shops.',
        'Try fresh trucha (trout) at a riverside restaurant.',
        'Birdwatch in the cloud forest for the endangered Yellow-eared Parrot.',
    ],
    'pereira': [
        'Visit the iconic Bolívar Desnudo statue — one of Colombia\'s most famous urban monuments.',
        'Tour coffee farms in the surrounding Risaralda countryside.',
        'Explore the Ukumari Biopark, a world-class ecotourism destination.',
        'Day-trip to Termales San Vicente hot springs in the cloud forest.',
    ],
    'manizales': [
        'Visit the stunning neo-Gothic Manizales Cathedral, one of South America\'s most impressive.',
        'Take the cable car to the Recinto del Pensamiento nature complex for birding.',
        'Hike or take a jeep to Los Nevados National Park and snow-capped volcanoes.',
        'Experience the Feria de Manizales (January) with music and cultural events.',
    ],
    'filandia': [
        'Climb the Mirador Filandia tower for 360° views of the coffee region.',
        'Browse world-famous wicker handicrafts and basket weaving workshops.',
        'Stroll the colourful main plaza and photograph colonial architecture.',
        'Hike in the nearby bamboo forest and coffee trails.',
    ],
    'pijao': [
        'Explore the village at a slow, deliberate pace — it\'s a certified "Cittaslow" slow city.',
        'Hike in the surrounding mountains to pristine waterfalls.',
        'Visit local organic farms for coffee, panela, and regional produce.',
    ],
    'circasia': [
        'Visit the beautiful colonial church in the main plaza.',
        'Explore the coffee trails and traditional farms in the surrounding hills.',
        'Stroll the colourful heritage town streets and admire traditional architecture.',
    ],
    'calarcá': [
        'Take a tour of a coffee farm and discover the coffee harvest process.',
        'Visit the Jardín Botánico del Quindío with native orchids and butterflies.',
        'Explore the colourful village streets and traditional heritage architecture.',
    ],
    'calcara': [
        'Take a tour of a coffee farm and discover the coffee harvest process.',
        'Visit the Jardín Botánico del Quindío with native orchids and butterflies.',
        'Explore the colourful village streets and traditional heritage architecture.',
    ],

    // ── Boyacá ───────────────────────────────────────────────────────────────
    'villa de leyva': [
        'Explore the enormous cobblestone Plaza Mayor, one of the largest in South America.',
        'Visit the El Fósil Museum, home to a remarkable Kronosaurus marine reptile fossil.',
        'Hike to the Pozos Azules for beautiful turquoise mineral springs.',
        'Browse artisan workshops for pottery, wool, and leather goods.',
        'Take a tour of local vineyards producing Colombia\'s finest highland wines.',
    ],
    'tunja': [
        'Explore outstanding colonial architecture, convents and historic churches.',
        'Visit the Casa del Fundador Suárez Rendón, a stunning 16th-century mansion.',
        'See the Cathedral of Santiago de Tunja with its remarkable painted murals.',
        'Walk the historic centre where Colombian Independence was proclaimed.',
    ],
    'ráquira': [
        'Shop for traditional Raquira ceramics at Colombia\'s pottery capital.',
        'Explore the multicolour village with hand-painted ceramic-decorated facades.',
        'Visit the Benedictine Monastery of La Candelaria nearby.',
    ],
    'raquira': [
        'Shop for traditional Raquira ceramics at Colombia\'s pottery capital.',
        'Explore the multicolour village with hand-painted ceramic-decorated facades.',
        'Visit the Benedictine Monastery of La Candelaria nearby.',
    ],

    // ── Santander ─────────────────────────────────────────────────────────────
    'bucaramanga': [
        'Try "hormigas culonas" (giant roasted ants), a legendary local delicacy.',
        'Day-trip to the spectacular Cañón del Chicamocha scenic park.',
        'Paraglide from Ruitoque for stunning views over the canyon.',
        'Explore the Parque Santander and García Rovira neighbourhood.',
    ],
    'san gil': [
        'White-water raft the legendary Río Fonce, one of Colombia\'s best adventure rivers.',
        'Rappel at the Cascada Juan Curí waterfall or zipline over the canyon.',
        'Visit Barichara, Colombia\'s most beautiful colonial village, 20 min away.',
        'Hike the historic Camino Real from Barichara to Guane.',
        'Spelunk in the spectacular Cueva de la Vaca stalactite cave.',
    ],
    'barichara': [
        'Walk the perfectly preserved cobblestone streets, a National Heritage Site.',
        'Hike the ancient Camino Real de los Guane trail to the village of Guane.',
        'Visit the Cathedral of the Immaculate Conception, Santander\'s most beautiful church.',
        'Browse artisan workshops for handmade paper, pottery, and stone carvings.',
        'Photograph the spectacular Suárez River canyon views at sunset.',
    ],

    // ── La Guajira ───────────────────────────────────────────────────────────
    'riohacha': [
        'Walk the Malecón (seafront promenade) for stunning Caribbean sunsets.',
        'Explore artisan markets for Wayuu mochilas (bags) and hammocks.',
        'Day-trip to Santuario de Fauna y Flora Los Flamencos for flamingo watching.',
        'Try traditional Wayuu cuisine: friche and fresh coconut desserts.',
        'Arrange excursions to Punta Gallinas, the northernmost point of South America.',
    ],
    'cabo de la vela': [
        'Kitesurf or surf in the powerful, consistent trade winds of the Guajira Peninsula.',
        'Hike to Pilón de Azúcar for the most spectacular desert-meets-Caribbean sunset.',
        'Camp under an incredible star-filled sky on the remote Guajira Peninsula.',
        'Buy fresh lobster from Wayuu fishermen and grill it on the beach.',
    ],
    'manaure': [
        'Tour the world\'s largest artisanal sea salt production flats — a surreal pink-white landscape.',
        'Watch flamingo colonies that gather around the salt pans.',
        'Learn about traditional Wayuu salt harvesting culture and traditions.',
    ],
    'uribia': [
        'Experience the most authentic Wayuu indigenous culture in Colombia.',
        'Purchase handmade mochilas and chinchorros directly from artisan weavers.',
        'Take excursions to Punta Gallinas, the northernmost tip of South America.',
    ],

    // ── Huila ───────────────────────────────────────────────────────────────
    'san agustín': [
        'Explore the San Agustín Archaeological Park, a UNESCO World Heritage Site.',
        'Discover the mysterious pre-Columbian stone statues and burial mounds.',
        'Horseback ride to remote archaeological sites through the Andean countryside.',
        'Swim in natural pools of the Magdalena River near its source.',
        'Visit the sacred Fuente de Lavapatas water canal carved in stone.',
    ],
    'san agustin': [
        'Explore the San Agustín Archaeological Park, a UNESCO World Heritage Site.',
        'Discover the mysterious pre-Columbian stone statues and burial mounds.',
        'Horseback ride to remote archaeological sites through the Andean countryside.',
        'Swim in natural pools of the Magdalena River near its source.',
        'Visit the sacred Fuente de Lavapatas water canal carved in stone.',
    ],
    'neiva': [
        'Experience the Festival Nacional del Bambuco (June–July), Colombia\'s national folk festival.',
        'Visit the Archaeological Museum with Huila\'s pre-Columbian collections.',
        'Walk the Malecón Río Magdalena for sunset views over the great river.',
        'Sample "asado huilense," the region\'s legendary roasted pork specialty.',
    ],

    // ── Nariño ───────────────────────────────────────────────────────────────
    'pasto': [
        'Experience the Carnaval de Negros y Blancos (January), a UNESCO intangible heritage festival.',
        'Day-trip to the Las Lajas Sanctuary, a breathtaking neogothic basilica in a gorge.',
        'Discover exquisite Barniz de Pasto lacquerware in local artisan shops.',
        'Visit Galeras Volcano viewpoints for spectacular Andean landscapes.',
        'Explore the Museo del Oro Tumaco for pre-Columbian Pacific coastal artefacts.',
    ],
    'ipiales': [
        'Visit the magnificent Las Lajas Sanctuary basilica, built over a gorge near Ecuador.',
        'Cross the Rumichaca bridge to Tulcán, Ecuador for a day trip.',
        'Explore indigenous artisan markets with traditional southern Andean crafts.',
    ],
    'tumaco': [
        'Experience the rich Afro-Colombian culture and traditional Pacific music.',
        'Try exceptional fresh seafood: ceviche, encocado de mariscos, and arroz con coco.',
        'Visit the beautiful Pacific beaches and explore mangrove waterways.',
        'Whale watch (July–October) in the rich Pacific waters.',
    ],
    'cumbal': [
        'Hike on the Cumbal Volcano — one of Colombia\'s most accessible active volcanoes.',
        'Explore the Páramo de Chiles with its extraordinary highland ecosystem.',
        'Meet indigenous Pasto communities and learn about their Andean traditions.',
    ],

    // ── Meta / Llanos ────────────────────────────────────────────────────────
    'villavicencio': [
        'Visit Ocarros Biopark, one of Colombia\'s best bioparks with Llanos wildlife.',
        'Experience live joropo music and watch the traditional "Coleo" rodeo sport.',
        'Taste "mamona" (slow-roasted beef) and traditional Llanero dishes.',
        'Explore the Llanos savanna at sunrise for spectacular wildlife spotting.',
    ],
    'puerto lópez': [
        'Visit the Obelisco de Alto de Menegua, the exact geographic centre of Colombia.',
        'Swim and kayak in the mighty Meta River.',
        'Spot capybaras, giant anteaters, and birds in the surrounding savanna.',
        'Experience traditional Llanero ranch culture at a local hato.',
    ],
    'puerto lopez': [
        'Visit the Obelisco de Alto de Menegua, the exact geographic centre of Colombia.',
        'Swim and kayak in the mighty Meta River.',
        'Spot capybaras, giant anteaters, and birds in the surrounding savanna.',
        'Experience traditional Llanero ranch culture at a local hato.',
    ],
    'granada-meta': [
        'Swim in crystal-clear rivers flowing from the Andean foothills into the Llanos.',
        'Explore the fertile Ariari region farmlands on horseback.',
        'Try traditional Llanero cuisine and fresh tropical fruits from the region.',
    ],

    // ── Amazonia ─────────────────────────────────────────────────────────────
    'leticia': [
        'Take a river excursion to see pink Amazon dolphins in their natural habitat.',
        'Visit Ticuna indigenous communities and learn about their ancestral traditions.',
        'Explore Amacayacu National Park for wildlife: sloths, monkeys, and piranhas.',
        'Canoe to the Peruvian Amazon town of Santa Rosa across the river.',
        'Birdwatch at dawn in floodplain forests with 500+ species recorded locally.',
    ],

    // ── Caribbean Coast ──────────────────────────────────────────────────────
    'barranquilla': [
        'Experience the legendary Barranquilla Carnaval (Feb), the second largest in the world.',
        'Visit the Museo del Caribe, an outstanding regional cultural museum.',
        'Explore historic Barrio El Prado and its stunning Art Deco architecture.',
        'Try Caribbean coastal dishes: sancocho de guandú, mote de queso, and butifarra.',
        'Enjoy the vibrant nightlife around Zona Rosa and cumbia-filled dance halls.',
    ],

    // ── Chocó / Pacific ─────────────────────────────────────────────────────
    'quibdó': [
        'Experience the Festival de San Pacho (October), a UNESCO intangible heritage festival.',
        'Take river excursions into the extraordinary Chocó rainforest ecosystem.',
        'Try traditional Pacific cuisine: tapao de pescado, pusandao, and patacones.',
        'Visit indigenous Emberá communities along the river tributaries.',
    ],
    'nuquí': [
        'Whale watch (June–October): see humpback whales breaching in Pacific waters.',
        'Hike pristine trails through Utría National Park rainforest.',
        'Surf some of Colombia\'s most consistent and uncrowded Pacific waves.',
        'Relax on pristine black-sand Pacific beaches accessible only by boat or plane.',
        'Visit natural hot springs on the coast, accessible at low tide.',
    ],
    'nuqui': [
        'Whale watch (June–October): see humpback whales breaching in Pacific waters.',
        'Hike pristine trails through Utría National Park rainforest.',
        'Surf some of Colombia\'s most consistent and uncrowded Pacific waves.',
        'Relax on pristine black-sand Pacific beaches accessible only by boat or plane.',
    ],
    'bahía solano': [
        'Whale watch in one of Colombia\'s premier Pacific wildlife sanctuaries.',
        'Snorkel or dive in extraordinary Pacific underwater biodiversity.',
        'Hike to jaw-dropping Pacific rainforest waterfalls.',
        'Visit El Valle marine turtle nesting beaches.',
    ],
    'bahia solano': [
        'Whale watch in one of Colombia\'s premier Pacific wildlife sanctuaries.',
        'Snorkel or dive in extraordinary Pacific underwater biodiversity.',
        'Hike to jaw-dropping Pacific rainforest waterfalls.',
        'Visit El Valle marine turtle nesting beaches.',
    ],

    // ── San Andrés & Providencia ──────────────────────────────────────────────
    'san andrés': [
        'Snorkel or dive in the Caribbean\'s clearest waters at the Seaflower Biosphere Reserve.',
        'Swim at La Piscinita (Natural Aquarium) with colourful tropical fish.',
        'Explore the island by golf cart and find the Seven Colours Sea viewpoint.',
        'Try Raizal cuisine: rondón coconut stew, crab, and fresh lobster.',
        'Buy tax-free rum and locally made Raizal handicrafts.',
    ],
    'providencia': [
        'Dive the pristine coral reefs of the third-largest barrier reef in the Western Hemisphere.',
        'Hike to the Peak (El Pico) for spectacular panoramic island views.',
        'Snorkel at Old Providence McBean Lagoon National Park.',
        'Experience the laid-back Raizal island culture and reggae music.',
        'Kayak around the mangroves of Freshwater Bay.',
    ],

    // ── Córdoba ──────────────────────────────────────────────────────────────
    'montería': [
        'Walk the Ronda del Sinú (Paseo del Río) promenade along the Sinú River at sunset.',
        'Try traditional Cordobese cuisine: mote de queso, bollo de yuca, and chipi chipi.',
        'Visit the Zoológico de Montería wildlife park.',
        'Explore the Sinú River valley with its famous cattle ranching culture.',
    ],
    'monteria': [
        'Walk the Ronda del Sinú (Paseo del Río) promenade along the Sinú River at sunset.',
        'Try traditional Cordobese cuisine: mote de queso, bollo de yuca, and chipi chipi.',
        'Visit the Zoológico de Montería wildlife park.',
        'Explore the Sinú River valley with its famous cattle ranching culture.',
    ],

    // ── Tolima ───────────────────────────────────────────────────────────────
    'ibagué': [
        'Attend the San Juan Festival (June–July), Colombia\'s most vibrant folkloric festival.',
        'Visit the Conservatory of Music — Colombia\'s oldest and most prestigious.',
        'Try the legendary Tamal Tolimense, a regional culinary masterpiece.',
        'Day-trip to Honda colonial city for a window into river trade history.',
    ],
    'ibague': [
        'Attend the San Juan Festival (June–July), Colombia\'s most vibrant folkloric festival.',
        'Visit the Conservatory of Music — Colombia\'s oldest and most prestigious.',
        'Try the legendary Tamal Tolimense, a regional culinary masterpiece.',
        'Day-trip to Honda colonial city for a window into river trade history.',
    ],
    'honda': [
        'Cross the historic bridges over the Magdalena River and explore the colonial centre.',
        'Visit the Museo del Río Magdalena for interactive exhibits on river history.',
        'Try the famous bocachico frito — the legendary fried fish of the Magdalena River.',
        'Walk the Calle de las Trampas, a storied colonial alley full of history.',
    ],
    'melgar': [
        'Relax in one of hundreds of private resort pools with warm, natural water.',
        'Raft or kayak the Sumapaz and Bogotá rivers.',
        'Experience the lively weekend atmosphere with authentic Tolima regional cuisine.',
    ],

    // ── Norte de Santander ───────────────────────────────────────────────────
    'cúcuta': [
        'Visit historical Villa del Rosario, where Colombia\'s 1821 constitution was signed.',
        'Explore unique border culture and commerce between Colombia and Venezuela.',
        'Try traditional Cucuteño cuisine: mute santandereano and chicharrón.',
        'Visit the Parque Santander and the neoclassical Cathedral of San José.',
    ],
    'cucuta': [
        'Visit historical Villa del Rosario, where Colombia\'s 1821 constitution was signed.',
        'Explore unique border culture and commerce between Colombia and Venezuela.',
        'Try traditional Cucuteño cuisine: mute santandereano and chicharrón.',
        'Visit the Parque Santander and the neoclassical Cathedral of San José.',
    ],
    'pamplona': [
        'Experience the world-famous Semana Santa (Holy Week) processions.',
        'Explore outstanding colonial architecture and a vibrant university atmosphere.',
        'Visit the Museum of Arte Religioso for colonial art treasures.',
    ],
    'la playa': [
        'Visit the spectacular La Playa de Belén stone formations — mushroom-shaped rock sculptures.',
        'Hike through the surrounding Andean mountain landscape.',
        'Explore the extraordinary geological formations carved by centuries of wind erosion.',
    ],

    // ── Sucre ────────────────────────────────────────────────────────────────
    'sincelejo': [
        'Attend the January "Corralejas" rodeo festival, a unique Caribbean equestrian tradition.',
        'Explore artisan markets for Zenú culture handicrafts and woven hats.',
        'Try traditional Caribbean coastal cuisine in the lively local market.',
    ],
    'coveñas': [
        'Relax on the calm Gulf of Morrosquillo beaches with warm, crystal-clear water.',
        'Take boat trips to nearby islands and explore the Caribbean coast.',
        'Try fresh seafood from local fisher families.',
    ],
    'covenas': [
        'Relax on the calm Gulf of Morrosquillo beaches with warm, crystal-clear water.',
        'Take boat trips to nearby islands and explore the Caribbean coast.',
        'Try fresh seafood from local fisher families.',
    ],
    'sampués': [
        'Visit artisan workshops where Colombia\'s iconic sombrero vueltiao hats are hand-woven.',
        'Browse the large market for handmade Zenú hammocks and traditional bags.',
        'Witness the traditional weaving of caña flecha (royal palm) fibers.',
    ],
    'sampues': [
        'Visit artisan workshops where Colombia\'s iconic sombrero vueltiao hats are hand-woven.',
        'Browse the large market for handmade Zenú hammocks and traditional bags.',
        'Witness the traditional weaving of caña flecha (royal palm) fibers.',
    ],

    // ── Cesar ─────────────────────────────────────────────────────────────────
    'valledupar': [
        'Attend the Festival de la Leyenda Vallenata (April–May) for world-class vallenato.',
        'Visit the Casa del Acordeón and La Casa de los Festivales museums.',
        'Swim in the crystal-clear Guatapurí River right in the city.',
        'Try traditional cuisine: sáncocho de gallina, bollo, and chicha maíz.',
    ],

    // ── Arauca ───────────────────────────────────────────────────────────────
    'arauca': [
        'Experience authentic Llanero culture: joropo music, harp, and maracas.',
        'Watch a traditional Coleo rodeo — Colombia\'s national Llanos sport.',
        'Take river excursions to spot giant anteaters, capybaras, and caimans.',
        'Try traditional Llanero mamona (slow-roasted beef) and cachapas.',
    ],

    // ── Vaupés ───────────────────────────────────────────────────────────────
    'mitú': [
        'Visit Tukano indigenous communities along the Vaupés River.',
        'Birdwatch in one of the world\'s most biodiverse jungle ecosystems.',
        'Explore spectacular river rapids and rock formations of the Vaupés.',
        'Learn about the dozen indigenous languages and ancestral cultures of the region.',
    ],
    'mitu': [
        'Visit Tukano indigenous communities along the Vaupés River.',
        'Birdwatch in one of the world\'s most biodiverse jungle ecosystems.',
        'Explore spectacular river rapids and rock formations of the Vaupés.',
        'Learn about the dozen indigenous languages and ancestral cultures of the region.',
    ],

    // ── Putumayo ─────────────────────────────────────────────────────────────
    'mocoa': [
        'Hike to the spectacular "Fin del Mundo" waterfall cascade system near the city.',
        'Explore the junction where Andean cloud forest merges into Amazon rainforest.',
        'Visit Siona, Kamsá, and Ingano indigenous communities with ancestral traditions.',
        'Swim in natural pools in crystal-clear jungle rivers and streams.',
    ],
    'sibundoy': [
        'Participate in traditional ceremonies with Kamentsá and Inga indigenous peoples.',
        'Visit unique handicraft markets for indigenous textiles and ceremonial objects.',
        'Explore the volcanic páramo headwaters of the Sibundoy Valley.',
    ],
};

const departmentFallbacks: Record<string, string[]> = {
    'antioquia': [
        'Tour a traditional coffee hacienda and learn the bean-to-cup process.',
        'Explore Antioquian colonial architecture and vibrant main plazas.',
        'Hike in the lush Andean coffee landscape and cloud forests.',
        'Try the legendary Bandeja Paisa and traditional Antioquian sweets.',
        'Visit the local market for artisan crafts and regional produce.',
    ],
    'cundinamarca': [
        'Explore the charming colonial streets and main plaza.',
        'Take a hike in the surrounding Andean mountains and páramos.',
        'Try traditional Cundiboyacense cuisine: ajiaco, changua, and almojábanas.',
        'Browse local artisan markets for handmade crafts.',
    ],
    'boyacá': [
        'Explore cobblestone streets and colonial heritage buildings.',
        'Hike in the Boyacense Andes and spectacular páramo ecosystems.',
        'Try traditional cuisine: cocido boyacense and cuajada con melao.',
        'Purchase traditional pottery and wool crafts from local artisans.',
    ],
    'nariño': [
        'Explore Andean landscapes with views of nearby volcanoes.',
        'Visit the colonial church and main plaza cultural heritage.',
        'Try traditional Nariñense cuisine: cuy, papas chorreadas, and hervido.',
        'Browse indigenous artisan markets for traditional crafts.',
    ],
    'meta': [
        'Experience authentic Llanero culture and joropo music.',
        'Spot wildlife: capybaras, caimans, and over 300 bird species.',
        'Try mamona (slow-roasted Llanero beef) and traditional dishes.',
        'Explore the vast Llanos savannas on horseback.',
    ],
    'magdalena': [
        'Explore the Caribbean landscape and regional cultural heritage.',
        'Try traditional Caribbean cuisine: sancocho, arepas, and fresh fish.',
        'Discover the Gabriel García Márquez literary geography of the region.',
        'Visit local markets for fresh tropical fruits and regional produce.',
    ],
    'tolima': [
        'Try the legendary Tamal Tolimense and regional Tolima cuisine.',
        'Explore the warm Magdalena River valley landscapes.',
        'Visit local archaeological and colonial heritage sites.',
        'Hike in the surrounding Andean mountains and coffee landscapes.',
    ],
    'valle del cauca': [
        'Take a salsa class and experience the valley\'s famous musical culture.',
        'Tour a local sugar cane hacienda or coffee farm.',
        'Try traditional Vallecaucano cuisine: sancocho de gallina and chuleta valluna.',
        'Explore the Andean foothills and Pacific mountain landscapes.',
    ],
    'santander': [
        'Try hormigas culonas (giant ants) and traditional Santandereano food.',
        'Experience adventure sports: rafting, paragliding, or spelunking.',
        'Explore the dramatic Chicamocha Canyon landscape.',
        'Visit colonial heritage towns with stunning architecture.',
    ],
    'cauca': [
        'Visit indigenous Nasa and Misak communities with extraordinary traditions.',
        'Explore Puracé National Park and its volcanic landscape.',
        'Try traditional Caucano cuisine and indigenous-inspired dishes.',
        'Hike in Andean cloud forests and spectacular páramos.',
    ],
    'chocó': [
        'Go whale watching in the biodiverse Pacific waters (July–October).',
        'Explore the extraordinary Chocó rainforest ecosystems by river.',
        'Try traditional Pacific cuisine: encocado, tapao, and patacones.',
        'Visit indigenous Emberá communities along river tributaries.',
    ],
    'amazonas': [
        'Explore the Amazon rainforest with expert local indigenous guides.',
        'Spot pink river dolphins and exotic Amazonian wildlife.',
        'Visit indigenous communities with ancient cultural traditions.',
        'Birdwatch at dawn in one of the most biodiverse ecosystems on Earth.',
    ],
    'arauca': [
        'Experience authentic Llanero culture: joropo music and traditional dance.',
        'Watch a traditional Coleo (horse and bull taming) rodeo competition.',
        'Spot capybaras, orinoco caimans, and hundreds of bird species.',
        'Try traditional mamona (slow-roasted beef) and Llanero cuisine.',
    ],
    'risaralda': [
        'Tour coffee farms and learn about sustainable coffee production.',
        'Hike in the cloud forests of the Coffee Cultural Landscape.',
        'Try traditional Paisa cuisine and freshly roasted specialty coffee.',
        'Visit artisan markets and cultural heritage sites of the Eje Cafetero.',
    ],
    'quindío': [
        'Tour a traditional coffee hacienda and participate in the harvest.',
        'See the wax palm trees of the Cocora Valley, Colombia\'s national tree.',
        'Explore the colourful architecture of the Coffee Region\'s heritage towns.',
        'Try traditional cuisine: sancocho, trucha, and freshly roasted coffee.',
    ],
    'sucre': [
        'Explore traditional Zenú indigenous crafts and cultural heritage.',
        'Try Caribbean coastal cuisine: mote de queso, bollo, and fresh fish.',
        'Visit the Caribbean coast and wetlands of the Gulf of Morrosquillo.',
        'Experience traditional Caribbean music and folklore festivals.',
    ],
    'cesar': [
        'Listen to live vallenato music in a local setting.',
        'Try traditional Caribbean cuisine of the Cesar valley.',
        'Visit the cultural heritage sites of the Sierra Nevada foothills.',
        'Explore the Guatapurí and Badillo rivers for swimming and nature.',
    ],
    'la guajira': [
        'Buy handmade Wayuu mochilas (bags) and chinchorros (hammocks) from artisans.',
        'Experience the extraordinary Wayuu indigenous culture.',
        'Explore the stunning desert-meets-sea landscapes of the Guajira Peninsula.',
        'Try traditional Wayuu cuisine: friche and fresh seafood.',
    ],
    'huila': [
        'Explore the San Agustín or Tierradentro pre-Columbian archaeological sites.',
        'Swim in the warm rivers and natural pools of the Huila valley.',
        'Try traditional "asado huilense" and fried river fish.',
        'Experience the Bambuco folk festival and traditional music of the region.',
    ],
    'córdoba': [
        'Experience the unique Caribbean-Andean culture of the Sinú River valley.',
        'Try traditional cuisine: mote de queso, bollo de yuca, and butifarra.',
        'Explore the natural beauty of the Sinú River and its wetlands.',
        'Visit traditional cattle ranching haciendas and indigenous artisan markets.',
    ],
    'cordoba': [
        'Experience the unique Caribbean-Andean culture of the Sinú River valley.',
        'Try traditional cuisine: mote de queso, bollo de yuca, and butifarra.',
        'Explore the natural beauty of the Sinú River and its wetlands.',
        'Visit traditional cattle ranching haciendas and indigenous artisan markets.',
    ],
    'putumayo': [
        'Explore the Amazon-Andean transition zone in one of Colombia\'s wildest regions.',
        'Visit indigenous communities with extraordinary healing and cultural traditions.',
        'Hike in lush cloud forests and discover spectacular waterfalls.',
        'Birdwatch in an exceptional biodiversity corridor.',
    ],
    'norte de santander': [
        'Explore colonial heritage towns with beautiful Andean architecture.',
        'Try traditional Santandereano cuisine: mute, tamales, and hormigas culonas.',
        'Experience the dramatic landscapes of Norte de Santander\'s Andes.',
        'Visit the historical sites related to Colombia\'s independence history.',
    ],
    'atlántico': [
        'Experience the legendary Barranquilla Carnaval or the city\'s festive culture.',
        'Try traditional Caribbean coastal cuisine at local restaurants.',
        'Explore the beaches of the Caribbean coast.',
        'Visit cultural museums and the historic neighbourhood of Barranquilla.',
    ],
    'bolívar': [
        'Explore colonial architecture and heritage sites.',
        'Try traditional coastal Caribbean cuisine.',
        'Take a boat excursion on the Magdalena River or Caribbean coast.',
        'Visit artisan markets for local crafts and traditional products.',
    ],
    'bolivar': [
        'Explore colonial architecture and heritage sites.',
        'Try traditional coastal Caribbean cuisine.',
        'Take a boat excursion on the Magdalena River or Caribbean coast.',
        'Visit artisan markets for local crafts and traditional products.',
    ],
};

/**
 * Returns a list of specific "Things to Do" for a given city.
 * Falls back to department-level suggestions, then a generic Colombia fallback.
 */
export function getCityThingsToDo(cityName: string, departmentName?: string): string[] {
    const name = cityName.toLowerCase().trim();
    const dept = departmentName?.toLowerCase().trim();

    // 1. Exact department-city key
    if (dept) {
        const normalizedDept = dept.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (cityThingsToDo[`${normalizedDept}-${name}`]) return cityThingsToDo[`${normalizedDept}-${name}`];
        if (cityThingsToDo[`${dept}-${name}`]) return cityThingsToDo[`${dept}-${name}`];
    }

    // 2. Exact city name (with or without accents)
    const normalizedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (cityThingsToDo[name]) return cityThingsToDo[name];
    if (cityThingsToDo[normalizedName]) return cityThingsToDo[normalizedName];

    // 3. Partial match
    for (const [key, value] of Object.entries(cityThingsToDo)) {
        const normKey = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (
            normalizedName === normKey ||
            normalizedName.includes(normKey) ||
            normKey.includes(normalizedName)
        ) {
            return value;
        }
    }

    // 4. Department-level fallback
    if (dept) {
        const normDept = dept.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (departmentFallbacks[normDept]) return departmentFallbacks[normDept];
        if (departmentFallbacks[dept]) return departmentFallbacks[dept];
    }

    // 5. Generic Colombia fallback
    return [
        'Explore the town\'s historic centre and main plaza.',
        'Visit the local church and colonial heritage buildings.',
        'Try traditional Colombian regional cuisine at local restaurants.',
        'Browse artisan markets for handmade crafts and local produce.',
        'Take a hike or nature walk in the surrounding landscape.',
        'Ask locals to discover hidden gems and viewpoints.',
    ];
}
