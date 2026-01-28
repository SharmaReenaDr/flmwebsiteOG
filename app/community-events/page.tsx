import Link from "next/link";

export default function CommunityEventsPage() {
  const upcomingEvents = [
    {
      date: "Feb 8, 2026",
      title: "Dance & Fitness Workshop",
      location: "NYC, USA",
      desc: "Join us for a high-energy dance fitness session with live music"
    },
    {
      date: "Feb 15, 2026",
      title: "Bhajan Clubbing Circle",
      location: "Virtual (Global)",
      desc: "Group singing circles connecting spiritual seekers worldwide"
    },
    {
      date: "Feb 22, 2026",
      title: "Acting & Theatre Workshop",
      location: "Los Angeles, USA",
      desc: "Explore your creative expression through performance art"
    },
    {
      date: "Mar 1, 2026",
      title: "Meditation & Breathing Retreat",
      location: "Asheville, NC",
      desc: "3-day immersive retreat for inner peace and spiritual growth"
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="py-20 md:py-28 px-4 text-center space-y-8 max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          <div className="text-6xl md:text-7xl">🎉</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white">
            Community & Events
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Join our global wellness community
          </p>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Upcoming Events</h2>
          <p className="text-lg text-white/75">Connect, learn, and grow with our community</p>
        </div>
        
        <div className="space-y-4">
          {upcomingEvents.map((event, idx) => (
            <div 
              key={idx}
              className="section-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-2xl transition-all"
            >
              <div className="flex-1 space-y-2">
                <div className="text-sm font-semibold text-blue-400 uppercase">{event.date}</div>
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                <p className="text-white/80">{event.desc}</p>
                <div className="text-sm text-white/60">📍 {event.location}</div>
              </div>
              <Link 
                href="/register" 
                className="button-primary px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap"
              >
                Register
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN OUR COMMUNITY? */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="section-card rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Join Our Community?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Connection</h3>
              <p className="text-white/80 leading-relaxed">
                Meet like-minded wellness seekers who share your passion for conscious living, movement, and spiritual growth.
              </p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ Global community of practitioners</li>
                <li>✓ Local workshops and gatherings</li>
                <li>✓ Online group sessions</li>
                <li>✓ Founder-led experiences</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Growth</h3>
              <p className="text-white/80 leading-relaxed">
                Access exclusive workshops, retreats, and masterclasses to deepen your practice and accelerate your growth.
              </p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ Advanced workshops</li>
                <li>✓ Seasonal retreats</li>
                <li>✓ Mentorship opportunities</li>
                <li>✓ Exclusive discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS GALLERY */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center space-y-4 mb-12">
          <p className="section-heading">COMMUNITY IN ACTION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Gallery</h2>
          <p className="text-lg text-white/75">See our thriving community in action</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Dance Workshop NYC", emoji: "💃" },
            { title: "Bhajan Circle", emoji: "🎵" },
            { title: "Theatre Performance", emoji: "🎭" },
            { title: "Meditation Retreat", emoji: "🧘" },
            { title: "Community Gathering", emoji: "🤝" },
            { title: "Spiritual Awakening", emoji: "✨" },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="section-card rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-2xl transition-all h-56"
            >
              <div className="text-6xl">{item.emoji}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-white/75">
            Be part of a global movement for conscious wellness
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/register" 
            className="button-primary px-8 py-4 rounded-full text-base font-semibold"
          >
            Join Now
          </Link>
          <Link 
            href="/" 
            className="button-ghost px-8 py-4 rounded-full text-base font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
