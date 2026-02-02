'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CheckIcon, ArrowRightIcon, StarIcon, LotusIcon } from '../components/icons';

const practices = ['MEDITATION', 'BHAJAN', 'CHANTING', 'BREATHWORK', 'YOGA'];

const offerings = [
  {
    title: 'Bhajan & Devotional Singing',
    description: 'Sacred music that opens the heart and anchors the mind. Experience the power of devotional singing in community.',
    benefits: ['Heart opening', 'Stress relief', 'Community connection', 'Emotional release'],
    icon: '🎵',
  },
  {
    title: 'Bhajan Clubbing',
    description: 'High-energy devotional sessions blending traditional bhajans with modern rhythms for elevated group experiences.',
    benefits: ['Energy elevation', 'Group synchrony', 'Joy & celebration', 'Spiritual high'],
    icon: '🎤',
  },
  {
    title: 'Meditation & Mindfulness',
    description: 'Guided practices to calm the nervous system, build focus, and cultivate inner peace in daily life.',
    benefits: ['Mental clarity', 'Anxiety reduction', 'Focus improvement', 'Inner peace'],
    icon: '🧘',
  },
  {
    title: 'Chanting Circles',
    description: 'Sacred sound practices using mantras and vibrations to reset energy, restore balance, and connect with self.',
    benefits: ['Vibrational healing', 'Energy reset', 'Deep relaxation', 'Spiritual alignment'],
    icon: '🕉️',
  },
  {
    title: 'Breathwork & Pranayama',
    description: 'Ancient breathing techniques to regulate the nervous system, increase vitality, and clear mental fog.',
    benefits: ['Nervous system regulation', 'Energy boost', 'Emotional balance', 'Mental clarity'],
    icon: '💨',
  },
];

const philosophyPoints = [
  {
    title: 'Reverent but Not Religious',
    desc: 'We honor multiple traditions without dogma. Our practices are spiritual, not sectarian.',
  },
  {
    title: 'Ancient Wisdom, Modern Language',
    desc: 'Traditional techniques explained through contemporary understanding and science.',
  },
  {
    title: 'Integration Over Escape',
    desc: 'Spirituality that supports your daily life, not takes you away from it.',
  },
  {
    title: 'Community-Centered',
    desc: 'Individual growth supported by collective energy and shared practice.',
  },
];

const testimonials = [
  {
    quote: "I feel calmer, clearer, and more grounded after every session. Dr. Reena creates a safe space for deep inner work.",
    name: 'Meera S.',
    role: 'Meditation Practitioner',
  },
  {
    quote: "The practices helped me reconnect with myself in a gentle, powerful way. Bhajan clubbing is unlike anything else.",
    name: 'Kavita P.',
    role: 'Workshop Attendee',
  },
  {
    quote: "Finally found spirituality that doesn't ask me to leave my modern life behind. This is exactly what I needed.",
    name: 'Jennifer L.',
    role: 'Wellness Seeker',
  },
];

const workshops = [
  { name: "Women's Spiritual Circles", desc: 'Sacred space for feminine wisdom and connection' },
  { name: '7-Day Transformation', desc: 'Intensive journey into self-discovery and renewal' },
  { name: 'One-on-One Guidance', desc: 'Personalized spiritual mentorship sessions' },
  { name: 'Corporate Mindfulness', desc: 'Workplace wellness and stress management programs' },
];

export default function SpiritualityPage() {
  const [currentPractice, setCurrentPractice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPractice((prev) => (prev + 1) % practices.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <LotusIcon size={64} className="mx-auto text-purple-400 opacity-80" />
          </div>
          
          <p className="text-purple-300 text-sm tracking-[0.3em] uppercase mb-6">Spirituality</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Inner Peace Through
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 transition-all duration-500">
              {practices[currentPractice]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-4 italic">
            &quot;Stillness is a practice. When breath, sound, and awareness align, 
            the nervous system calms and the mind returns to clarity.&quot;
          </p>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Sacred, modern, non-dogmatic spiritual practices designed to reconnect you 
            with purpose, peace, and presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Begin Your Journey
            </Link>
            <Link
              href="#offerings"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Explore Practices
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950/50 to-purple-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-[0.2em] uppercase mb-4">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Spiritual Philosophy</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We believe conscious wellness integrates the spirit, not just the body. 
              Our practices honor multiple traditions and invite exploration without dogma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/60 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="py-20 px-4 bg-purple-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-[0.2em] uppercase mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sacred Practices</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer) => (
              <div
                key={offer.title}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{offer.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{offer.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {offer.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Join a Session <ArrowRightIcon size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-950/30 to-indigo-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/10 backdrop-blur border border-purple-500/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Beyond the Techniques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'How breathwork regulates the nervous system',
                'How sound and mantra influence emotional stability',
                'How consistent practice builds resilience and clarity',
                'How meditation rewires the brain for calm',
                'How group energy amplifies individual practice',
                'How ancient wisdom applies to modern stress',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 px-4 bg-indigo-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-[0.2em] uppercase mb-4">Programs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Workshops & Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop) => (
              <div
                key={workshop.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{workshop.name}</h3>
                <p className="text-sm text-white/60">{workshop.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/50 mt-8 text-sm">
            Programs evolve with the season. Reach out for the latest schedule.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950/50 to-purple-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-[0.2em] uppercase mb-4">Transformations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Inner Journeys</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-purple-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Note */}
      <section className="py-20 px-4 bg-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              For All Backgrounds
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Whether you&apos;re exploring spirituality for the first time or deepening existing practices, 
              FLM welcomes you. Our practices are designed to meet you where you are and support 
              your unique journey inward.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Inner Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our sacred community and discover practices that bring lasting peace, 
            clarity, and connection to your daily life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Register for a Session
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Spirituality%20Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact to Know More
            </a>
          </div>
          
          <p className="text-sm text-white/70 mt-6">
            Payment Options: Zelle • Venmo • Bank Transfer
          </p>
        </div>
      </section>
    </main>
  );
}
