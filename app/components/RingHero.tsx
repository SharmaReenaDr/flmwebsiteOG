"use client";

import Link from "next/link";

export default function RingHero() {
  const services = [
    {
      title: "Dance",
      subtitle: "Rhythm & Grace",
      href: "/dance",
      icon: "💃",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Fitness",
      subtitle: "Strength & Energy",
      href: "/fitness",
      icon: "💪",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Spirituality",
      subtitle: "Mind & Soul",
      href: "/spirituality",
      icon: "🧘",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Performing Arts",
      subtitle: "Expression & Art",
      href: "/performing-arts",
      icon: "🎭",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="relative">
        {/* Hollow Ring */}
        <div className="relative w-[90vw] md:w-[600px] h-[90vw] md:h-[600px] rounded-full border-8 border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm animate-ring-pulse">
          
          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <h2 className="text-4xl md:text-6xl font-cursive font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fadeInGlow" style={{ fontStyle: 'italic' }}>
              Welcome to FLM
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md">
              Transform your life through movement, mindfulness, and creative expression
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/trial-class"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300"
              >
                Book a Trial Class
              </Link>
              <Link
                href="/register"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-bold rounded-full hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Service Cards Positioned Around Ring */}
          {services.map((service, idx) => {
            const angle = (idx * 90) - 45; // 0°, 90°, 180°, 270° starting from top-right
            const radius = 280; // Distance from center (for md screens)
            const radiusMobile = 42; // Percentage for mobile (vw units)
            
            return (
              <Link
                key={idx}
                href={service.href}
                className="absolute group"
                style={{
                  top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radiusMobile}vw)`,
                  left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radiusMobile}vw)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`relative w-32 md:w-40 h-32 md:h-40 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-2xl`}>
                  <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                    <span className="text-4xl md:text-5xl group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <h3 className="text-white font-bold text-sm md:text-base text-center">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-xs text-center">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Desktop-only precise positioning overlay */}
        <div className="hidden md:block">
          {services.map((service, idx) => {
            const angle = (idx * 90) - 45;
            const radius = 280;
            
            return (
              <Link
                key={`desktop-${idx}`}
                href={service.href}
                className="absolute group"
                style={{
                  top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                  left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`relative w-40 h-40 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-2xl`}>
                  <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                    <span className="text-5xl group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <h3 className="text-white font-bold text-base text-center">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-xs text-center">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Orbit Animation Rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-[-10px] rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute inset-[-20px] rounded-full border border-purple-400/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
        </div>
      </div>
    </div>
  );
}
