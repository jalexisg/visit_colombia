'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, MapPin, Trees } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/departments', label: 'Departments', icon: MapPin },
        { href: '/natural-parks', label: 'Natural Parks', icon: Trees },
        { href: '/map', label: 'Map', icon: MapPin },
        { href: '/blog', label: 'Blog' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <img
                                src={getAssetPath('/images/logo.png')}
                                alt="Visit Colombia Logo"
                                className="h-10 w-auto"
                            />
                            <span className="text-2xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                                Visit Colombia
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.href)
                                    ? 'text-primary bg-primary/10'
                                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex items-center gap-2">
                                    {link.icon && <link.icon size={18} />}
                                    {link.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
