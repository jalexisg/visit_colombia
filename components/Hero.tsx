import Search from './Search';

interface HeroProps {
    backgroundImage?: string;
}

export default function Hero({ backgroundImage = "https://source.unsplash.com/1600x900/?colombia,landscape" }: HeroProps) {
    return (
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like scale */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 animate-[fade-in_1.5s_ease-out]"
                style={{
                    backgroundImage: `url('${backgroundImage}')`
                }}
            >
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
            </div>

            {/* Animated Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <div className="animate-slide-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold tracking-wider mb-6 shadow-xl">
                        THE COUNTRY OF BEAUTY
                    </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-6 drop-shadow-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Discover the Magic<br />of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Colombia</span>
                </h1>
                
                <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-lg font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Explore its vibrant culture, breathtaking nature, and friendly people.
                </p>

                <div className="w-full max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="p-2 glass rounded-full shadow-2xl">
                        <Search />
                    </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-white/70">
                    <span className="text-xs tracking-widest uppercase mb-2">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
