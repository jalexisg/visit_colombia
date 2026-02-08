import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">Visit Colombia</h3>
                        <p className="text-sm">
                            Discover the magic of Colombia. From the vibrant cities to the breathtaking natural parks, explore all that this beautiful country has to offer.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/departments" className="hover:text-primary transition-colors">Departments</Link></li>
                            <li><Link href="/natural-parks" className="hover:text-primary transition-colors">Natural Parks</Link></li>
                            <li><Link href="/cities" className="hover:text-primary transition-colors">Top Cities</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Travel Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="mailto:info@visit-colombia.com" className="hover:text-primary transition-colors"><Mail size={20} /></Link>
                        </div>
                        <p className="mt-4 text-xs">
                            &copy; {new Date().getFullYear()} Visit Colombia. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
