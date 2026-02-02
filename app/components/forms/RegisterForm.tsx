"use client";

import { useState } from "react";
import Link from "next/link";

type RegisterFormProps = {
  programName: string;
  showPaymentInfo?: boolean;
};

export default function RegisterForm({ programName, showPaymentInfo = true }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentName: "",
    age: "",
    location: "",
    program: programName,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store in localStorage for admin review (temporary)
    const registrations = JSON.parse(localStorage.getItem("flm_registrations") || "[]");
    registrations.push({ ...formData, timestamp: Date.now() });
    localStorage.setItem("flm_registrations", JSON.stringify(registrations));

    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        studentName: "",
        age: "",
        location: "",
        program: programName,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-12 text-center">
        <svg className="w-20 h-20 mx-auto mb-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-3xl font-bold text-white mb-2">Registration Received!</h3>
        <p className="text-white/80 text-lg">
          Thank you for registering for <span className="text-emerald-400 font-semibold">{programName}</span>
        </p>
        <p className="text-white/60 mt-4">
          We'll contact you shortly at <span className="text-cyan-400">{formData.email}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-white/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
      <h3 className="text-3xl font-bold text-white mb-2">Register for {programName}</h3>
      <p className="text-white/60 mb-6">Fill out the form below to get started with your FLM journey</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/80 text-sm font-semibold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm font-semibold mb-2">Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">Student Name *</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
              placeholder="Student's full name"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">Age Group *</label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
            >
              <option value="">Select age group</option>
              <option value="4-8">4-8 years</option>
              <option value="9-15">9-15 years</option>
              <option value="16-25">16-25 years</option>
              <option value="26+">26+ years</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-white/80 text-sm font-semibold mb-2">Location *</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none focus:border-cyan-500 transition-all"
          >
            <option value="">Select location</option>
            <option value="california">California</option>
            <option value="texas">Texas</option>
            <option value="newyork">New York</option>
            <option value="florida">Florida</option>
            <option value="online">Online Classes</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-lg"
        >
          Complete Registration
        </button>

        <p className="text-white/40 text-xs text-center">
          By registering, you agree to our <Link href="/terms" className="text-cyan-400 hover:underline">Terms & Conditions</Link>
        </p>
      </form>

      {showPaymentInfo && (
        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="text-xl font-bold text-white mb-4">Payment Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <svg className="w-12 h-12 mx-auto mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="text-white/80 text-sm">Credit/Debit Card</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <svg className="w-12 h-12 mx-auto mb-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-white/80 text-sm">Bank Transfer</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <svg className="w-12 h-12 mx-auto mb-2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white/80 text-sm">Payment Plans</p>
            </div>
          </div>
          <p className="text-white/60 text-sm text-center">
            Payment details will be shared after registration confirmation
          </p>
        </div>
      )}
    </div>
  );
}
