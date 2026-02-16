'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Monitor all incoming messages for debugging
            if (typeof event.data === 'object' || typeof event.data === 'string') {
                // console.log('Signal detected from:', event.origin, event.data);
            }

            let data = event.data;
            // Handle stringified JSON
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                } catch (e) {
                    // Not a JSON, ignore
                }
            }

            if (data?.type === 'NAVIGATE' && data?.url) {
                console.log('🎯 AUTO-NAVIGATING TO:', data.url);
                router.push(data.url);
                // Return focus to the parent window to allow scrolling
                window.focus();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [router]);

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[420px] h-[600px] glass rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300 border border-white/20">
                    <div className="bg-primary p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="font-semibold text-sm capitalize">Visit Colombia AI Assistant</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="flex-grow overflow-hidden relative bg-white">
                        <iframe
                            src="https://jalexisg-visit-colombia-chat.hf.space?__theme=light"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            className="w-full h-full"
                            title="Hugging Face Chat"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ring-4 ring-white/10"
                aria-label="Open Chat"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
}
