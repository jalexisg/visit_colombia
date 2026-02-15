import Hero from '@/components/Hero';
import Card from '@/components/Card';
import { api } from '@/lib/api';
import { getAssetPath } from '@/lib/utils';
import { Coffee, CloudSun, Music, Smile } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visit Colombia | The Country of Beauty",
  description: "Plan your extensive trip to Colombia. Discover the Amazon, Andes, Caribbean, and Pacific regions. Your ultimate travel guide.",
  keywords: ["Colombia Travel", "Visit Colombia", "Bogota", "Cartagena", "Medellin", "Coffee Triangle"],
  alternates: {
    canonical: 'https://visit-colombia.com',
  },
};

export default async function Home() {
  const featuredCities = await api.getFeaturedDestinations();

  return (
    <div className="flex flex-col gap-12 pb-12">
      <Hero backgroundImage={getAssetPath('/images/hero-home.png')} />

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-left">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCities.map((city) => {
            const images = [
              getAssetPath('/images/blog-cartagena.png'),
              getAssetPath('/images/blog-safety.png'),
              getAssetPath('/images/blog-coffee.png'),
              getAssetPath('/images/blog-tayrona.png')
            ];
            const imageIndex = (city.id % images.length);
            return (
              <Card
                key={city.id}
                title={city.name}
                description={city.description || `Discover the beauty of ${city.name}, a vibrant city in Colombia.`}
                href={`/cities/${city.id}`}
                image={images[imageIndex]}
              />
            );
          })}
        </div>
      </section>

      {/* Why Visit Colombia */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Visit Colombia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                <CloudSun size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Breathtaking Nature</h3>
              <p className="text-muted-foreground">From the Amazon rainforest to Caribbean beaches and Andean peaks.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-secondary/10 rounded-full mb-4 text-secondary-foreground">
                <Coffee size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">World-Class Coffee</h3>
              <p className="text-muted-foreground">Taste the richest coffee in the world right from the source.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-accent/10 rounded-full mb-4 text-accent">
                <Music size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Vibrant Culture</h3>
              <p className="text-muted-foreground">Immerse yourself in holidays, festivals, music, and dance.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 bg-green-100 rounded-full mb-4 text-green-600">
                <Smile size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Friendly People</h3>
              <p className="text-muted-foreground">Experience the warmth and hospitality of Colombians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Insights / Traveler Essentials 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="bg-card border rounded-2xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-foreground mb-8">Strategic Traveler Essentials 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                Administrative Prerequisites
              </h3>
              <p className="text-muted-foreground mb-4">
                The entry process is highly digitalized. All travelers must complete the <strong>Check-Mig</strong> form via Migración Colombia within 72 hours of departure.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Visa waiver:</strong> 90-day PIP stamp for US, Canada, and EU citizens.</li>
                <li>• <strong>Extensions:</strong> Apply for a PTP online 15-20 days before expiry.</li>
                <li>• <strong>Yellow Fever:</strong> Mandatory for National Parks and Amazon regions.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">2</span>
                Situational Awareness
              </h3>
              <p className="text-muted-foreground mb-4">
                Safety in 2026 relies on the <strong>"No dar papaya"</strong> doctrine—minimizing the display of wealth or vulnerability in urban centers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Urban Safety:</strong> Use app-based transport; keep electronics out of sight.</li>
                <li>• <strong>Nightlife:</strong> Never leave drinks unattended; be wary of scopolamine risks.</li>
                <li>• <strong>Regional Travel:</strong> Use domestic aviation to bypass Andean road complexities.</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 p-6 bg-muted/50 rounded-xl border-l-4 border-primary">
            <h3 className="font-bold mb-2">Strategic Timing</h3>
            <p className="text-sm text-muted-foreground">
              Peak travel months are <strong>December to March</strong> and <strong>July to August</strong>. For cultural enthusiasts, the 2026 calendar features the Barranquilla Carnival (March 1-4) and Medellín's Flower Festival (August 1-10).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 sm:p-16 text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to start your adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Explore our comprehensive guide to Colombia details, from major cities to hidden natural gems.
          </p>
          <a
            href="/departments"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Departments
          </a>
        </div>
      </section>
    </div>
  );
}
