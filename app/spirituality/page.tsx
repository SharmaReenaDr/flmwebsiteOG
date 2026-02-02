import Link from "next/link";
import { serviceCopy } from "../content/serviceCopy";

export default function SpiritualityPage() {
  const { spirituality } = serviceCopy;

  return (
    <main className="min-h-screen w-full flex flex-col">
      <section className="py-20 md:py-28 px-4 text-center space-y-4 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white">
          {spirituality.title}
        </h1>
        <p className="text-lg md:text-xl italic text-white/85">“{spirituality.quote}”</p>
        <p className="text-xl md:text-2xl text-white/80 font-light">{spirituality.intro}</p>
      </section>

      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {spirituality.offers.map((offer) => (
            <div key={offer.title} className="section-card rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
              <p className="text-white/80 leading-relaxed">{offer.description}</p>
              <Link
                href="/book"
                className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold"
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 max-w-5xl mx-auto w-full">
        <div className="section-card rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            What You’re Learning (Beyond the Technique)
          </h2>
          <ul className="space-y-3 text-white/85">
            {spirituality.learning.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">Media Proof</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="section-card rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Photo Gallery</h3>
            <ul className="space-y-2 text-white/80">
              {spirituality.media.photos.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="section-card rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Video Gallery</h3>
            <ul className="space-y-2 text-white/80">
              {spirituality.media.videos.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="section-card rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Workshops & Programs</h2>
          <ul className="space-y-3 text-white/80">
            {spirituality.workshops.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/60">{spirituality.packagesNote}</p>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-black/40">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Register / Contact</h2>
          <p className="text-xl text-white/80">Join our sessions or inquire about workshops.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Book a Session
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Spirituality%20Inquiry"
              className="inline-block border border-white/60 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Contact to Know More
            </a>
          </div>
          <p className="text-sm text-white/70">
            <span className="font-semibold">Payment Options:</span> {spirituality.paymentOptions.join(" • ")}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {spirituality.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="section-card rounded-2xl p-6">
              <p className="text-white/80">“{testimonial.quote}”</p>
              <p className="text-sm font-semibold text-white mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
