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
                            image={(function () {
                                const name = city.name.toLowerCase();
                                const images: Record<string, string> = {
                                    'bucaramanga': '/images/city-bucaramanga.png',
                                    'manizales': '/images/city-manizales.png',
                                    'pereira': '/images/city-pereira.png',
                                    'armenia': department.name.includes('Quindio') || department.name.includes('Quindío') ? '/images/city-armenia.png' : '',
                                    'cúcuta': '/images/city-cucuta.png',
                                    'cucuta': '/images/city-cucuta.png',
                                    'ibagué': '/images/city-ibague.png',
                                    'ibague': '/images/city-ibague.png',
                                    'neiva': '/images/city_neiva.png',
                                    'pasto': '/images/city_pasto.png',
                                    'villavicencio': '/images/city_villavicencio.png',
                                    'popayán': '/images/city_popayan.png',
                                    'popayan': '/images/city_popayan.png',
                                    'valledupar': '/images/city_valledupar.png',
                                    'montería': '/images/city_monteria.png',
                                    'monteria': '/images/city_monteria.png',
                                    'tunja': '/images/city_tunja.png',
                                    'riohacha': '/images/city_riohacha.png',
                                    'quibdó': '/images/city_quibdo.png',
                                    'quibdo': '/images/city_quibdo.png',
                                    'leticia': '/images/city_leticia.png',
                                    'florencia': '/images/city_florencia.png',
                                    'yopal': '/images/city_yopal.png',
                                    'arauca': '/images/city_arauca.png',
                                    'sincelejo': '/images/city_sincelejo.png',
                                    'mocoa': '/images/city_mocoa.png',
                                    'inírida': '/images/city_inirida.png',
                                    'inirida': '/images/city_inirida.png',
                                    'mitu': '/images/city_mitu.png',
                                    'mitú': '/images/city_mitu.png',
                                    'puerto nariño': '/images/city_puerto_narino.png',
                                    'puerto narino': '/images/city_puerto_narino.png',
                                    'puerto carreño': '/images/city_puerto_carreno.png',
                                    'puerto carreno': '/images/city_puerto_carreno.png',
                                    'bogotá': '/images/city-bogota.png',
                                    'bogota': '/images/city-bogota.png',
                                    'medellín': '/images/city-medellin.png',
                                    'medellin': '/images/city-medellin.png',
                                    'cali': '/images/city-cali.png',
                                    'santiago de cali': '/images/city-cali.png',
                                    'barranquilla': '/images/city-barranquilla.png',
                                    'santa marta': '/images/city-santa-marta.png',
                                    'cartagena': '/images/city_cartagena.png',
                                    'cartagena de indias': '/images/city_cartagena.png',
                                    'san andrés': '/images/city-san-andres.png',
                                    'san andres': '/images/city-san-andres.png'
                                };
                                return images[name] || `https://source.unsplash.com/800x600/?colombia,${city.name}`;
                            })()}
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
