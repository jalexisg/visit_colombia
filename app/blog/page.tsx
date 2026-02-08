import { getBlogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

export const metadata = {
    title: 'Blog | Visit Colombia',
    description: 'Travel tips, guides, and inspiration for your trip to Colombia.',
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Hero Section */}
            <div className="relative py-24 bg-black/60">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://source.unsplash.com/1600x900/?notebook,travel,writing"
                        alt="Blog Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 shadow-sm">
                        Travel Journal
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto shadow-sm">
                        Stories, guides, and tips to help you plan your perfect Colombian adventure.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Blog Grid */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                            {post.tags.slice(0, 1).map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-primary/90 text-white text-xs rounded-full backdrop-blur-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                                            <div className="flex items-center">
                                                <Calendar size={14} className="mr-1" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center">
                                                <User size={14} className="mr-1" />
                                                {post.author}
                                            </div>
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="block group">
                                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-primary font-medium hover:underline mt-auto"
                                        >
                                            Read Article <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-12">
                            <AdUnit type="adsense" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-card rounded-xl p-6 shadow-sm border border-border sticky top-24">
                            <h3 className="font-bold text-lg mb-4">Popular Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Beaches', 'Coffee', 'Safety', 'Nature', 'Cities', 'Culture', 'Food'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm rounded-full hover:bg-secondary/20 cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <AdUnit type="tour" title="Top Rated Tours" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
