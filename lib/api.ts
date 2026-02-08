import { City, Department, NaturalArea, TouristicAttraction } from '@/types';

const API_BASE_URL = 'https://api-colombia.com/api/v1';

// Cache revalidation time (1 hour)
const REVALIDATE_TIME = 3600;

async function fetchAPI<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    return res.json();
}

export const api = {
    // Departments
    getDepartments: () => fetchAPI<Department[]>('/Department'),
    getDepartment: (id: number) => fetchAPI<Department>(`/Department/${id}`),

    // Cities
    getCities: () => fetchAPI<City[]>('/City'),
    getCity: (id: number) => fetchAPI<City>(`/City/${id}`),
    getCitiesByDepartment: (departmentId: number) => fetchAPI<City[]>(`/Department/${departmentId}/cities`),

    // Natural Areas
    getNaturalAreas: () => fetchAPI<NaturalArea[]>('/NaturalArea'),
    getNaturalArea: (id: number) => fetchAPI<NaturalArea>(`/NaturalArea/${id}`), // Note: API might use different endpoint for single details, checking...
    // Usually /NaturalArea/{id} works based on standard REST, if not we handle it.

    // Search Helpers (Client-side search might filter from full lists if API doesn't support search query directly)
    // But we can implement a basic search by fetching all and filtering, or rely on specific search endpoints if they exist.
    // The implementing component will likely handle the "search" logic by filtering these lists or we can add a helper here.

    // For "Featured Destinations", we could hardcode IDs or fetch specific ones.
    // Let's assume we want some specific cities or attractions.
    getFeaturedDestinations: async () => {
        // Return a manually curated list or random selection for now
        // This is a placeholder logic
        const cities = await api.getCities();
        // Return top 4 or specific ones like Cartagena (id: ?), Medellin, Bogota
        // Since we don't know IDs yet, we just slice.
        return cities.slice(0, 4);
    }
};
