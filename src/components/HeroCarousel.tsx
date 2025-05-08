
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TestTube, Home, Dna } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
  features: string[];
  ctaText: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Advanced Patient Testing Services",
    description: "State-of-the-art laboratory diagnostics with quick and accurate results",
    image: "/lovable-uploads/ec844625-a188-4765-b40f-394b827d767f.png",
    alt: "DNA molecules with blue and green beads",
    icon: <TestTube className="h-6 w-6" />,
    features: ["Comprehensive Blood Work", "Rapid COVID-19 Testing", "Allergy & Sensitivity Panels"],
    ctaText: "Schedule Test"
  },
  {
    id: 2,
    title: "Convenient Home Testing Kits",
    description: "Medical-grade testing from the comfort of your home with easy-to-follow instructions",
    image: "/lovable-uploads/dec3d58b-2a3b-4d0b-8ed0-7857e05901a3.png",
    alt: "Laboratory research with blue gloved hand",
    icon: <Home className="h-6 w-6" />,
    features: ["Self-Collection Instructions", "Pre-paid Return Shipping", "Online Results Portal"],
    ctaText: "Order Kit"
  },
  {
    id: 3,
    title: "Advanced Molecular Testing",
    description: "Cutting-edge DNA and RNA analysis for precise diagnosis and personalized care",
    image: "/lovable-uploads/9e760b05-392b-4d07-96c3-0afccb1cac7c.png",
    alt: "Patient with tissue sneezing",
    icon: <Dna className="h-6 w-6" />,
    features: ["Genetic Predisposition Testing", "Pharmacogenomics", "Pathogen Identification"],
    ctaText: "Learn More"
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
                <div className="bg-blue-800/80 rounded-full p-2 text-white">
                  {slide.icon}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {slide.description}
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {slide.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <Button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-6 rounded-md text-lg">
                  {slide.ctaText}
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
