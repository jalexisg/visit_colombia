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
    }
];

export function getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve(blogPosts);
}

export function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}
