import { api } from '@/lib/api';
import Card from '@/components/Card';
import { Trees } from 'lucide-react';

export const metadata = {
    title: 'Natural Parks | Visit Colombia',
    description: 'Discover the breathtaking natural parks of Colombia. From mountains to oceans, explore nature.',
};

export default async function NaturalParksPage() {
    const parks = await api.getNaturalAreas();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center">
                        <Trees className="mr-3 text-green-600" size={40} /> Natural Parks
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Colombia is one of the most biodiverse countries in the world. Explore its protected natural areas, sanctuaries, and national parks.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {parks.map((park) => (
                    <Card
                        key={park.id}
                        title={park.name}
                        description={park.description || `Explore ${park.name}, a protected natural area with unique biodiversity.`}
                        href={`/natural-parks/${park.id}`}
                        buttonText="Explore Park"
                        image={`https://source.unsplash.com/800x600/?nature,park,colombia,${park.name}`}
                    />
                ))}
            </div>
        </div>
    );
}
