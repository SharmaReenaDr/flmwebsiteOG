'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckIcon, ArrowRightIcon, ProductsIcon } from '../components/icons';

const productCategories = [
  {
    name: 'Wellness & Immunity',
    description: 'Science-backed supplements and wellness products to support your health journey from the inside out.',
    icon: '💊',
    items: ['Immunity boosters', 'Adaptogens', 'Vitamin complexes', 'Digestive support'],
    color: 'green',
  },
  {
    name: 'Herbal Beauty',
    description: 'Natural, ritual-led beauty and skincare essentials crafted with ancient wisdom and modern science.',
    icon: '🌿',
    items: ['Facial serums', 'Body oils', 'Hair care', 'Ritual sets'],
    color: 'rose',
  },
  {
    name: 'Ritual Essentials',
    description: 'Tools and items to deepen your spiritual practice and create sacred space in your daily life.',
    icon: '🕯️',
    items: ['Meditation aids', 'Sacred jewelry', 'Aromatherapy', 'Practice tools'],
    color: 'purple',
  },
  {
    name: 'Movement Gear',
    description: 'Curated fitness and dance essentials designed for comfort, performance, and conscious living.',
    icon: '👟',
    items: ['Yoga accessories', 'Dance wear', 'Fitness tools', 'Eco-friendly mats'],
    color: 'amber',
  },
];

const philosophy = [
  {
    title: 'Effectiveness',
    desc: 'Every product is rigorously tested for real, measurable results.',
    icon: '✓',
  },
  {
    title: 'Purity',
    desc: 'Clean ingredients, transparent sourcing, no harmful additives.',
    icon: '💎',
  },
  {
    title: 'Alignment',
    desc: 'Products that match our values of conscious, holistic wellness.',
    icon: '🎯',
  },
];

const timeline = [
  { phase: 'Phase 1', title: 'Wellness Essentials', date: 'Coming Q2 2026', status: 'upcoming' },
  { phase: 'Phase 2', title: 'Beauty Collection', date: 'Coming Q3 2026', status: 'planned' },
  { phase: 'Phase 3', title: 'Full Product Line', date: 'Coming Q4 2026', status: 'planned' },
];

export default function ProductsPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-950 via-rose-950/30 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <ProductsIcon size={64} className="mx-auto text-rose-400 opacity-80" />
          </div>
          
          <p className="text-rose-300 text-sm tracking-[0.3em] uppercase mb-6">Products</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Conscious Wellness,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
              COMING SOON
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
            Curated wellness and beauty products designed to complement your FLM journey. 
            Thoughtfully sourced, rigorously tested, aligned with our values.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all"
            >
              Join the Waitlist
            </a>
            <Link
              href="#categories"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Preview Products
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

      {/* Product Categories */}
      <section id="categories" className="py-20 px-4 bg-gradient-to-b from-pink-950/50 to-rose-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm tracking-[0.2em] uppercase mb-4">What&apos;s Coming</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Product Categories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <div
                key={category.name}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-rose-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-white/70 leading-relaxed mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/60">
                      <CheckIcon size={14} className="text-rose-400" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 px-4 bg-rose-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm tracking-[0.2em] uppercase mb-4">Our Standards</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Product Philosophy</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Every FLM product is thoughtfully sourced and tested to meet three criteria:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-rose-500/30 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-500/20 flex items-center justify-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-rose-500/20 to-pink-500/10 backdrop-blur border border-rose-500/30 rounded-3xl p-8 text-center">
            <p className="text-lg text-white/80 leading-relaxed">
              We partner only with suppliers who share our commitment to conscious wellness. 
              No shortcuts, no compromises, no products we wouldn&apos;t use ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-950/30 to-pink-950/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm tracking-[0.2em] uppercase mb-4">Timeline</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Launch Roadmap</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={item.phase}
                className={`flex items-center gap-6 bg-white/5 backdrop-blur border rounded-2xl p-6 ${
                  item.status === 'upcoming' ? 'border-rose-500/50' : 'border-white/10'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === 'upcoming' ? 'bg-rose-500' : 'bg-white/10'
                }`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-rose-400 text-sm font-semibold">{item.phase}</p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  item.status === 'upcoming' 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                    : 'bg-white/10 text-white/60'
                }`}>
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section id="waitlist" className="py-20 px-4 bg-pink-950/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/10 backdrop-blur border border-rose-500/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🎁</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Waitlist
            </h2>
            <p className="text-white/70 mb-8">
              Be the first to know when FLM products launch. Get exclusive early-access pricing 
              and special founding member benefits.
            </p>
            
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-green-300 font-semibold">You&apos;re on the list!</p>
                <p className="text-white/60 text-sm mt-2">We&apos;ll notify you when products launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  className="bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition-all"
                >
                  Join Waitlist
                </button>
              </form>
            )}

            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-white/50">
              <span className="flex items-center gap-2">
                <CheckIcon size={14} className="text-rose-400" />
                Early access
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon size={14} className="text-rose-400" />
                Founding member pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon size={14} className="text-rose-400" />
                Exclusive updates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* In the Meantime */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-950/50 to-rose-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            In the Meantime...
          </h2>
          <p className="text-xl text-white/70 mb-8">
            While we prepare our product line, explore our services and spirituality offerings 
            to start your wellness journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/spirituality"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Discover Spirituality <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Follow us on social media for product sneak peeks, wellness tips, 
            and behind-the-scenes content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/fitnesslifemantra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Follow on Instagram
            </a>
            <a
              href="https://youtube.com/@fitnesslifemantra"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
