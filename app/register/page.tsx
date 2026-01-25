import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">Register & Book</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Start Your FLM Journey</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          Choose what resonates with you. Simple registration, fast booking, and instant confirmation.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Fitness & Dance", desc: "Group classes, private sessions, corporate programs", link: "/services" },
          { title: "Spiritual Sessions", desc: "Bhajan, meditation, chanting, inner practices", link: "/spirituality" },
          { title: "Acting & Creative", desc: "Talent inquiries, performance coaching, collaborations", link: "/acting-theatre" },
          { title: "Events & MC", desc: "Host FLM, book Dr. Reena, custom programs", cta: true },
        ].map((item, idx) => (
          <div key={idx} className="section-card rounded-3xl p-6 space-y-3 flex flex-col">
            <h3 className="font-semibold text-ink-900">{item.title}</h3>
            <p className="text-sm text-ink-500">{item.desc}</p>
            <div className="mt-auto">
              {item.cta ? (
                <a
                  href="mailto:hello@fitnesslifemantra.com"
                  className="button-primary block text-center px-3 py-2 rounded-full text-xs font-semibold"
                >
                  Email to Inquire
                </a>
              ) : (
                <Link
                  href={item.link || "/"}
                  className="button-primary block text-center px-3 py-2 rounded-full text-xs font-semibold"
                >
                  Learn More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-8">
        <h2 className="text-2xl font-semibold text-ink-900">Registration Form</h2>
        <p className="text-ink-500">Fill out your details below. We'll confirm your registration and next steps within 24 hours.</p>
        
        <form action="mailto:hello@fitnesslifemantra.com" method="POST" encType="text/plain" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink-700">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-amber-100 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink-700">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-amber-100 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink-700">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-xl border border-amber-100 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink-700">Location</label>
              <select name="location" className="w-full rounded-xl border border-amber-100 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400">
                <option>Select location</option>
                <option>USA</option>
                <option>India</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink-700">What interests you? *</label>
            <div className="space-y-3">
              {[
                { value: "fitness", label: "Fitness & Dance Workshops" },
                { value: "spirituality", label: "Spiritual Sessions" },
                { value: "acting", label: "Acting & Theatre" },
                { value: "events", label: "Events & MC Services" },
                { value: "products", label: "Products & Wellness" },
                { value: "community", label: "Community & Newsletter" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={option.value}
                    className="rounded border-amber-100 focus:ring-gold-400"
                  />
                  <span className="text-sm text-ink-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink-700">Additional Notes</label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Tell us about your wellness goals, experience level, or any questions..."
              className="w-full rounded-xl border border-amber-100 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          <button
            type="submit"
            className="button-primary w-full px-4 py-3 rounded-full font-semibold text-center"
          >
            Register Now
          </button>

          <p className="text-xs text-ink-500 text-center">
            This form sends to hello@fitnesslifemantra.com. For automated confirmations and calendar integration, we recommend using Calendly (linked on each service page).
          </p>
        </form>
      </section>

      <section className="bg-gold-400/10 rounded-3xl border border-gold-400/25 p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Need Help?</h2>
        <p className="text-ink-500">
          Have questions about which service is right for you? Reach out directly.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="mailto:hello@fitnesslifemantra.com"
            className="button-primary px-6 py-3 rounded-full font-semibold"
          >
            Email Us
          </a>
          <a
            href="https://calendly.com/your-flm-link"
            className="button-ghost px-6 py-3 rounded-full font-semibold"
          >
            Schedule a Chat
          </a>
        </div>
      </section>
    </main>
  );
}
