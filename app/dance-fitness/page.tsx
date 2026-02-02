'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CheckIcon, ArrowRightIcon, StarIcon } from '../components/icons';

const danceStyles = ['BOLLYWOOD', 'BHANGRA', 'HIP HOP', 'FREESTYLE', 'CARDIO'];

const offerings = [
  {
    title: 'Bollywood Dance',
    description: 'Vibrant choreography blending traditional grace with modern Bollywood energy. Express stories through movement.',
    benefits: ['Cardio fitness', 'Cultural expression', 'Coordination', 'Group energy'],
    image: '/images/23.JPG',
  },
  {
    title: 'Bhangra & Folk',
    description: 'High-energy Punjabi folk movements that boost cardiovascular health and coordination while celebrating culture.',
    benefits: ['High-intensity cardio', 'Core strength', 'Cultural connection', 'Joy & energy'],
    image: '/images/Dance%20to%20Smile_Fitness%20Classes.jpg',
  },
  {
    title: 'Hip Hop & Freestyle',
    description: 'Urban dance styles for creative expression, building confidence and developing your unique movement vocabulary.',
    benefits: ['Creative freedom', 'Body awareness', 'Confidence', 'Style development'],
    image: '/images/4.JPG',
  },
  {
    title: 'Dance Fitness',
    description: 'Full-body cardio sessions that make fitness fun, sustainable, and accessible for all fitness levels.',
    benefits: ['Weight management', 'Endurance', 'Mental clarity', 'Stress relief'],
    image: '/images/6.JPG',
  },
];

const classFormats = [
  { name: 'Group Classes', desc: 'Weekly sessions with community energy', icon: '👥' },
  { name: 'Private Sessions', desc: 'One-on-one personalized training', icon: '🎯' },
  { name: 'Corporate Wellness', desc: 'Team building through movement', icon: '🏢' },
  { name: 'Kids Programs', desc: 'Age-appropriate fun fitness', icon: '⭐' },
];

const testimonials = [
  {
    quote: "Every session makes me feel stronger, lighter, and more confident in my body. Dr. Reena's energy is contagious!",
    name: 'Priya M.',
    role: 'Dance Fitness Member',
  },
  {
    quote: "I joined for fitness, but stayed for the transformation. The community here is incredibly supportive.",
    name: 'Sarah K.',
    role: 'Bollywood Dance Student',
  },
  {
    quote: "My kids absolutely love the dance classes. They come home energized and happy every single time.",
    name: 'Anjali R.',
    role: 'Parent',
  },
];

export default function DanceFitness() {
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const styleInterval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % danceStyles.length);
    }, 2000);
    return () => clearInterval(styleInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offerings.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {offerings.map((offer, index) => (
          <div
            key={offer.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6">Dance & Fitness</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Move Your Body,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-500">
              {danceStyles[currentStyle]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Movement rewires the brain. Dance activates neurological pathways that improve focus, 
            confidence, emotional regulation, and joy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all"
            >
              Start Your Journey
            </Link>
            <Link
              href="#offerings"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Explore Classes
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

      {/* Science Behind Movement */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">The Science</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Dance Works</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Research shows dance combines physical exercise with cognitive engagement, 
              creating unique neurological benefits no other workout offers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '68%',
                title: 'Stress Reduction',
                desc: 'Dance releases endorphins and reduces cortisol, significantly lowering stress levels.',
              },
              {
                stat: '76%',
                title: 'Memory Improvement',
                desc: 'Learning choreography strengthens neural pathways and improves cognitive function.',
              },
              {
                stat: '82%',
                title: 'Confidence Boost',
                desc: 'Regular dance practice measurably increases self-confidence and body positivity.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-5xl font-bold text-amber-400 mb-4">{item.stat}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Offerings */}
      <section id="offerings" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">Our Classes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Rhythm</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offer) => (
              <div
                key={offer.title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                  <p className="text-white/70 leading-relaxed">{offer.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {offer.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="text-sm px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                  >
                    Join This Class <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Formats */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">Flexible Options</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How You Can Learn</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {classFormats.map((format) => (
              <div
                key={format.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-amber-500/30 transition-all"
              >
                <div className="text-4xl mb-4">{format.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{format.name}</h3>
                <p className="text-sm text-white/60">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 backdrop-blur border border-amber-500/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Beyond Just Dance Moves
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'How rhythm impacts neurological balance and focus',
                'How movement improves emotional regulation',
                'How group dance increases confidence and social connection',
                'How consistent practice builds discipline and resilience',
                'How music and movement together reduce anxiety',
                'How dance creates mind-body awareness',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Community Says</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-amber-400 fill-current" />
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Through Movement?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have discovered the joy of dance fitness. 
            Your first class is a life-changing experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Book Your First Class
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Dance%20Fitness%20Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
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
