"use client";
import { useState } from "react";

export default function PreOrderForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = "Name is required (min 2 characters).";
    }
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    // Simulate submission
    console.log("Pre-order submitted:", form);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(true);
  };

  return (
    <form
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl max-w-xs sm:max-w-md w-full mx-auto px-2 sm:px-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
        Secure Your AuraFlow
      </h2>

      {/* Name */}
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500 placeholder-purple-700 text-sm sm:text-base"
        autoComplete="off"
        placeholder="Your Name"
      />
      {errors.name && (
        <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
      )}

      {/* Email */}
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500 placeholder-purple-700 text-sm sm:text-base"
        autoComplete="off"
        placeholder="you@email.com"
      />
      {errors.email && (
        <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
      )}

      {/* Message */}
      <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Optional Message
      </label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500 placeholder-purple-700 text-sm sm:text-base"
        rows={3}
        placeholder="Optional message..."
      />

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline mt-6 w-full text-base sm:text-lg transition-colors"
      >
        Pre-Order Now
      </button>

      {submitted && (
        <p className="text-green-600 text-center mt-4 font-semibold">
          Thank you for your pre-order! We'll be in touch soon.
        </p>
      )}
    </form>
  );
} 