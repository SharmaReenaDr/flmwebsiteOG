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
                  href="mailto:fitnesslifemantra@gmail.com"
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
        
        {/* Contact & Payment Info */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 space-y-4">
          <h3 className="font-semibold text-ink-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Registration & Payment Contact
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2 text-ink-700">
              <span className="font-semibold">Email:</span>
              <a href="mailto:fitnesslifemantra@gmail.com" className="text-teal-600 hover:underline">fitnesslifemantra@gmail.com</a>
            </p>
            <p className="flex items-center gap-2 text-ink-700">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+18659851650" className="text-teal-600 hover:underline">+1 (865) 985-1650</a>
            </p>
            <p className="flex items-center gap-2 text-ink-700">
              <span className="font-semibold">Venmo:</span>
              <span className="text-teal-600 font-mono">@fitnesslifemantra</span>
            </p>
          </div>
          <p className="text-xs text-ink-600 bg-white/60 rounded-lg p-3 border border-teal-100">
            💳 <strong>Payment Options:</strong> Send registration fees via Venmo to <strong>fitnesslifemantra@gmail.com</strong> or contact us for other payment methods.
          </p>
        </div>
        
        <form action="mailto:fitnesslifemantra@gmail.com" method="POST" encType="text/plain" className="space-y-6">
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
            This form sends to <strong>fitnesslifemantra@gmail.com</strong>. For automated confirmations and calendar integration, we recommend using Calendly (linked on each service page).
          </p>
        </form>
      </section>

      <section className="bg-gold-400/10 rounded-3xl border border-gold-400/25 p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Need Help?</h2>
        <p className="text-ink-500">
          Have questions about which service is right for you? Reach out directly.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ink-700">Email</p>
            <a
              href="mailto:fitnesslifemantra@gmail.com"
              className="button-primary block text-center px-6 py-3 rounded-full font-semibold"
            >
              fitnesslifemantra@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ink-700">Call/Text</p>
            <a
              href="tel:+18659851650"
              className="button-ghost block text-center px-6 py-3 rounded-full font-semibold"
            >
              (865) 985-1650
            </a>
          </div>
        </div>
        <div className="bg-white/60 rounded-2xl p-4 border border-gold-300/30">
          <p className="text-sm text-ink-600 text-center">
            💰 <strong>Venmo Payments:</strong> Send to <span className="font-mono text-teal-600">@fitnesslifemantra</span> or email <strong>fitnesslifemantra@gmail.com</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
