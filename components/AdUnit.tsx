import HotelWidget from './HotelWidget';
import ViatorWidget from './ViatorWidget';

interface AdUnitProps {
    type: 'adsense' | 'hotel' | 'tour';
    title?: string; // e.g. "Find Hotels in Bogota"
}

export default function AdUnit({ type, title }: AdUnitProps) {
    const getAdContent = () => {
        switch (type) {
            case 'adsense':
                // Auto Ads will handle placement, so we don't render a placeholder
                return null;
            case 'hotel':
                return <HotelWidget term={title?.replace('Find Hotels in ', '').replace('Hotels near ', '') || 'Colombia'} />;
            case 'tour':
                const cleanTerm = title
                    ?.replace('Adventure Tours in ', '')
                    .replace('Tours in ', '')
                    .replace('Book Tours & Activities', '')
                    || 'Colombia';
                return <ViatorWidget term={cleanTerm} />;
        }
    };

    return getAdContent();
}
