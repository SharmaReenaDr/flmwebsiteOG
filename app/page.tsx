'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const heroSlides = [
  { type: 'video', src: '/B.MOV', mime: 'video/quicktime' },
  { type: 'video', src: '/IMG_1535.mov', mime: 'video/quicktime' },
];

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <div className="pt-16">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        <video
          key={activeSlide.src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={activeSlide.src} type={activeSlide.mime} />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
            Transform Your Life Through Movement
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
            Dance, Fitness, Spirituality & Performing Arts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition text-lg"
            >
              Book Your Trial
            </Link>
            <Link
              href="#programs"
              className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-black transition text-lg"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* What is FLM? Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 font-playfair">What is Fitness Life Mantra?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Fitness Life Mantra (FLM) is a movement for conscious wellness that honors the whole person: 
            <strong> body, spirit, creativity, and purpose</strong>. Founded by Dr. Reena Sharma, FLM integrates 
            dance, fitness, spirituality, and performing arts into a single ecosystem where people can move, heal, 
            express, and grow.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
              <p className="text-gray-600">Wellness that integrates body, mind, spirit, and creativity.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Founder-Led</h3>
              <p className="text-gray-600">Personal guidance from Dr. Reena with authenticity and care.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-600">Serving students in USA and India with local context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section id="programs" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 font-playfair">Our Programs</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Choose from our four transformative pillars, each designed to enhance different aspects of your life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Dance & Fitness */}
            <Link href="/dance-fitness" className="group">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition h-full">
                <div className="text-5xl mb-4">💃</div>
                <h3 className="text-3xl font-bold mb-3 font-playfair">Dance & Fitness</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  From Bollywood to contemporary, discover the joy of movement. All ages, all levels welcome.
                </p>
                <p className="text-black font-semibold group-hover:translate-x-2 transition">
                  Explore Classes →
                </p>
              </div>
            </Link>

            {/* Pillar 2: Performing Arts */}
            <Link href="/acting-theatre" className="group">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition h-full">
                <div className="text-5xl mb-4">🎭</div>
                <h3 className="text-3xl font-bold mb-3 font-playfair">Acting & Theatre</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  MC hosting, acting workshops, theatre productions, and event management services.
                </p>
                <p className="text-black font-semibold group-hover:translate-x-2 transition">
                  See Portfolio →
                </p>
              </div>
            </Link>

            {/* Pillar 3: Spirituality */}
            <Link href="/spirituality" className="group">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition h-full">
                <div className="text-5xl mb-4">🧘</div>
                <h3 className="text-3xl font-bold mb-3 font-playfair">Spirituality & Wellness</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Bhajans, meditation, breathwork, and community gatherings for inner peace.
                </p>
                <p className="text-black font-semibold group-hover:translate-x-2 transition">
                  Join Community →
                </p>
              </div>
            </Link>

            {/* Pillar 4: Corporate */}
            <Link href="/community" className="group">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition h-full">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-3 font-playfair">Community & Events</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Team building, event management, and specialized experiences for organizations.
                </p>
                <p className="text-black font-semibold group-hover:translate-x-2 transition">
                  Request Proposal →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose FLM */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 font-playfair">Why Choose FLM</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-3">Happy Students</h3>
              <p className="text-gray-600">
                Thousands of individuals have transformed their lives through our programs.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-3">Years Experience</h3>
              <p className="text-gray-600">
                Dr. Reena Sharma brings over 15 years of expertise in dance, performance, and wellness.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">20+</div>
              <h3 className="text-xl font-semibold mb-3">Programs</h3>
              <p className="text-gray-600">
                From beginner to advanced, we offer diverse programs for all interests and levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 font-playfair">Student Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "FLM completely changed my perspective on fitness. It's not just about movement, it's about transformation.",
                author: "Priya S.",
                pillar: "Dance & Fitness",
              },
              {
                quote: "The spirituality sessions brought me peace I've been searching for. Highly recommend!",
                author: "Arjun M.",
                pillar: "Spirituality",
              },
              {
                quote: "Dr. Reena's performing arts coaching helped me land my first acting role. Grateful!",
                author: "Deepak K.",
                pillar: "Performing Arts",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 text-lg italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 font-playfair">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of students who've already started their journey. Your first session is just one click away.
          </p>
          <Link
            href="/book"
            className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition inline-block text-lg"
          >
            Book Your Free Trial Today
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 font-playfair">Upcoming Events</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Don't miss our latest workshops and community gatherings</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bhangra Workshop", date: "Feb 15, 2026", time: "6-8 PM" },
              { title: "Wellness Retreat", date: "Feb 22, 2026", time: "9 AM-5 PM" },
              { title: "Corporate Team Building", date: "Mar 1, 2026", time: "10 AM-12 PM" },
            ].map((event, i) => (
              <div key={i} className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.time}</p>
                <Link href="/events" className="text-black font-semibold hover:opacity-70 transition">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="border-2 border-black text-black px-8 py-4 rounded font-semibold hover:bg-black hover:text-white transition inline-block"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">Stay Updated</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get exclusive updates, class schedules, and wellness tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              required
              className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
