import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visit-colombia.com'),
  title: {
    default: "Visit Colombia | Discover the Magic",
    template: "%s | Visit Colombia"
  },
  description: "Explore Colombia's vibrant culture, breathtaking nature, and friendly people. Plan your trip to the land of coffee, emeralds, and diversity.",
  keywords: ["Colombia", "Travel", "Tourism", "South America", "Vacation", "Guide", "Coffee Region", "Amazon", "Caribbean"],
  authors: [{ name: "Visit Colombia Team" }],
  creator: "Visit Colombia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visit-colombia.com",
    siteName: "Visit Colombia",
    title: "Visit Colombia | Discover the Magic",
    description: "Explore Colombia's vibrant culture, breathtaking nature, and friendly people.",
    images: [
      {
        url: "/images/hero-home.png",
        width: 1200,
        height: 630,
        alt: "Visit Colombia Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Colombia | Discover the Magic",
    description: "Explore Colombia's vibrant culture, breathtaking nature, and friendly people.",
    images: ["/images/hero-home.png"],
    creator: "@visitcolombia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <ChatWidget />
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1381695986242668"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
