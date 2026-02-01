"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavigationProps = {
  onSearchOpen: () => void;
};

export default function Navigation({ onSearchOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onSearchOpen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSearchOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dance", label: "Dance" },
    { href: "/fitness", label: "Fitness" },
    { href: "/spirituality", label: "Spirituality" },
    { href: "/performing-arts", label: "Performing Arts" },
    { href: "/pricing", label: "Pricing & Payment" },
    { href: "/trial-class", label: "Trial Class" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-cyan-500/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + FLM Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:scale-110">
              <Image
                src="/FLM logo.png"
                alt="FLM Logo"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
            <h1 
              className="text-2xl font-cursive font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeInGlow hover:animate-shimmer" 
              style={{ 
                fontStyle: 'italic',
                backgroundSize: '200% auto'
              }}
            >
              Fitness Life Mantra
            </h1>
          </Link>

          {/* Center: Pill Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Search Icon */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white/70 hover:text-white transition-all group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs">⌘K</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-black/90 backdrop-blur-lg rounded-b-2xl">
            <button
              onClick={onSearchOpen}
              className="w-full flex items-center justify-center gap-2 mb-4 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
