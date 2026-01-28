import Link from "next/link";

export default function DanceFitnessPage() {
  const danceStyles = [
    { name: "Folk Dance", desc: "Traditional movements, cultural roots, grounding energy" },
    { name: "Bollywood", desc: "Vibrant, rhythmic, expressive, joyful movement" },
    { name: "Contemporary", desc: "Modern flow, freestyle expression, creative freedom" },
    { name: "Freestyle", desc: "Your own rhythm, authentic movement, pure joy" },
  ];

  const benefits = [
    {
      title: "Improved Balance",
      desc: "Develop core stability and proprioception through dynamic movement",
      icon: "⚖️"
    },
    {
      title: "Brain-Body Coordination",
      desc: "Enhance neural pathways connecting mind and movement",
      icon: "🧠"
    },
    {
      title: "Mental Health",
      desc: "Release endorphins, reduce stress, elevate mood",
      icon: "💫"
    },
    {
      title: "Strength & Confidence",
      desc: "Build physical capability and emotional resilience",
      icon: "💪"
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="py-20 md:py-28 px-4 text-center space-y-8 max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          <div className="text-6xl md:text-7xl">💃</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white">
            Dance & Fitness
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Science-backed movement that awakens your body and mind
          </p>
        </div>
      </section>

      {/* DANCE STYLES */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Dance Styles</h2>
          <p className="text-lg text-white/75">Choose your rhythm, find your expression</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {danceStyles.map((style) => (
            <div 
              key={style.name}
              className="section-card rounded-2xl p-8 space-y-4 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold text-white">{style.name}</h3>
              <p className="text-white/80 leading-relaxed">{style.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCIENCE-BACKED BENEFITS */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center space-y-4 mb-12">
          <p className="section-heading">WHY DANCE & FITNESS?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Become Your Best Version
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="section-card rounded-2xl p-8 space-y-4 hover:shadow-2xl transition-all group"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="section-card rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What You'll Experience
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Movement & Workouts</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Functional fitness for all body types</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Dance-based cardio workouts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Flexibility and mobility training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Strength building through movement</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Personal Growth</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Build confidence in your body</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Release stress and tension</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Connect with your authentic self</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Join a supportive community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Move?
          </h2>
          <p className="text-lg text-white/75">
            Join us for a dance & fitness session
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/register" 
            className="button-primary px-8 py-4 rounded-full text-base font-semibold"
          >
            Register Now
          </Link>
          <Link 
            href="/" 
            className="button-ghost px-8 py-4 rounded-full text-base font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
