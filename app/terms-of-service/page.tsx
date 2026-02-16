import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Visit Colombia',
    description: 'Terms of Service for Visit Colombia. Please read our terms and conditions carefully.',
};

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-slate max-w-none dark:prose-invert">
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using <Link href="/">https://visit-colombia.com</Link> ("Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
                <p>
                    Visit Colombia provides users with access to a rich collection of resources, including various communications tools, search services, and personalized content such as travel guides, blogs, and recommendations for tourism in Colombia. You understand and agree that the Service is provided "AS-IS" and that Visit Colombia assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Travel Disclaimer</h2>
                <p>
                    The information provided on this Website is for general informational purposes only. While we strive to provide up-to-date information, travel regulations, safety conditions, and opening hours of attractions change frequently.
                </p>
                <p className="font-semibold mt-2">
                    YOU ARE SOLELY RESPONSIBLE FOR VERIFYING ALL INFORMATION BEFORE TRAVELING.
                </p>
                <p>
                    Visit Colombia does not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. AI Assistant Disclaimer</h2>
                <p>
                    This Website includes an AI-powered travel assistant ("Chatbot"). While we aim for accuracy, the AI is a generative model and may occasionally provide incorrect, incomplete, or biased information, including but not limited to geographic locations, travel IDs, safety warnings, and prices.
                </p>
                <p className="font-semibold mt-2">
                    THE AI ASSISTANT IS PROVIDED FOR CONVENIENCE ONLY. ALWAYS CROSS-REFERENCE AI SUGGESTIONS WITH OFFICIAL LOCAL SOURCES.
                </p>
                <p>
                    Visit Colombia assumes no liability for any actions taken, or travel plans made, based on information provided by the AI Assistant.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Affiliate Disclosure</h2>
                <p>
                    This Website may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include, but are not limited to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Booking.com</li>
                    <li>Viator (TripAdvisor)</li>
                    <li>Google AdSense</li>
                </ul>
                <p>
                    We are a participant in these affiliate programs designed to provide a means for us to earn fees by linking to affiliated sites.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
                <p>
                    The Site and its original content, features, and functionality are owned by Visit Colombia and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Links to Other Web Sites</h2>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by Visit Colombia.
                </p>
                <p>
                    Visit Colombia has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Visit Colombia shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at <a href="mailto:info@visit-colombia.com">info@visit-colombia.com</a>.
                </p>
            </div>
        </div>
    );
}
