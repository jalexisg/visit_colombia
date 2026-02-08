import Link from 'next/link';
import { api } from '@/lib/api';
import Card from '@/components/Card';

export const metadata = {
    title: 'Departments of Colombia | Visit Colombia',
    description: 'Explore the diverse departments of Colombia, from the Caribbean coast to the Amazon rainforest.',
};

export default async function DepartmentsPage() {
    const departments = await api.getDepartments();

    // Sort departments alphabetically
    const sortedDepartments = departments.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Departments of Colombia</h1>
                <p className="text-xl text-muted-foreground">
                    Discover the 32 departments that make up this beautiful country. Each region offers unique landscapes, culture, and experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedDepartments.map((dept) => (
                    <Card
                        key={dept.id}
                        title={dept.name}
                        description={dept.description || `Explore the department of ${dept.name}, with a population of ${dept.population.toLocaleString()}.`}
                        href={`/departments/${dept.id}/cities`}
                        buttonText="Explore Cities"
                        // Placeholder image based on department name to make it look nicer
                        image={`https://source.unsplash.com/800x600/?colombia,${dept.name},landscape`}
                    />
                ))}
            </div>
        </div>
    );
}
