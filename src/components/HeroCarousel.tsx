
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "We Provide Total Health Care Solutions",
    description: "Experience comprehensive healthcare services tailored to your needs",
    image: "/lovable-uploads/ec844625-a188-4765-b40f-394b827d767f.png",
    alt: "DNA molecules with blue and green beads"
  },
  {
    id: 2,
    title: "Advanced Medical Testing & Diagnostics",
    description: "State-of-the-art laboratory services for accurate results",
    image: "/lovable-uploads/dec3d58b-2a3b-4d0b-8ed0-7857e05901a3.png",
    alt: "Laboratory research with blue gloved hand"
  },
  {
    id: 3,
    title: "Personalized Patient Care",
    description: "Compassionate treatment with your health and comfort in mind",
    image: "/lovable-uploads/9e760b05-392b-4d07-96c3-0afccb1cac7c.png",
    alt: "Patient with tissue sneezing"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[calc(100vh-76px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="h-1 w-12 bg-yellow-400"></span>
                <p className="text-white font-medium">We</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {slide.description}
              </p>
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <Button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-6 rounded-md text-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="object-cover w-full h-full" 
          />
        </div>
      ))}
      
      <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={cn(
              "w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold transition-all",
              idx === currentSlide ? "bg-blue-700 border-blue-700" : "bg-transparent hover:bg-blue-700/50"
            )}
          >
            0{idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
