'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', query);
        // TODO: Implement navigation to search results or filter
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
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors shadow-md"
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
}
