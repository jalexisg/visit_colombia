'use client';

import { Map } from 'lucide-react';

interface ViatorWidgetProps {
    term: string; // The search term (City or Park name)
}

export default function ViatorWidget({ term }: ViatorWidgetProps) {
    const partnerId = process.env.NEXT_PUBLIC_VIATOR_PARTNER_ID || 'P00287953';
    // List of major/unique Colombian cities that work better WITHOUT appending ", Colombia"
    // For these, adding ", Colombia" often dilutes results with generic country-wide tours.
    const knownUniqueCities = [
        'leticia', 'cartagena', 'bogotá', 'medellín', 'kali', 'barranquilla',
        'santa marta', 'san andrés', 'pereira', 'manizales', 'armenia',
        'bucaramanga', 'popayán', 'villa de leyva', 'salento', 'monguí'
    ];

    const lowerTerm = term.toLowerCase();
    const isUnique = knownUniqueCities.some(city => lowerTerm.includes(city));

    // If it's a known unique city, search just the name. Otherwise, append ", Colombia" to avoid "Nara, Japan" issues.
    const searchTerm = isUnique ? term : `${term}, Colombia`;

    const searchUrl = `https://www.viator.com/searchResults/all?text=${encodeURIComponent(searchTerm)}&pid=${partnerId}&mcid=42383&medium=link&campaign=${encodeURIComponent(term.replace(/\s+/g, '-').toLowerCase())}`;

    return (
        <div className="w-full bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden transition-all hover:shadow-md my-6 group">
            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-emerald-50/80 rounded-md text-[#00a88f]">
                                <Map size={18} />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg leading-tight">
                                Explore {term}
                            </h3>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                            Discover top-rated tours and activities. Book online for peace of mind.
                        </p>
                    </div>
                </div>

                <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00a88f] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#008f7a] active:scale-[0.98]"
                >
                    Find Things to Do
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <div className="mt-2 text-[10px] text-slate-400 text-center font-medium">
                    Powered by Viator
                </div>
            </div>
        </div>
    );
}
