import { BlogPost } from '@/types';
import { getAssetPath } from '@/lib/utils';

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Top 10 Beaches to Visit in Colombia',
        slug: 'top-10-beaches-colombia',
        excerpt: 'Discover the crystal clear waters of the Caribbean and the wild beauty of the Pacific coast.',
        content: `
            <p>Colombia is the only country in South America with coastlines on both the Pacific Ocean and the Caribbean Sea. This unique geography offers an incredible variety of beaches.</p>
            <h2>1. Playa Blanca, Isla Barú</h2>
            <p>Famous for its white sand and turquoise waters, Playa Blanca is a must-visit for sun seekers near Cartagena.</p>
            <h2>2. Parque Tayrona</h2>
            <p>Where the jungle meets the sea. Cabo San Juan is the most iconic beach here, perfect for sleeping in a hammock.</p>
            <h2>3. Palomino</h2>
            <p>A laid-back beach town perfect for tubing down the river and watching the sunset over the Sierra Nevada mountains.</p>
            <h2>4. Nuquí</h2>
            <p>On the Pacific coast, Nuquí is the place to go for whale watching (July-October) and untouched nature.</p>
            <h2>5. Capurganá & Sapzurro</h2>
            <p>Located on the border with Panama, these car-free villages offer crystal clear Caribbean waters and jungle hikes.</p>
            <h2>6. Cabo de la Vela</h2>
            <p>Where the desert meets the sea in La Guajira. Famous for kitesurfing and stunning sunsets from the lighthouse.</p>
            <h2>7. Johnny Cay, San Andrés</h2>
            <p>A small coral islet with coconut palms and white sand beaches, just a short boat ride from San Andrés island.</p>
            <h2>8. Manzanillo Beach, Providencia</h2>
            <p>A pristine, secluded beach on the relaxed island of Providencia. Perfect for those escaping the crowds.</p>
            <h2>9. Rincón del Mar, Sucre</h2>
            <p>A hidden gem with a chilled vibe, calm waters, and the chance to see bioluminescent plankton in the mangroves.</p>
            <h2>10. Playa Cristal, Tayrona</h2>
            <p>True to its name, this beach offers some of the clearest waters in the park, perfect for snorkeling.</p>
            <p>Whether you're looking for a luxury resort or a rustic eco-lodge, Colombia's beaches have something for everyone.</p>
        `,
        image: getAssetPath('/images/blog-tayrona.png'),
        author: 'Maria Garcia',
        date: '2025-10-15',
        tags: ['Beaches', 'Caribbean', 'Pacific', 'Travel Guide'],
    },
    {
        id: '2',
        title: 'A Coffee Lover’s Guide to the Coffee Triangle',
        slug: 'coffee-triangle-guide',
        excerpt: 'Explore the lush landscapes of Quindío, Caldas, and Risaralda, the heart of Colombian coffee.',
        content: `
            <p>The Coffee Cultural Landscape of Colombia, declared a World Heritage Site by UNESCO, is a region of stunning beauty and rich tradition.</p>
            <h2>Salento and Valle de Cocora</h2>
            <p>Salento is the most popular town in the region, famous for its colorful architecture and proximity to the Valle de Cocora, home to the giant wax palms.</p>
            <h2>Manizales</h2>
            <p>Known as the "City of Open Doors", Manizales offers dramatic mountain views and great coffee tours.</p>
            <h2>Coffee Farm Tours</h2>
            <p>No visit is complete without a tour of a working coffee farm (finca). Learn about the entire process from bean to cup.</p>
        `,
        image: getAssetPath('/images/blog-coffee.png'),
        author: 'Juan Perez',
        date: '2025-11-02',
        tags: ['Coffee', 'Culture', 'Mountains', 'Gastronomy'],
    },
    {
        id: '3',
        title: 'Safety Tips for Traveling in Colombia',
        slug: 'safety-tips-colombia',
        excerpt: 'Everything you need to know to have a safe and enjoyable trip to Colombia.',
        content: `
            <p>Colombia has transformed significantly in recent years and is now a popular tourist destination. However, like any destination, it's important to stay informed.</p>
            <h2>1. No Dar Papaya</h2>
            <p>This local saying translates to "don't give papaya", meaning don't make yourself an easy target. Avoid flashing expensive jewelry or phones in crowded public areas.</p>
            <h2>2. Use Official Transport</h2>
            <p>Use ride-sharing apps or official taxis rather than hailing random cars on the street, especially at night.</p>
            <h2>3. Learn Some Spanish</h2>
            <p>While English is spoken in major tourist areas, knowing basic Spanish phrases goes a long way and is appreciated by locals.</p>
            <p>Most travelers have a trouble-free experience by using common sense and following local advice.</p>
        `,
        image: getAssetPath('/images/blog-safety.png'),
        author: 'Alex Traveler',
        date: '2025-12-10',
        tags: ['Safety', 'Tips', 'Travel Advice'],
    },
    {
        id: '4',
        title: 'The Magic of Caño Cristales: The River of Five Colors',
        slug: 'cano-cristales-river-five-colors',
        excerpt: 'Journey to the Serranía de la Macarena to witness one of the most beautiful rivers in the world.',
        content: `
            <p>Caño Cristales is often called the "River of Five Colors" or the "Liquid Rainbow". For a few months each year, the riverbed explodes with vibrant colors.</p>
            <h2>When to Go</h2>
            <p>The best time to visit is between June and November when the aquatic plants (Macarenia clavigera) turn red, blue, yellow, orange, and green.</p>
            <h2>Getting There</h2>
            <p>Access is typically via a flight to La Macarena from Bogota or Villavicencio. It's a remote destination that requires a guide.</p>
            <p>It is a fragile ecosystem, so strict rules apply to visitors to preserve its beauty.</p>
        `,
        image: getAssetPath('/images/blog-cano-cristales.png'),
        author: 'Sarah Jenkins',
        date: '2026-01-20',
        tags: ['Nature', 'Adventure', 'Ecotourism'],
    },
    {
        id: '5',
        title: 'Best Time to Visit Colombia: A Month-by-Month Guide',
        slug: 'best-time-to-visit-colombia',
        excerpt: 'From dry seasons to festivals, find out the perfect time for your Colombian adventure.',
        content: `
            <p>Colombia is a year-round destination, but the best time to visit depends on what you want to do. Being near the equator, temperatures are determined by altitude, not seasons.</p>
            <h2>Dry Seasons (Dec-March & July-Aug)</h2>
            <p>These are the most popular times to visit, offering sunny days perfect for hiking the Andes or relaxing on Caribbean beaches.</p>
            <h2>Whale Watching Season (July-Oct)</h2>
            <p>Visit the Pacific coast to see humpback whales migrating to warmer waters to give birth.</p>
            <h2>Major Festivals & Cultural Events</h2>
            <p>Colombia is famous for its festivals. Plan your trip around these massive celebrations:</p>
            <ul>
                <li><strong>Jan: Blacks and Whites' Carnival (Pasto)</strong> - A UNESCO masterpiece celebrating diversity.</li>
                <li><strong>Feb: Barranquilla Carnival</strong> - The second largest carnival in the world, full of color and dance.</li>
                <li><strong>April: Vallenato Legend Festival (Valledupar)</strong> - The most important event for Vallenato music lovers.</li>
                <li><strong>Aug: Flower Festival (Medellín)</strong> - Detailed flower arrangements (silleteros) parade through the city.</li>
                <li><strong>Dec: Cali Fair (Feria de Cali)</strong> - The salsa capital of the world comes alive with parties and concerts.</li>
            </ul>
        `,
        image: getAssetPath('/images/blog-best-time.png'),
        author: 'Elena Rodriguez',
        date: '2026-02-10',
        tags: ['Travel Tips', 'Weather', 'Festivals'],
    },
    {
        id: '7',
        title: 'Charming Colonial Towns You Can’t Miss',
        slug: 'colonial-towns-colombia',
        excerpt: 'Step back in time by visiting these beautifully preserved heritage towns filled with history.',
        content: `
            <p>Colombia's history is written in the cobblestone streets and white-washed walls of its heritage towns (Pueblos Patrimonio).</p>
            <h2>Villa de Leyva, Boyacá</h2>
            <p>Famous for having one of the largest plazas in South America and its fossil museums.</p>
            <h2>Barichara, Santander</h2>
            <p>Often cited as the most beautiful town in Colombia, known for its stone architecture and reddish earth streets.</p>
            <h2>Mompox, Bolívar</h2>
            <p>A riverside town frozen in time, Mompox played a key role in Colombia's independence and is a UNESCO World Heritage site.</p>
        `,
        image: getAssetPath('/images/dept-boyaca.png'),
        author: 'Isabella Martinez',
        date: '2026-02-20',
        tags: ['History', 'Culture', 'Architecture', 'Travel Guide'],
    },
    {
        id: '8',
        title: '2026 Security Guide: Navigating Colombia Safely',
        slug: '2026-security-guide-colombia',
        excerpt: 'An exhaustive analysis of the security environment and situational awareness for travelers in 2026.',
        content: `
            <p>The security situation in Colombia remains a critical factor for travelers. While major urban centers have seen significant investment in infrastructure, a high degree of situational awareness is essential.</p>
            <h2>The "No Dar Papaya" Doctrine</h2>
            <p>In major metropolitan areas like Bogotá, Medellín, and Cartagena, safety is summarized in the phrase "No dar papaya" (Do not give papaya). This is an imperative to minimize the display of wealth or vulnerability.</p>
            <h2>Urban Safety Protocols</h2>
            <ul>
                <li><strong>Dress Down:</strong> Avoid flashy jewelry or expensive watches in public areas.</li>
                <li><strong>Electronics:</strong> Keep cell phones and cameras out of sight unless in secure locations.</li>
                <li><strong>Transport:</strong> Use only official app-based transport (Uber, DiDi) or radio-dispatched taxis. Avoid night driving on secondary roads.</li>
            </ul>
            <h2>Chemical Assault Awareness</h2>
            <p>A severe threat in the nightlife sector is the use of incapacitating drugs like scopolamine (burundanga). Never leave your drinks unattended and refuse snacks, cigarettes, or gum from strangers.</p>
        `,
        image: getAssetPath('/images/blog-security-2026.png'),
        author: 'Security Analyst',
        date: '2026-03-01',
        tags: ['Safety', '2026', 'Travel Tips', 'Security'],
    },
    {
        id: '9',
        title: 'Essential Logistics: Check-Mig, Visas, and Health 2026',
        slug: 'essential-logistics-colombia-2026',
        excerpt: 'A step-by-step guide to the mandatory administrative prerequisites for entering Colombia in 2026.',
        content: `
            <p>Failure to comply with Colombia's digitalized entry systems can result in immediate logistical failure. Here is what you need to know for 2026.</p>
            <h2>The Check-Mig System</h2>
            <p>The mandatory <strong>Check-Mig</strong> form must be completed via the Migración Colombia website within a window of 72 hours down to one hour before your flight’s departure. This is required for both entering and exiting the country.</p>
            <h2>Visa and Stay Regulations</h2>
            <p>Citizens from the US, Canada, and the EU receive a "Permiso de Ingreso y Permanencia" (PIP) stamp for 90 days. You can extend this for another 90 days (PTP) online, totaling 180 days per calendar year.</p>
            <h2>Health and Vaccinations</h2>
            <p>The Yellow Fever vaccine is highly recommended and often mandatory for visitors to National Parks like Tayrona or regions like the Amazon. Administer it at least 10 days before travel to ensure full immunity.</p>
        `,
        image: getAssetPath('/images/blog-logistics.png'),
        author: 'Admin Support',
        date: '2026-02-25',
        tags: ['Logistics', 'Visa', 'Health', 'Travel Guide'],
    },
    {
        id: '10',
        title: 'Climate & Festivals 2026: Best Timing Strategies',
        slug: 'climate-festivals-colombia-2026',
        excerpt: 'Maximize your experience by timing your visit with the dry seasons and world-class cultural events.',
        content: `
            <p>Colombia's lack of traditional seasons means climate is defined by altitude and rainfall patterns. Plan your 2026 trip strategically.</p>
            <h2>Optimal Travel Windows</h2>
            <p>The dry seasons from <strong>December to March</strong> and <strong>July to August</strong> are the peak periods for travel. These months offer the most stable conditions for Andean hiking and Caribbean beach activities.</p>
            <h2>2026 Major Cultural Events</h2>
            <ul>
                <li><strong>Barranquilla Carnival (February 14-17):</strong> The world's second-largest folkloric celebration.</li>
                <li><strong>Holy Week in Popayán (Mar 29 - Apr 5):</strong> Historic religious processions dating back to 1556.</li>
                <li><strong>Medellín Flower Festival (August 1-10):</strong> A week-long celebration of Antioquian flower farming and culture.</li>
                <li><strong>Salsa Festival in Cali (September 25-28):</strong> Witness the global salsa capital in its full glory.</li>
            </ul>
        `,
        image: getAssetPath('/images/blog-festivals.png'),
        author: 'Culture Scout',
        date: '2026-02-26',
        tags: ['Festivals', 'Climate', 'Culture', '2026'],
    },
    {
        id: '11',
        title: 'Discover Colombian Gastronomy: A Culinary Journey Through Regions',
        slug: 'colombian-gastronomy-culinary-journey',
        excerpt: 'Explore the unique flavors of Colombia, from the bandeja paisa in the Andes to the fresh seafood of the Caribbean.',
        content: `
            <p>Colombia is a country of vibrant and diverse flavors, reflecting its rich geography and cultural heritage. Each region offers a unique culinary experience that delights visitors.</p>

            <h2>Andean Cuisine: Tradition and Flavor</h2>
            <p>In the heart of the Andes, Colombian gastronomy is characterized by hearty and comforting dishes. The iconic <strong>Bandeja Paisa</strong>, originally from the Antioquia region, is a feast of beans, rice, ground meat, chicharrón (pork belly), fried egg, chorizo, sweet plantain, and avocado. You cannot leave without trying the <strong>Ajiaco Santafereño</strong> in Bogotá, a creamy soup made with chicken, three types of potatoes, and corn on the cob, served with capers and cream.</p>

            <h2>The Caribbean: Freshness and Marine Explosion</h2>
            <p>The Caribbean coast seduces with its tropical flavors and abundance of seafood. Try the refreshing <strong>Fried Fish</strong> with coconut rice and patacones (fried green plantains), or indulge in a good <strong>Shrimp Ceviche</strong>. <strong>Arepas con Huevo</strong> (egg-filled arepas) are the quintessential breakfast in this region, deep-fried and stuffed.</p>

            <h2>The Pacific: Exoticism and Afro-Colombian Tradition</h2>
            <p>Pacific cuisine is less known but equally fascinating, with strong Afro-Colombian influences and exotic ingredients. <strong>Encocados</strong> (fish or seafood stews cooked in coconut milk) are a must-try, as well as <strong>Fish Sancocho</strong> and cambray empanadas.</p>

            <h2>Typical Desserts and Drinks</h2>
            <p>To sweeten the palate, try <strong>Dulce de Leche (Arequipe)</strong>, <strong>Bocadillos Veleños</strong> (guava paste), or coconut <strong>Cocadas</strong>. Don't forget to accompany your meals with a good <strong>Natural Juice</strong> made from exotic fruits like lulo, passion fruit (maracuyá), or soursop (guanábana), and of course, a cup of world-famous <strong>Colombian Coffee</strong>.</p>

            <p>Colombian gastronomy is an invitation to explore the country's diversity through its flavors, an unforgettable experience for any traveler.</p>
        `,
        image: getAssetPath('/images/blog-gastronomia.png'),
        author: 'Camila Rojas',
        date: '2026-02-28',
        tags: ['Gastronomy', 'Food', 'Culture', 'Culinary Travels', 'Colombia']
    },
    {
        id: '12',
        title: 'Extreme Adventure in Colombia: Sports and Activities for Adrenaline Junkies',
        slug: 'extreme-adventure-colombia',
        excerpt: 'From paragliding in Valle del Cauca to rafting on the Magdalena River, Colombia offers strong thrills for all adrenaline lovers.',
        content: `
            <p>Colombia, with its diverse geography ranging from Andean peaks to Amazonian jungles and Caribbean coasts, is a paradise for adventure enthusiasts and extreme sports lovers. Get ready for experiences that will take your breath away.</p>

            <h2>Paragliding in Valle del Cauca</h2>
            <p>Feel the freedom of flying over the green landscapes of <strong>Valle del Cauca</strong>, especially in places like Roldanillo or Calima. Favorable thermal currents make Colombia one of the world's best destinations for paragliding, suitable for both beginners with tandem flights and experienced pilots.</p>

            <h2>Rafting and Kayaking in Wild Rivers</h2>
            <p>Colombia's powerful rivers are perfect for rafting and kayaking. The <strong>Magdalena River</strong>, the country's most important, offers exciting sections, while the <strong>Suárez River</strong> in Santander is known for its class IV and V rapids. For a calmer but equally beautiful experience, you can kayak on the <strong>La Miel River</strong> in Caldas.</p>

            <h2>Caving in Santander</h2>
            <p>Explore Colombia's underground world by entering its impressive caves. The Santander region, with caves like El Indio, La Vaca, and the Nitro Cave in Zapatoca, offers spectacular rock formations and challenges for all experience levels.</p>

            <h2>Rock Climbing and Mountaineering</h2>
            <p>The Colombian Andes present innumerable opportunities for climbing. Places like <strong>Suesca</strong> (cerca de Bogotá) are famous for their rock walls and climbing schools. For mountaineers, the snow-capped peaks of <strong>Los Nevados National Natural Park</strong> or the <strong>Sierra Nevada del Cocuy</strong> offer unforgettable challenges and breathtaking landscapes.</p>

            <h2>Diving in the Caribbean and the Pacific</h2>
            <p>Explore vibrant marine life in the Caribbean Sea, with destinations like <strong>Providencia</strong>, <strong>San Andrés</strong>, or the <strong>Corales del Rosario and San Bernardo National Natural Park</strong>. In the Pacific, diving in <strong>Malpelo</strong> or <strong>Gorgona</strong> will allow you to spot hammerhead sharks, humpback whales (in season), and sea turtles.</p>

            <p>Whether in the air, in the water, or underground, Colombia awaits you with an adventure tailored to your boldest spirit. Get your gear ready and jump into exploration!</p>
        `,
        image: getAssetPath('/images/blog-aventura.png'),
        author: 'Diego Morales',
        date: '2026-02-28',
        tags: ['Adventure', 'Extreme Sports', 'Nature', 'Adrenaline', 'Colombia']
    },
    {
        id: '13',
        title: 'The Rhythms of Colombia: A Guide to Its Vibrant Music and Dance',
        slug: 'rhythms-colombia-music-dance',
        excerpt: 'Dive into the diverse world of Colombian music and dance, from the lively cumbia to the passionate salsa.',
        content: `
            <p>Colombia is a land of vibrant sounds and movements. Its music and dance are deeply woven into the fabric of its culture, reflecting a rich history of indigenous, African, and European influences.</p>

            <h2>Cumbia: The Soul of the Caribbean</h2>
            <p>Originating on the Caribbean coast, cumbia is arguably Colombia's most iconic rhythm. Its mesmerizing drum beats, flutes (gaitas), and subtle accordion melodies are instantly recognizable. Characterized by sensual, shuffling steps, cumbia often involves dancers (especially women) holding candles, symbolizing the original courtship rituals.</p>

            <h2>Salsa: Cali's Heartbeat</h2>
            <p>While salsa has Cuban and Puerto Rican roots, Colombia, particularly the city of Cali, has adopted and transformed it into its own high-energy style. "Cali-style" salsa is known for its incredibly fast footwork and intricate spins. Visit a "salsateca" in Cali, and you'll witness an explosion of passion and precision on the dance floor.</p>

            <h2>Vallenato: Sounds of the Countryside</h2>
            <p>From the Caribbean region, vallenato tells stories of daily life, love, and hardship through its accordions, cajas (hand drums), guacharacas (ribbed gourds), and guitars. It's a genre that evokes the spirit of the Colombian countryside and is deeply cherished, especially during the annual Vallenato Legend Festival in Valledupar.</p>

            <h2>Champeta: The African Influence Continues</h2>
            <p>A more modern and urban genre, champeta is a fusion of African rhythms, Colombian folk, and Caribbean sounds, primarily from Cartagena. It's characterized by its fast-paced, often provocative dance moves and socially conscious lyrics. Champeta parties are lively, energetic affairs where dancers let loose to infectious beats.</p>

            <h2>Bambuco, Joropo, and More</h2>
            <p>Beyond these popular styles, Colombia boasts a wealth of regional music and dance forms:</p>
            <ul>
                <li><strong>Bambuco:</strong> From the Andean region, a graceful and elegant rhythm, often accompanied by string instruments.</li>
                <li><strong>Joropo:</strong> From the Eastern Plains (Llanos), a lively cowboy dance with fast zapateo (foot stamping), accompanied by harp, cuatro, and maracas.</li>
                <li><strong>Currulao:</strong> From the Pacific coast, a powerful Afro-Colombian rhythm played with marimba, drums, and chants, often performed in community gatherings.</li>
            </ul>

            <p>Experiencing Colombia's music and dance is to experience its soul. Whether you're watching a professional performance, taking a salsa class, or simply enjoying the rhythms spilling from a local bar, you'll feel the infectious energy that makes Colombia so unique.</p>
        `,
        image: getAssetPath('/images/blog-rhythms.png'),
        author: 'Sofía Herrera',
        date: '2026-03-01',
        tags: ['Music', 'Dance', 'Culture', 'Festivals']
    },
    {
        id: '14',
        title: 'Exploring the Vibrant Streets of Cartagena: A Caribbean Gem',
        slug: 'exploring-vibrant-streets-cartagena',
        excerpt: 'Discover the magic of Cartagena, a UNESCO World Heritage site, with its colorful colonial architecture, captivating history, and lively squares.',
        content: `
            <p>Cartagena de Indias, a jewel on Colombia's Caribbean coast, is a city brimming with history, romance, and incredible vibrancy. Declared a UNESCO World Heritage site, its impeccably preserved colonial architecture, colorful streets, and lively plazas transport visitors to another era.</p>

            <h2>The Walled City: A Step Back in Time</h2>
            <p>The beating heart of Cartagena is its Walled City (Ciudad Amurallada). Wander through narrow cobblestone streets, discover charming balconies adorned with bougainvillea, and admire grand colonial mansions. Don't miss exploring iconic spots like the Clock Tower (Torre del Reloj), Plaza de Bolívar, and the Palace of the Inquisition. The massive walls themselves offer stunning sunset views over the Caribbean Sea.</p>

            <h2>Getsemaní: The Bohemian Soul</h2>
            <p>Just outside the main walls lies Getsemaní, a vibrant, bohemian neighborhood that was once a working-class area. Today, it's famous for its incredible street art, trendy cafes, lively bars, and buzzing nightlife. Explore its colorful alleyways, discover hidden squares, and feel the contemporary pulse of the city.</p>

            <h2>Beyond the Walls: Beaches and Islands</h2>
            <p>While Cartagena's charm is undeniable, nearby islands and beaches offer a perfect escape. Take a boat trip to the Rosario Islands for pristine white sands and crystal-clear waters, ideal for snorkeling and relaxing. Closer to the city, Bocagrande offers a more developed beach experience with high-rise hotels.</p>

            <h2>Gastronomy: A Culinary Delight</h2>
            <p>Cartagena's culinary scene is a delightful fusion of Caribbean flavors, fresh seafood, and traditional Colombian cuisine. Indulge in fresh ceviches, traditional fish dishes, and exotic fruit juices. The city offers everything from street food delights to upscale dining experiences.</p>

            <p>Whether you're enchanted by its history, thrilled by its nightlife, or simply wish to soak up the Caribbean sun, Cartagena promises an unforgettable Colombian adventure.</p>
        `,
        image: getAssetPath('/images/blog-cartagena.png'),
        author: 'Andrés Castro',
        date: '2026-03-02',
        tags: ['Cartagena', 'Caribbean', 'History', 'Culture', 'Travel Guide']
    },
    {
        id: '15',
        title: 'Exploring the Amazon Rainforest in Colombia: An Unforgettable Adventure',
        slug: 'exploring-amazon-rainforest-colombia',
        excerpt: 'Dive deep into the heart of the Colombian Amazon, a region bursting with biodiversity and unique cultural experiences.',
        content: `
            <p>The Amazon Rainforest, often called the "Lungs of the Earth," is a destination that captivates with its unparalleled natural beauty and incredible biodiversity. Colombia offers a fascinating and accessible gateway to this vast ecosystem, primarily through its Amazonas department, with Leticia as the main entry point.</p>

            <h2>Leticia: The Three-Border Town</h2>
            <p>Leticia is a vibrant city situated on the Amazon River, where Colombia, Brazil (Tabatinga), and Peru (Santa Rosa) converge. This unique geopolitical position makes it a melting pot of cultures and a bustling hub for trade and tourism. From here, you can easily explore all three countries, experience diverse cuisines, and immerse yourself in the local way of life.</p>

            <h2>Puerto Nariño: A Model of Ecotourism</h2>
            <p>A short boat ride upriver from Leticia takes you to Puerto Nariño, Colombia's second municipality in the Amazonas, and a true gem of sustainable tourism. This tranquil, car-free town is dedicated to preserving its natural environment and indigenous traditions. Visitors can observe pink and gray river dolphins, visit local indigenous communities, and learn about their efforts to live in harmony with the rainforest.</p>

            <h2>Flora and Fauna: A Biodiversity Hotspot</h2>
            <p>The Colombian Amazon is home to an astonishing array of wildlife. Guided excursions offer the chance to spot monkeys, sloths, caimans, anacondas, and a spectacular variety of birds, including macaws and toucans. The rainforest's plant life is equally impressive, with giant water lilies, towering Ceiba trees, and countless medicinal plants.</p>

            <h2>Cultural Immersion: Indigenous Communities</h2>
            <p>Interacting with the indigenous communities that have inhabited the Amazon for centuries is a profound experience. Many tours include visits to Tikuna, Huitoto, and Yagua villages, where you can learn about their customs, traditional crafts, music, and their deep spiritual connection to the forest.</p>

            <p>An adventure in the Amazon Rainforest is more than just a trip; it's a journey into the heart of nature's grandeur and a testament to the planet's thriving biodiversity. Prepare to be amazed by the sights, sounds, and vibrant life of this extraordinary region.</p>
        `,
        image: getAssetPath('/images/blog-amazon-rainforest.png'),
        author: 'Valentina Ortiz',
        date: '2026-03-02',
        tags: ['Amazon', 'Ecotourism', 'Wildlife', 'Adventure', 'Culture']
    },
    {
        id: '16',
        title: 'Exploring the Vibrant Street Art of Bogotá: A Cultural Journey',
        slug: 'exploring-vibrant-street-art-bogota',
        excerpt: 'Discover the dynamic and colorful street art scene in Bogotá, a city transformed by urban art and creative expression.',
        content: `
            <p>Bogotá, the bustling capital of Colombia, has emerged as a global hub for street art. What was once seen as vandalism has evolved into a powerful form of urban expression, transforming the city's walls into a vibrant outdoor gallery. Exploring Bogotá's street art is not just about admiring beautiful murals; it's a deep dive into the city's history, politics, and social narratives.</p>

            <h2>La Candelaria: The Heart of Bogotá's Graffiti Scene</h2>
            <p>The historic neighborhood of La Candelaria is arguably the best place to start your street art exploration. Its narrow, cobblestone streets and colonial architecture provide a stunning backdrop for an incredible concentration of murals, tags, and stencil art. Here, every corner tells a story, with art addressing themes from indigenous rights and environmental issues to social justice and everyday Colombian life.</p>

            <h2>Graffiti Tours: Unlocking the Stories Behind the Art</h2>
            <p>To truly appreciate the depth and context of Bogotá's street art, consider joining one of the many specialized graffiti tours. Local artists and guides offer invaluable insights into the techniques, political messages, and cultural significance behind the artworks. They often share stories about the artists themselves, the evolution of the graffiti movement in Bogotá, and the unique regulations that have fostered this creative boom.</p>

            <h2>Beyond La Candelaria: Exploring New Urban Canvases</h2>
            <p>While La Candelaria is a must-visit, Bogotá's street art extends far beyond this historic center. Neighborhoods like Usaquén and even industrial zones are becoming canvases for large-scale murals and evolving artistic projects. Keep an eye out for works by renowned Colombian artists like Guache, DjLu, and Stinkfish, whose distinctive styles contribute to Bogotá's dynamic urban landscape.</p>

            <p>Bogotá's street art scene is a testament to the city's resilience, creativity, and willingness to embrace art as a tool for dialogue and transformation. It's an essential experience that offers a unique perspective on Colombian culture and society.</p>
        `,
        image: getAssetPath('/images/blog-bogota-street-art.png'),
        author: 'Nicolás Vargas',
        date: '2026-03-02',
        tags: ['Bogota', 'Street Art', 'Culture', 'Urban Exploration', 'Art']
    },
    {
        id: '17',
        title: "Exploring Colombia's Pacific Coast: Nature, Whales, and Afro-Colombian Culture",
        slug: 'exploring-colombias-pacific-coast',
        excerpt: "Discover the untamed beauty of Colombia's Pacific coast, home to rich biodiversity, humpback whales, and vibrant Afro-Colombian traditions.",
        content: `
            <p>Colombia's Pacific coast is a realm of mesmerizing natural beauty, offering an experience vastly different from its Caribbean counterpart. This region, characterized by dense rainforest meeting the ocean, is a sanctuary for marine life and a cradle of Afro-Colombian culture.</p>

            <h2>Humpback Whale Watching (July - October)</h2>
            <p>One of the most spectacular natural events along the Pacific coast is the annual migration of humpback whales. From July to October, these magnificent creatures visit the warm waters of areas like Bahía Solano and Nuquí to calve and mate. Several tour operators offer guided boat trips for an up-close and unforgettable whale-watching experience.</p>

            <h2>Biodiversity and Ecotourism</h2>
            <p>The Chocó biogeographic region, which encompasses the Pacific coast, is one of the most biodiverse areas on the planet. Its lush rainforests are home to countless species of birds, monkeys, and amphibians. Ecotourism is a growing focus here, with opportunities for jungle treks, birdwatching, and exploring hidden waterfalls and hot springs.</p>

            <h2>Afro-Colombian Culture and Gastronomy</h2>
            <p>The Pacific coast is also the heartland of Afro-Colombian culture. Communities here have preserved their rich heritage through vibrant music, dance, and culinary traditions. Experience the powerful rhythms of 'currulao' music, taste delicious seafood dishes featuring fresh fish, plantains, and coconut milk, and immerse yourself in the warmth and hospitality of the local people.</p>

            <h2>Untouched Beaches and Remote Villages</h2>
            <p>Unlike the bustling Caribbean beaches, the Pacific coast offers vast, often deserted stretches of dark sand beaches, perfect for quiet contemplation and enjoying the raw power of the ocean. Explore charming, remote towns like Nuquí, Bahía Solano, and El Valle, where life moves at a slower pace and nature takes center stage.</p>

            <p>A journey to Colombia's Pacific coast is an adventure into an untamed, culturally rich, and ecologically vital part of the world. It's an ideal destination for travelers seeking authentic experiences, unparalleled wildlife encounters, and a deep connection with nature.</p>
        `,
        image: getAssetPath('/images/blog-pacific-coast.png'),
        author: 'Felipe Mendoza',
        date: '2026-03-02',
        tags: ['Pacific Coast', 'Whale Watching', 'Ecotourism', 'Afro-Colombian Culture', 'Nature']
    },
    {
        id: '19',
        title: 'Discovering the Lost City: An Ancient Adventure in the Sierra Nevada',
        slug: 'discovering-ciudad-perdida-ancient-adventure',
        excerpt: 'Embark on an archaeological trek to Teyuna, the Lost City, nestled deep within the Sierra Nevada de Santa Marta. A journey through ancient history and breathtaking nature.',
        content: `
            <p>Deep within the dense tropical rainforest of the Sierra Nevada de Santa Marta lies Teyuna, famously known as the Lost City (Ciudad Perdida). This ancient archaeological site, built by the Tairona civilization around 800 AD, predates Machu Picchu by some 650 years and offers an unparalleled trekking experience for adventurers and history enthusiasts.</p>

            <h2>The Trek: A Journey Through Nature and Time</h2>
            <p>The journey to Ciudad Perdida is typically a 4 or 5-day trek that winds through rivers, mountains, and indigenous communities. It's a challenging but deeply rewarding experience, immersing hikers in the pristine beauty of Colombia's largest coastal mountain range and its rich biodiversity. Along the way, you’ll encounter diverse flora and fauna, swim in natural pools, and interact with descendants of the Tairona, the Kogi, Wiwa, Arhuaco, and Kankuamo people, who still inhabit the region and act as guardians of the sacred site.</p>

            <h2>Reaching the Lost City</h2>
            <p>After days of hiking, the final ascent involves climbing approximately 1,200 stone steps, overgrown with moss and jungle vegetation, that lead directly into the heart of the ancient city. Once there, you'll discover a series of intricate terraces, plazas, and carved stone paths, offering a glimpse into the sophisticated civilization that once thrived here. The site is spread across several hectares, with stone circles that once formed the foundations of homes and ceremonial centers.</p>

            <h2>Respecting Indigenous Culture</h2>
            <p>The Sierra Nevada de Santa Marta is considered the heart of the world by its indigenous communities. Visitors are encouraged to show respect for their traditions and beliefs. Many tours employ local guides, providing a unique opportunity to learn about their worldview and the significance of Ciudad Perdida.</p>

            <h2>Planning Your Adventure</h2>
            <p>Access to Ciudad Perdida is controlled, and it can only be visited with authorized tour operators. This helps preserve the site and support local communities. The best time to go is during the dry season (December to March and July to August), although the jungle climate means rain can occur at any time. A reasonable level of physical fitness is required for this unforgettable expedition.</p>

            <p>A trek to Ciudad Perdida is more than just a hike; it's a profound cultural and historical immersion, connecting you with Colombia's ancient past and its vibrant natural present.</p>
        `,
        image: getAssetPath('/images/blog-ciudad-perdida.png'),
        author: 'Laura Martinez',
        date: '2026-03-03',
        tags: ['Archaeology', 'Adventure', 'Hiking', 'Sierra Nevada', 'Indigenous Culture']
    },
    {
        id: '21',
        title: `Hidden Gems: Exploring the Tatacoa Desert – Colombia's Martian Landscape`,
        slug: 'hidden-gems-tatacoa-desert',
        excerpt: `Discover Colombia's unique Tatacoa Desert, a surreal landscape perfect for adventure and stargazing, far from the typical tourist trails.`,
        content: `
            <p>Often overshadowed by its Caribbean beaches and Andean peaks, Colombia harbors a hidden geological marvel: the Tatacoa Desert. Located in the department of Huila, this arid, semi-desertic region is a world away from the lush greenery typically associated with Colombia. Its surreal landscapes, vibrant hues, and pristine night skies make it an unforgettable destination for the adventurous traveler.</p>

            <h2>A Unique Martian Landscape</h2>
            <p>The Tatacoa Desert is not a true desert, but rather a tropical dry forest that has been eroded over millions of years. It's primarily characterized by two distinct terrains: the red labyrinth of the "Cuzco" sector, with its towering, eroded clay formations, and the gray, lunar-like landscape of "Los Hoyos", where visitors can often find natural pools to cool off.</p>
            <p>Walking through the crimson canyons of Cuzco feels like stepping onto the surface of Mars. The contrasting blues of the sky against the deep reds and browns of the earth create photographic opportunities at every turn. In Los Hoyos, the gray formations and sparse vegetation offer a different kind of desolate beauty, perfect for quiet reflection.</p>

            <h2>Stargazing Paradise</h2>
            <p>One of Tatacoa's greatest draws is its incredible potential for stargazing. Far from city lights and pollution, the desert boasts exceptionally clear skies practically year-round. It is home to a public astronomical observatory where visitors can learn about constellations, planets, and galaxies, offering a truly magical experience of the cosmos.</p>
            <p>Spending a night in Tatacoa, lying on the ground looking up at the Milky Way, is an experience that stays with you long after you've left. It's a reminder of the vastness of the universe and the quiet beauty of our own planet.</p>

            <h2>Planning Your Visit</h2>
            <ul>
                <li><strong>Getting There:</strong> The closest major city is Neiva, accessible by flight or bus from Bogotá. From Neiva, you can take a local bus or taxi to Villavieja, the gateway town to the desert.</li>
                <li><strong>Accommodation:</strong> Options range from simple hotels in Villavieja to rustic cabins and hammocks within the desert itself. For the full stargazing experience, staying overnight in the desert is highly recommended.</li>
                <li><strong>Activities:</strong> Explore the red and gray deserts on foot or by local mototaxi, visit the astronomical observatory at night, and cool off in the natural springs of Los Hoyos.</li>
                <li><strong>What to Bring:</strong> Sunscreen, a hat, plenty of water, comfortable walking shoes, insect repellent, and a camera are essential.</li>
            </ul>

            <p>The Tatacoa Desert is a testament to Colombia's extraordinary geographical diversity. It's a place that challenges expectations and rewards visitors with unforgettable sights and experiences. Don't miss this hidden gem on your Colombian adventure!</p>
        `,
        image: getAssetPath('/images/blog-tatacoa-desert.png'),
        author: 'Daniela Soto',
        date: '2026-03-04',
        tags: ['Desert', 'Ecotourism', 'Stargazing', 'Adventure', 'Nature'],
    },
    {
        id: '1772727335200',
        title: `Sierra Nevada de Santa Marta: A World of Ecosystems in One Mountain`,
        slug: 'sierra-nevada-ecosystems-biodiversity',
        excerpt: `Explore the incredible biodiversity of the Sierra Nevada de Santa Marta, where tropical beaches meet snow-capped peaks in the world's highest coastal mountain range.`,
        content: `<p>Rising dramatically from the Caribbean Sea to snow-capped peaks at 5,775 meters, the Sierra Nevada de Santa Marta is a biological wonder and the highest coastal mountain range in the world. This unique mountain system hosts every type of ecosystem found in Colombia within its boundaries.</p><h2>A Living Laboratory</h2><p>The Sierra Nevada is home to 635 species of birds, 120 mammals, and thousands of plant species, many of which are found nowhere else on Earth. This extraordinary biodiversity is due to its isolation from the Andes and the dramatic changes in altitude that create distinct life zones.</p><h2>From Beach to Snow</h2><p>Within just 42 kilometers, the landscape transforms from tropical beaches through cloud forests to permanent snow. This compressed gradient of ecosystems makes it possible to experience multiple climates and habitats in a single day:</p>
<ul><li><strong>Tropical Dry Forest (0-1,000m):</strong> Cacti, thorny shrubs, and drought-resistant trees.</li><li><strong>Rainforest (1,000-2,500m):</strong> Dense vegetation, orchids, and abundant wildlife.</li><li><strong>Cloud Forest (2,500-3,300m):</strong> Misty environment with moss-covered trees and unique orchids.</li><li><strong>Páramo (3,300-4,500m):</strong> High-altitude grasslands with frailejones and specialized plants.</li><li><strong>Snow Zone (4,500m+):</strong> Permanent snow caps on the peaks of Colón and Bolívar.</li></ul><h2>Endemic Species</h2><p>The isolation of the Sierra Nevada has led to the evolution of species found nowhere else, including:</p>
<ul><li>The Blue-bearded Helmetcrest hummingbird</li><li>The Santa Marta Parakeet</li><li>The Santa Marta Mountain Rat</li><li>Numerous amphibian species</li></ul><h2>Planning Your Visit</h2><p>The best way to explore these ecosystems is through guided treks that respect both the natural environment and the indigenous communities who call this sacred mountain home. Popular access points include:</p>
<ul><li>Minca: Gateway to cloud forests and birdwatching</li><li>Palomino: Access to lower elevation trails and rivers</li><li>El Dorado Reserve: Premier birdwatching location</li></ul><p>Whether you're a nature enthusiast, researcher, or simply someone who appreciates natural wonders, the Sierra Nevada de Santa Marta offers an unparalleled opportunity to witness the incredible diversity of life that Colombia harbors.</p>`,
        image: getAssetPath('/images/blog-sierra-nevada.png'),
        author: 'Camila Restrepo',
        date: '2026-03-05',
        tags: ['Nature', 'Biodiversity', 'Mountains', 'Ecotourism', 'Wildlife']
    },
    {
        id: '1772813132073',
        title: `Modern Architecture in Colombia: A Blend of Innovation and Tradition`,
        slug: 'modern-architecture-colombia',
        excerpt: `From Medellín's social urbanism to Bogotá's avant-garde buildings, discover how Colombian architecture is reshaping cities while honoring cultural heritage.`,
        content: `
            <p>Colombia's architectural landscape is a testament to innovation, sustainability, and social transformation. The country has emerged as a laboratory for modern urban solutions that address both aesthetic and social needs.</p>
            <h2>Medellín: Social Architecture at its Finest</h2>
            <p>Once known for its turbulent past, Medellín has become a global reference for social urbanism. Key projects include:</p>
            <ul>
                <li><strong>Biblioteca España:</strong> Three black rock-like structures perched on a hillside, serving as both a library and a symbol of transformation.</li>
                <li><strong>Parque Biblioteca León de Greiff:</strong> A stunning example of how modern architecture can create inclusive public spaces.</li>
                <li><strong>Metrocable system:</strong> Not just transportation, but an architectural statement that connects communities.</li>
            </ul>
            <h2>Bogotá's Architectural Revolution</h2>
            <p>The capital city showcases bold architectural statements that blend functionality with artistic vision:</p>
            <ul>
                <li><strong>Torres del Atrio:</strong> Twin towers designed by Rogers Stirk Harbour + Partners, setting new standards for sustainable architecture.</li>
                <li><strong>Centro Empresarial Santa Bárbara:</strong> A complex that combines traditional materials with modern design principles.</li>
                <li><strong>ÁGORA Convention Centre:</strong> An architectural marvel that hosts international events while showcasing Colombian innovation.</li>
            </ul>
            <h2>Sustainable Design Movement</h2>
            <p>Colombian architects are leading the way in sustainable design:</p>
            <ul>
                <li><strong>B3 Hotel Virrey:</strong> Bogotá's first bioclimatic hotel, using natural ventilation and solar energy.</li>
                <li><strong>Universidad EAN:</strong> A pioneering example of circular architecture, using recycled materials and efficient energy systems.</li>
            </ul>
            <h2>Preserving Heritage</h2>
            <p>Modern Colombian architecture doesn't reject the past but embraces it:</p>
            <ul>
                <li><strong>Renovation of historic centers:</strong> Projects that carefully blend modern amenities with colonial architecture.</li>
                <li><strong>Adaptive reuse:</strong> Converting historic buildings into contemporary spaces while preserving their character.</li>
            </ul>
            <p>Visit these architectural landmarks to witness how Colombia is building its future while honoring its past. Each structure tells a story of innovation, resilience, and cultural pride.</p>
        `,
        image: getAssetPath('/images/blog-modern-architecture.png'),
        author: 'Daniel Torres',
        date: '2026-03-05',
        tags: ['Architecture', 'Urban Design', 'Innovation', 'Culture', 'Cities']
    },

    {
        id: '1772888365620',
        title: `Trending Travel Destinations in Colombia for 2026`,
        slug: 'trending-travel-destinations-colombia-2026',
        excerpt: `Discover the emerging and timeless favorites that are set to top every traveler's list in 2026.`,

        content: `<p>As we look forward to 2026, Colombia continues to evolve as a premier travel destination, blending its rich cultural heritage with innovative urban experiences and breathtaking natural wonders. Here are the top trending destinations you shouldn't miss.</p><h2>1. The "Green Metropolitan" - Medellín</h2><p>Medellín remains at the forefront of urban transformation. In 2026, the city is set to unveil new "green corridors" and sustainable transport initiatives that make it more walkable and eco-friendly than ever. Don't miss the burgeoning art scene in Comuna 13 and the world-class gastronomy in El Poblado.</p><h2>2. Remote Paradise - Bahía Solano</h2><p>For those seeking to disconnect, Bahía Solano on the Pacific coast is the place to be. With a focus on high-end ecotourism, visitors can enjoy whale watching, jungle treks, and pristine beaches with minimal environmental impact.</p><h2>3. Cultural Hub - Popayán</h2><p>Known as the "White City," Popayán is gaining international recognition for its culinary traditions and historic Holy Week processions. In 2026, it will host several international gastronomy festivals that highlight traditional flavors with a modern twist.</p><h2>4. Adventure Frontier - San José del Guaviare</h2><p>The gateway to the Chiribiquete National Park, San José del Guaviare offers ancient rock art and stunning geological formations. It's the ultimate destination for off-the-beaten-path explorers.</p><h2>Planning Your 2026 Trip</h2><p>Whether you're drawn to the vibrant cities or the serene countryside, 2026 is the perfect year to experience the diverse beauty of Colombia. Be sure to book community-led tours to support local heritage and sustainable practices.</p>`,
        image: getAssetPath('/images/blog-trending-2026.png'),
        author: 'Adriana Silva',
        date: '2026-03-07',
        tags: ['Travel Trends', '2026', 'Destinations', 'Colombia']
    },
    {
        id: '1772901325492',
        title: `Colombian Ecosystems: A Rich Tapestry of Biodiversity`,
        slug: 'colombian-ecosystems-rich-diversity',
        excerpt: `Discover the extraordinary biodiversity of Colombia's diverse ecosystems, from Amazon rainforests to Andean cloud forests.`,
        content: `<p>Colombia, often hailed as one of the most biodiverse countries on Earth, harbors an astonishing array of ecosystems within its borders. This South American nation spans from the Caribbean Sea to the Pacific Ocean, encompassing a wide range of climatic zones and geographical features that support an unparalleled diversity of life.</p><h2>The Amazon Basin: A Living Laboratory</h2><p>Colombia contains a significant portion of the Amazon rainforest, and its Amazonian region covers a large share of the country's territory. The Amazon Basin within Colombia is home to thousands of species of insects, hundreds of bird species, and more than 200 species of mammals. The region's rivers, such as the Amazon and its tributaries, support an intricate web of aquatic life.</p><h2>Andean Cloud Forests: Fragile Jewel</h2><p>The high-altitude cloud forests of the Andes are among the most threatened ecosystems globally. These misty, elevated environments host endemic species found nowhere else on Earth, including the iconic spectacled bear, the golden frog, and a vast array of orchids.</p><h2>Coastal Ecosystems: Diversity Across Waters</h2><p>Colombia's dual coastline—Caribbean and Pacific—supports distinct marine ecosystems. The Caribbean coast features coral reefs, while the Pacific coast hosts mangrove forests and deep-sea environments. Both coasts are crucial habitats for marine giants like humpback whales, sea turtles, and various dolphin species.</p><h2>Chocó Biogeographic Region: The Most Biodiverse Area</h2><p>This region, located along the Pacific coast, is considered one of the most biodiverse terrestrial areas on the planet, with species richness comparable to the Amazon basin. It serves as a critical corridor for animal migration and plant dispersal, containing unique endemic species and colorful birds such as the resplendent quetzal, which still survives in the wild.</p><h2>Conservation Efforts: Protecting Colombia's Legacy</h2><p>Colombia has made significant strides in conservation through national parks, protected reserves, and indigenous territories. The establishment of the Chocó Biosphere Reserve, the Amazon rainforest conservation programs, and sustainable tourism practices aim to preserve its ecological heritage for future generations.</p>`,
        image: getAssetPath('/images/blog-ecosystems.png'),
        author: 'Mateo Jiménez',
        date: '2026-03-07',
        tags: ['Nature', 'Biodiversity', 'Wildlife', 'Conservation', 'Colombia']
    },
    {
        id: '1772905026408',
        title: `Guatapé: The Most Colorful Town in Colombia`,
        slug: 'guatape-colorful-pueblo',
        excerpt: `Experience the vibrant charm of Guatapé, famous for its colorful "zócalos" and the breathtaking view from the top of the Rock of Guatapé.`,
        content: `<p>Nestled in the rolling hills of Antioquia, just a few hours from Medellín, lies Guatapé, a town that seems to have jumped straight out of a painting. Known for its incredible use of color and its iconic monolithic rock, Guatapé is a highlight of any trip to Colombia.</p>

<h2>The "Zócalos" of Guatapé</h2>
<p>What makes Guatapé truly unique are the "zócalos" that adorn the lower half of almost every building. These carved and painted bas-reliefs depict everything from flowers and animals to scenes of daily life and historical events. Walking through the streets is like exploring an open-air gallery, with each building telling its own story through its vibrant and detailed decorations.</p>

<h2>El Peñol: The Giant Rock</h2>
<p>The town's most famous landmark is "El Peñol" (The Rock of Guatapé), a massive 200-meter-high monolithic rock. For those willing to climb the 742 steps built into a crack on one side, the reward is one of the most breathtaking views in the world: a 360-degree panorama of the surrounding reservoir and its countless verdant islands.</p>

<h2>The Reservoir: Adventure and Tranquility</h2>
<p>The vast reservoir, formed by the construction of the Guatapé-El Peñol hydroelectric complex in the 1970s, offers a playground for water sports and recreational activities. You can enjoy boat rides, jet-skiing, kayaking, or simply relax by the water's edge. The tranquil waters also hide the remnants of the old town of El Peñol, which was submerged to create the reservoir, adding a layer of history beneath the surface.</p>

<h2>Local Culture and Gastronomy</h2>
<p>Beyond its visual appeal, Guatapé offers a taste of authentic Colombian paisa culture. Sample traditional dishes like bandeja paisa, fresh trout from the reservoir, or a warm arepa with cheese. The town's vibrant plazas often host local musicians and artisans, providing a lively atmosphere, especially on weekends and holidays.</p>

<p>Guatapé is more than just a colorful facade; it's a destination that perfectly blends natural beauty, unique artistic expression, and a laid-back atmosphere, making it a must-visit for any traveler to Colombia.</p>`,
        image: getAssetPath('/images/blog-guatape.png'),
        author: 'Lucía Fernández',
        date: '2026-03-07',
        tags: ['Guatape', 'Antioquia', 'Colorful Towns', 'Adventure', 'Culture']
    },
    {
        id: '1772922020301',
        title: "Colombia's Richness: A Journey Through Its Cultural Diversity",
        slug: 'colombias-richness-cultural-diversity',
        excerpt: `Explore Colombia's vibrant cultural mosaic, from ancestral rhythms to the traditions that bring each of its regions to life.`,
        content: `<p>Colombia is a country where cultural diversity manifests in every corner, from the millennial traditions of its indigenous peoples to contemporary expressions that fuse the ancestral with the modern. This cultural richness is the result of centuries of exchange between indigenous, European, and African peoples.</p>

<h2>The Mosaic of Living Traditions</h2>
<p>In Colombia, each region tells its own story through unique cultural manifestations:</p>
<ul>
<li>The Caribbean Coast, with its joyful cumbia and vallenato</li>
<li>The Pacific and its ancestral rhythms such as currulao</li>
<li>The Eastern Plains (Llanos), where joropo marks the pace of life</li>
<li>The Andean region, guardian of bambuco and pasillo</li>
</ul>

<h2>Indigenous Peoples: Guardians of Ancestral Wisdom</h2>
<p>Colombia's indigenous communities keep alive a millenary legacy of knowledge and traditions. From the Wayuu in La Guajira to the Tikuna in the Amazon, each people contributes their own vision of the world and unique ways of relating to nature.</p>

<h2>Artisanship: The Art of Colombian Hands</h2>
<p>Colombian artisanship reflects the country's cultural diversity:</p>
<ul>
<li>Wayuu mochilas (bags), woven with ancestral stories</li>
<li>La Chamba pottery, black and red, preserving pre-Columbian techniques</li>
<li>Vueltiao hats, a symbol of the Zenú culture</li>
<li>Barranquilla Carnival masks, telling stories of resistance and celebration</li>
</ul>

<h2>Festivals and Celebrations: Joy Turned into Tradition</h2>
<p>The Colombian calendar is marked by celebrations that highlight this cultural diversity:</p>
<ul>
<li>The Barranquilla Carnival, a Masterpiece of the Oral and Intangible Heritage of Humanity</li>
<li>The Petronio Álvarez Festival in Cali, the largest celebration of Pacific music</li>
<li>The Black and White Carnival in Pasto, a festival of equality and art</li>
</ul>

<h2>Gastronomy: A Feast of Flavors and Knowledge</h2>
<p>Colombian cuisine reflects its cultural diversity, with each region providing unique ingredients and techniques:</p>
<ul>
<li>The Caribbean and its preparations with coconut and fresh fish</li>
<li>The Andean region and its comforting soups like ajiaco</li>
<li>The Pacific and its seafood in ancestral preparations</li>
<li>The Amazon and its exotic fruits and traditional dishes</li>
</ul>

<p>This cultural diversity is not just a tourist attraction; it is the very essence of Colombia, a country that celebrates its differences and finds in them its greatest strength. Each cultural manifestation is a thread in the social fabric that makes Colombia a unique and fascinating destination.</p>`,
        image: getAssetPath('/images/blog-indigenous-heritage.png'),
        author: 'Javier Córdoba',
        date: '2026-03-08',
        tags: ['Culture', 'Traditions', 'Music', 'Gastronomy', 'Indigenous', 'Colombia'],
    },
    {
        id: '1772925600000',
        title: 'Medellín: The City of Eternal Spring Reimagines Itself in 2026',
        slug: 'medellin-eternal-spring-reimagines-2026',
        excerpt: `Discover how Medellín, the 'City of Eternal Spring', is leading urban transformation with its green corridors, sustainable transport, and a vibrant cultural and nightlife scene in 2026.`,
        content: `
            <p>Medellín, known worldwide as the "City of Eternal Spring," continues its remarkable urban transformation and emerges as a must-visit destination in 2026. This Andean metropolis is a beacon of innovation in sustainability and urban design.</p>

            <h2>Green Corridors and Sustainable Transport</h2>
            <p>In 2026, Medellín celebrates the expansion of its "green corridors," which not only beautify the city but also improve air quality and urban biodiversity. These spaces, along with an integrated public transport system that includes Metrocable and public bicycles, make Medellín a more walkable and environmentally friendly city, redefining the urban experience for residents and visitors.</p>

            <h2>Art and Culture in Comuna 13</h2>
            <p>The vibrant artistic scene of Comuna 13 continues to be a testament to resilience and creativity. Its famous outdoor electric escalators and colorful graffiti murals tell stories of social transformation. In 2026, new artistic collectives and emerging galleries continue to enrich this space, offering guided tours that delve into the cultural meaning behind each work.</p>

            <h2>Innovative Gastronomy in El Poblado</h2>
            <p>The El Poblado neighborhood consolidates itself as a world-class gastronomic hub. From Michelin-starred restaurants experimenting with local ingredients to signature cuisine concepts that pay homage to Paisa roots, the culinary offer is as diverse as it is delicious. Organic markets and specialized coffee shops featuring regional beans complement this experience, inviting a journey through the flavors of Colombia.</p>

            <h2>Vibrant Nightlife: From El Poblado to Laureles</h2>
            <p>At nightfall, Medellín transforms into a melting pot of rhythms and encounters. The epicenter is El Poblado, with its iconic Parque Lleras and streets filled with sophisticated cocktail bars, live music pubs, and terraces with stunning city views. For a more local and bohemian atmosphere, the Laureles neighborhood offers "fondas paisas" and salsa bars where dancing is an essential part of the experience. The city also boasts world-class electronic music clubs that attract international DJs.</p>

            <h2>Safety and Local Rhythm</h2>
            <p>Security has improved significantly, allowing visitors to enjoy the city's pulse with peace of mind. As always, it is recommended to use reliable transportation platforms and maintain general situational awareness. Whether you're here for the urban innovation or the salsa beats, Medellín in 2026 is a city that dreams and constantly redefines itself.</p>
        `,
        image: getAssetPath('/images/blog-festivals.png'),
        author: 'Carolina Duque',
        date: '2026-03-08',
        tags: ['Medellín', 'Urbanism', 'Sustainability', 'Nightlife', 'Culture', '2026'],
    },
    {
        id: '1709849100000',
        title: `Nuquí: Colombia's Untouched Pacific Gem`,
        slug: 'nuqui-colombias-untouched-pacific-gem',
        excerpt: `Discover the raw beauty of Nuquí, a secluded paradise on Colombia's Pacific coast, known for whale watching, hot springs, and vibrant Afro-Colombian culture.`,
        content: `
            <p>Nuquí, a remote municipality on Colombia's Pacific coast, is one of the country's best-kept secrets. Far from the bustling tourist hubs, this region offers an authentic encounter with pristine nature and the rich traditions of its Afro-Colombian communities. It's a destination for those who seek tranquility, adventure, and a deep connection with the environment.</p>

            <h2>Whale Watching Extravaganza</h2>
            <p>Between July and October, Nuquí transforms into a prime spot for whale watching. Majestic humpback whales migrate from Antarctica to the warm waters of the Pacific to calve and breed. Boat tours with local guides offer incredible opportunities to witness these gentle giants breaching and playing, an unforgettable spectacle of nature.</p>

            <h2>Thermal Springs and Mangrove Forests</h2>
            <p>Beyond whale watching, Nuquí boasts natural thermal springs, such as those in Termales, where visitors can relax in mineral-rich waters surrounded by lush jungle. The intricate network of mangrove forests is perfect for kayaking or paddleboarding, allowing for intimate encounters with diverse birdlife, monkeys, and other small creatures.</p>

            <h2>Afro-Colombian Culture and Gastronomy</h2>
            <p>The heart of Nuquí beats to the rhythm of Afro-Colombian culture. The warmth and hospitality of the local people are as captivating as the landscape. Visitors can immerse themselves in local traditions through music, dance, and storytelling. The gastronomy is a highlight, featuring an abundance of fresh seafood prepared with coconut milk, plantains, and local spices, offering a true taste of the Pacific.</p>

            <h2>Surfing and Pristine Beaches</h2>
            <p>The powerful Pacific swells make Nuquí a growing destination for surfers, with uncrowded breaks suitable for various skill levels. For those preferring relaxation, the extensive, dark sand beaches like Playa Guachalito offer serene spots for unwinding, surrounded by the jungle's embrace and the ocean's soothing sounds.</p>

            <p>Reaching Nuquí typically involves a short flight from Medellín or Quibdó, followed by a boat transfer. This effort is richly rewarded by an experience that feels truly off the grid, providing a unique insight into Colombia’s wild Pacific soul.</p>
        `,
        image: getAssetPath('/images/blog-nuqui.png'),
        author: 'Ricardo Mesa',
        date: '2026-03-08',
        tags: ['Nuquí', 'Pacific Coast', 'Whale Watching', 'Ecotourism', 'Afro-Colombian Culture', 'Adventure']
    },
    {
        id: '22',
        title: 'Handicrafts of Ráquira: The Clay Capital of Colombia',
        slug: 'handicrafts-raquira-clay-capital',
        excerpt: `Discover Ráquira, Colombia's renowned "Clay Capital," where vibrant pottery and traditional crafts come to life, embodying centuries of artistic heritage.`,
        content: `
            <p>Nestled in the department of Boyacá, the charming town of Ráquira proudly carries the title of "The Clay Capital of Colombia." For centuries, its inhabitants have dedicated themselves to the art of pottery, transforming the rich local earth into an astonishing array of utilitarian and decorative handicrafts.</p>

            <h2>A World of Clay and Color</h2>
            <p>Walking through the streets of Ráquira is like stepping into an open-air gallery. Every shop overflows with vibrant ceramics, from traditional cooking vessels and intricate figurines to colorful animal sculptures and elaborate home decor. The diversity of designs and the skill of the artisans are truly captivating.</p>

            <p>The characteristic red, orange, and earthy tones of the clay are often adorned with bright blues, greens, and yellows, reflecting the cheerful spirit of Colombian folk art. You'll find everything from miniature pesebres (nativity scenes) to larger-than-life garden ornaments.</p>

            <h2>Beyond Pottery: Textiles and More</h2>
            <p>While clay is king in Ráquira, the town's craftsmanship extends to other traditional arts. Hand-woven textiles, including ponchos, blankets, and hats, showcase intricate patterns and natural dyes. Visitors can also find leather goods and wooden carvings, all made with meticulous attention to detail and a deep respect for ancestral techniques.</p>

            <h2>The Artisan Experience</h2>
            <p>One of the highlights of visiting Ráquira is the opportunity to see artisans at work. Many workshops are open to the public, allowing you to observe potters spinning clay on their wheels, meticulously painting intricate designs, or firing their creations in traditional kilns. It's a chance to understand the dedication and passion that goes into each piece.</p>
            <p>Don't miss the central plaza, where artisans often display their wares and where you can find unique souvenirs and gifts directly from the makers. Engaging with the local community and learning about their craft is an enriching experience.</p>

            <h2>A Cultural Treasure</h2>
            <p>Ráquira is more than just a marketplace; it's a living testament to Colombia's rich cultural heritage. The town's vibrant handicrafts tell stories of its people, their connection to the land, and their enduring artistic traditions. A visit here offers a colorful and authentic glimpse into the heart of Colombian craftsmanship.</p>
        `,
        image: getAssetPath('/images/blog-raquira-clay.png'),
        author: 'Elena "Potter" Ramirez',
        date: '2026-03-08',
        tags: ['Handicrafts', 'Art', 'Culture', 'Raquira', 'Boyacá', 'Pottery'],
    }

];

export function getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve([...blogPosts].sort((a, b) => b.date.localeCompare(a.date)));
}

export function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}
