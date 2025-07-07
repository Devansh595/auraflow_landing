'use client';
import { useState } from 'react';

export default function CallToActionSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(email: string) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Here you would typically send the email to your backend or API
  }

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Ready to Experience True Calm?
        </h2>
        <p className="text-xl text-center text-purple-100 max-w-2xl mx-auto mb-12">
          Join the AuraFlow revolution. Pre-order now and receive exclusive launch benefits.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-900 shadow-sm"
            disabled={submitted}
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            disabled={submitted}
          >
            Pre-Order Now
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {submitted && !error && <p className="text-green-600 mt-4 font-semibold">Thank you for signing up! We'll be in touch soon.</p>}
      </div>
    </section>
  );
} 