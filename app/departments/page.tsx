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
                {sortedDepartments.map((dept) => {
                    const images = [
                        '/images/landscape-andes.png',
                        '/images/landscape-amazon.png',
                        '/images/landscape-guajira.png',
                        '/images/culture-colonial.png',
                        '/images/city-medellin.png',
                        '/images/blog-coffee.png',
                        '/images/blog-tayrona.png',
                        '/images/blog-cano-cristales.png',
                        '/images/blog-cartagena.png',
                        '/images/hero-home.png'
                    ];
                    // Use a seeded-like random selection based on ID and name length to distribute images evenly
                    const imageIndex = (dept.id + dept.name.length) % images.length;
                    return (
                        <Card
                            key={dept.id}
                            title={dept.name}
                            description={dept.description || `Explore the department of ${dept.name}, with a population of ${dept.population.toLocaleString()}.`}
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
