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
        <div className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full">
            <div className="relative h-48 w-full bg-muted overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                        <span className="text-sm font-medium">No Image Available</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">{title}</h3>
                <p className="text-muted-foreground text-sm flex-grow line-clamp-3 mb-4">{description}</p>

                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                >
                    {buttonText} <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
