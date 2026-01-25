import Link from "next/link";

export default function SpiritualityPage() {
  const offerings = [
    {
      id: "bhajan",
      title: "Spiritual Fitness Sessions (Bhajan Clubbing)",
      description: "Mantra, movement, and breath woven together to calm the nervous system and elevate consciousness.",
      highlights: ["Guided breathing", "Mantra recitation", "Rhythmic movement", "Group energy"],
      cta: "Join a Session",
    },
    {
      id: "activities",
      title: "Spiritual Activities",
      description: "Deeper exploration of chanting, meditation, sound, and rhythm practices for inner peace and clarity.",
      highlights: ["Chanting circles", "Meditation sessions", "Sound healing", "Rhythm practices"],
      cta: "Explore Activities",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">Spirituality</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Inner Practices & Consciousness</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          Sacred, modern, non-dogmatic spiritual practices designed to reconnect you with purpose, peace, and presence.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {offerings.map((offering) => (
          <div
            key={offering.id}
            id={offering.id}
            className="section-card rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-900">{offering.title}</h2>
              <p className="text-ink-500 leading-relaxed">{offering.description}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-ink-700 uppercase">What to Expect</p>
              <div className="grid grid-cols-2 gap-3">
                {offering.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-lg bg-white/60 px-3 py-2 text-center">
                    <p className="text-sm text-ink-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://calendly.com/reenasharma/flm-spirituality"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary block text-center px-4 py-3 rounded-full font-semibold"
            >
              {offering.cta}
            </a>
          </div>
        ))}
      </div>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Our Spiritual Philosophy</h2>
        <p className="text-ink-500 leading-relaxed text-lg">
          FLM spirituality is <strong>reverent but not religious</strong>, <strong>rooted in ancient wisdom</strong> but expressed in modern language. We believe conscious wellness integrates the spirit, not just the body. Our practices honor multiple traditions and invite exploration without dogma.
        </p>
        <div className="bg-gold-400/10 rounded-2xl border border-gold-400/25 px-6 py-4">
          <p className="text-sm text-ink-700">
            <strong>For all backgrounds:</strong> Whether you're exploring spirituality for the first time or deepening existing practices, FLM welcomes you.
          </p>
        </div>
      </section>

      <div className="text-center space-y-3">
        <p className="text-ink-500">Begin your inner journey today.</p>
        <a
          href="https://calendly.com/reenasharma/flm-spirituality"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-block px-6 py-3 rounded-full font-semibold"
        >
          Register for a Session
        </a>
      </div>
    </main>
  );
}
