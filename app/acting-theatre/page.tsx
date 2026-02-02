'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CheckIcon, ArrowRightIcon, StarIcon, TheatreIcon } from '../components/icons';

const performanceTypes = ['ACTING', 'THEATRE', 'MIME', 'VOICE', 'EXPRESSION'];

const offerings = [
  {
    title: 'Talent Representation',
    description: 'Professional casting support and guidance for commercial, film, and OTT opportunities. We connect trained performers with industry opportunities.',
    benefits: ['Industry connections', 'Casting support', 'Portfolio building', 'Professional guidance'],
    icon: '🎬',
  },
  {
    title: 'Performance Coaching',
    description: 'Stage-ready training in voice projection, movement, presence, and emotional range for actors at all levels.',
    benefits: ['Voice training', 'Body awareness', 'Emotional depth', 'Stage presence'],
    icon: '🎭',
  },
  {
    title: 'Theatre Productions',
    description: 'Concept-to-stage partnerships for theatre, brand storytelling, cultural events, and immersive experiences.',
    benefits: ['Script development', 'Direction', 'Production', 'Audience engagement'],
    icon: '🎪',
  },
  {
    title: 'Mime & Physical Theatre',
    description: 'Precision movement and expression work that refines body control, storytelling without words, and visual impact.',
    benefits: ['Body control', 'Non-verbal storytelling', 'Visual expression', 'Movement precision'],
    icon: '🤹',
  },
];

const forWho = [
  { title: 'Aspiring Actors', desc: 'Start your journey with fundamentals and industry-ready training' },
  { title: 'Working Professionals', desc: 'Enhance presentation, presence, and communication skills' },
  { title: 'Content Creators', desc: 'Develop on-camera confidence and authentic expression' },
  { title: 'Directors & Producers', desc: 'Find trained talent for your next project' },
];

const testimonials = [
  {
    quote: "Her performers show clarity, confidence, and an authentic presence on stage and camera. A true professional.",
    name: 'Casting Director',
    role: 'Mumbai Film Industry',
  },
  {
    quote: "The coaching helped me connect my voice, body, and story with confidence. I booked my first commercial within months.",
    name: 'Rahul M.',
    role: 'Actor',
  },
  {
    quote: "Dr. Reena understands both the artistic and business side of performance. Her guidance is invaluable.",
    name: 'Production House',
    role: 'Brand Partner',
  },
];

const services = [
  { name: 'Audition Prep', desc: 'Camera-ready preparation for commercial and film auditions' },
  { name: 'Voice & Diction', desc: 'Clarity, projection, and authentic vocal presence' },
  { name: 'Movement Training', desc: 'Body awareness, gesture work, and physical expression' },
  { name: 'Script Analysis', desc: 'Character development and scene interpretation' },
];

export default function ActingTheatrePage() {
  const [currentType, setCurrentType] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentType((prev) => (prev + 1) % performanceTypes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-red-950/30 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Spotlight effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <TheatreIcon size={64} className="mx-auto text-red-400 opacity-80" />
          </div>
          
          <p className="text-red-300 text-sm tracking-[0.3em] uppercase mb-6">Acting & Theatre</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Creative Expression,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 transition-all duration-500">
              {performanceTypes[currentType]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-4 italic">
            &quot;Performance is presence. When you train your voice, body, and story, you strengthen 
            confidence, emotional intelligence, and the ability to lead with clarity.&quot;
          </p>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Professional talent representation, performance coaching, and theatrical experiences 
            led by Dr. Reena Sharma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-red-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-red-500/25 transition-all"
            >
              Start Training
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Acting%20Collaboration"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Collaborate With Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950/50 to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm tracking-[0.2em] uppercase mb-4">Who This Is For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Stage Awaits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forWho.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="py-20 px-4 bg-red-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm tracking-[0.2em] uppercase mb-4">Services & Opportunities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offer) => (
              <div
                key={offer.title}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{offer.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{offer.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {offer.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors"
                >
                  Learn More <ArrowRightIcon size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-950/20 to-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm tracking-[0.2em] uppercase mb-4">Training Programs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Coaching Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-red-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-white/60">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-red-500/20 to-amber-500/10 backdrop-blur border border-red-500/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Beyond Just Techniques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'How performance training improves focus and confidence',
                'How storytelling strengthens empathy and communication',
                'How stage work builds emotional regulation and resilience',
                'How presence translates to leadership in any field',
                'How body awareness enhances all communication',
                'How creative expression unlocks personal growth',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950/50 to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm tracking-[0.2em] uppercase mb-4">Industry Voices</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What They Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-red-400 fill-current" />
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

      {/* For Collaborators */}
      <section className="py-20 px-4 bg-red-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              For Collaborators & Casting Teams
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              If you&apos;re a director, producer, or brand looking for talented performers with a unique blend 
              of professional training, spiritual awareness, and creative depth, let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:fitnesslifemantra@gmail.com?subject=Acting%20Collaboration"
                className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Email About Collaboration
              </a>
              <a
                href="https://calendly.com/reenasharma/flm-acting"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Meaningful?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re beginning your performance journey or looking for your next collaboration, 
            we&apos;re here to support your creative vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Register Now
            </Link>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Acting%20and%20Theatre%20Inquiry"
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
