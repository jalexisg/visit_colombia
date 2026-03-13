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
    }
];

export function getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve([...blogPosts].sort((a, b) => b.date.localeCompare(a.date)));
}

export function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}