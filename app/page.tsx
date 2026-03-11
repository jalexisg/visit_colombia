import Hero from '@/components/Hero';
import Card from '@/components/Card';
import { api } from '@/lib/api';
import { getAssetPath } from '@/lib/utils';
import { Coffee, CloudSun, Music, Smile, ArrowRight } from 'lucide-react';

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
      <Hero backgroundImage={getAssetPath('/images/ui/hero-home.png')} />

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-left">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCities.map((city) => {
            const images = [
              getAssetPath('/images/blog/cartagena.png'),
              getAssetPath('/images/blog/safety.png'),
              getAssetPath('/images/blog/coffee.png'),
              getAssetPath('/images/blog/tayrona.png')
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
      <section className="bg-muted/30 py-24 relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Why Visit <span className="text-gradient">Colombia?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience the only country in South America with coastlines on both the Pacific Ocean and the Caribbean Sea.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="p-5 bg-primary/10 rounded-2xl mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <CloudSun size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Breathtaking Nature</h3>
              <p className="text-muted-foreground leading-relaxed">From the Amazon rainforest to Caribbean beaches and Andean peaks.</p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="p-5 bg-amber-500/10 rounded-2xl mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <Coffee size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">World-Class Coffee</h3>
              <p className="text-muted-foreground leading-relaxed">Taste the richest coffee in the world right from the source.</p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="p-5 bg-accent/10 rounded-2xl mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                <Music size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">Vibrant Culture</h3>
              <p className="text-muted-foreground leading-relaxed">Immerse yourself in holidays, festivals, music, and local dance.</p>
            </div>

            <div className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="p-5 bg-green-500/10 rounded-2xl mb-6 text-green-500 group-hover:scale-110 transition-transform duration-300">
                <Smile size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">Friendly People</h3>
              <p className="text-muted-foreground leading-relaxed">Experience the warmth and unparalleled hospitality of Colombians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Insights / Traveler Essentials 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-14 shadow-2xl overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-10 tracking-tight">Traveler <span className="text-gradient">Essentials</span> 2026</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shadow-sm">1</span>
                  Administrative Prerequisites
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The entry process is highly digitalized. All travelers must complete the <strong>Check-Mig</strong> form via Migración Colombia within 72 hours of departure.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground bg-muted/30 p-5 rounded-2xl border border-border/30">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Visa waiver:</strong> 90-day PIP stamp for US, Canada, and EU citizens.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Extensions:</strong> Apply for a PTP online 15-20 days before expiry.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> <span><strong>Yellow Fever:</strong> Mandatory for National Parks and Amazon regions.</span></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-lg shadow-sm">2</span>
                  Situational Awareness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Safety in 2026 relies on the <strong>"No dar papaya"</strong> doctrine—minimizing the display of wealth or vulnerability in urban centers.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground bg-muted/30 p-5 rounded-2xl border border-border/30">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> <span><strong>Urban Safety:</strong> Use app-based transport; keep electronics out of sight.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> <span><strong>Nightlife:</strong> Never leave drinks unattended; be wary of scopolamine risks.</span></li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> <span><strong>Regional Travel:</strong> Use domestic aviation to bypass Andean road complexities.</span></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-14 p-8 glass rounded-2xl border-l-4 border-l-secondary relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Strategic Timing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Peak travel months are <strong>December to March</strong> and <strong>July to August</strong>. For cultural enthusiasts, the 2026 calendar features the Barranquilla Carnival (March 1-4) and Medellín's Flower Festival (August 1-10).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pb-12">
        <div className="relative bg-gradient-to-br from-primary via-[#003bba] to-[#002b8a] rounded-3xl p-10 sm:p-20 text-white shadow-2xl overflow-hidden group">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/ui/hero-home.png')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full filter blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">Ready to start your adventure?</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100 font-medium">
              Explore our comprehensive guide to Colombia, from major world-class cities to hidden natural gems.
            </p>
            <a
              href="/departments"
              className="inline-flex items-center gap-2 bg-white text-primary font-black text-lg py-4 px-10 rounded-full hover:bg-gray-50 hover:scale-105 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform"
            >
              Explore Departments
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
