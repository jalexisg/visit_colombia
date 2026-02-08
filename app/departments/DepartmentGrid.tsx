'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Fuse, { FuseResult } from 'fuse.js';
import Card from '@/components/Card';
import { getAssetPath } from '@/lib/utils';
import { departmentDescriptions } from '@/lib/department-data';
import { Department } from '@/types';

// Normalize text to remove accents and convert to lowercase
function normalizeText(text: string): string {
    return text
        .normalize('NFD') // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
        .toLowerCase();
}

interface City {
    id: number;
    name: string;
    description: string;
}

interface DepartmentGridProps {
    departments: Department[];
}

export default function DepartmentGrid({ departments }: DepartmentGridProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchQuery = searchParams.get('search') || '';

    // Configure Fuse.js for fuzzy search
    const fuse = useMemo(() => {
        return new Fuse(departments, {
            keys: [
                { name: 'name', weight: 0.7 },
                { name: 'cities.name', weight: 0.3 },
                { name: 'description', weight: 0.3 }
            ],
            threshold: 0.6, // Increased to allow for suggestions
            includeScore: true,
            includeMatches: true,
            minMatchCharLength: 2,
            ignoreLocation: true,
            useExtendedSearch: false
        });
    }, [departments]);

    const [filteredDepartments, setFilteredDepartments] = useState<Department[]>(departments);
    const [suggestions, setSuggestions] = useState<Department[]>([]);
    const [cityMatches, setCityMatches] = useState<{ city: City, department: Department }[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (searchQuery) {
            const results: FuseResult<Department>[] = fuse.search(searchQuery);

            // 1. Identify Department Matches (High score on name)
            const deptMatches = results
                .filter(r => r.score !== undefined && r.score < 0.4 && r.matches?.some(m => m.key === 'name'))
                .map(r => r.item);

            // 2. Identify City Matches (Any score lower than threshold, matching on cities.name)
            const potentialCityMatches = results
                .filter(r => r.matches?.some(m => m.key === 'cities.name'));

            const extractedCities: { city: any, department: Department }[] = [];

            potentialCityMatches.forEach(result => {
                const dept = result.item;
                // Find the specific cities that matched
                // We need to re-search or filter the cities within this department because Fuse gives us the Department
                const deptCities = dept.cities || [];
                const queryNormalized = normalizeText(searchQuery);

                // Simple inclusion check for now since Fuse.js matches might be complex to parse perfectly for nested arrays without indices
                // Ideally we'd use result.matches indices, but this is robust enough for now
                const matchedInDept = deptCities.filter((city: City) =>
                    normalizeText(city.name).includes(queryNormalized)
                );

                matchedInDept.forEach((city: City) => {
                    extractedCities.push({ city, department: dept });
                });
            });

            // 3. Identify Suggestions (Low score, no direct department match)
            const potentialSuggestions = results
                .filter(r => r.score !== undefined && r.score >= 0.4 && r.score <= 0.6)
                .map(r => r.item);


            setFilteredDepartments(deptMatches);
            setCityMatches(extractedCities);

            // Only show suggestions if we have absolutely no results
            if (deptMatches.length === 0 && extractedCities.length === 0 && potentialSuggestions.length > 0) {
                setSuggestions(potentialSuggestions.slice(0, 5));
                setShowSuggestions(true);
            } else {
                setShowSuggestions(false);
                setSuggestions([]);
            }

        } else {
            setFilteredDepartments(departments);
            setCityMatches([]);
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchQuery, fuse, departments]);

    const handleSuggestionClick = (deptName: string) => {
        router.push(`/departments?search=${encodeURIComponent(deptName)}`);
    };



    return (
        <>
            {searchQuery && (
                <div className="mb-6 space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                        <p className="text-sm text-foreground">
                            {filteredDepartments.length > 0 || cityMatches.length > 0 ? (
                                <>
                                    Found <strong>{filteredDepartments.length}</strong> department{filteredDepartments.length !== 1 ? 's' : ''} and <strong>{cityMatches.length}</strong> cit{cityMatches.length !== 1 ? 'ies' : 'y'} for "<strong>{searchParams.get('search')}</strong>"
                                </>
                            ) : showSuggestions ? (
                                <>No exact matches for "<strong>{searchParams.get('search')}</strong>". Did you mean:</>
                            ) : (
                                <>No results found for "<strong>{searchParams.get('search')}</strong>"</>
                            )}
                        </p>
                    </div>

                    {/* City Matches Section */}
                    {cityMatches.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-primary">Cities found</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {cityMatches.map((match, idx) => (
                                    <div key={`${match.city.id}-${idx}`} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-card text-card-foreground">
                                        <h4 className="font-bold text-lg">{match.city.name}</h4>
                                        <p className="text-sm text-muted-foreground mb-2">in {match.department.name}</p>
                                        <p className="text-sm line-clamp-2 mb-3">{match.city.description}</p>
                                        <a href={`/cities/${match.city.id}`} className="text-primary hover:underline text-sm font-medium">
                                            View Details &rarr;
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {showSuggestions && suggestions.length > 0 && (
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {suggestions.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => handleSuggestionClick(dept.name)}
                                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                {dept.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {(filteredDepartments.length > 0) && (
                <div className="mb-4">
                    {searchQuery && <h3 className="text-xl font-semibold mb-4 text-primary">Departments found</h3>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDepartments.map((dept) => {
                            // Explicit mapping of department names to images
                            const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            const name = normalize(dept.name);

                            let imagePath = '/images/culture-colonial.png'; // Default fallback

                            // Specific mappings
                            if (name.includes('Amazonas')) imagePath = '/images/dept-amazonas.png';
                            else if (name.includes('Antioquia')) imagePath = '/images/dept-antioquia.png';
                            else if (name.includes('Arauca')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Atlantico')) imagePath = '/images/city-barranquilla.png';
                            else if (name.includes('Bolivar')) imagePath = '/images/blog-cartagena.png';
                            else if (name.includes('Boyaca')) imagePath = '/images/dept-boyaca.png';
                            else if (name.includes('Caldas')) imagePath = '/images/dept-coffee.png';
                            else if (name.includes('Caqueta')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Casanare')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Cauca')) imagePath = '/images/culture-colonial.png';
                            else if (name.includes('Cesar')) imagePath = '/images/landscape-andes.png';
                            else if (name.includes('Choco')) imagePath = '/images/park-jungle.png';
                            else if (name.includes('Cordoba')) imagePath = '/images/park-coast.png';
                            else if (name.includes('Cundinamarca')) imagePath = '/images/city-bogota.png';
                            else if (name.includes('Guainia')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Guaviare')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Huila')) imagePath = '/images/dept-huila.png';
                            else if (name.includes('Guajira')) imagePath = '/images/landscape-guajira.png';
                            else if (name.includes('Magdalena')) imagePath = '/images/park-coast.png';
                            else if (name.includes('Meta')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Narino')) imagePath = '/images/park-mountain.png';
                            else if (name.includes('Norte de Santander')) imagePath = '/images/landscape-andes.png';
                            else if (name.includes('Putumayo')) imagePath = '/images/park-jungle.png';
                            else if (name.includes('Quindio')) imagePath = '/images/dept-coffee.png';
                            else if (name.includes('Risaralda')) imagePath = '/images/dept-coffee.png';
                            else if (name.includes('San Andres')) imagePath = '/images/city-san-andres.png';
                            else if (name.includes('Santander') && !name.includes('Norte')) imagePath = '/images/dept-santander.png';
                            else if (name.includes('Sucre')) imagePath = '/images/park-coast.png';
                            else if (name.includes('Tolima')) imagePath = '/images/park-mountain.png';
                            else if (name.includes('Valle')) imagePath = '/images/city-cali.png';
                            else if (name.includes('Vaupes')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Vichada')) imagePath = '/images/landscape-amazon.png';
                            else if (name.includes('Bogota')) imagePath = '/images/city-bogota.png';

                            const description = departmentDescriptions[dept.name] || dept.description || `Explore the department of ${dept.name}, with a population of ${dept.population.toLocaleString()}.`;

                            return (
                                <Card
                                    key={dept.id}
                                    title={dept.name}
                                    description={description}
                                    href={`/departments/${dept.id}/cities`}
                                    buttonText="Explore Cities"
                                    image={getAssetPath(imagePath)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}

            {filteredDepartments.length === 0 && cityMatches.length === 0 && !showSuggestions && (
                <div className="col-span-full text-center py-12">
                    <p className="text-xl text-muted-foreground">No results found matching "{searchParams.get('search')}"</p>
                    <p className="text-sm text-muted-foreground mt-2">Try a different search term</p>
                </div>
            )}
        </>
    );
}
