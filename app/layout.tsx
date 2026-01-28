import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navigation from "./components/Navigation";
import BackgroundShell from "./components/BackgroundShell";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Fitness Life Mantra | Conscious Wellness Platform",
  description:
    "Fitness Life Mantra integrates spirituality, movement, science, and community. Services, spirituality, acting, and wellness products.",
};

function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white py-12">
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
            <p className="text-xs text-gray-300">fitnesslifemantra@gmail.com</p>
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
      <body>
        <BackgroundShell>
          <SmoothScroll />
          <Navigation />
          {children}
          <Footer />
        </BackgroundShell>
      </body>
    </html>
  );
}
