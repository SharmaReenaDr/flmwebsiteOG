"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left: Academy Name & Locations */}
          <div className="flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-pink-500">
              Adrija Dance Academy
            </Link>
            <p className="text-sm text-gray-600 mt-1">Frisco - Prosper - Plano - Celina</p>
          </div>

          {/* Right: Phone CTA */}
          <div className="hidden md:block text-right">
            <p className="text-sm text-gray-600 mb-1">Questions?</p>
            <a href="tel:919-641-9799" className="text-xl font-bold text-pink-500 hover:text-pink-600">
              Call 919-641-9799
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <a href="tel:919-641-9799" className="block py-2 text-pink-500 font-bold">
              Call 919-641-9799
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
