import { getBlogPost, getBlogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await Promise.resolve(params);
    const post = await getBlogPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Visit Colombia`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await Promise.resolve(params);
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pb-12">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
                        >
                            <ArrowLeft size={16} className="mr-2" /> Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 shadow-sm leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-gray-300 space-x-6 text-sm md:text-base">
                            <div className="flex items-center">
                                <User size={18} className="mr-2" />
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <Calendar size={18} className="mr-2" />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                <article className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-border">
                        <div className="flex items-center gap-2 mb-4">
                            <Tag size={18} className="text-primary" />
                            <span className="font-semibold">Tags:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                <div className="mt-12 space-y-8">
                    <AdUnit type="adsense" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AdUnit type="hotel" title="Where to Stay" />
                        <AdUnit type="tour" title="Recommended Tours" />
                    </div>
                </div>
            </div>
        </div>
    );
}
