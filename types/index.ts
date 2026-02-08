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
    categoryId: number;
    name: string;
    description: string;
    surface: number;
    category: any;
    naturalAreas1: any; // API weirdness sometimes
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
