'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CheckIcon, ArrowRightIcon, StarIcon, CommunityIcon } from '../components/icons';

const communityWords = ['CONNECT', 'GROW', 'CELEBRATE', 'TRANSFORM', 'THRIVE'];

const offerings = [
  {
    title: 'Custom Choreography',
    description: 'Bespoke dance routines crafted for weddings, corporate events, cultural showcases, and special celebrations.',
    benefits: ['Personalized routines', 'Group coordination', 'Performance ready', 'Memorable moments'],
    icon: '💃',
  },
  {
    title: 'Corporate Events',
    description: 'Wellness-forward programming for team building, corporate celebrations, and leadership retreats.',
    benefits: ['Team bonding', 'Stress relief', 'Energy boost', 'Culture building'],
    icon: '🏢',
  },
  {
    title: 'Emcee & Hosting',
    description: 'Professional event hosting with warmth, clarity, and cultural intelligence for any occasion.',
    benefits: ['Engaging presence', 'Crowd connection', 'Smooth flow', 'Memorable experience'],
    icon: '🎤',
  },
  {
    title: 'Community Events',
    description: 'Signature experiences that bring people together through movement, music, and meaningful connection.',
    benefits: ['Social connection', 'Shared joy', 'Cultural celebration', 'Community building'],
    icon: '🎉',
  },
];

const membershipTiers = [
  {
    name: 'Basic',
    price: 'Free',
    period: '',
    features: ['Newsletter & updates', 'Community event access', 'Social media connection', 'General announcements'],
    highlight: false,
  },
  {
    name: 'Plus',
    price: '$12',
    period: '/month',
    features: ['Everything in Basic', 'Exclusive sessions', 'Early access to events', 'Member-only content', 'Discount on workshops'],
    highlight: true,
  },
  {
    name: 'Founder',
    price: '$25',
    period: '/month',
    features: ['Everything in Plus', 'Direct access to Dr. Reena', 'Private community calls', 'First access to products', 'Special recognition'],
    highlight: false,
  },
];

const values = [
  {
    title: 'Inclusive',
    desc: 'All bodies, all backgrounds, all beliefs welcome. No judgment, just growth.',
    icon: '🌍',
  },
  {
    title: 'Authentic',
    desc: 'Grounded in real experience, not performative wellness. What you see is what you get.',
    icon: '💎',
  },
  {
    title: 'Supportive',
    desc: 'We lift each other up without comparison. Your wins are our wins.',
    icon: '🤝',
  },
  {
    title: 'Growth-Focused',
    desc: 'Committed to continuous evolution. Better today than yesterday.',
    icon: '🌱',
  },
];

const testimonials = [
  {
    quote: "Being part of this community has transformed not just my fitness, but my entire outlook on life. The support here is incredible.",
    name: 'Anita K.',
    role: 'Plus Member',
  },
  {
    quote: "The corporate event Dr. Reena organized for our team was the highlight of our year. Energy, fun, and real connection.",
    name: 'HR Director',
    role: 'Tech Company',
  },
  {
    quote: "Our wedding choreography was beyond perfect. She understood our vision and made it unforgettable for everyone.",
    name: 'Priya & Raj',
    role: 'Wedding Clients',
  },
];

const whyJoin = [
  'Exclusive session discounts and early access',
  'Monthly community events & online gatherings',
  'Curated content (insights, practices, stories)',
  'Direct access to Dr. Reena Sharma',
  'Membership newsletter with seasonal updates',
  'Special product pre-orders and beta access',
];

export default function CommunityPage() {
  const [currentWord, setCurrentWord] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % communityWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <CommunityIcon size={64} className="mx-auto text-emerald-400 opacity-80" />
          </div>
          
          <p className="text-emerald-300 text-sm tracking-[0.3em] uppercase mb-6">Community & Events</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Join the Movement,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 transition-all duration-500">
              {communityWords[currentWord]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-4 italic">
            &quot;Community transforms energy. When people gather with purpose, confidence rises, 
            stories connect, and impact multiplies.&quot;
          </p>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Build lasting connections with wellness seekers, creatives, and purpose-driven 
            leaders from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
            >
              Join the Community
            </Link>
            <Link
              href="#membership"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Membership
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

      {/* Why Join */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-950/50 to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Member Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Join?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <CheckIcon size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-teal-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Event Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offer) => (
              <div
                key={offer.title}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{offer.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{offer.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {offer.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                >
                  Inquire Now <ArrowRightIcon size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-950/30 to-emerald-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="py-20 px-4 bg-emerald-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Membership</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Level</h2>
            <p className="text-white/60">Coming Soon - Be first to know when membership opens</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-gradient-to-br rounded-3xl p-8 transition-all ${
                  tier.highlight
                    ? 'from-emerald-500/20 to-teal-500/10 border-2 border-emerald-500/50 scale-105'
                    : 'from-white/10 to-white/5 border border-white/10'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-white/50">{tier.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-white/70">
                      <CheckIcon size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    tier.highlight
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-950/50 to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Community Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Members Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-emerald-400 fill-current" />
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

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-teal-950/30">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 backdrop-blur border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Connected
            </h2>
            <p className="text-white/70 mb-8">
              Subscribe to the FLM newsletter for updates, exclusive content, and community invitations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Be Part of Something Meaningful?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of wellness seekers, creatives, and purpose-driven individuals. 
            Your journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Start Your FLM Journey
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Community%20and%20Events%20Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Corporate & Event Inquiry
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
