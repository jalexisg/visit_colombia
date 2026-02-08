'use client';

import { BedDouble } from 'lucide-react';

interface HotelWidgetProps {
    term: string; // The search term (City or Park name)
}

export default function HotelWidget({ term }: HotelWidgetProps) {
    // Defaulting to a common generic affiliate ID or keeping it empty if unknown. 
    // The user needs to provide their specific AID (e.g. 1234567)
    const affiliateId = process.env.NEXT_PUBLIC_BOOKING_PARTNER_ID || '0';

    // Helper to generate specific Booking.com landing URLs
    const getBookingUrl = (term: string) => {
        const normalizedTerm = term.toLowerCase().trim();

        // Map of specific terms to Booking.com slugs (or gateway cities for parks)
        const overrides: { [key: string]: string } = {
            'cartagena de indias': 'cartagena',
            'cartagena': 'cartagena',
            'santa marta': 'santa-marta',
            'villa de leyva': 'villa-de-leiva-co', // Specific Booking.com slug
            'bogotá': 'bogota',
            'medellín': 'medellin',
            'san andrés': 'san-andres',
            'providencia': 'providencia', // might need check, but default slug often works

            // Parks -> Gateway Cities
            'tayrona national natural park': 'santa-marta',
            'tayrona': 'santa-marta',
            'cocuy national park': 'el-cocuy',
            'el cocuy': 'el-cocuy',
            'los nevados national natural park': 'manizales',
            'rosario islands': 'cartagena',
            'parque nacional natural tayrona': 'santa-marta',
            'san agustín': 'san-agustin',
        };

        // Check for exact override
        if (overrides[normalizedTerm]) {
            return `https://www.booking.com/city/co/${overrides[normalizedTerm]}.html?aid=${affiliateId}`;
        }

        // Remove accents for default slug generation
        const slug = normalizedTerm
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-');

        return `https://www.booking.com/city/co/${slug}.html?aid=${affiliateId}`;
    };

    const searchUrl = getBookingUrl(term);

    return (
        <div className="w-full bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden transition-all hover:shadow-md my-6 group">
            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-blue-50/80 rounded-md text-blue-600">
                                <BedDouble size={18} />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg leading-tight">
                                Stay in {term}
                            </h3>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                            Find top-rated hotels and deals. Best price guaranteed.
                        </p>
                    </div>
                </div>

                <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#003580] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#00224f] active:scale-[0.98]"
                >
                    Find Deals
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <div className="mt-2 text-[10px] text-slate-400 text-center font-medium">
                    Powered by Booking.com
                </div>
            </div>
        </div>
    );
}
