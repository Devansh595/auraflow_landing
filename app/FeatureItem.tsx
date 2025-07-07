'use client';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureItemProps {
  title: string;
  description: string;
  imageSrc: string;
  reverseOrder?: boolean;
}

export default function FeatureItem({
  title,
  description,
  imageSrc,
  reverseOrder = false,
}: FeatureItemProps) {
  const featureItemRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!featureItemRef.current) return;
      gsap.fromTo(
        featureItemRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureItemRef.current,
            start: 'top 85%',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            // markers: true, // Removed for production
          },
        }
      );
    }, featureItemRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={featureItemRef}
      className={`relative max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 sm:gap-10 md:gap-12 group transition-transform duration-300 hover:scale-[1.025] hover:-translate-y-2 ${
        reverseOrder ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Animated gradient glow behind image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-56 md:w-60 h-40 sm:h-56 md:h-60 bg-gradient-to-tr from-purple-300 via-blue-200 to-pink-200 opacity-40 blur-3xl rounded-full z-0 group-hover:opacity-60 transition-opacity duration-300" />
      <div className="relative w-full md:w-1/2 flex-1 flex justify-center items-center h-full z-10 mx-auto">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-8 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={240}
            height={240}
            className="w-32 sm:w-44 md:w-60 h-32 sm:h-44 md:h-60 object-contain"
          />
        </div>
      </div>
      <div className="relative w-full md:w-1/2 flex-1 flex flex-col justify-center h-full z-10 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">{title}</h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 md:mb-0">{description}</p>
      </div>
    </div>
  );
} 