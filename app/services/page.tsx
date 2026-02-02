'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CheckIcon, ArrowRightIcon, StarIcon, DanceIcon, FitnessIcon } from '../components/icons';

const serviceTypes = ['TRANSFORM', 'STRENGTHEN', 'ENERGIZE', 'INSPIRE', 'HEAL'];

const mainServices = [
  {
    id: 'dance',
    title: 'Dance Workshops',
    tagline: 'Express yourself through movement',
    description: 'Our dance workshops blend fitness, rhythm, and creative expression. From Bollywood to Bhangra, Hip Hop to freestyle - find your groove and transform your body.',
    formats: [
      { name: 'Corporate Events', desc: 'Team building through dance' },
      { name: 'Schools & Educational', desc: 'Age-appropriate programming' },
      { name: 'Adult Groups', desc: 'Weekly community sessions' },
      { name: 'Kids Programs', desc: 'Fun fitness for children' },
    ],
    benefits: ['Cardio fitness', 'Stress relief', 'Confidence building', 'Social connection'],
    image: '/images/23.JPG',
    color: 'amber',
    icon: '💃',
  },
  {
    id: 'fitness',
    title: 'Fitness Workouts',
    tagline: 'Functional fitness meets mindful movement',
    description: 'Programs designed to build strength, flexibility, and mental clarity. Science-backed approaches that make fitness sustainable and enjoyable.',
    formats: [
      { name: 'Group Classes', desc: 'Community-powered sessions' },
      { name: 'Private Sessions', desc: 'Personalized training plans' },
      { name: 'Corporate Wellness', desc: 'Workplace health programs' },
      { name: 'Online Classes', desc: 'Train from anywhere' },
    ],
    benefits: ['Strength building', 'Flexibility', 'Mental clarity', 'Injury prevention'],
    image: '/images/Dance%20to%20Smile_Fitness%20Classes.jpg',
    color: 'cyan',
    icon: '🏋️',
  },
];

const whyChoose = [
  {
    title: 'Science-Backed',
    desc: 'Programs grounded in movement science and wellness research for real results.',
    icon: '🔬',
  },
  {
    title: 'Founder-Led',
    desc: 'Directly guided by Dr. Reena Sharma\'s expertise and 15+ years of experience.',
    icon: '👩‍⚕️',
  },
  {
    title: 'Scalable',
    desc: 'From personal sessions to corporate programs, we grow with your needs.',
    icon: '📈',
  },
  {
    title: 'Holistic',
    desc: 'Integrating body, mind, and spirit for complete wellness transformation.',
    icon: '🌟',
  },
];

const pricingTiers = [
  {
    name: 'Drop-In',
    price: '$25',
    period: '/class',
    features: ['Single class access', 'Any group session', 'No commitment', 'Pay as you go'],
  },
  {
    name: 'Monthly',
    price: '$150',
    period: '/month',
    features: ['Unlimited group classes', 'Priority booking', 'Member events', 'Community access'],
    popular: true,
  },
  {
    name: 'Private',
    price: '$75',
    period: '/session',
    features: ['One-on-one training', 'Customized program', 'Flexible scheduling', 'Personal attention'],
  },
];

const testimonials = [
  {
    quote: "Dr. Reena's approach to fitness is unlike anything I've experienced. It's not just exercise - it's transformation.",
    name: 'Maya S.',
    role: 'Fitness Member',
  },
  {
    quote: "The corporate workshop energized our entire team. Productivity and morale both went up after that session.",
    name: 'Tech Lead',
    role: 'Corporate Client',
  },
];

export default function ServicesPage() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % serviceTypes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/30 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/Dance%20to%20Smile_Fitness%20Classes.jpg"
            alt="Services background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-blue-950/70 to-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-cyan-300 text-sm tracking-[0.3em] uppercase mb-6">Services</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Physical Fitness &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all duration-500">
              {serviceTypes[currentWord]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
            Transform your body and mind through scientifically-backed movement programs 
            led by Dr. Reena Sharma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/reenasharma/flm-services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Book a Service
            </a>
            <Link
              href="#services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Explore Services
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

      {/* Main Services */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-950/50 to-blue-950/30">
        <div className="max-w-7xl mx-auto">
          {mainServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center mb-24 last:mb-0`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <p className={`text-${service.color}-400 text-sm tracking-[0.2em] uppercase mb-2`}>
                    {service.tagline}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h2>
                </div>
                
                <p className="text-lg text-white/70 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {service.formats.map((format) => (
                    <div
                      key={format.name}
                      className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4"
                    >
                      <h4 className="font-semibold text-white mb-1">{format.name}</h4>
                      <p className="text-sm text-white/60">{format.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className={`text-sm px-4 py-2 rounded-full bg-${service.color}-500/20 text-${service.color}-300 border border-${service.color}-500/30`}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <a
                  href="https://calendly.com/reenasharma/flm-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all`}
                >
                  Book {service.title.split(' ')[0]} <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-blue-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-[0.2em] uppercase mb-4">Why FLM</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose FLM Services?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/30 to-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-[0.2em] uppercase mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Flexible Options</h2>
            <p className="text-white/60">Choose what works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-gradient-to-br rounded-3xl p-8 transition-all ${
                  tier.popular
                    ? 'from-cyan-500/20 to-blue-500/10 border-2 border-cyan-500/50 scale-105'
                    : 'from-white/10 to-white/5 border border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    BEST VALUE
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
                      <CheckIcon size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://calendly.com/reenasharma/flm-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-full font-semibold text-center transition-all ${
                    tier.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/50 mt-8 text-sm">
            Custom corporate and group packages available. Contact us for details.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-[0.2em] uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">&quot;{testimonial.quote}&quot;</p>
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
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your first session today and experience the FLM difference. 
            Your transformation begins with one decision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/reenasharma/flm-services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all"
            >
              Book a Service Today
            </a>
            <a
              href="mailto:fitnesslifemantra@gmail.com?subject=Service%20Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
