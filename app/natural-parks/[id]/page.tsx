import { api } from '@/lib/api';
import AdUnit from '@/components/AdUnit';
import Link from 'next/link';
import { ArrowLeft, Trees, Binoculars } from 'lucide-react';

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await Promise.resolve(params);
    const park = await api.getNaturalArea(parseInt(id));
    return {
        title: `${park.name} | Visit Colombia`,
        description: park.description || `Discover ${park.name}, a natural wonder in Colombia.`,
    };
}

export default async function NaturalParkDetailPage({ params }: PageProps) {
    const { id } = await Promise.resolve(params);
    const park = await api.getNaturalArea(parseInt(id));

    // Placeholder for species since simple API call might not return it directly without extra calls
    // In a real app, we might fetch species by park ID if endpoint exists.
    const wildlife = [
        'Spectacled Bear', 'Andean Condor', 'Jaguar', 'Golden Dart Frog', 'Wax Palm'
    ];

    return (
        <div className="bg-background min-h-screen pb-12">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src={`https://source.unsplash.com/1600x900/?nature,jungle,colombia,${park.name}`}
                    alt={park.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <div className="inline-flex items-center bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-md">
                            <Trees size={16} className="mr-2" /> Natural Area
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 shadow-sm">{park.name}</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                <Link
                    href="/natural-parks"
                    className="inline-flex items-center text-white/90 hover:text-white mb-6 bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Parks
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-card rounded-xl p-8 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-4">About the Park</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {park.description || `Explore the wonders of ${park.name}. This natural area is a sanctuary for biodiversity and offers visitors a chance to connect with nature in its purest form.`}
                            </p>
                            {park.surface > 0 && (
                                <div className="mt-6 p-4 bg-muted/50 rounded-lg inline-block">
                                    <span className="block text-sm text-muted-foreground font-medium">Surface Area</span>
                                    <span className="text-lg font-semibold">{park.surface.toLocaleString()} km²</span>
                                </div>
                            )}
                        </section>

                        <section className="bg-card rounded-xl p-8 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <Binoculars className="mr-2 text-primary" /> Wildlife
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Keep an eye out for these species often found in this region:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {wildlife.map((animal, index) => (
                                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {animal}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="bg-card rounded-xl p-8 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-4">Activities</h2>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-lg">
                                <li>Hiking and trekking trails</li>
                                <li>Bird watching</li>
                                <li>Photography</li>
                                <li>Guided eco-tours</li>
                            </ul>
                        </section>

                        {/* AdSense Banner */}
                        <AdUnit type="adsense" />
                    </div>

                    {/* Sidebar / Monetization */}
                    <div className="space-y-6">
                        <div className="sticky top-24">
                            <AdUnit type="tour" title={`Adventure Tours in ${park.name}`} />

                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl mt-6">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Entrance Fees</h3>
                                <p className="text-sm text-blue-800">
                                    Check the official parks website for latest entrance fees and opening hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
