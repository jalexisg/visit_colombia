import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CardProps {
    title: string;
    description: string;
    image?: string;
    href: string;
    buttonText?: string;
}

export default function Card({ title, description, image, href, buttonText = "Explore" }: CardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-border/50 flex flex-col h-full">
            <div className="relative h-56 w-full bg-muted overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground">
                        <span className="text-sm font-medium tracking-wider uppercase">No Image</span>
                    </div>
                )}
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                
                {/* Title overlaying the image bottom */}
                <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
                    <h3 className="text-2xl font-black text-foreground drop-shadow-sm group-hover:text-primary transition-colors line-clamp-1">{title}</h3>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow bg-card">
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3 mb-5 group-hover:text-foreground/80 transition-colors">
                    {description}
                </p>

                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80 transition-colors mt-auto uppercase tracking-wide"
                >
                    {buttonText} <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    );
}
