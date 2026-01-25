import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitness Life Mantra | Conscious Wellness Platform",
  description:
    "Fitness Life Mantra integrates spirituality, movement, science, and community. Services, spirituality, acting, and wellness products.",
};

function Navigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Spirituality", href: "/spirituality" },
    { label: "Acting & Theatre", href: "/acting-theatre" },
    { label: "Products", href: "/products" },
    { label: "Community", href: "/community" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-amber-100/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <Image
            src="/FLM logo.png"
            alt="Fitness Life Mantra"
            width={50}
            height={50}
            priority
            className="w-12 h-12 rounded-lg shadow-md hover:shadow-lg transition"
          />
          <span className="hidden sm:block font-display text-lg font-semibold text-ink-900">Fitness Life Mantra</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-ink-600 hover:text-gold-500 transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/register"
          className="button-primary px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          Register / Book
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-semibold">Fitness Life Mantra</h3>
            <p className="text-sm text-gray-300">Conscious Wellness • Movement • Purpose</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase">Services</p>
            <ul className="text-xs space-y-1 text-gray-300">
              <li><Link href="/services#dance" className="hover:text-gold-400">Dance Workshops</Link></li>
              <li><Link href="/services#fitness" className="hover:text-gold-400">Fitness Workouts</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase">Explore</p>
            <ul className="text-xs space-y-1 text-gray-300">
              <li><Link href="/spirituality" className="hover:text-gold-400">Spirituality</Link></li>
              <li><Link href="/acting-theatre" className="hover:text-gold-400">Acting & Theatre</Link></li>
              <li><Link href="/community" className="hover:text-gold-400">Community</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase">Contact</p>
            <p className="text-xs text-gray-300">hello@fitnesslifemantra.com</p>
            <p className="text-xs text-gray-300">Global • USA & India</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          © 2026 Fitness Life Mantra by Dr. Reena Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gradient-shell">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
