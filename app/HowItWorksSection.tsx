'use client';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HowItWorksStep from './HowItWorksStep';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    stepNumber: 1,
    title: 'Connect & Calibrate',
    description: 'Simply put on AuraFlow and let its AI calibrate to your unique brainwave patterns.',
    iconPath: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=128&q=80',
  },
  {
    stepNumber: 2,
    title: 'Personalized Soundscapes',
    description: 'Experience immersive audio tailored to your current state of mind and focus goals.',
    iconPath: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=128&q=80',
  },
  {
    stepNumber: 3,
    title: 'Track & Grow',
    description: 'Monitor your progress and unlock deeper focus and tranquility over time.',
    iconPath: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=128&q=80',
  },
];

export default function HowItWorksSection() {
  // Best practice: useRef with an array to store refs for each step
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, stepRefs);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12 md:mb-16">
        How AuraFlow Works
      </h2>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {steps.map((step, i) => (
          <div
            key={step.stepNumber}
            ref={el => {
              stepRefs.current[i] = el;
            }}
          >
            <HowItWorksStep {...step} />
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Managing refs for multiple animating children:
 * ----------------------------------------------
 * - Use a single useRef with an array: const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
 * - For each child, assign its ref via a callback: ref={el => (stepRefs.current[i] = el)}
 * - This allows you to access and animate each child individually in useLayoutEffect.
 * - This approach is scalable, avoids unnecessary re-renders, and is idiomatic in React for lists of refs.
 */ 