'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BookPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programType: 'dance-fitness',
    program: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        programType: 'dance-fitness',
        program: '',
        date: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const programs: Record<string, string[]> = {
    'dance-fitness': ['Bollywood Dance', 'Bhangra Dance', 'Freestyle & Hip Hop', 'Dance Fitness Cardio'],
    'performing-arts': ['MC Hosting', 'Acting Workshop', 'Theatre Workshop', 'Event Management'],
    'spirituality': ['Bhajan Sessions', 'Meditation', 'Breathwork', 'Wellness Circle'],
    'corporate': ['Team Building', 'Corporate Event', 'Workshop', 'Consultation'],
  };

  return (
    <div className="pt-20 pb-20 px-4 min-h-screen bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold font-playfair text-center mb-4">Book Your Experience</h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Let's get you started on your transformation journey
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-bold font-playfair mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg mb-4">
              We've received your booking request. Dr. Reena will contact you within 24 hours.
            </p>
            <p className="text-gray-500">Check your email for confirmation details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
            {/* Personal Info */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Program Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Choose Your Program</h3>
              <select
                name="programType"
                value={formData.programType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black mb-4"
              >
                <option value="dance-fitness">Dance & Fitness</option>
                <option value="performing-arts">Performing Arts</option>
                <option value="spirituality">Spirituality & Wellness</option>
                <option value="corporate">Corporate & Events</option>
              </select>

              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black mb-4"
              >
                <option value="">Select a specific program...</option>
                {programs[formData.programType].map((prog) => (
                  <option key={prog} value={prog}>
                    {prog}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
              <textarea
                name="message"
                placeholder="Any questions or special requests?"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded font-semibold hover:bg-gray-800 transition text-lg"
            >
              Complete Booking
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              We'll contact you within 24 hours to confirm your booking.
            </p>
          </form>
        )}

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-black font-semibold hover:opacity-70 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
