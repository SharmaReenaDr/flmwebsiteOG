import Link from "next/link";
import { serviceCopy } from "../content/serviceCopy";

export default function CommunityPage() {
  const { communityEvents } = serviceCopy;

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">{communityEvents.title}</h1>
        <p className="text-lg italic text-ink-500 max-w-3xl mx-auto">“{communityEvents.quote}”</p>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">{communityEvents.intro}</p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {communityEvents.offers.map((offer) => (
            <div key={offer.title} className="section-card rounded-3xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-ink-900">{offer.title}</h3>
              <p className="text-ink-500 leading-relaxed">{offer.description}</p>
              <Link href="/register" className="button-primary inline-block px-4 py-2 rounded-full text-sm font-semibold">
                Book for Events
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink-900">What You’re Learning (Beyond the Technique)</h2>
        <ul className="space-y-2 text-ink-600">
          {communityEvents.learning.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="section-card rounded-3xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-ink-900">Media Proof</h3>
          <p className="text-sm text-ink-500 uppercase">Photo Gallery</p>
          <ul className="space-y-2 text-ink-600">
            {communityEvents.media.photos.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="section-card rounded-3xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-ink-900">Video Gallery</h3>
          <ul className="space-y-2 text-ink-600">
            {communityEvents.media.videos.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink-900">Packages & Workshops</h2>
        <ul className="space-y-2 text-ink-600">
          {communityEvents.workshops.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-500">{communityEvents.packagesNote}</p>
      </section>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-5 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink-900">Register / Contact</h2>
        <p className="text-ink-500">Let’s build your next event with intention and joy.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/register" className="button-primary px-6 py-3 rounded-full font-semibold">
            Corporate & Event Inquiry
          </Link>
          <a
            href="mailto:fitnesslifemantra@gmail.com?subject=Community%20and%20Events%20Inquiry"
            className="button-ghost px-6 py-3 rounded-full font-semibold"
          >
            Contact to Know More
          </a>
        </div>
        <p className="text-sm text-ink-500">
          <span className="font-semibold">Payment Options:</span> {communityEvents.paymentOptions.join(" • ")}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {communityEvents.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="section-card rounded-2xl p-6">
              <p className="text-ink-600">“{testimonial.quote}”</p>
              <p className="text-sm font-semibold text-ink-900 mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
