'use client';

import Link from 'next/link';

export default function DanceFitness() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6">Dance & Fitness</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Move your body. Free your mind. Find your rhythm.
          </p>
          <Link
            href="/book"
            className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition inline-block text-lg"
          >
            Register for a Class
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-playfair text-center mb-16">Our Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Bollywood Dance',
                description: 'Learn iconic Bollywood moves with professional choreography in a fun, inclusive group setting.',
                schedule: 'Mon, Wed, Fri 6-7 PM | Sat 4-5 PM',
                level: 'Beginner to Advanced',
              },
              {
                title: 'Bhangra Dance',
                description: 'Experience the energy of Punjabi folk dance. Perfect for all ages and fitness levels.',
                schedule: 'Tue, Thu 6-7 PM',
                level: 'All Levels',
              },
              {
                title: 'Freestyle & Hip Hop',
                description: 'Express yourself through contemporary urban dance styles with professional instructors.',
                schedule: 'Sat 5-6 PM',
                level: 'Intermediate to Advanced',
              },
              {
                title: 'Dance Fitness Cardio',
                description: 'High-energy dance workouts designed for cardiovascular health and fun.',
                schedule: 'Sun 5-6 PM',
                level: 'Beginner to Intermediate',
              },
            ].map((program, i) => (
              <div key={i} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold font-playfair mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <p><span className="font-semibold">Schedule:</span> {program.schedule}</p>
                  <p><span className="font-semibold">Level:</span> {program.level}</p>
                </div>
                <Link href="/book" className="text-black font-semibold hover:opacity-70 transition">
                  Register Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-playfair text-center mb-16">Weekly Schedule</h2>

          <div className="bg-white rounded-lg overflow-hidden shadow">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-6 py-4 text-left font-semibold">Time</th>
                  <th className="px-6 py-4 text-left font-semibold">Monday</th>
                  <th className="px-6 py-4 text-left font-semibold">Tuesday</th>
                  <th className="px-6 py-4 text-left font-semibold">Wednesday</th>
                  <th className="px-6 py-4 text-left font-semibold">Thursday</th>
                  <th className="px-6 py-4 text-left font-semibold">Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">6:00 PM</td>
                  <td className="px-6 py-4">Bollywood</td>
                  <td className="px-6 py-4">Bhangra</td>
                  <td className="px-6 py-4">Bollywood</td>
                  <td className="px-6 py-4">Bhangra</td>
                  <td className="px-6 py-4">Bollywood</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">7:00 PM</td>
                  <td className="px-6 py-4">Hip Hop</td>
                  <td className="px-6 py-4">Cardio</td>
                  <td className="px-6 py-4">Hip Hop</td>
                  <td className="px-6 py-4">Cardio</td>
                  <td className="px-6 py-4">Hip Hop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-playfair mb-6">Ready to Dance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of dancers and fitness enthusiasts. Your first class is free!
          </p>
          <Link
            href="/book"
            className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition inline-block text-lg"
          >
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
