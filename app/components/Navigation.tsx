"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dance & Fitness", href: "/dance-fitness" },
    { label: "Acting & Theatre", href: "/acting-theatre" },
    { label: "Spirituality", href: "/spirituality" },
    { label: "Community & Events", href: "/community-events" },
    { label: "Products", href: "/products" },
    { label: "Register / Book", href: "/register" },
  ];

  return (
    <nav className="nav-3d sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
            <Image
              src="/FLM logo.png"
              alt="Fitness Life Mantra"
              width={50}
              height={50}
              priority
              className="w-12 h-12 rounded-lg shadow-[0_10px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
            />
            <span className="hidden sm:block font-display text-lg font-semibold text-white drop-shadow">Fitness Life Mantra</span>
          </Link>

          {/* Centered Desktop Nav Pills */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center px-4">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-pill${isActive ? " nav-pill-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/register"
              className="button-primary px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_12px_34px_rgba(52,183,255,0.35)]"
            >
              Register / Book
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
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block nav-pill-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="block button-primary px-6 py-3 rounded-full text-sm font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register / Book
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
