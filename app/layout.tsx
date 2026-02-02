import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
              src="/logo.png"
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
            <Link href="/performing-arts" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Performing Arts
            </Link>
            <Link href="/spirituality" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Spirituality
            </Link>
            <Link href="/corporate" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Corporate
            </Link>
            <Link href="/events" className="text-sm font-medium text-gray-700 hover:text-black transition">
              Events
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/book"
            className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fitness Life Mantra</h3>
            <p className="text-gray-400 text-sm">
              Transform your body, mind, and soul through movement, spirituality, and community.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/dance-fitness" className="hover:text-white transition">Dance & Fitness</Link></li>
              <li><Link href="/performing-arts" className="hover:text-white transition">Performing Arts</Link></li>
              <li><Link href="/spirituality" className="hover:text-white transition">Spirituality</Link></li>
              <li><Link href="/corporate" className="hover:text-white transition">Corporate Events</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="/cancellation" className="hover:text-white transition">Cancellation</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2026 Fitness Life Mantra. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition">Instagram</a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white transition">YouTube</a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
