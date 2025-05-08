
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">ETMH</span>
          </div>
          {!isMobile && <span className="font-semibold text-lg text-gray-800">HealthCare</span>}
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Wellness Guide</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">About Us</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Contact us</a>
        </nav>
        
        <Button variant="default" className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
