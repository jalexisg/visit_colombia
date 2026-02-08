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
        <div className="w-full bg-white rounded-xl shadow-sm border border-blue-100 p-6 my-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <BedDouble size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">
                            Stay in {term}
                        </h3>
                    </div>
                    <p className="text-slate-600">
                        Find the best hotel deals and cozy stays in {term}.
                        Save significantly on your booking.
                    </p>
                </div>
                <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-6 py-3 bg-[#003580] hover:bg-[#00224f] text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                    Find Deals
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
            <div className="mt-4 text-xs text-slate-400 text-center md:text-left">
                * Best Price Guarantee via Booking.com
            </div>
        </div>
    );
}
