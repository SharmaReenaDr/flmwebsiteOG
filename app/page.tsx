import Link from "next/link";

export default function HomePage() {
  const pillars = [
    { icon: "💃", title: "Dance & Fitness", color: "from-pink-500 to-red-500", href: "/dance-fitness" },
    { icon: "🎭", title: "Performing Arts", color: "from-purple-500 to-pink-500", href: "/acting-theatre" },
    { icon: "🧘", title: "Spirituality", color: "from-blue-500 to-cyan-500", href: "/spirituality" },
    { icon: "🤝", title: "Community", color: "from-green-500 to-blue-500", href: "/community" }
  ];

  return (
    <main className="w-full bg-black text-white">
      {/* FIXED NAVIGATION - TOP */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-cyan-400">FLM</h1>
          <div className="flex gap-4 md:gap-8">
            <Link href="/register" className="text-sm font-semibold hover:text-cyan-400 transition">Register</Link>
            <Link href="/dance-fitness" className="text-sm font-semibold hover:text-cyan-400 transition">Gallery</Link>
            <Link href="/products" className="text-sm font-semibold hover:text-cyan-400 transition">Products</Link>
          </div>
        </div>
      </nav>

      {/* ============ SECTION 1: HERO - 4 PILLARS ============ */}
      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 px-4">
        {/* Background beam animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="beam-effect beam-horizontal absolute top-1/4 left-0" style={{ animationDelay: "0s" }} />
          <div className="beam-effect beam-horizontal absolute top-1/2 left-0" style={{ animationDelay: "0.5s" }} />
          <div className="beam-effect beam-horizontal absolute top-3/4 left-0" style={{ animationDelay: "1s" }} />
          <div className="beam-effect beam-vertical absolute left-1/4 top-0" style={{ animationDelay: "0.25s" }} />
          <div className="beam-effect beam-vertical absolute left-1/2 top-0" style={{ animationDelay: "0.75s" }} />
          <div className="beam-effect beam-vertical absolute left-3/4 top-0" style={{ animationDelay: "1.25s" }} />
        </div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-16 w-full">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter">
              Fitness Life<br />Mantra
            </h1>
            <p className="text-lg md:text-2xl text-cyan-300 font-light">Conscious Wellness. Movement. Spirit.</p>
          </div>

          {/* 4 PILLARS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
            {pillars.map((pillar, idx) => (
              <Link
                href={pillar.href}
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur hover:border-white/30 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Beam animations */}
                <div className="beam-effect beam-horizontal absolute top-1/4 left-0" style={{ animationDelay: `${idx * 0.3}s` }} />
                <div className="beam-effect beam-horizontal absolute top-3/4 left-0" style={{ animationDelay: `${idx * 0.3 + 0.5}s` }} />
                <div className="beam-effect beam-vertical absolute left-1/4 top-0" style={{ animationDelay: `${idx * 0.3 + 1}s` }} />
                <div className="beam-effect beam-vertical absolute left-3/4 top-0" style={{ animationDelay: `${idx * 0.3 + 1.5}s` }} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{pillar.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold">{pillar.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Link 
              href="/register"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500"
            >
              Begin Your Journey →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
