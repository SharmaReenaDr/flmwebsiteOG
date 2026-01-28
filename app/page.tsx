import Link from "next/link";

export default function HomePage() {
  const pillars = [
    { icon: "💃", title: "Dance & Fitness", color: "from-pink-500 to-red-500" },
    { icon: "🎭", title: "Performing Arts", color: "from-purple-500 to-pink-500" },
    { icon: "🧘", title: "Spirituality", color: "from-blue-500 to-cyan-500" },
    { icon: "🤝", title: "Community", color: "from-green-500 to-blue-500" }
  ];

  return (
    <main className="w-full bg-black text-white snap-y snap-mandatory">
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
      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 px-4 snap-start">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur hover:border-white/30 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{pillar.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold">{pillar.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
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

      {/* ============ SECTION 2: FULL VIEWPORT - REGISTRATION ============ */}
      <section className="h-screen w-full flex items-center justify-center relative px-4 snap-start bg-gradient-to-b from-black via-blue-900/10 to-black">
        <div className="relative z-10 text-center space-y-12 max-w-2xl w-full">
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Register & Book</p>
            <h2 className="text-5xl md:text-6xl font-black">Start Your Transformation</h2>
          </div>

          <p className="text-lg text-white/75 leading-relaxed">
            Join our exclusive wellness community. Choose from Dance & Fitness, Performing Arts, Spirituality, or Community sessions.
          </p>

          <div className="flex flex-col gap-4">
            <Link 
              href="/register"
              className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300 inline-block"
            >
              Register Now
            </Link>
            <Link 
              href="/dance-fitness"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: FULL VIEWPORT - PHOTOS & VIDEOS ============ */}
      <section className="h-screen w-full flex items-center justify-center relative px-4 snap-start">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black opacity-50" />
        
        <div className="relative z-10 text-center space-y-12 max-w-4xl w-full">
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Media Gallery</p>
            <h2 className="text-5xl md:text-6xl font-black">See Our Community</h2>
          </div>

          <p className="text-lg text-white/75">
            Inspiring moments from our sessions. Watch transformations happen in real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/dance-fitness"
              className="group relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-600/30 to-red-600/30 border border-white/20 backdrop-blur hover:border-white/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <span className="text-5xl">🎥</span>
                  <h3 className="text-2xl font-bold">Dance & Fitness Videos</h3>
                </div>
              </div>
            </Link>

            <Link 
              href="/spirituality"
              className="group relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-white/20 backdrop-blur hover:border-white/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <span className="text-5xl">📸</span>
                  <h3 className="text-2xl font-bold">Community Moments</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: FULL VIEWPORT - PRODUCTS ============ */}
      <section className="h-screen w-full flex items-center justify-center relative px-4 snap-start bg-gradient-to-b from-black via-green-900/10 to-black">
        <div className="relative z-10 text-center space-y-12 max-w-2xl w-full">
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Shop</p>
            <h2 className="text-5xl md:text-6xl font-black">Premium Products</h2>
          </div>

          <p className="text-lg text-white/75 leading-relaxed">
            Curated wellness products, apparel, and tools to enhance your practice.
          </p>

          <Link 
            href="/products"
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      {/* ============ SECTION 5: FOOTER CTA ============ */}
      <section className="min-h-screen w-full flex items-center justify-center relative px-4 snap-start">
        <div className="relative z-10 text-center space-y-12 max-w-3xl w-full">
          <div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">Ready?</h2>
            <p className="text-xl text-white/75 mb-8">
              Join thousands transforming their lives through conscious wellness.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-110 transition-transform duration-500"
            >
              Register Today
            </Link>
            <Link 
              href="/about"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-500"
            >
              Learn More
            </Link>
          </div>

          <p className="text-white/50 text-sm">
            © 2024 Fitness Life Mantra. Founded by Dr. Reena Sharma.<br />
            Conscious. Intentional. Transformative.
          </p>
        </div>
      </section>
    </main>
  );
}
