import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">Community</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Join the FLM Movement</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          Build lasting connections with wellness seekers, creatives, and purpose-driven leaders from around the world.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="section-card rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900">Why Join?</h2>
          <ul className="space-y-4">
            {[
              "Exclusive session discounts and early access",
              "Monthly community events & online gatherings",
              "Curated content (insights, practices, stories)",
              "Direct access to Dr. Reena Sharma",
              "Membership newsletter with seasonal updates",
              "Special product pre-orders and beta access",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-gold-400 mt-1">✓</span>
                <span className="text-ink-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="section-card rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900">Membership Tiers (Coming Soon)</h2>
          <p className="text-ink-500 text-sm">
            We're designing flexible membership options to suit every level of engagement. Details coming soon.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-amber-100 bg-white/70 p-4">
              <p className="font-semibold text-ink-900 text-sm">Basic (Free)</p>
              <p className="text-xs text-ink-500 mt-1">Newsletter + community events</p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-white/70 p-4">
              <p className="font-semibold text-ink-900 text-sm">Plus ($12/mo)</p>
              <p className="text-xs text-ink-500 mt-1">Exclusive sessions + early access</p>
            </div>
            <div className="rounded-lg border border-gold-400/50 bg-gold-400/5 p-4 border-2">
              <p className="font-semibold text-ink-900 text-sm">Founder ($25/mo)</p>
              <p className="text-xs text-ink-500 mt-1">All perks + direct access to Dr. Reena</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Community Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Inclusive", desc: "All bodies, all backgrounds, all beliefs welcome." },
            { title: "Authentic", desc: "Grounded in real experience, not performative wellness." },
            { title: "Supportive", desc: "We lift each other up without comparison." },
            { title: "Growth-Focused", desc: "Committed to continuous evolution." },
          ].map((value) => (
            <div key={value.title} className="space-y-2">
              <h3 className="font-semibold text-ink-900">{value.title}</h3>
              <p className="text-sm text-ink-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gold-400/10 rounded-3xl border border-gold-400/25 p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Get Connected</h2>
        <p className="text-ink-500">
          Subscribe to the FLM newsletter for updates, exclusive content, and community invitations.
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-amber-100 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          <button className="button-primary px-6 py-3 rounded-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center space-y-3">
        <p className="text-ink-500">Ready to be part of something meaningful?</p>
        <a
          href="https://calendly.com/reenasharma/flm-community"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-block px-6 py-3 rounded-full font-semibold"
        >
          Start Your FLM Journey
        </a>
      </div>
    </main>
  );
}
