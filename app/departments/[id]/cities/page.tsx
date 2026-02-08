import { api } from '@/lib/api';
import Card from '@/components/Card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { departmentDescriptions } from '@/lib/department-data';

export const metadata = {
    title: 'Cities | Visit Colombia',
    description: 'Explore the cities within this department.',
};

export async function generateStaticParams() {
    try {
        const departments = await api.getDepartments();
        return departments.map((department) => ({
            id: department.id.toString(),
        }));
    } catch (e) {
        console.error('Failed to generate static params for departments', e);
        return [];
    }
}

interface PageProps {
    params: {
        id: string;
    };
}

// Next.js 15 might change params handling, but for 14 this is standard.
// Note: In Next.js 15, params is a Promise. If using 15 (latest), we need await params.
// User didn't specify version, but create-next-app@latest is likely 15.
// I'll assume 15 and await params to be safe, or just use standard async component.

export default async function DepartmentCitiesPage({ params }: PageProps) {
    // Await params if it's a promise (handling Next 15 change just in case)
    const { id } = await Promise.resolve(params);
    const departmentId = parseInt(id);

    // Fetch data in parallel
    const departmentData = api.getDepartment(departmentId);
    const citiesData = api.getCitiesByDepartment(departmentId);

    let department, cities;
    try {
        [department, cities] = await Promise.all([departmentData, citiesData]);
    } catch (e) {
        notFound();
    }

    // Use English description from dictionary, fallback to API description
    const description = departmentDescriptions[department.name] || department.description;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
                href="/departments"
                className="inline-flex items-center text-primary hover:underline mb-8"
            >
                <ArrowLeft size={16} className="mr-2" /> Back to Departments
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Cities in {department.name}</h1>
                <p className="text-xl text-muted-foreground">{description}</p>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                    <span>Population: {department.population.toLocaleString()}</span>
                    <span>•</span>
                    <span>Surface: {department.surface.toLocaleString()} km²</span>
                </div>
            </div>

            {cities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map((city) => (
                        <Card
                            key={city.id}
                            title={city.name}
                            description={`Visit ${city.name} in the ${department.name} department.`}
                            href={`/cities/${city.id}`}
                            buttonText="Learn More"
                            image={`https://source.unsplash.com/800x600/?colombia,${city.name}`}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-muted/30 rounded-xl">
                    <p className="text-xl text-muted-foreground">No cities found for this department.</p>
                </div>
            )}
        </div>
    );
}
