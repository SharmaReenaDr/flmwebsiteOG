'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { serviceCopy } from '../content/serviceCopy';

const heroSlides = [
  { type: 'video', src: '/videos/B.MOV', mime: 'video/quicktime' },
  { type: 'image', src: '/images/Dance%20to%20Smile_Fitness%20Classes.jpg', alt: 'Dance class' },
  { type: 'image', src: '/images/23.JPG', alt: 'Dance moment' },
  { type: 'video', src: '/videos/IMG_1535.mov', mime: 'video/quicktime' },
];

export default function DanceFitness() {
  const { danceFitness } = serviceCopy;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Slideshow Background */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return slide.type === 'video' ? (
            <video
              key={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={slide.src} type={slide.mime} />
            </video>
          ) : (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
          );
        })}

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-4">{danceFitness.title}</h1>
          <p className="text-lg md:text-xl italic text-white/90 mb-4">
            “{danceFitness.quote}”
          </p>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            {danceFitness.intro}
          </p>
          <Link
            href="/book"
            className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition inline-block text-lg"
          >
            Register for a Class
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-playfair text-center mb-16">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {danceFitness.offers.map((offer) => (
              <div key={offer.title} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold font-playfair mb-4">{offer.title}</h3>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <Link href="/book" className="text-black font-semibold hover:opacity-70 transition">
                  Register Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You're Learning */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">What You’re Learning (Beyond the Technique)</h2>
          <ul className="space-y-3 text-lg text-gray-700 max-w-3xl mx-auto">
            {danceFitness.learning.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-black mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Media Proof */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-12">Media Proof</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold">Photo Gallery</h3>
              <ul className="space-y-2 text-gray-600">
                {danceFitness.media.photos.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold">Video Gallery</h3>
              <ul className="space-y-2 text-gray-600">
                {danceFitness.media.videos.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-10">Workshops & Packages</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <ul className="space-y-3 text-gray-700">
              {danceFitness.workshops.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">{danceFitness.packagesNote}</p>
          </div>
        </div>
      </section>

      {/* Register / Contact / Payment */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">Ready to Begin?</h2>
          <p className="text-lg text-gray-300">Book a class, join a workshop, or ask about private sessions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition inline-block text-lg"
            >
              Register Now
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Dance%20and%20Fitness%20Inquiry"
              className="border border-white/60 px-8 py-4 rounded font-semibold hover:bg-white hover:text-black transition inline-block text-lg"
            >
              Contact to Know More
            </a>
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-semibold">Payment Options:</span> {danceFitness.paymentOptions.join(" • ")}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-10">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {danceFitness.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-700 mb-4">“{testimonial.quote}”</p>
                <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
