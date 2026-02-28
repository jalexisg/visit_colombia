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
        image: getAssetPath('/images/hero-home.png'),
        author: 'Elena Rodriguez',
        date: '2026-02-10',
        tags: ['Travel Tips', 'Weather', 'Festivals'],
    },
    {
        id: '6',
        title: 'Discovering the Amazon: The Ultimate Ecotourism Adventure',
        slug: 'amazon-ecotourism-guide',
        excerpt: 'Immerse yourself in the lungs of the world. A guide to Leticia, Puerto Nariño, and the Amazon river.',
        content: `
            <p>The Colombian Amazon offers one of the most accessible and safe ways to experience the world's largest rainforest.</p>
            <h2>Leticia: The Gateway</h2>
            <p>Start your journey in Leticia, where Colombia borders Brazil and Peru. It's a vibrant hub of culture and nature.</p>
            <h2>Puerto Nariño</h2>
            <p>Known as the "Green Crib of Colombia," this eco-friendly village has no cars and is a model for sustainable living.</p>
            <h2>Wildlife</h2>
            <p>Look out for pink river dolphins, sloths, monkeys, and thousands of bird species.</p>
        `,
        image: getAssetPath('/images/dept-amazonas.png'),
        author: 'Mateo Silva',
        date: '2026-02-15',
        tags: ['Amazon', 'Wildlife', 'Ecotourism', 'Nature'],
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
        image: getAssetPath('/images/blog-safety.png'),
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
            <p>Failure to comply with Colombia\'s digitalized entry systems can result in immediate logistical failure. Here is what you need to know for 2026.</p>
            <h2>The Check-Mig System</h2>
            <p>The mandatory <strong>Check-Mig</strong> form must be completed via the Migración Colombia website within a window of 72 hours down to one hour before your flight’s departure. This is required for both entering and exiting the country.</p>
            <h2>Visa and Stay Regulations</h2>
            <p>Citizens from the US, Canada, and the EU receive a "Permiso de Ingreso y Permanencia" (PIP) stamp for 90 days. You can extend this for another 90 days (PTP) online, totaling 180 days per calendar year.</p>
            <h2>Health and Vaccinations</h2>
            <p>The Yellow Fever vaccine is highly recommended and often mandatory for visitors to National Parks like Tayrona or regions like the Amazon. Administer it at least 10 days before travel to ensure full immunity.</p>
        `,
        image: getAssetPath('/images/blog-header.png'),
        author: 'Admin Support',
        date: '2026-03-05',
        tags: ['Logistics', 'Visa', 'Health', 'Travel Guide'],
    },
    {
        id: '10',
        title: 'Climate & Festivals 2026: Best Timing Strategies',
        slug: 'climate-festivals-colombia-2026',
        excerpt: 'Maximize your experience by timing your visit with the dry seasons and world-class cultural events.',
        content: `
            <p>Colombia\'s lack of traditional seasons means climate is defined by altitude and rainfall patterns. Plan your 2026 trip strategically.</p>
            <h2>Optimal Travel Windows</h2>
            <p>The dry seasons from <strong>December to March</strong> and <strong>July to August</strong> are the peak periods for travel. These months offer the most stable conditions for Andean hiking and Caribbean beach activities.</p>
            <h2>2026 Major Cultural Events</h2>
            <ul>
                <li><strong>Barranquilla Carnival (March 1-4):</strong> The world\'s second-largest folkloric celebration.</li>
                <li><strong>Holy Week in Popayán (Mar 29 - Apr 5):</b> Historic religious processions dating back to 1556.</li>
                <li><strong>Medellín Flower Festival (August 1-10):</strong> A week-long celebration of Antioquian flower farming and culture.</li>
                <li><strong>Salsa Festival in Cali (September 25-28):</strong> Witness the global salsa capital in its full glory.</li>
            </ul>
        `,
        image: getAssetPath('/images/blog-header.png'),
        author: 'Culture Scout',
        date: '2026-03-10',
        tags: ['Festivals', 'Climate', 'Culture', '2026'],
    },
    {
        id: '11',
        title: 'Descubre la Gastronomía Colombiana: Un Viaje Culinario por Regiones',
        slug: 'gastronomia-colombiana-viaje-culinario',
        excerpt: 'Explora los sabores únicos de Colombia, desde la bandeja paisa en los Andes hasta los mariscos frescos del Caribe.',
        content: `
            <p>Colombia es un país de sabores vibrantes y diversos, reflejo de su rica geografía y herencia cultural. Cada región ofrece una experiencia culinaria única que encanta a los visitantes.</p>
            
            <h2>La Cocina Andina: Tradición y Sabor</h2>
            <p>En el corazón de los Andes, la gastronomía colombiana se caracteriza por platos contundentes y reconfortantes. La icónica <strong>Bandeja Paisa</strong>, originaria de la región de Antioquia, es un festín de frijoles, arroz, carne molida, chicharrón, huevo frito, chorizo, plátano maduro y aguacate. No puedes irte sin probar el <strong>Ajiaco Santafereño</strong> en Bogotá, una sopa cremosa de pollo, tres tipos de papa y mazorca, servida con alcaparras y crema de leche.</p>
            
            <h2>El Caribe: Frescura y Explosión Marina</h2>
            <p>La costa caribeña seduce con sus sabores tropicales y la abundancia de productos del mar. Prueba el refrescante <strong>Pescado Frito</strong> con arroz con coco y patacones, o deléitate con un buen <strong>Ceviche de Camarones</strong>. Las <strong>Arepas con Huevo</strong> son el desayuno por excelencia en esta región, fritas y rellenas.</p>
            
            <h2>El Pacífico: Exotismo y Tradición Afrocolombiana</h2>
            <p>La cocina del Pacífico es menos conocida pero igualmente fascinante, con fuertes influencias afrocolombianas e ingredientes exóticos. Los <strong>Encocados</strong> de pescado o mariscos, cocinados en leche de coco, son un imperdible, así como el <strong>Sancocho de Pescado</strong> y las empanadas de cambray.</p>
            
            <h2>Postres y Bebidas Típicas</h2>
            <p>Para endulzar el paladar, prueba el <strong>Dulce de Leche (Arequipe)</strong>, los <strong>Bocadillos Veleños</strong> de guayaba o los <strong>Cocadas</strong> de coco. No olvides acompañar tus comidas con un buen <strong>Jugo Natural</strong> de frutas exóticas como lulo, maracuyá o guanábana, y por supuesto, una taza del mundialmente famoso <strong>Café Colombiano</strong>.</p>
            
            <p>La gastronomía colombiana es una invitación a explorar la diversidad del país a través de sus sabores, una experiencia inolvidable para cualquier viajero.</p>
        `,
        image: getAssetPath('/images/blog-coffee.png'),
        author: 'Bukaro',
        date: '2026-02-28',
        tags: ['Gastronomía', 'Comida', 'Cultura', 'Viajes Culinarios', 'Colombia']
    },
    {
        id: '12',
        title: 'Aventura Extrema en Colombia: Deportes y Actividades para Adrenaline Junkies',
        slug: 'aventura-extrema-colombia',
        excerpt: 'Desde parapente en el Valle del Cauca hasta el rafting en el río Magdalena, Colombia ofrece emociones fuertes para todos los amantes de la adrenalina.',
        content: `
            <p>Colombia, con su geografía diversa que abarca desde picos andinos hasta selvas amazónicas y costas caribeñas, es un paraíso para los entusiastas de la aventura y los deportes extremos. Prepárate para vivir experiencias que te dejarán sin aliento.</p>

            <h2>Parapente en el Valle del Cauca</h2>
            <p>Siente la libertad de volar sobre los paisajes verdes del <strong>Valle del Cauca</strong>, especialmente en lugares como Roldanillo o Calima. Las corrientes térmicas favorables hacen de Colombia uno de los mejores destinos del mundo para el parapente, apto tanto para principiantes con vuelos tándem como para pilotos experimentados.</p>

            <h2>Rafting y Kayak en Ríos Salvajes</h2>
            <p>Los caudalosos ríos colombianos son perfectos para el rafting y el kayak. El <strong>Río Magdalena</strong>, el más importante del país, ofrece tramos emocionantes, mientras que el <strong>Río Suárez</strong> en Santander es conocido por sus rápidos de clase IV y V. Para una experiencia más tranquila pero igualmente hermosa, puedes hacer kayak en el <strong>Río La Miel</strong> en Caldas.</p>

            <h2>Espeleología en Santander y Boyacá</h2>
            <p>Explora el mundo subterráneo de Colombia adentrándote en sus impresionantes cuevas. La región de Santander, con cuevas como la del Indio o la de la Vaca, y Boyacá, con la Cueva del Nitro, ofrecen formaciones rocosas espectaculares y desafíos para todos los niveles de experiencia.</p>

            <h2>Escalada en Roca y Montañismo</h2>
            <p>Los Andes colombianos presentan innumerables oportunidades para la escalada. Lugares como <strong>Suesca</strong> (cerca de Bogotá) son famosos por sus paredes rocosas y escuelas de escalada. Para los montañistas, los picos nevados del <strong>Parque Nacional Natural Los Nevados</strong> o la <strong>Sierra Nevada del Cocuy</strong> ofrecen retos inolvidables y paisajes sobrecogedores.</p>

            <h2>Buceo en el Caribe y el Pacífico</h2>
            <p>Explora la vibrante vida marina en el mar Caribe, con destinos como <strong>Providencia</strong>, <strong>San Andrés</strong> o el <strong>Parque Nacional Natural Corales del Rosario y San Bernardo</strong>. En el Pacífico, el buceo en <strong>Malpelo</strong> o <strong>Gorgona</strong> te permitirá avistar tiburones martillo, ballenas jorobadas (en temporada) y tortugas marinas.</p>
            
            <p>Ya sea en el aire, en el agua o bajo tierra, Colombia te espera con una aventura a medida para tu espíritu más audaz. ¡Prepara tu equipo y lánzate a la exploración!</p>
        `,
        image: getAssetPath('/images/blog-tayrona.png'),
        author: 'Bukaro',
        date: '2026-02-28',
        tags: ['Aventura', 'Deportes Extremos', 'Naturaleza', 'Adrenalina', 'Colombia']
    }
];

export function getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve(blogPosts);
}

export function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}
