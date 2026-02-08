import Link from 'next/link';
import { api } from '@/lib/api';
import Card from '@/components/Card';
import { departmentDescriptions } from '@/lib/department-data';
import { getAssetPath } from '@/lib/utils';

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
                {sortedDepartments.map((dept) => {
                    const images = [
                        getAssetPath('/images/landscape-andes.png'),
                        getAssetPath('/images/landscape-amazon.png'),
                        getAssetPath('/images/landscape-guajira.png'),
                        getAssetPath('/images/culture-colonial.png'),
                        getAssetPath('/images/city-medellin.png'),
                        getAssetPath('/images/blog-coffee.png'),
                        getAssetPath('/images/blog-tayrona.png'),
                        getAssetPath('/images/blog-cano-cristales.png'),
                        getAssetPath('/images/blog-cartagena.png'),
                        getAssetPath('/images/blog-safety.png'),
                        getAssetPath('/images/hero-home.png')
                    ];
                    // Use a seeded-like random selection based on ID and name length to distribute images evenly
                    const imageIndex = (dept.id + dept.name.length) % images.length;

                    // Use English description if available, otherwise fallback to API description or generic text
                    const description = departmentDescriptions[dept.name] || dept.description || `Explore the department of ${dept.name}, with a population of ${dept.population.toLocaleString()}.`;

                    return (
                        <Card
                            key={dept.id}
                            title={dept.name}
                            description={description}
                            href={`/departments/${dept.id}/cities`}
                            buttonText="Explore Cities"
                            image={images[imageIndex]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
