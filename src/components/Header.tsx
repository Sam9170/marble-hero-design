
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, TestTube, Home, Dna } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "w-full z-50 sticky top-0 transition-all duration-300", 
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm shadow-sm"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center animate-float">
            <span className="text-white font-bold text-lg">ETMH</span>
          </div>
          {!isMobile && <span className="font-semibold text-xl text-blue-800 font-playfair gradient-text">HealthCare</span>}
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className="text-blue-800 font-medium hover:text-blue-600 transition-colors px-4 py-2 block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 font-medium hover:text-blue-600 hover:bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[220px] animate-scale-in">
                  <ul className="p-2 space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all">
                          <TestTube className="h-4 w-4" />
                          <span>Patient Testing</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all">
                          <Home className="h-4 w-4" />
                          <span>Home Testing Kits</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all">
                          <Dna className="h-4 w-4" />
                          <span>Molecular Testing</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors px-4 py-2 block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Wellness Guide
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors px-4 py-2 block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors px-4 py-2 block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Contact us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="default" className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full hidden md:flex btn-shine">
            Sign In
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-blue-800 p-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white absolute w-full left-0 shadow-lg transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-[500px] opacity-100 py-3" : "max-h-0 opacity-0 py-0 overflow-hidden"
      )}>
        <nav className="container px-4 space-y-3 pb-4">
          <a href="/" className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md transition-all">Home</a>
          <div className="pl-3 space-y-2">
            <p className="font-medium text-gray-700 font-playfair">Services:</p>
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
              <TestTube className="h-4 w-4" />
              <span>Patient Testing</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
              <Home className="h-4 w-4" />
              <span>Home Testing Kits</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all">
              <Dna className="h-4 w-4" />
              <span>Molecular Testing</span>
            </a>
          </div>
          <a href="#" className="block px-3 py-2 text-gray-700 font-medium hover:bg-blue-50 rounded-md transition-all">Wellness Guide</a>
          <a href="#" className="block px-3 py-2 text-gray-700 font-medium hover:bg-blue-50 rounded-md transition-all">About Us</a>
          <a href="#" className="block px-3 py-2 text-gray-700 font-medium hover:bg-blue-50 rounded-md transition-all">Contact us</a>
          <div className="pt-2">
            <Button variant="default" className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 w-full rounded-full btn-shine">
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
