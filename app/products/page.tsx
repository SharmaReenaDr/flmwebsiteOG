import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    { name: "Wellness & Immunity", description: "Science-backed supplements and wellness products." },
    { name: "Herbal Beauty", description: "Natural, ritual-led beauty and skincare essentials." },
    { name: "Ritual Essentials", description: "Tools and items to deepen your spiritual practice." },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">Products</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Coming Soon</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          Curated wellness and beauty products designed to complement your FLM journey.
        </p>
      </header>

      <div className="section-card rounded-3xl p-8 md:p-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink-900">What's Coming</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="rounded-2xl border border-amber-100/70 bg-white/70 p-6 space-y-3">
                <h3 className="font-semibold text-ink-900">{category.name}</h3>
                <p className="text-sm text-ink-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold-400/10 rounded-2xl border border-gold-400/25 px-6 py-6 space-y-4">
          <h3 className="font-semibold text-ink-900">Join the Waitlist</h3>
          <p className="text-sm text-ink-700">
            Be the first to know when FLM products launch. Get exclusive early-access pricing and special founding member benefits.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-amber-100 px-4 py-2 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm"
            />
            <button className="button-primary px-4 py-2 rounded-full text-sm font-semibold">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Product Philosophy</h2>
        <p className="text-ink-500 leading-relaxed text-lg">
          Every FLM product is thoughtfully sourced and tested to meet three criteria: <strong>effectiveness</strong>, <strong>purity</strong>, and <strong>alignment with our values</strong>. We partner only with suppliers who share our commitment to conscious wellness.
        </p>
      </section>

      <div className="text-center space-y-3">
        <p className="text-ink-500">In the meantime, explore our services and spirituality offerings.</p>
        <a href="/services" className="button-primary inline-block px-6 py-3 rounded-full font-semibold">
          Explore Services
        </a>
      </div>
    </main>
  );
}
