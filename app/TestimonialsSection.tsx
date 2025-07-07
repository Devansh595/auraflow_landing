'use client';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialCard from './TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'AuraFlow has completely changed the way I meditate. The personalized soundscapes are incredible!',
    author: 'Jane Doe',
    title: 'Mindfulness Coach',
    avatarSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'The real-time focus tracking keeps me motivated and aware during every session.',
    author: 'John Smith',
    title: 'Productivity Enthusiast',
    avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Syncing across all my devices is seamless. I love how AuraFlow fits into my daily routine.',
    author: 'Emily Chen',
    title: 'Tech Entrepreneur',
    avatarSrc: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export default function TestimonialsSection() {
  const testimonialsGridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!testimonialsGridRef.current) return;
      gsap.from(testimonialsGridRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: testimonialsGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          // markers: true, // Removed for production
        },
      });
    }, testimonialsGridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-800 to-indigo-900 py-16 sm:py-20 md:py-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12">What Our Users Say</h2>
      <div
        ref={testimonialsGridRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
} 