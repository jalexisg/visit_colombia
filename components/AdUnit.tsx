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
