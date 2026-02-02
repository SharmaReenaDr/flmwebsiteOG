'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { 
  DanceIcon, 
  TheatreIcon, 
  SpiritualityIcon, 
  CommunityIcon,
  StarIcon,
  HeartIcon,
  ArrowRightIcon,
  EventsIcon,
  CheckIcon,
  PlayIcon,
  QuoteIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
} from './components/icons';

// Program categories similar to Adrija's dance styles
const programs = [
  { name: 'BOLLYWOOD', color: 'from-pink-500 to-rose-600' },
  { name: 'FITNESS', color: 'from-orange-500 to-amber-600' },
  { name: 'YOGA', color: 'from-teal-500 to-emerald-600' },
  { name: 'THEATRE', color: 'from-purple-500 to-violet-600' },
  { name: 'MEDITATION', color: 'from-indigo-500 to-blue-600' },
];

const heroSlides = [
  { type: 'video', src: '/videos/B.MOV', mime: 'video/quicktime' },
  { type: 'video', src: '/videos/IMG_1535.mov', mime: 'video/quicktime' },
];

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProgram, setCurrentProgram] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    const programInterval = setInterval(() => {
      setCurrentProgram((prev) => (prev + 1) % programs.length);
    }, 2500);

    return () => {
      clearInterval(slideInterval);
      clearInterval(programInterval);
    };
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <div className="pt-16">
      {/* Hero Section - Full screen with rotating program names */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Location Badge */}
          <p className="text-lg md:text-xl text-gray-200 mb-4 tracking-wider">
            USA & INDIA
          </p>
          
          {/* Phone */}
          <p className="text-sm text-gray-300 mb-8">
            Questions? Email us at <a href="mailto:fitnesslifemantra@gmail.com" className="underline">fitnesslifemantra@gmail.com</a>
          </p>

          {/* Rotating Program Name */}
          <h1 className="text-5xl md:text-8xl font-bold font-playfair mb-8 min-h-[1.2em]">
            <span className={`inline-block bg-gradient-to-r ${programs[currentProgram].color} bg-clip-text text-transparent transition-all duration-500`}>
              {programs[currentProgram].name}
            </span>
          </h1>

          {/* Program Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {programs.map((program, index) => (
              <span
                key={program.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === currentProgram 
                    ? 'bg-white text-black scale-110' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {program.name}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/80 text-sm uppercase tracking-wider">Upcoming Event</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Spring Wellness Retreat 2026</h2>
          </div>
          <div className="flex gap-4">
            <Link href="/events" className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Learn More
            </Link>
            <Link href="/register" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Trial Class CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">BOOK YOUR TRIAL CLASS</h2>
          <p className="text-xl text-gray-300 mb-8">Experience the FLM difference with a complimentary session</p>
          <Link
            href="/register"
            className="inline-block bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition transform hover:scale-105"
          >
            TRIAL CLASS REGISTRATION
          </Link>
        </div>
      </section>

      {/* Class Offerings Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">ALL AGE GROUPS</h2>
          <p className="text-center text-gray-600 text-lg mb-16">Kids, Youth & Adults Welcome</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dance & Fitness Card */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                src="/images/Dance%20to%20Smile_Fitness%20Classes.jpg" 
                alt="Dance & Fitness"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2">In Person & Online</p>
                <h3 className="text-2xl font-bold text-white mb-2">Dance & Fitness Classes</h3>
                <p className="text-gray-300 text-sm mb-4">KIDS, YOUTH & ADULTS</p>
                <Link href="/dance-fitness" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
                  REGISTER NOW <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>

            {/* Spirituality Card */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                src="/images/23.JPG" 
                alt="Spirituality"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">Weekly Sessions</p>
                <h3 className="text-2xl font-bold text-white mb-2">Spirituality & Meditation</h3>
                <p className="text-gray-300 text-sm mb-4">ALL AGE GROUPS</p>
                <Link href="/spirituality" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
                  REGISTER NOW <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>

            {/* Theatre Card */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                src="/images/4.JPG" 
                alt="Acting & Theatre"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-rose-400 text-sm font-semibold uppercase tracking-wider mb-2">Workshops & Programs</p>
                <h3 className="text-2xl font-bold text-white mb-2">Acting & Theatre</h3>
                <p className="text-gray-300 text-sm mb-4">BEGINNERS & ADVANCED</p>
                <Link href="/acting-theatre" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
                  REGISTER NOW <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Performance / Social Proof */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Our Students Performance Series</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <PlayIcon size={32} className="text-red-600" />
                  <div>
                    <p className="text-3xl font-bold">500+</p>
                    <p className="text-gray-600 text-sm">Happy Students</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Watch our students shine in performances, recitals, and special events. Our teaching methodology focuses on expression, stage presence, and building confidence.
              </p>
              <Link href="/community" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                View Performances <ArrowRightIcon size={16} />
              </Link>
            </div>
            
            {/* Video Embed Placeholder */}
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="/images/Dance%20to%20Smile_Fitness%20Classes.jpg"
                alt="Performance"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <PlayIcon size={32} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-semibold">Student Performance Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths / Programs */}
      <section id="programs" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">Dance Programs</h2>
          <p className="text-center text-gray-600 text-lg mb-4 max-w-2xl mx-auto italic">
            "It is never too late to get started. Learning Paths apply to all age groups."
          </p>
          <p className="text-center text-gray-500 mb-16">- Dr. Reena Sharma</p>

          {/* Level Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Beginner */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-600">100</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Beginner Level</h3>
              <p className="text-gray-600 mb-6">Perfect for those just starting their journey. Learn fundamentals, build confidence, and discover your rhythm.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-emerald-600" /> Basic techniques</li>
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-emerald-600" /> Foundational movements</li>
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-emerald-600" /> Body awareness</li>
              </ul>
            </div>

            {/* Intermediate */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-amber-600">200</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Intermediate Level</h3>
              <p className="text-gray-600 mb-6">Build on your foundation with more complex choreography, expressions, and performance skills.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-amber-600" /> Advanced techniques</li>
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-amber-600" /> Expression training</li>
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-amber-600" /> Performance prep</li>
              </ul>
            </div>

            {/* Advanced */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">400</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced / Professional</h3>
              <p className="text-gray-600 mb-6">Master your craft with professional training, choreography creation, and stage performances.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-purple-600" /> Professional training</li>
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-purple-600" /> Choreography creation</li>
                <li className="flex items-center gap-2"><CheckIcon size={16} className="text-purple-600" /> Stage performances</li>
              </ul>
            </div>
          </div>

          {/* Dance Styles */}
          <h3 className="text-2xl font-bold text-center mb-8">Dance Styles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['BOLLYWOOD', 'CONTEMPORARY', 'CLASSICAL', 'FITNESS', 'FOLK'].map((style) => (
              <span key={style} className="px-6 py-3 bg-gray-100 rounded-full font-semibold text-gray-700 hover:bg-gray-200 transition cursor-pointer">
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-5xl md:text-6xl font-bold mb-2">500+</p>
          <p className="text-xl">Students Trust <span className="font-bold">FITNESS LIFE MANTRA</span></p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Cost Structure</h2>
          <p className="text-gray-600 mb-12">Select your location for pricing details</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="px-8 py-4 bg-gray-100 rounded-xl font-semibold text-lg hover:bg-gray-200 transition">
              USA
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-gray-100 rounded-xl font-semibold text-lg hover:bg-gray-200 transition">
              INDIA
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-gray-100 rounded-xl font-semibold text-lg hover:bg-gray-200 transition">
              ONLINE
            </Link>
          </div>
        </div>
      </section>

      {/* Inline Trial Registration Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Trial Class Registration</h2>
              <p className="text-gray-300 mb-8">
                Ready to start your journey? Fill out the form to register for a complimentary trial class.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckIcon size={20} className="text-green-400" />
                  <span>No obligation trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon size={20} className="text-green-400" />
                  <span>All age groups welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon size={20} className="text-green-400" />
                  <span>Personalized attention</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <h3 className="text-xl font-bold mb-2">REGISTRATION FORM</h3>
              <p className="text-gray-600 text-sm mb-6">Fill out the information below to register.</p>
              
              <form className="space-y-4" action="/register" method="GET">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name *" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    required
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-600">
                  <option value="">Select Program *</option>
                  <option value="dance">Dance & Fitness</option>
                  <option value="spirituality">Spirituality</option>
                  <option value="theatre">Acting & Theatre</option>
                  <option value="corporate">Corporate Events</option>
                </select>
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  Continue →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Experience the Difference</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Kick Start your Journey with Fitness Life Mantra</h3>
            </div>
            <div className="relative">
              <img 
                src="/images/6.JPG" 
                alt="Dr. Reena Sharma"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Our Promise</h3>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Experience the difference in teaching. I provide personalized attention to all students and invest my time in their success as they progress through our learning paths.
              </p>
              <p className="mb-4">
                I pay close attention to expressions, stage presence, and provide guidance in every class you attend.
              </p>
              <p className="mb-4">
                Students are prepared for performances and events. I conduct regular showcases to celebrate our students' growth and achievements.
              </p>
              <p className="mb-6">
                Teaching wellness is my passion. Take a trial class to experience world-class instruction.
              </p>
              <p className="text-lg font-semibold text-black">
                Thank you to all parents and students for trusting in me.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <QuoteIcon size={32} className="text-gray-300" />
              <div>
                <p className="text-xl font-semibold italic text-gray-700">
                  "I want to create the best wellness platform for our community right here in the USA and India."
                </p>
                <p className="text-gray-600 mt-2">- Dr. Reena Sharma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-8">
                For special choreography, events, or partnership inquiries, please fill out the form. For enrollment questions, feel free to email us.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <EmailIcon size={20} className="text-amber-400" />
                  <a href="mailto:fitnesslifemantra@gmail.com" className="hover:text-amber-400 transition">
                    fitnesslifemantra@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <LocationIcon size={20} className="text-amber-400" />
                  <span>USA & India</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-600">
                  <option value="">Location *</option>
                  <option value="usa">USA</option>
                  <option value="india">India</option>
                  <option value="online">Online</option>
                </select>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-600">
                  <option value="">Age Group</option>
                  <option value="4-12">4-12 years</option>
                  <option value="13-18">13-18 years</option>
                  <option value="18+">18+ years</option>
                </select>
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Dr. Reena Sharma is the Founder and Director of Fitness Life Mantra. She brings her passion for experiencing beautiful elements of life through movement, spirituality, and creative expression, combined with unparalleled quality of professional training.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With over 15 years of dedicated experience in dance, wellness, and performing arts, Dr. Reena has developed a unique methodology that integrates physical movement with mental and spiritual well-being.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            At Fitness Life Mantra, we have a passion for helping others discover their inner wellness. Are you ready to transform your life? Contact us today to learn more.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Learn More About Us <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
