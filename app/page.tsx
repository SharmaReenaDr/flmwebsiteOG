import Link from "next/link";

export default function HomePage() {
  const consciousnessPillars = [
    { icon: "🌟", level: "Ultimate", title: "Enlightenment", desc: "Complete Consciousness" },
    { icon: "💫", level: "Wisdom", title: "Awakening", desc: "Higher Awareness" },
    { icon: "✨", level: "Transformation", title: "Growth", desc: "Inner Evolution" },
    { icon: "🔮", level: "Spirit", title: "Connection", desc: "Universal Energy" }
  ];

  return (
    <main className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* OM MANTRA ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-mantra-flow text-center text-white/30 font-display text-9xl font-bold space-y-20 whitespace-nowrap">
          <p className="animate-float-slow">ॐ OM</p>
          <p className="animate-float-slow" style={{ animationDelay: "1s" }}>ॐ OM</p>
          <p className="animate-float-slow" style={{ animationDelay: "2s" }}>ॐ OM</p>
          <p className="animate-float-slow" style={{ animationDelay: "3s" }}>ॐ OM</p>
          <p className="animate-float-slow" style={{ animationDelay: "4s" }}>ॐ OM</p>
        </div>
      </div>

      {/* HERO SECTION - 100vh, no scroll */}
      <section className="h-screen flex flex-col items-center justify-between py-12 md:py-16 px-4 relative z-10">
        
        {/* REVERSE PYRAMID - 4 CONSCIOUSNESS PILLARS AT TOP */}
        <div className="w-full max-w-6xl mx-auto mt-8">
          {/* Main Title */}
          <div className="text-center space-y-2 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
              Fitness Life Mantra
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-cyan-300">Ultimate Consciousness Journey</p>
          </div>

          {/* REVERSE PYRAMID GRID */}
          <div className="flex flex-col items-center gap-8">
            {/* Level 1 - Top (4 pillars) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {consciousnessPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md bg-white/5 border border-cyan-300/30 transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-cyan-200/60"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-4 space-y-2">
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                      {pillar.icon}
                    </div>
                    <p className="text-xs font-semibold text-cyan-300 uppercase tracking-widest">{pillar.level}</p>
                    <h3 className="text-lg md:text-xl font-bold text-white">{pillar.title}</h3>
                    <p className="text-xs text-white/70">{pillar.desc}</p>
                  </div>
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-cyan-400/50 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Level 2 - Three pillars */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: "🎯", title: "Dance & Fitness", desc: "Embodied Movement" },
                { icon: "🧘", title: "Spirituality", desc: "Inner Peace" },
                { icon: "🎭", title: "Acting & Theatre", desc: "Creative Expression" }
              ].map((item, idx) => (
                <Link 
                  key={idx}
                  href={idx === 0 ? "/dance-fitness" : idx === 1 ? "/spirituality" : "/acting-theatre"}
                  className="group relative h-36 rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm bg-white/5 border border-blue-300/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-blue-200/50"
                >
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-4 space-y-1">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-base md:text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-white/70">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Center Point - CTA */}
            <div className="mt-8">
              <Link
                href="/register"
                className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-110 inline-block"
              >
                <span className="relative flex items-center gap-2">
                  Begin Your Journey
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BRAND TAGLINE AT BOTTOM */}
        <div className="text-center space-y-3 mt-auto">
          <p className="text-white/85 text-lg font-light">Conscious Wellness • Movement • Purpose</p>
          <p className="text-cyan-300/70 text-sm">Transform Your Life Through Enlightened Consciousness</p>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS BELOW (Scrollable Content) */}
      
      {/* What is FLM? */}
      <section className="py-20 md:py-24 px-4 max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-6 mb-12">
          <p className="section-heading">WHAT IS FLM?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Conscious Wellness Integrated
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Fitness Life Mantra brings together dance, spirituality, and creative expression into one premium wellness platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="section-card rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-semibold text-white">Science-Backed Movement</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Improves balance and coordination</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Enhances mental health and clarity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Builds strength and confidence</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Helps you become your best self</span>
              </li>
            </ul>
          </div>
          
          <div className="section-card rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-semibold text-white">Founded by Dr. Reena Sharma</h3>
            <p className="text-white/80 leading-relaxed">
              A researcher, creative performer, and wellness visionary who integrates science, movement, theatre, and spirituality into a conscious living platform.
            </p>
            <p className="text-white/80 leading-relaxed">
              Based in the USA, serving a global community of wellness seekers.
            </p>
            <Link 
              href="/register" 
              className="inline-block button-primary px-6 py-3 rounded-full text-sm font-semibold mt-4"
            >
              Join Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg text-white/75">
            Join our conscious wellness community today
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/register" 
            className="button-primary px-8 py-4 rounded-full text-base font-semibold"
          >
            Register / Book Now
          </Link>
          <Link 
            href="/dance-fitness" 
            className="button-ghost px-8 py-4 rounded-full text-base font-semibold"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
}
