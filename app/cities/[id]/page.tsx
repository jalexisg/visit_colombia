import { api } from '@/lib/api';
import { getAssetPath } from '@/lib/utils';
import { getCityImage, getCityOverview } from '@/lib/city-data';
import AdUnit from '@/components/AdUnit';
import ViatorWidget from '@/components/ViatorWidget';
import Link from 'next/link';
import { ArrowLeft, MapPin, Info } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    try {
        const cities = await api.getCities();
        return cities.map((city) => ({
            id: city.id.toString(),
        }));
    } catch (e) {
        console.error('Failed to generate static params for cities', e);
        return [];
    }
}

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await Promise.resolve(params);
    try {
        const city = await api.getCity(parseInt(id));
        const department = await api.getDepartment(city.departmentId);
        const image = getCityImage(city.name, department.name);
        const description = getCityOverview(city.name, city.description, department.name);

        return {
            title: `${city.name} | Visit Colombia`,
            description: description,
            openGraph: {
                title: `${city.name} | Visit Colombia`,
                description: description,
                images: [image],
            },
            twitter: {
                card: "summary_large_image",
                title: `${city.name} | Visit Colombia`,
                description: description,
                images: [image],
            },
        };
    } catch (e) {
        return {
            title: 'City Not Found',
        };
    }
}

export default async function CityDetailPage({ params }: PageProps) {
    const { id } = await Promise.resolve(params);
    let city;
    try {
        city = await api.getCity(parseInt(id));
    } catch (e) {
        notFound();
    }

    const department = await api.getDepartment(city.departmentId);
    const overview = getCityOverview(city.name, city.description, department.name);

    return (
        <div className="bg-background min-h-screen pb-12">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={getCityImage(city.name, city.department?.name)}
                    alt={city.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-5xl font-bold text-white mb-2 shadow-sm">{city.name}</h1>
                        <p className="text-xl text-gray-200 flex items-center shadow-sm">
                            <MapPin size={20} className="mr-2" />
                            {city.department ? city.department.name : 'Colombia'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                <Link
                    href={city.departmentId ? `/departments/${city.departmentId}/cities` : '/departments'}
                    className="inline-flex items-center text-white/90 hover:text-white mb-6 bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to List
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-card rounded-xl p-8 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <Info className="mr-2 text-primary" /> Overview
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                                {overview.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {city.population > 0 && (
                                    <div className="p-4 bg-muted/50 rounded-lg">
                                        <span className="block text-sm text-muted-foreground font-medium">Population</span>
                                        <span className="text-lg font-semibold">{city.population.toLocaleString()}</span>
                                    </div>
                                )}
                                {city.surface > 0 && (
                                    <div className="p-4 bg-muted/50 rounded-lg">
                                        <span className="block text-sm text-muted-foreground font-medium">Surface Area</span>
                                        <span className="text-lg font-semibold">{city.surface.toLocaleString()} km²</span>
                                    </div>
                                )}
                            </div>
                        </section>

                        <section className="bg-card rounded-xl p-8 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-4">Things to Do</h2>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-lg">
                                {/* Placeholders since API might not have this detailed info yet */}
                                <li>Explore the historic city center and colonial architecture.</li>
                                <li>Visit local museums and cultural centers.</li>
                                <li>Enjoy traditional Colombian cuisine at local restaurants.</li>
                                <li>Take a nature walk in nearby ecological parks.</li>
                                <li>Experience the vibrant nightlife and local music scene.</li>
                            </ul>

                            <div className="mt-8">
                                <ViatorWidget term={city.name} />
                            </div>
                        </section>

                        <section className="bg-card rounded-xl p-8 shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-4">How to Get There</h2>
                            <p className="text-muted-foreground">
                                {city.name} is accessible by road from major cities. Use local bus services or rent a car for a scenic drive. Check purely local transport options upon arrival.
                            </p>
                            <div className="mt-6 w-full h-[300px] rounded-lg overflow-hidden border border-border">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(`${city.name}, ${department.name}, Colombia`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                ></iframe>
                            </div>
                        </section>

                        {/* AdSense Banner */}
                        <AdUnit type="adsense" />
                    </div>

                    {/* Sidebar / Monetization */}
                    <div className="space-y-6">
                        <div className="sticky top-24">
                            <AdUnit type="hotel" title={`Hotels in ${city.name}`} />
                            <AdUnit type="tour" title={`Tours in ${city.name}`} />

                            <div className="p-6 bg-gradient-to-br from-secondary/10 to-transparent rounded-xl border border-secondary/20 mt-6">
                                <h3 className="font-bold text-lg mb-2">Travel Tip</h3>
                                <p className="text-sm text-muted-foreground">
                                    Don't forget to try the local coffee and fruits while you are here!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
