interface AdUnitProps {
    type: 'adsense' | 'hotel' | 'tour';
    title?: string; // e.g. "Find Hotels in Bogota"
}

export default function AdUnit({ type, title }: AdUnitProps) {
    const getAdContent = () => {
        switch (type) {
            case 'adsense':
                return (
                    <div className="w-full h-32 bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-gray-500 rounded-lg overflow-hidden my-6">
                        <span className="text-xs font-semibold uppercase tracking-wider mb-1">Advertisement</span>
                        <span className="text-sm">Google AdSense Banner Spot</span>
                    </div>
                );
            case 'hotel':
                return (
                    <div className="w-full p-6 bg-white border border-secondary/30 rounded-xl shadow-sm my-6">
                        <h4 className="font-bold text-lg mb-2 text-foreground">{title || 'Find Top Rated Hotels'}</h4>
                        <div className="h-12 bg-secondary/10 rounded flex items-center justify-center text-secondary-foreground text-sm font-medium border border-secondary/20 cursor-pointer hover:bg-secondary/20 transition-colors">
                            Hotel Affiliate Widget Placeholder
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">Best prices guaranteed</p>
                    </div>
                );
            case 'tour':
                return (
                    <div className="w-full p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl shadow-sm my-6">
                        <h4 className="font-bold text-lg mb-2 text-foreground">{title || 'Book Tours & Activities'}</h4>
                        <div className="h-12 bg-primary/10 rounded flex items-center justify-center text-primary-foreground text-sm font-medium border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors">
                            Tour Affiliate Widget Placeholder
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">Powered by Viator/GetYourGuide</p>
                    </div>
                );
        }
    };

    return getAdContent();
}
