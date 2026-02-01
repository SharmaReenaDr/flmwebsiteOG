import Link from "next/link";

export default function HomePage() {
  const danceStyles = [
    { title: "BOLLYWOOD", href: "/dance-fitness" },
    { title: "ODISSI (INDIAN CLASSICAL)", href: "/dance-fitness" },
    { title: "CONTEMPORARY", href: "/dance-fitness" },
    { title: "HIP HOP", href: "/dance-fitness" },
    { title: "FOLK", href: "/dance-fitness" }
  ];

  return (
    <main className="w-full bg-white text-gray-900">
      {/* ============ TOP BANNER ============ */}
      <div className="bg-pink-500 text-white py-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Spring Festival at Grandscape</h2>
        <div className="flex gap-4 justify-center mt-4">
          <Link href="/register" className="px-8 py-3 bg-white text-pink-500 font-bold rounded hover:bg-gray-100">
            BOOK YOUR TRIAL CLASS
          </Link>
          <Link href="/about" className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10">
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* ============ DANCE STYLES HERO ============ */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {danceStyles.map((style, idx) => (
              <Link
                key={idx}
                href={style.href}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-800">{style.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED CLASSES ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Bollywood Classes */}
          <div className="text-center">
            <p className="text-pink-500 font-semibold mb-2">ALL AGE GROUPS</p>
            <h3 className="text-3xl font-bold mb-2">in person Bollywood Classes</h3>
            <p className="text-xl text-gray-600 mb-4">KIDS, YOUTH & ADULTS</p>
            <Link href="/register" className="inline-block px-8 py-3 bg-pink-500 text-white font-bold rounded hover:bg-pink-600">
              REGISTER NOW
            </Link>
          </div>

          {/* Odissi Classes */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Odissi Classical Dance Classes</h3>
            <p className="text-xl text-gray-600 mb-2">All Age Groups - Boys & Girls</p>
            <p className="text-pink-500 font-semibold mb-4">BEGINNERS & ADVANCED</p>
            <Link href="/register" className="inline-block px-8 py-3 bg-pink-500 text-white font-bold rounded hover:bg-pink-600">
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STUDENT PERFORMANCE ============ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Students Performance series</h2>
          <p className="text-2xl text-pink-500 font-bold">1Million+ Views on Youtube</p>
        </div>
      </section>

      {/* ============ LEARNING PATHS ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Dance Programs</h2>
            <p className="text-xl text-gray-600 italic">&ldquo;It is never too late to get started. Learning Paths applies to all age groups.&rdquo;</p>
          </div>

          {/* Beginner Level */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Beginner (Level 100)</h3>
            <p className="text-center text-xl mb-8">Learning Paths</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {danceStyles.map((style, idx) => (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-bold">{style.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate Level */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Intermediate (Level 200)</h3>
            <p className="text-center text-xl mb-8">Dance Styles</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {danceStyles.map((style, idx) => (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-bold">{style.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center py-8 bg-pink-50 rounded-lg mb-16">
            <h3 className="text-3xl font-bold">500+ Students Trust Adrija Dance ACADEMY</h3>
          </div>

          {/* Advanced Level */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Advanced or Professional (Level 400)</h3>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Cost Structure</h2>
          <p className="text-xl mb-8">Select your state</p>
          <div className="flex gap-4 justify-center">
            <Link href="/pricing" className="px-12 py-4 bg-white border-2 border-pink-500 text-pink-500 font-bold rounded hover:bg-pink-500 hover:text-white">
              OHIO
            </Link>
            <Link href="/pricing" className="px-12 py-4 bg-white border-2 border-pink-500 text-pink-500 font-bold rounded hover:bg-pink-500 hover:text-white">
              ARKANSAS
            </Link>
            <Link href="/pricing" className="px-12 py-4 bg-white border-2 border-pink-500 text-pink-500 font-bold rounded hover:bg-pink-500 hover:text-white">
              TEXAS
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TRIAL CLASS REGISTRATION ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Trial Class Registration</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">REGISTRATION FORM</h3>
            <p className="mb-6">To register, please take the time to fill out the information below.</p>
            <form className="space-y-4">
              <input type="text" placeholder="First Name *" className="w-full px-4 py-3 border rounded" required />
              <input type="text" placeholder="Last Name *" className="w-full px-4 py-3 border rounded" required />
              <input type="email" placeholder="Email *" className="w-full px-4 py-3 border rounded" required />
              <input type="tel" placeholder="Phone *" className="w-full px-4 py-3 border rounded" required />
              <input type="text" placeholder="Student Name *" className="w-full px-4 py-3 border rounded" required />
              <input type="text" placeholder="Location *" className="w-full px-4 py-3 border rounded" required />
              <button type="submit" className="w-full px-8 py-3 bg-pink-500 text-white font-bold rounded hover:bg-pink-600">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE THE DIFFERENCE ============ */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience the Difference</h2>
          <h3 className="text-2xl mb-8">Kick Start your Journey with Adrija Dance Academy</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {danceStyles.map((style, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded shadow">
                <p className="font-bold text-sm">{style.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR PROMISE ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Promise</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Experience the difference in teaching. I provide 1:1 attention to all the students of Adrija Dance Academy and invest my time in their success as they progress through my learning paths.
            </p>
            <p>
              I pay close attention to expressions, stage presence and provide summary videos of every class you attend.
            </p>
            <p>
              Students are prepared for performances on stage and in front of camera on our professional video series called, Student Performance Series. I do conduct annual recitals to showcase my students work to the world.
            </p>
            <p className="font-semibold">
              Teaching dance is my passion. Take a trial class to experience world class teaching.
            </p>
            <p>
              Thank you parents and students in trusting in me.
            </p>
          </div>
          <p className="text-center text-2xl font-bold mt-12 italic">
            I want to create the best dance academy for our Indian Kids right here in the USA.
          </p>
          <p className="text-center text-xl mt-4">- Adrija Datta</p>
        </div>
      </section>

      {/* ============ CONTACT FORM ============ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center mb-8">
            For special choreography, events, videography Request and promotions, please fill in the below form. For new enrollment questions, feel free to contact 919-641-9799
          </p>
          <form className="bg-white p-8 rounded-lg space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <input type="text" placeholder="Location *" className="w-full px-4 py-3 border rounded" required />
            <div>
              <label className="block mb-2 font-semibold">Student Age Required</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="age" value="4-8yrs" className="mr-2" />
                  4-8yrs
                </label>
                <label className="flex items-center">
                  <input type="radio" name="age" value="9-15yrs" className="mr-2" />
                  9-15yrs
                </label>
                <label className="flex items-center">
                  <input type="radio" name="age" value="15+yrs" className="mr-2" />
                  15+yrs
                </label>
              </div>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-pink-500 text-white font-bold rounded hover:bg-pink-600">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ============ ABOUT US ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Adrija Datta, is the Founder and Artistic Director of Adrija Dance Academy. She brings to you her passions for experiencing beautiful elements of life through dance, and unparalleled quality of professional training. Adrija has obtained over 15 years of dedicated formal training in Odissi from eminent Classical Dance gurus - Smt. Manjushree Banerjee, Smt. Jhelum Paranjape, and Smt. Rajnita Mehra. Her credibility as a performer and a teacher is further fortified by her taalim from the Mohapatras – the founding family of Odissi dance form in modern India.
            </p>
            <p>
              She has always been a force to reckon with, with a constant urge to learn more and push her limits. Adrija trained for 4 years in Contemporary dance style, from the very renowned and India&apos;s highest ranked dance institute of The Terence Lewis Contemporary Dance Company. This has honed her skills of dramatic visualization, and the ability to marry art and story-telling to transform beautifully composed scripts into brilliance on stage.
            </p>
            <p>
              Adrjia has been honored by many prestigious awards in the field of Performing Arts (Dance), for her artistic merit, creativity in presentation, and robust technical background. She has been performing for 12 years in India and internationally, for exceptionally noble causes and multiple extraordinary platforms (National Centre for Performing Arts, Defense Research and Development Organization, State Farm Arena - Atlanta Basketball stadium, Walton Arts Center etc., to name a few).
            </p>
            <p>
              At Adrija&apos;s Dance Academy, I have a passion for helping others discover their inner dancer. Are you ready to get up and move? Contact me today to learn more about our studio.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Adrija Dance Academy</h3>
              <p className="mb-2">Bentonville, USA</p>
              <p className="mb-2">Email: adrija.dance.academy@gmail.com</p>
              <p>Phone: 814-883-1000</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Additional Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-pink-400">About Us</Link></li>
                <li><Link href="/terms" className="hover:text-pink-400">Terms and Conditions</Link></li>
                <li><Link href="/pricing" className="hover:text-pink-400">Pricing & Payment</Link></li>
                <li><Link href="/register" className="hover:text-pink-400">Trial Class</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com" className="hover:text-pink-400">Instagram</a>
                <a href="https://facebook.com" className="hover:text-pink-400">Facebook</a>
                <a href="https://youtube.com" className="hover:text-pink-400">YouTube</a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p>© 2026 Adrija Dance Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
