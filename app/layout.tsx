import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Fitness Life Mantra | Dance, Fitness, Spirituality & Events",
  description: "Transform your life through dance, fitness, spirituality, and performing arts. Book your trial class or event today!",
  openGraph: {
    title: "Fitness Life Mantra",
    description: "Transform your life through movement, mind, and spirit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-black">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition" aria-label="Fitness Life Mantra">
            <img
              src="/icons/FLM logo.png"
              alt="Fitness Life Mantra"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold tracking-wider">FITNESS LIFE MANTRA</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Home
            </Link>
            <Link href="/dance-fitness" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Dance & Fitness
            </Link>
            <Link href="/acting-theatre" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Acting & Theatre
            </Link>
            <Link href="/spirituality" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Spirituality
            </Link>
            <Link href="/community" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-black transition">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/register"
            className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
