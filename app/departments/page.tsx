import { api } from '@/lib/api';
import DepartmentGrid from './DepartmentGrid';
import Search from '@/components/Search';
import { Suspense } from 'react';

export const metadata = {
    title: 'Departments of Colombia | Visit Colombia',
    description: 'Explore the diverse departments of Colombia, from the Caribbean coast to the Amazon rainforest. Find the best places to visit in each region.',
    openGraph: {
        title: 'Departments of Colombia | Visit Colombia',
        description: 'Explore the diverse departments of Colombia, from the Caribbean coast to the Amazon rainforest.',
        images: ['/images/landscape-andes.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "Departments of Colombia | Visit Colombia",
        description: "Explore the diverse departments of Colombia, from the Caribbean coast to the Amazon rainforest.",
        images: ["/images/landscape-andes.png"],
    },
};

export default async function DepartmentsPage() {
    // Fetch departments with cities for better search
    const departments = await api.getDepartmentsWithCities();

    // Sort departments alphabetically
    const sortedDepartments = departments.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Departments of Colombia</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Discover the 32 departments that make up this beautiful country. Each region offers unique landscapes, culture, and experiences.
                </p>
                <div className="max-w-md">
                    <Search />
                </div>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <DepartmentGrid departments={sortedDepartments} />
            </Suspense>
        </div>
    );
}
