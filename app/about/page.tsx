
import { getAssetPath } from '@/lib/utils';
import { Users, Heart, Map, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'About Us | Visit Colombia',
    description: 'Learn about our mission to showcase the beauty of Colombia to the world. We are passionate travelers sharing the magic of this country.',
    openGraph: {
        title: 'About Us | Visit Colombia',
        description: 'Learn about our mission to showcase the beauty of Colombia to the world.',
        images: ['/images/hero-home.png'],
    },
};

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={getAssetPath('/images/hero-home.png')}
                        alt="Colombia Landscape"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                        Sharing the Magic of Colombia
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        We are a community of travelers, photographers, and writers dedicated to showing the world the true beauty of our country.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                            Our Mission
                        </span>
                        <h2 className="text-4xl font-bold text-foreground leading-tight">
                            More Than Just a Travel Guide
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Visit Colombia was born from a simple idea: to change the narrative about our beautiful country. For too long, Colombia was defined by its past. We are here to show you its present and future.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            From the vibrant streets of Cartagena to the misty peaks of the Andes, and the untamed Amazon rainforest, we curate authentic experiences that connect you with the heart of Colombia.
                        </p>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src={getAssetPath('/images/dept-coffee.png')}
                            alt="Colombian Coffee Culture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Stats / Why Choose Us */}
            <section className="bg-secondary/5 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Why Trust Our Guides?</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border text-center hover:translate-y-[-5px] transition-transform">
                                <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-6">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                                <p className="text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-4 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                            Whether you're planning a solo backpacking trip or a luxury family vacation, we have the resources you need.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>
            </section>
        </div>
    );
}

const stats = [
    {
        icon: <Map size={32} />,
        value: "32",
        label: "Departments Covered"
    },
    {
        icon: <Users size={32} />,
        value: "1M+",
        label: "Happy Travelers"
    },
    {
        icon: <Heart size={32} />,
        value: "100%",
        label: "Locally Curated"
    },
    {
        icon: <ShieldCheck size={32} />,
        value: "24/7",
        label: "Safety Updates"
    }
];
