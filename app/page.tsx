import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-20">
      <section className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="badge-soft rounded-full px-3 py-1 text-xs tracking-wide">Founder-led • Conscious • Global</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white leading-[0.95] tracking-tight">
            Fitness Life Mantra
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold tracking-wide">Conscious Wellness • Movement • Purpose</p>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Integrate fitness, spirituality, creative expression, and wellness into a single conscious lifestyle platform. Founded by Dr. Reena Sharma.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/register"
            className="button-primary px-6 py-3 rounded-full text-sm font-semibold"
          >
            Register / Book Now
          </Link>
          <Link href="/services" className="button-ghost px-6 py-3 rounded-full text-sm font-semibold">
            Explore Services
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-4">
        {[
          { title: "Services", desc: "Dance, fitness, movement", icon: "🏃", href: "/services" },
          { title: "Spirituality", desc: "Bhajan, meditation, inner practice", icon: "🙏", href: "/spirituality" },
          { title: "Acting & Theatre", desc: "Performance, creative expression", icon: "🎭", href: "/acting-theatre" },
          { title: "Community", desc: "Membership, events, connection", icon: "🤝", href: "/community" },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="section-card rounded-2xl p-6 text-center hover:shadow-glow transition space-y-3 group"
          >
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="text-xs text-muted">{item.desc}</p>
          </Link>
        ))}
      </section>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-8">
        <div className="text-center space-y-3">
          <p className="section-heading">What is FLM?</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">A Modern Conscious Lifestyle Platform</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">For Wellness Seekers</h3>
            <p className="text-muted leading-relaxed">
              Move your body. Calm your mind. Express your creativity. Connect with community. Everything you need to live consciously—in one place.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>✓ Clear service categories</li>
              <li>✓ Fast, easy booking</li>
              <li>✓ Founder-led experience</li>
              <li>✓ Global community</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Why Now?</h3>
            <p className="text-muted leading-relaxed">
              People expect authenticity, clarity, and integration. FLM delivers all three—modern UX, founder credibility, and a modular platform built to scale.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>✓ Proven modern design patterns</li>
              <li>✓ Investor-ready positioning</li>
              <li>✓ Franchise-ready structure</li>
              <li>✓ Room for expansion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center space-y-3">
          <p className="section-heading">Our Offerings</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Four Pillars of Conscious Living</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "🏃 Services",
              desc: "Dance workshops and functional fitness for all levels and settings.",
              link: "/services",
            },
            {
              title: "🙏 Spirituality",
              desc: "Bhajan sessions, meditation, chanting circles, and inner practices.",
              link: "/spirituality",
            },
            {
              title: "🎭 Acting & Theatre",
              desc: "Talent representation, performance coaching, and creative collaborations.",
              link: "/acting-theatre",
            },
            {
              title: "🛍️ Products",
              desc: "Curated wellness, beauty, and ritual products (coming soon).",
              link: "/products",
            },
          ].map((offering) => (
            <Link
              key={offering.title}
              href={offering.link}
              className="section-card rounded-3xl p-6 space-y-3 hover:shadow-glow transition group"
            >
              <h3 className="text-lg font-semibold text-white">{offering.title}</h3>
              <p className="text-muted text-sm">{offering.desc}</p>
              <span className="text-accent text-xs font-semibold group-hover:translate-x-1 inline-block transition-transform">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-8">
        <div className="space-y-3">
          <p className="section-heading">Founder</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Meet Dr. Reena Sharma</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              Dr. Reena Sharma is a founder, wellness educator, clinical researcher, and creative performer integrating movement science, spiritual practice, and artistic expression.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li><strong className="text-white">Background:</strong> Movement science, clinical research, spirituality, theatre & performance</li>
              <li><strong className="text-white">Expertise:</strong> Founder-led wellness, conscious living, performance coaching</li>
              <li><strong className="text-white">Global:</strong> USA & India</li>
            </ul>
            <Link
              href="/about"
              className="text-accent text-sm font-semibold underline underline-offset-4 hover:text-accent-strong inline-block"
            >
              Full bio and mission →
            </Link>
          </div>
          <div className="bg-accent/10 rounded-2xl border border-accent/25 p-6 text-center space-y-3">
            <p className="text-sm text-muted">
              Every service, every spiritual offering, every creative collaboration flows from Dr. Reena's lived experience and expertise.
            </p>
            <Link
              href="/register"
              className="button-primary px-4 py-2 rounded-full text-sm font-semibold block"
            >
              Meet with Dr. Reena
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-accent/10 rounded-3xl border border-accent/25 p-8 md:p-12 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Join the FLM Community</h2>
          <p className="text-muted">Get updates, exclusive content, and event invitations.</p>
        </div>
        <div className="flex gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-white/20 px-4 py-3 bg-white/5 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          />
          <button className="button-primary px-6 py-3 rounded-full font-semibold">
            Subscribe
          </button>
        </div>
      </section>

      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready to Start?</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Choose a service, register, and begin your FLM journey. Fast booking, clear pricing, instant confirmation.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/register"
            className="button-primary px-6 py-3 rounded-full font-semibold"
          >
            Register Now
          </Link>
          <Link href="/services" className="button-ghost px-6 py-3 rounded-full font-semibold">
            Browse Services
          </Link>
          <a
            href="mailto:hello@fitnesslifemantra.com"
            className="button-ghost px-6 py-3 rounded-full font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
