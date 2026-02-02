import Link from "next/link";
import { CheckIcon, ArrowRightIcon, StarIcon, HeartIcon, CommunityIcon, UserIcon } from "../components/icons";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16 pt-24">
      <header className="text-center space-y-3">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">About</p>
        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900">Fitness Life Mantra</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A movement for conscious wellness that honors the whole person: body, spirit, creativity, and purpose.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 font-playfair">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To build a modern, inclusive, founder-led platform that integrates fitness, spirituality, creative expression, and wellness products—creating a single trusted ecosystem where people can move, heal, express, and grow.
          </p>
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">What We Believe</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><CheckIcon size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Wellness is holistic (body, mind, spirit, creativity)</li>
              <li className="flex items-start gap-2"><CheckIcon size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Authenticity builds trust more than marketing</li>
              <li className="flex items-start gap-2"><CheckIcon size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Founder-led companies create deeper impact</li>
              <li className="flex items-start gap-2"><CheckIcon size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Spirituality can be modern and accessible</li>
              <li className="flex items-start gap-2"><CheckIcon size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Community is essential to wellness</li>
              <li className="flex items-start gap-2"><CheckIcon size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Purpose and profit can coexist</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <UserIcon size={32} className="text-amber-500" />
              <h2 className="text-2xl font-bold text-gray-900 font-playfair">Founder</h2>
            </div>
            <h3 className="text-xl font-semibold text-amber-600">Dr. Reena Sharma</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dr. Reena Sharma is a founder, wellness educator, and creative performer integrating movement science, spiritual practice, and artistic expression into a holistic approach to conscious living.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Background:</strong> Clinical research, movement science, spiritual practices, theatre & performance</p>
              <p><strong>Vision:</strong> Global platform for conscious wellness that honors authenticity, scale, and impact</p>
              <p><strong>Global Reach:</strong> USA & India</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-3">
            <h3 className="font-semibold text-gray-900">Recognition & Media</h3>
            <p className="text-gray-600 text-sm">
              Founder-led, investor-ready, and featured in wellness conversations. Learn more about FLM in the media.
            </p>
            <Link
              href="#"
              className="text-amber-600 text-sm font-semibold inline-flex items-center gap-1 hover:text-amber-700 transition"
            >
              View media & features <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 font-playfair">The FLM Ecosystem</h2>
        <p className="text-gray-600">
          Everything FLM offers flows from a single vision: help people live with more consciousness, purpose, and joy.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { service: "Services", desc: "Dance, fitness, movement, corporate wellness" },
            { service: "Spirituality", desc: "Bhajan, meditation, chanting, inner practice" },
            { service: "Acting", desc: "Performance, casting, creative expression" },
            { service: "Products", desc: "Wellness, beauty, ritual essentials" },
          ].map((item) => (
            <div key={item.service} className="rounded-xl border border-gray-200 bg-white p-6 space-y-2 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">{item.service}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 font-playfair">Why Now?</h2>
        <p className="text-gray-600 leading-relaxed">
          We are in an era where people expect clarity, authenticity, and integration. Generic wellness offerings no longer serve. FLM meets this moment by offering a modern, modular, founder-led platform that respects both tradition and innovation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Modern UX", desc: "Fast booking, clear service categories, mobile-first design" },
            { title: "Authentic Founder", desc: "You know who Dr. Reena is and what she stands for" },
            { title: "Scalable Model", desc: "From 1:1 sessions to corporate events, products, and franchises" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-2">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 font-playfair">Let's Build Together</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you're a user, partner, investor, or collaborator—FLM is designed to evolve with your needs and our community's growth.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://calendly.com/reenasharma/flm-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Start Your Journey <ArrowRightIcon size={16} />
          </a>
          <a
            href="mailto:hello@fitnesslifemantra.com?subject=FLM%20Partnership%20Inquiry"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Let's Talk Partnership
          </a>
        </div>
      </div>
    </main>
  );
}
