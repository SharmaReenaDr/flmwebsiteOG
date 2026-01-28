import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* HERO SECTION - 100vh, no scroll */}
      <section className="h-screen flex flex-col items-center justify-between py-12 md:py-16 px-4">
        
        {/* BRAND IDENTITY & HEADLINE */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 w-full max-w-4xl">
          
          {/* Logo with Glow */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <span className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                  ✨
                </span>
              </div>
            </div>
            
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                Fitness Life Mantra
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 bg-clip-text">
                Conscious Wellness Movement with Purpose
              </p>
              
              {/* Supporting Line */}
              <p className="text-lg md:text-xl text-white/85 font-light">
                You are at the right place.
              </p>
            </div>
          </div>
        </div>

        {/* THREE PILLARS - Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl px-2">
          
          {/* PILLAR 1: DANCE & FITNESS */}
          <Link 
            href="/dance-fitness"
            className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-black/60 group-hover:from-orange-500/40 transition-all duration-300" />
            
            {/* Animated Energy */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,100,80,0.2),transparent)]" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center gap-3 p-6">
              <div className="text-5xl">💃</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Dance & Fitness</h3>
              <p className="text-sm text-white/80">Movement, Energy, Strength</p>
            </div>
            
            {/* Glass Border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors" />
          </Link>

          {/* PILLAR 2: SPIRITUALITY */}
          <Link 
            href="/spirituality"
            className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-black/60 group-hover:from-blue-500/40 transition-all duration-300" />
            
            {/* Animated Calm */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,200,255,0.2),transparent)]" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center gap-3 p-6">
              <div className="text-5xl">🧘</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Spirituality</h3>
              <p className="text-sm text-white/80">Inner Stillness, Peace</p>
            </div>
            
            {/* Glass Border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors" />
          </Link>

          {/* PILLAR 3: ACTING & THEATRE */}
          <Link 
            href="/acting-theatre"
            className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-pink-500/20 to-black/60 group-hover:from-yellow-500/40 transition-all duration-300" />
            
            {/* Animated Performance */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,200,100,0.2),transparent)]" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center gap-3 p-6">
              <div className="text-5xl">🎭</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Acting & Theatre</h3>
              <p className="text-sm text-white/80">Expression, Creativity, Voice</p>
            </div>
            
            {/* Glass Border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors" />
          </Link>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS BELOW (Scrollable Content) */}
      
      {/* What is FLM? */}
      <section className="py-20 md:py-24 px-4 max-w-6xl mx-auto w-full">
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
