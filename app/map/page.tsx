import { MapPin } from 'lucide-react';
import MapClientWrapper from '@/components/MapClientWrapper';
import { manualAttractions } from '@/lib/attraction-data';

export const metadata = {
    title: 'Interactive Map | Visit Colombia',
    description: 'Explore the map of Colombia and discover amazing touristic attractions.',
};

export default async function MapPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-foreground mb-8 flex items-center">
                <MapPin className="mr-3 text-primary" size={40} />
                Explore Colombia
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
                Discover the best touristic attractions across the country. Click on the markers to learn more.
            </p>
            <div className="w-full h-[600px] bg-muted rounded-xl overflow-hidden shadow-lg border border-border relative z-0">
                <MapClientWrapper attractions={manualAttractions} />
            </div>
        </div>
    );
}
