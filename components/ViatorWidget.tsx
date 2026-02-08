'use client';

import { Map } from 'lucide-react';

interface ViatorWidgetProps {
    term: string; // The search term (City or Park name)
}

export default function ViatorWidget({ term }: ViatorWidgetProps) {
    const partnerId = process.env.NEXT_PUBLIC_VIATOR_PARTNER_ID || 'P00287953';
    // UID is often required for affiliate links tracking in the new Viator Partner program
    const uid = 'U00775200';
    const searchUrl = `https://www.viator.com/searchResults/all?text=${encodeURIComponent(term)}&pid=${partnerId}&mcid=42383&medium=link&campaign=${encodeURIComponent(term.replace(/\s+/g, '-').toLowerCase())}`;

    return (
        <div className="w-full bg-card rounded-xl shadow-sm border p-6 my-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                            <Map size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                            Explore {term}
                        </h3>
                    </div>
                    <p className="text-muted-foreground">
                        Discover the best tours, activities, and experiences in {term}.
                        Book online with Viator for peace of mind.
                    </p>
                </div>
                <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-6 py-3 bg-[#00a88f] hover:bg-[#008f7a] text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                    Find Things to Do
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="mt-4 text-xs text-muted-foreground text-center md:text-left">
                * We may earn a commission from bookings made through this link at no extra cost to you.
            </div>
        </div>
    );
}
