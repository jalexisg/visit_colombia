import { City, Department, NaturalArea, TouristicAttraction } from '@/types';

const API_BASE_URL = 'https://api-colombia.com/api/v1';

// Cache revalidation time (1 hour)
const REVALIDATE_TIME = 3600;

async function fetchAPI<T>(endpoint: string, retries = 3, backoff = 300): Promise<T> {
    try {
        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            next: { revalidate: REVALIDATE_TIME },
            headers: {
                'Accept-Language': 'en'
            }
        });

        if (!res.ok) {
            // If potentially rate limited or server error, throw to catch and retry
            if (res.status === 429 || res.status >= 500) {
                throw new Error(`API Error: ${res.status}`);
            }
            throw new Error(`Failed to fetch data from ${endpoint}: ${res.status} ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        if (retries > 0) {
            // Wait for backoff time
            await new Promise((resolve) => setTimeout(resolve, backoff));
            // Retry with exponential backoff
            return fetchAPI<T>(endpoint, retries - 1, backoff * 2);
        }
        throw error;
    }
}

export const api = {
    // Departments
    getDepartments: () => fetchAPI<Department[]>('/Department'),
    getDepartment: (id: number) => fetchAPI<Department>(`/Department/${id}`),

    // Enhanced method for search
    getDepartmentsWithCities: async () => {
        const [departments, cities] = await Promise.all([
            fetchAPI<Department[]>('/Department'),
            fetchAPI<City[]>('/City')
        ]);

        // Create a map of departmentId -> cities[]
        const citiesByDept = new Map<number, City[]>();
        cities.forEach(city => {
            const deptId = city.departmentId;
            if (!citiesByDept.has(deptId)) {
                citiesByDept.set(deptId, []);
            }
            citiesByDept.get(deptId)?.push(city);
        });

        // Attach cities to departments
        return departments.map(dept => ({
            ...dept,
            cities: citiesByDept.get(dept.id) || []
        }));
    },

    // Cities
    getCities: () => fetchAPI<City[]>('/City'),
    getCity: (id: number) => fetchAPI<City>(`/City/${id}`),
    getCitiesByDepartment: (departmentId: number) => fetchAPI<City[]>(`/Department/${departmentId}/cities`),

    // Natural Areas
    getNaturalAreas: async () => {
        const areas = await fetchAPI<NaturalArea[]>('/NaturalArea');
        // Deduplicate by name, keeping the one with description if possible
        const uniqueAreas = new Map<string, NaturalArea>();

        areas.forEach(area => {
            if (!uniqueAreas.has(area.name)) {
                uniqueAreas.set(area.name, area);
            } else {
                // If existing doesn't have description but new one does, replace
                const existing = uniqueAreas.get(area.name)!;
                if (!existing.description && area.description) {
                    uniqueAreas.set(area.name, area);
                }
            }
        });

        return Array.from(uniqueAreas.values());
    },
    getNaturalArea: (id: number) => fetchAPI<NaturalArea>(`/NaturalArea/${id}`),

    // Featured Destinations
    getFeaturedDestinations: async () => {
        // Return a manually curated list or random selection for now
        // This is a placeholder logic
        const cities = await api.getCities();
        // Return top 4 or specific ones like Cartagena (id: ?), Medellin, Bogota
        // Since we don't know IDs yet, we just slice.
        return cities.slice(0, 4);
    }
};
