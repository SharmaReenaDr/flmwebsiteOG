import Link from "next/link";

export default function ActingTheatrePage() {
  const sections = [
    {
      id: "acting",
      title: "Acting & Performance",
      description: "Talent representation, casting, and professional development for commercials, films, and OTT media.",
      services: ["Commercial & Ad Casting", "Film & OTT Collaborations", "Performance Coaching", "Professional Development"],
      cta: "Inquire About Projects",
    },
    {
      id: "theatre",
      title: "Theatre & Expression",
      description: "Stage performances, theatrical workshops, and creative movement experiences for performers and audiences.",
      services: ["Stage Productions", "Theatre Workshops", "Expression-Based Movement", "Creative Collaborations"],
      cta: "Explore Theatre",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">Acting & Theatre</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Creative Expression & Performance</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          Professional talent representation, performance coaching, and theatrical experiences led by Dr. Reena Sharma.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="section-card rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-900">{section.title}</h2>
              <p className="text-ink-500 leading-relaxed">{section.description}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-ink-700 uppercase">Services & Opportunities</p>
              <ul className="space-y-2">
                {section.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">✓</span>
                    <span className="text-ink-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/register"
              className="button-primary block text-center px-4 py-3 rounded-full font-semibold"
            >
              {section.cta}
            </Link>
          </div>
        ))}
      </div>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">For Collaborators & Casting Teams</h2>
        <p className="text-ink-500 leading-relaxed">
          If you're a director, producer, or brand looking for talented performers with a unique blend of professional training, spiritual awareness, and creative depth, let's connect.
        </p>
        <div className="flex gap-3">
          <a
            href="mailto:hello@fitnesslifemantra.com?subject=Acting%20Collaboration"
            className="button-primary px-4 py-2 rounded-full text-sm font-semibold"
          >
            Email About Collaboration
          </a>
          <a
            href="https://calendly.com/reenasharma/flm-acting"
            target="_blank"
            rel="noopener noreferrer"
            className="button-ghost px-4 py-2 rounded-full text-sm font-semibold"
          >
            Schedule a Meeting
          </a>
        </div>
      </section>

      <div className="text-center space-y-3">
        <p className="text-ink-500">Ready to create something meaningful?</p>
        <a
          href="https://calendly.com/reenasharma/flm-acting"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-block px-6 py-3 rounded-full font-semibold"
        >
          Let's Collaborate
        </a>
      </div>
    </main>
  );
}
