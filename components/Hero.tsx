import Search from './Search';

interface HeroProps {
    backgroundImage?: string;
}

export default function Hero({ backgroundImage = "https://source.unsplash.com/1600x900/?colombia,landscape" }: HeroProps) {
    return (
        <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 hover:scale-105"
                style={{
                    backgroundImage: `url('${backgroundImage}')`
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
                    Discover the Magic of <span className="text-secondary">Colombia</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-100 mb-10 drop-shadow-md">
                    Explore its vibrant culture, breathtaking nature, and friendly people.
                </p>

                <div className="flex justify-center">
                    <Search />
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
