import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">About</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Fitness Life Mantra</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          A movement for conscious wellness that honors the whole person: body, spirit, creativity, and purpose.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="section-card rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900">Our Mission</h2>
          <p className="text-ink-500 leading-relaxed">
            To build a modern, inclusive, founder-led platform that integrates fitness, spirituality, creative expression, and wellness products—creating a single trusted ecosystem where people can move, heal, express, and grow.
          </p>
          <div className="space-y-3">
            <h3 className="font-semibold text-ink-900">What We Believe</h3>
            <ul className="space-y-2 text-ink-500 text-sm">
              <li>✓ Wellness is holistic (body, mind, spirit, creativity)</li>
              <li>✓ Authenticity builds trust more than marketing</li>
              <li>✓ Founder-led companies create deeper impact</li>
              <li>✓ Spirituality can be modern and accessible</li>
              <li>✓ Community is essential to wellness</li>
              <li>✓ Purpose and profit can coexist</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="section-card rounded-3xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-ink-900">Founder</h2>
            <h3 className="text-xl font-semibold text-gold-500">Dr. Reena Sharma</h3>
            <p className="text-ink-500 text-sm leading-relaxed">
              Dr. Reena Sharma is a founder, wellness educator, and creative performer integrating movement science, spiritual practice, and artistic expression into a holistic approach to conscious living.
            </p>
            <div className="space-y-2 text-sm text-ink-600">
              <p><strong>Background:</strong> Clinical research, movement science, spiritual practices, theatre & performance</p>
              <p><strong>Vision:</strong> Global platform for conscious wellness that honors authenticity, scale, and impact</p>
              <p><strong>Global Reach:</strong> USA & India</p>
            </div>
          </div>

          <div className="section-card rounded-3xl p-8 space-y-3">
            <h3 className="font-semibold text-ink-900">Recognition & Media</h3>
            <p className="text-ink-500 text-sm">
              Founder-led, investor-ready, and featured in wellness conversations. Learn more about FLM in the media.
            </p>
            <Link
              href="#"
              className="text-gold-500 text-sm font-semibold underline underline-offset-4"
            >
              View media & features
            </Link>
          </div>
        </div>
      </div>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">The FLM Ecosystem</h2>
        <p className="text-ink-500">
          Everything FLM offers flows from a single vision: help people live with more consciousness, purpose, and joy.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { service: "Services", desc: "Dance, fitness, movement, corporate wellness" },
            { service: "Spirituality", desc: "Bhajan, meditation, chanting, inner practice" },
            { service: "Acting", desc: "Performance, casting, creative expression" },
            { service: "Products", desc: "Wellness, beauty, ritual essentials" },
          ].map((item) => (
            <div key={item.service} className="rounded-2xl border border-amber-100/70 bg-white/70 p-6 space-y-2">
              <h3 className="font-semibold text-ink-900">{item.service}</h3>
              <p className="text-xs text-ink-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Why Now?</h2>
        <p className="text-ink-500 leading-relaxed">
          We are in an era where people expect clarity, authenticity, and integration. Generic wellness offerings no longer serve. FLM meets this moment by offering a modern, modular, founder-led platform that respects both tradition and innovation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Modern UX", desc: "Fast booking, clear service categories, mobile-first design" },
            { title: "Authentic Founder", desc: "You know who Dr. Reena is and what she stands for" },
            { title: "Scalable Model", desc: "From 1:1 sessions to corporate events, products, and franchises" },
          ].map((item) => (
            <div key={item.title} className="section-card rounded-2xl p-6 space-y-2">
              <h3 className="font-semibold text-ink-900">{item.title}</h3>
              <p className="text-sm text-ink-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Let's Build Together</h2>
        <p className="text-ink-500 max-w-2xl mx-auto">
          Whether you're a user, partner, investor, or collaborator—FLM is designed to evolve with your needs and our community's growth.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://calendly.com/reenasharma/flm-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-6 py-3 rounded-full font-semibold"
          >
            Start Your Journey
          </a>
          <a
            href="mailto:hello@fitnesslifemantra.com?subject=FLM%20Partnership%20Inquiry"
            className="button-ghost px-6 py-3 rounded-full font-semibold"
          >
            Let's Talk Partnership
          </a>
        </div>
      </div>
    </main>
  );
}
