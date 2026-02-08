'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Normalize text to remove accents and convert to lowercase
function normalizeText(text: string): string {
    return text
        .normalize('NFD') // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
        .toLowerCase();
}

export default function Search() {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() && !isSearching) {
            setIsSearching(true);
            const searchTerm = query.trim();
            const normalizedSearch = normalizeText(searchTerm);

            try {
                // First, try to find a city with this name
                const response = await fetch('https://api-colombia.com/api/v1/City');
                if (response.ok) {
                    const cities = await response.json();
                    const matchingCity = cities.find((city: { name: string; id: number }) =>
                        normalizeText(city.name) === normalizedSearch
                    );

                    if (matchingCity) {
                        // Found a city! Navigate directly to it
                        router.push(`/cities/${matchingCity.id}`);
                        setIsSearching(false);
                        return;
                    }
                }
            } catch (error) {
                console.error('Error searching for city:', error);
                // If API fails, fall through to department search
            }

            // No city found, search in departments
            router.push(`/departments?search=${encodeURIComponent(searchTerm)}`);
            setIsSearching(false);
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-4 rounded-full border-2 border-transparent focus:border-primary bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Search for cities, departments..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isSearching}
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                    <button
                        type="submit"
                        disabled={isSearching}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSearching ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </div>
        </form>
    );
}
