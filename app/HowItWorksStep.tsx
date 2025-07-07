'use client';
import Image from 'next/image';

interface HowItWorksStepProps {
  stepNumber: number;
  title: string;
  description: string;
  iconPath: string;
}

export default function HowItWorksStep({ stepNumber, title, description, iconPath }: HowItWorksStepProps) {
  return (
    <div className="py-6 sm:py-8 px-4 max-w-xs sm:max-w-md mx-auto text-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg sm:text-xl mb-4 mx-auto">
        {stepNumber}
      </div>
      <div className="relative flex justify-center mb-4">
        {/* Gradient glow behind image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tr from-purple-300 via-blue-200 to-pink-200 opacity-40 blur-2xl rounded-full z-0" />
        <div className="relative bg-white/60 backdrop-blur rounded-2xl shadow-xl p-2 sm:p-4 flex items-center justify-center z-10 transition-transform duration-300 hover:scale-105">
          <Image src={iconPath} alt={title + ' icon'} width={64} height={64} className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-xl" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg">{description}</p>
    </div>
  );
} 