'use client';
import FeatureItem from './FeatureItem';

export default function FeaturesSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Decorative SVG blob background */}
      <svg className="absolute -top-32 -left-32 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] opacity-20 z-0" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="300" cy="300" rx="300" ry="300" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.7" />
          </radialGradient>
        </defs>
      </svg>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-6 drop-shadow-lg">Discover AuraFlow&apos;s Core Features</h2>
        <p className="text-lg sm:text-xl text-center text-purple-200 mb-10 sm:mb-16 md:mb-20 max-w-2xl mx-auto">Experience the next generation of AI-powered meditation and focus tools, designed to elevate your mind and well-being.</p>
        <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
          <FeatureItem
            title="Personalized Soundscapes"
            description="AuraFlow creates unique audio experiences tailored to your brain activity."
            imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          />
          <FeatureItem
            title="Real-Time Focus Tracking"
            description="Monitor your focus and relaxation levels with real-time feedback."
            imageSrc="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=128&q=80"
            reverseOrder
          />
          <FeatureItem
            title="Seamless Device Sync"
            description="Sync your meditation sessions and progress across all your devices."
            imageSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
} 