export interface Department {
    id: number;
    name: string;
    description: string;
    cityCapitalId: number;
    municipalities: number;
    surface: number;
    population: number;
    phonePrefix: string;
    countryId: number;
    cityCapital: any; // Can be detailed if needed
    country: any;
    cities: any;
    regionId: number;
    region: any;
    naturalAreas: any;
    maps: any;
    indigenousReservations: any;
    airports: any;
}

export interface City {
    id: number;
    name: string;
    description: string;
    surface: number;
    population: number;
    postalCode: string;
    departmentId: number;
    department: Department;
    touristAttractions: any[];
    presidents: any[];
    indigenousReservations: any[];
    airports: any[];
    radios: any[];
}

export interface NaturalArea {
    id: number;
    areaGroupId: number;
    categoryNaturalAreaId: number;
    name: string;
    departmentId: number;
    daneCode: number;
    landArea: number;
    maritimeArea: number | null;
    department: Department | null;
    categoryNaturalArea: {
        id: number;
        name: string;
        description: string;
        naturalAreas: null;
    } | null;
    description?: string; // Enhanced property (not in base API but potentially useful if wrapper adds it)
    surface?: number; // Enhanced
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    date: string;
    tags: string[];
}

export interface TouristicAttraction {
    id: number;
    name: string;
    description: string;
    images: string[];
    latitude: string;
    longitude: string;
    cityId: number;
    city: City;
}

// Helper types for search or components
export interface SearchResult {
    id: number;
    name: string;
    type: 'City' | 'Department';
}
