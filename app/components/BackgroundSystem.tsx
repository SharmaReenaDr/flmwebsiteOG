"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type BackgroundSystemProps = {
  children: React.ReactNode;
};

export default function BackgroundSystem({ children }: BackgroundSystemProps) {
  const pathname = usePathname();
  const [overlayType, setOverlayType] = useState<string>("default");

  useEffect(() => {
    // Determine overlay based on current route
    if (pathname.includes("dance")) setOverlayType("dance");
    else if (pathname.includes("fitness")) setOverlayType("fitness");
    else if (pathname.includes("spirituality")) setOverlayType("spirituality");
    else if (pathname.includes("performing") || pathname.includes("acting")) setOverlayType("performing");
    else setOverlayType("default");
  }, [pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Global Meteor Shower Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Cosmic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black opacity-90" />
        
        {/* Meteor shower particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`meteor-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent animate-meteorShower"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              opacity: 0.6,
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
            }}
          />
        ))}

        {/* Twinkling stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Section-Specific Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {overlayType === "dance" && (
          <div className="absolute inset-0">
            {/* Dancing silhouettes - floating numbers */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
              <div
                key={`dance-${i}`}
                className="absolute text-pink-500/10 font-bold animate-float"
                style={{
                  fontSize: `${80 + Math.random() * 100}px`,
                  top: `${10 + i * 12}%`,
                  left: `${5 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              >
                {num}
              </div>
            ))}
            {/* Rhythmic motion waves */}
            <div className="absolute inset-0 bg-gradient-radial from-pink-500/5 via-transparent to-transparent animate-pulse" style={{ animationDuration: "4s" }} />
          </div>
        )}

        {overlayType === "fitness" && (
          <div className="absolute inset-0">
            {/* Energy pulse waves */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`pulse-${i}`}
                className="absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-pulse-wave"
                style={{
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: "3s"
                }}
              />
            ))}
            {/* Motion wave overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-wave" />
          </div>
        )}

        {overlayType === "spirituality" && (
          <div className="absolute inset-0">
            {/* Mandala glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-violet-500/10 via-purple-500/5 to-transparent animate-glow-pulse" />
              <div className="absolute inset-[10%] rounded-full bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-[20%] rounded-full bg-gradient-radial from-pink-500/10 via-rose-500/5 to-transparent animate-glow-pulse" style={{ animationDelay: "1s" }} />
            </div>
            {/* Aura particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`aura-${i}`}
                className="absolute w-2 h-2 rounded-full bg-violet-400/20 animate-float"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${10 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        )}

        {overlayType === "performing" && (
          <div className="absolute inset-0">
            {/* Spotlight beams */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`spotlight-${i}`}
                className="absolute top-0 w-32 h-full bg-gradient-to-b from-yellow-500/10 via-yellow-500/5 to-transparent animate-spotlight"
                style={{
                  left: `${20 + i * 20}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: "6s",
                  transform: "skewX(-10deg)"
                }}
              />
            ))}
            {/* Stage light glow */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-amber-500/10 via-orange-500/5 to-transparent" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
