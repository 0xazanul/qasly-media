'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const techImages = [
  {
    src: '/tech/web-dev.jpg',
    alt: 'Web Development',
    title: 'Web Development',
    description: 'Building modern, responsive websites with cutting-edge technologies'
  },
  {
    src: '/tech/ui-ux.jpg',
    alt: 'UI/UX Design',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences'
  },
  {
    src: '/tech/video-editing.jpg',
    alt: 'Video Editing',
    title: 'Video Editing',
    description: 'Professional video production and post-production services'
  },
  {
    src: '/tech/penetration-testing.jpg',
    alt: 'Penetration Testing',
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify vulnerabilities in your web applications and systems'
  }
];

export default function TechShowcase() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % techImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-qasly-dark/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-qasly-dark/80 to-transparent z-10" />
      
      <div className={`relative w-full h-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={techImages[currentImage].src}
          alt={techImages[currentImage].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-2xl font-medium text-qasly-offwhite mb-2">
            {techImages[currentImage].title}
          </h3>
          <p className="text-qasly-gray">
            {techImages[currentImage].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {techImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImage(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentImage === index ? 'bg-qasly-primary' : 'bg-qasly-gray/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 