
import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="marble-bg">
        <TopBar />
        <Header />
        <HeroCarousel />
      </div>
    </div>
  );
};

export default Index;
