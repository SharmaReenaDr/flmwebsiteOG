import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "dance",
      title: "Dance Workshops",
      description: "Express yourself through movement. Our dance workshops blend fitness, rhythm, and creative expression for all levels.",
      formats: ["Corporate Events", "Schools & Educational Institutes", "Adult Groups", "Kids Programs"],
      cta: "Book a Workshop",
    },
    {
      id: "fitness",
      title: "Fitness Workouts",
      description: "Functional fitness meets mindful movement. Programs designed to build strength, flexibility, and mental clarity.",
      formats: ["Group Classes", "Private Sessions", "Corporate Wellness", "Online Classes"],
      cta: "Join a Workout",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="text-center space-y-3">
        <p className="section-heading">Services</p>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-ink-900">Physical Fitness & Movement</h1>
        <p className="text-lg text-ink-500 max-w-3xl mx-auto">
          Transform your body and mind through scientifically-backed movement programs led by Dr. Reena Sharma.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="section-card rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-900">{service.title}</h2>
              <p className="text-ink-500 leading-relaxed">{service.description}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-ink-700 uppercase">Available Formats</p>
              <ul className="space-y-2">
                {service.formats.map((format) => (
                  <li key={format} className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">✓</span>
                    <span className="text-ink-700">{format}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://calendly.com/reenasharma/flm-services"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary block text-center px-4 py-3 rounded-full font-semibold"
            >
              {service.cta}
            </a>
          </div>
        ))}
      </div>

      <section className="section-card rounded-3xl p-8 md:p-12 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900">Why Choose FLM Services?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Science-Backed", desc: "Programs grounded in movement science and wellness research." },
            { title: "Founder-Led", desc: "Directly guided by Dr. Reena Sharma's expertise and experience." },
            { title: "Scalable", desc: "From personal sessions to corporate programs, we grow with you." },
          ].map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="font-semibold text-ink-900">{item.title}</h3>
              <p className="text-sm text-ink-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center space-y-3">
        <p className="text-ink-500">Ready to get started?</p>
        <a
          href="https://calendly.com/reenasharma/flm-services"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-block px-6 py-3 rounded-full font-semibold"
        >
          Book a Service Today
        </a>
      </div>
    </main>
  );
}
