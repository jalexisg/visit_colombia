import { api } from '@/lib/api';
import { getAssetPath } from '@/lib/utils';
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
        const image = getAssetPath(
            city.name.toLowerCase().includes('bogot') ? '/images/city-bogota.png' :
                city.name.toLowerCase().includes('medell') ? '/images/city-medellin.png' :
                    city.name.toLowerCase().includes('cali') ? '/images/city-cali.png' :
                        city.name.toLowerCase().includes('cartagena') ? '/images/blog-cartagena.png' :
                            city.name.toLowerCase().includes('barranquilla') ? '/images/city-barranquilla.png' :
                                city.name.toLowerCase().includes('santa marta') ? '/images/city-santa-marta.png' :
                                    city.name.toLowerCase().includes('san andr') ? '/images/city-san-andres.png' :
                                        city.name.toLowerCase().includes('neiva') ? '/images/city_neiva.png' :
                                            city.name.toLowerCase().includes('pasto') ? '/images/city_pasto.png' :
                                                city.name.toLowerCase().includes('villavicencio') ? '/images/city_villavicencio.png' :
                                                    city.name.toLowerCase().includes('popay') ? '/images/city_popayan.png' :
                                                        city.name.toLowerCase().includes('valledupar') ? '/images/city_valledupar.png' :
                                                            city.name.toLowerCase().includes('monter') ? '/images/city_monteria.png' :
                                                                city.name.toLowerCase().includes('tunja') ? '/images/city_tunja.png' :
                                                                    city.name.toLowerCase().includes('riohacha') ? '/images/city_riohacha.png' :
                                                                        city.name.toLowerCase().includes('quibd') ? '/images/city_quibdo.png' :
                                                                            city.name.toLowerCase().includes('leticia') ? '/images/city_leticia.png' :
                                                                                city.name.toLowerCase().includes('florencia') ? '/images/city_florencia.png' :
                                                                                    '/images/culture-colonial.png'
        );

        return {
            title: `${city.name} | Visit Colombia`,
            description: city.description || `Discover ${city.name}, a beautiful destination in Colombia.`,
            openGraph: {
                title: `${city.name} | Visit Colombia`,
                description: city.description || `Discover ${city.name}, a beautiful destination in Colombia.`,
                images: [image],
            },
            twitter: {
                card: "summary_large_image",
                title: `${city.name} | Visit Colombia`,
                description: city.description || `Discover ${city.name}, a beautiful destination in Colombia.`,
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

    return (
        <div className="bg-background min-h-screen pb-12">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={getAssetPath(
                        city.name.toLowerCase().includes('bogot') ? '/images/city-bogota.png' :
                            city.name.toLowerCase().includes('medell') ? '/images/city-medellin.png' :
                                city.name.toLowerCase().includes('cali') ? '/images/city-cali.png' :
                                    city.name.toLowerCase().includes('cartagena') ? '/images/blog-cartagena.png' :
                                        city.name.toLowerCase().includes('barranquilla') ? '/images/city-barranquilla.png' :
                                            city.name.toLowerCase().includes('santa marta') ? '/images/city-santa-marta.png' :
                                                city.name.toLowerCase().includes('san andr') ? '/images/city-san-andres.png' :
                                                    city.name.toLowerCase().includes('neiva') ? '/images/city_neiva.png' :
                                                        city.name.toLowerCase().includes('pasto') ? '/images/city_pasto.png' :
                                                            city.name.toLowerCase().includes('villavicencio') ? '/images/city_villavicencio.png' :
                                                                city.name.toLowerCase().includes('popay') ? '/images/city_popayan.png' :
                                                                    city.name.toLowerCase().includes('valledupar') ? '/images/city_valledupar.png' :
                                                                        city.name.toLowerCase().includes('monter') ? '/images/city_monteria.png' :
                                                                            city.name.toLowerCase().includes('tunja') ? '/images/city_tunja.png' :
                                                                                city.name.toLowerCase().includes('riohacha') ? '/images/city_riohacha.png' :
                                                                                    city.name.toLowerCase().includes('quibd') ? '/images/city_quibdo.png' :
                                                                                        city.name.toLowerCase().includes('leticia') ? '/images/city_leticia.png' :
                                                                                            city.name.toLowerCase().includes('florencia') ? '/images/city_florencia.png' :
                                                                                                '/images/culture-colonial.png' // Default fallback
                    )}
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
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {/* Use English fallback since API returns Spanish descriptions */}
                                {`${city.name} is a beautiful city located in the ${city.department ? city.department.name : ''} department of Colombia. With a population of ${city.population?.toLocaleString() || 'many'} residents${city.surface ? ` and covering ${city.surface.toLocaleString()} km²` : ''}, this vibrant destination offers visitors a unique blend of Colombian culture, history, and natural beauty. Explore its streets, meet the welcoming locals, and discover why ${city.name} is a special place to visit.`}
                            </p>

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
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(city.name + ', Colombia')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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
