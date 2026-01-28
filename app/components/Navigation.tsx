"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/community-events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-cyan-500/20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand Name - Left */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/FLM logo.png"
              alt="Fitness Life Mantra"
              width={50}
              height={50}
              priority
              className="w-12 h-12 rounded-lg shadow-[0_10px_32px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-cursive text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent animate-fadeInGlow" style={{ fontStyle: 'italic' }}>
                Fitness Life Mantra
              </span>
              <span className="text-xs text-cyan-300/70 tracking-widest">WELLNESS. MOVEMENT. SPIRIT.</span>
            </div>
          </Link>

          {/* Centered Desktop Nav Pills */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 border border-transparent hover:border-cyan-400/50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/register"
              className="px-8 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-white/80 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="block px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
