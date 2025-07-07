'use client';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  // 2. Refs for headline, subheading, and button
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 4. GSAP Animations in useLayoutEffect
  useLayoutEffect(() => {
    // gsap.context ensures animations are scoped to this component and cleaned up on unmount
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0,
      });
      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
    });
    // 5. Cleanup: revert GSAP context on unmount
    return () => ctx.revert();
  }, []);

  // 3. Assign refs to respective elements
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center px-6">
        <h1
          ref={headlineRef}
          className="text-6xl font-extrabold text-white text-center"
        >
          AuraFlow: Your Mind, Amplified
        </h1>
        <p
          ref={subheadingRef}
          className="text-2xl text-gray-300 text-center max-w-3xl mt-4"
        >
          Unlock deeper focus and tranquility with AI-powered meditation.
        </p>
        <button
          ref={buttonRef}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg mt-8 transition-colors"
        >
          Pre-Order Now
        </button>
      </div>
    </section>
  );
}

/**
 * Why use gsap.context for cleanup?
 * ---------------------------------
 * gsap.context() scopes all animations to this component instance, so when the component unmounts,
 * calling ctx.revert() will automatically kill all animations and restore any inline styles GSAP set.
 * This prevents memory leaks and ensures animations don't affect other parts of your app.
 */ 