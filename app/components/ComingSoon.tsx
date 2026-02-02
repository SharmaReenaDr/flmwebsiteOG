'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ComingSoonPage() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-900 flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated waves */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="white"
            className="animate-wave"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating lotus petals */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-4xl animate-float-petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          🪷
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Meditation pose animation */}
        <div className="text-8xl mb-8 animate-breathe">
          🧘‍♀️
        </div>

        <h1 className="text-5xl md:text-6xl font-playfair text-white mb-4">
          Coming Soon{dots}
        </h1>
        
        <p className="text-teal-100 text-xl mb-8">
          We're preparing something beautiful for you. Like a lotus emerging from the water, 
          this page is about to bloom.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-white font-semibold mb-4">Get Notified When We Launch</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-white text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition transform hover:scale-105"
            >
              Notify Me
            </button>
          </form>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-teal-200 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(10px); }
        }
        @keyframes float-petal {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(15deg); opacity: 0.7; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-wave { animation: wave 8s ease-in-out infinite; }
        .animate-float-petal { animation: float-petal 8s ease-in-out infinite; }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
