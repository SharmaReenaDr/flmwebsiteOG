import Link from "next/link";

export default function HomePage() {
  const services = [
    { icon: "💃", title: "Dance & Fitness", desc: "Embodied Movement", color: "from-pink-500 to-red-500", href: "/dance-fitness" },
    { icon: "🎭", title: "Performing Arts", desc: "Creative Expression", color: "from-purple-500 to-pink-500", href: "/acting-theatre" },
    { icon: "🧘", title: "Spirituality", desc: "Inner Peace", color: "from-blue-500 to-cyan-500", href: "/spirituality" },
    { icon: "🤝", title: "Wellness Events", desc: "Community Connection", color: "from-green-500 to-blue-500", href: "/community-events" }
  ];

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* ============ CINEMATIC BACKGROUND LAYER ============ */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        {/* Meteor Shower */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`meteor-${i}`}
              className="absolute w-1 h-24 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animation: `meteorShower ${4 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)"
              }}
            />
          ))}
        </div>

        {/* Rain Drops */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute w-0.5 h-8 bg-gradient-to-b from-cyan-200 to-transparent"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                animation: `rainDrop ${3 + Math.random() * 2}s linear infinite`,
                animationDelay: `${i * 0.15}s`,
                opacity: 0.4
              }}
            />
          ))}
        </div>

        {/* Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={`beam-${i}`}
              className="absolute w-1"
              style={{
                left: `${20 + i * 15}%`,
                top: "-100%",
                height: "300%",
                background: "linear-gradient(180deg, transparent, rgba(34, 211, 238, 0.3), transparent)",
                animation: `lightBeamVertical ${6 + i}s ease-in-out infinite`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay - Subtle Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black" />
      </div>

      {/* ============ HERO SECTION ============ */}
      <section className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 pt-24 pb-12">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Animated Brand Name */}
          <div className="space-y-4">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-cursive font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-fadeInGlow"
              style={{ fontStyle: 'italic', textShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
            >
              Fitness Life Mantra
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-200 font-light tracking-widest">
              Move. Heal. Transform.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A fusion of fitness, wellness, spirituality, and creative expression.<br />
            Awaken your consciousness. Transform your life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/register"
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300"
            >
              Register Now
            </Link>
            <Link
              href="/#services"
              className="px-10 py-4 border-2 border-cyan-400 text-cyan-300 font-bold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      <section id="services" className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Our Services
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover what Fitness Life Mantra offers to elevate your wellness journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group relative h-80 rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                    {service.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-cyan-200/80 text-sm">
                    {service.desc}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Beam animations on card */}
                <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FOOTER SECTION ============ */}
      <section className="relative z-10 w-full flex items-center justify-center px-4 py-24">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Ready to Transform?
          </h2>
          <p className="text-lg text-white/70">
            Join our community of conscious wellness seekers and experience the power of integrated fitness, spirituality, and creativity.
          </p>
          <Link
            href="/register"
            className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300"
          >
            Begin Your Journey Today
          </Link>
          <p className="text-white/50 text-sm pt-8">
            © 2024 Fitness Life Mantra. Founded by Dr. Reena Sharma.<br />
            Conscious. Intentional. Transformative.
          </p>
        </div>
      </section>
    </main>
  );
}
