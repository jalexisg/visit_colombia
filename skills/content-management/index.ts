import { BlogPost } from '@/types';
import { getAssetPath } from '@/lib/utils';

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Top 10 Beaches to Visit in Colombia',
        slug: 'top-10-beaches-colombia',
        excerpt: 'Discover the crystal clear waters of the Caribbean and the wild beauty of the Pacific coast.',
        content: 'Existing content...',
        image: getAssetPath('/images/blog/tayrona.png'),
        author: 'Maria Garcia',
        date: '2025-10-15',
        tags: ['Beaches', 'Caribbean', 'Pacific', 'Travel Guide'],
    },
    {
        id: '2',
        title: `The Coffee Triangle: A Sustainable Tourism Journey Through Colombia's Heartland`,
        slug: 'coffee-triangle-sustainable-tourism',
        excerpt: `Explore the Coffee Triangle's innovative approach to sustainable tourism, connecting travelers with local communities and preserving cultural heritage.`,
        content: `<p>The Coffee Triangle (Eje Cafetero) is more than just a picturesque landscape of rolling green hills and coffee plantations. It represents a pioneering model of sustainable tourism that intertwines environmental conservation, cultural preservation, and community empowerment.</p><h2>Beyond the Landscape: Community-Driven Tourism</h2><p>In recent years, the municipalities of Quindío, Caldas, and Risaralda have transformed traditional coffee tourism. Instead of merely offering picturesque farm tours, local communities have developed holistic experiences that provide meaningful connections between travelers and local life.</p><h2>Sustainable Farm Stays</h2><p>Visitors can now participate in 'agroturismo' experiences, staying with local farming families and participating in daily activities. From learning traditional coffee harvesting techniques to understanding organic farming practices, these stays provide an immersive and educational experience.</p><h2>Conservation and Biodiversity</h2><p>The Coffee Triangle has become a model for integrating tourism with ecological conservation. Many farms now function as both productive agricultural spaces and wildlife corridors, protecting endemic species and maintaining biodiversity.</p><h2>Economic Empowerment</h2><p>By developing sustainable tourism models, local communities have created alternative income streams that reduce dependency on traditional agricultural practices. This approach not only preserves cultural heritage but also provides economic resilience.</p><p>The Coffee Triangle's approach to sustainable tourism offers a blueprint for responsible travel that respects local communities, preserves cultural traditions, and protects the environment.</p>`,
        image: getAssetPath('/images/blog/coffee-triangle-sustainability.png'),
        author: 'Maria Gutierrez',
        date: '2026-03-13',
        tags: ['Sustainable Tourism', 'Coffee Triangle', 'Community Development', 'Ecotourism', 'Culture']
    },
    {
        id: '3',
        title: `Hidden Natural Wonders: Colombia's Untouched Ecological Treasures`,
        slug: 'colombia-hidden-natural-wonders',
        excerpt: `Explore Colombia's most breathtaking and least-known ecological destinations that offer unparalleled natural beauty and biodiversity.`,
        content: `<p>Beyond the well-trodden paths of Colombia's popular tourist destinations lies a world of incredible, virtually untouched natural wonders that showcase the country's remarkable ecological diversity.</p><h2>The Serranía de Chiribiquete: A Lost World</h2><p>Often called the 'Sistine Chapel of Nature', the Serranía de Chiribiquete National Park is a UNESCO World Heritage site that remains largely unexplored. This massive protected area spans over 2.7 million hectares and is home to indigenous rock art, pristine rainforests, and unique wildlife found nowhere else on Earth.</p><h2>Caño Cristales: The River of Five Colors</h2><p>Hidden in the Serranía de la Macarena National Natural Park, Caño Cristales transforms into a living painting during a short annual period. The riverbed explodes with vibrant red, yellow, green, blue, and black colors due to a unique aquatic plant called Macarenia clavigera. This phenomenon occurs typically between September and November, creating a surreal landscape that seems almost otherworldly.</p><h2>Los Nevados National Natural Park: Andean Wilderness</h2><p>Nestled in the heart of the Colombian Andes, Los Nevados offers a stark contrast to Colombia's tropical landscapes. This park features snow-capped volcanoes, high-altitude ecosystems, and unique páramo landscapes that are critical to water conservation. Visitors can explore glacial lakes, observe endemic species like the spectacled bear, and witness the incredible biodiversity of high-altitude environments.</p><h2>Gorgona Island: A Biological Treasure</h2><p>Once a notorious prison island, Gorgona is now a pristine biological reserve off Colombia's Pacific coast. The island offers an extraordinary ecosystem with dense rainforests, diverse marine life, and numerous endemic species. Humpback whales, sea turtles, and diverse bird populations make this a crucial conservation area.</p><p>These hidden natural wonders represent more than just beautiful landscapes. They are critical ecosystems that showcase Colombia's incredible biodiversity and the importance of conservation efforts. For the adventurous traveler seeking authentic, unspoiled experiences, these destinations offer a glimpse into Colombia's most extraordinary natural environments.</p>`,
        image: getAssetPath('/images/blog/hidden-natural-wonders.png'),
        author: 'Carlos Rodriguez',
        date: '2026-03-14',
        tags: ['Ecotourism', 'Natural Wonders', 'Conservation', 'Biodiversity', 'Off the Beaten Path']
    }
];

export function getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve([...blogPosts].sort((a, b) => b.date.localeCompare(a.date)));
}

export function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}