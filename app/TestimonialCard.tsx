'use client';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title?: string;
  avatarSrc?: string;
}

export default function TestimonialCard({ quote, author, title, avatarSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 max-w-xs sm:max-w-sm w-full mx-auto">
      <p className="italic text-base sm:text-lg text-gray-700 mb-4">"{quote}"</p>
      <div className="flex items-center mt-4">
        {avatarSrc && (
          <Image
            src={avatarSrc}
            alt={author}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-gray-900 text-sm sm:text-base">{author}</div>
          {title && <div className="text-xs sm:text-sm text-gray-500">{title}</div>}
        </div>
      </div>
    </div>
  );
} 