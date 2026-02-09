
import { getAssetPath } from '@/lib/utils';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | Visit Colombia',
    description: 'Get in touch with the Visit Colombia team. Determine the best way to contact us for partnerships, questions, or travel advice.',
    openGraph: {
        title: 'Contact Us | Visit Colombia',
        description: 'Get in touch with the Visit Colombia team.',
        images: ['/images/hero-home.png'],
    },
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Header */}
            <div className="bg-primary/5 py-16 md:py-24 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Have questions about your trip? Want to partner with us? We'd love to hear from you.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Info Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                            <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 bg-red-100/50 rounded-lg text-red-600 mr-4">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email Us</h3>
                                        <p className="text-muted-foreground text-sm mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:hello@visit-colombia.com" className="text-primary font-medium hover:underline">
                                            hello@visit-colombia.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-100/50 rounded-lg text-blue-600 mr-4">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Call Us</h3>
                                        <p className="text-muted-foreground text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+5712345678" className="text-primary font-medium hover:underline">
                                            +57 (1) 234-5678
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 bg-green-100/50 rounded-lg text-green-600 mr-4">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Visit Us</h3>
                                        <p className="text-muted-foreground text-sm mb-1">Come say hello at our office.</p>
                                        <span className="text-muted-foreground font-medium block">
                                            Calle 93 #11-45<br />
                                            Bogotá, Colombia
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <h3 className="font-bold mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                                        <a key={social} href="#" className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors text-muted-foreground hover:text-foreground">
                                            <span className="sr-only">{social}</span>
                                            <MessageSquare size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-border h-full">
                            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="Jane"
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Doe"
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="jane@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-muted-foreground"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="travel">Travel Advice</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                                >
                                    <Send size={18} className="mr-2" /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
