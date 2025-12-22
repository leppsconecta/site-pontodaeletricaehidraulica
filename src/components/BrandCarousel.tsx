
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrandCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationRef = useRef<HTMLDivElement>(null);

  const brandLogos = [
    {
      name: 'Alumbra',
      imgSrc: '/lovable-uploads/1b7ffe43-19f1-4dbb-8b75-cdf95154db74.png'
    },
    {
      name: 'Amanco',
      imgSrc: '/lovable-uploads/b44fcf83-eb9f-4deb-87b5-37c7b056a66e.png'
    },
    {
      name: 'Sil',
      imgSrc: '/lovable-uploads/3e10cd36-73d5-4647-a283-ce9a2788c729.png'
    },
    {
      name: 'Steck',
      imgSrc: '/lovable-uploads/088ab7e2-bd03-44d2-b79e-9671082be70d.png'
    },
    {
      name: 'Tramontina',
      imgSrc: '/lovable-uploads/fbd82f03-ee5b-41b2-933a-339881bceffb.png'
    },
  ];

  // Create a duplicated array for the scroll animation
  const displayBrands = [...brandLogos, ...brandLogos];
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (dragRef.current) {
      startXRef.current = e.pageX - dragRef.current.offsetLeft;
      scrollLeftRef.current = dragRef.current.scrollLeft;
      dragRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragRef.current) {
      dragRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (dragRef.current) {
      dragRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (dragRef.current) {
      const x = e.pageX - dragRef.current.offsetLeft;
      const walk = (x - startXRef.current) * 2; // Speed multiplier
      dragRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  const goToPreviousBrand = () => {
    setCurrentBrandIndex((prevIndex) => 
      prevIndex === 0 ? brandLogos.length - 1 : prevIndex - 1
    );
  };

  const goToNextBrand = () => {
    setCurrentBrandIndex((prevIndex) => 
      prevIndex === brandLogos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Manual navigation for carousel
  const scrollPrevious = () => {
    if (dragRef.current) {
      dragRef.current.scrollBy({ left: -230, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (dragRef.current) {
      dragRef.current.scrollBy({ left: 230, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer text-center">
              <h2 className="text-3xl font-bold text-center text-brand-darkblue mb-2 hover:text-brand-blue transition-colors">Marcas Parceiras</h2>
              <p className="text-center text-gray-600">Trabalhamos com as melhores marcas do mercado</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">Conheça nossas marcas parceiras</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="bg-brand-lightblue bg-opacity-50 rounded-lg p-8 border border-gray-200 h-[200px] w-full flex items-center justify-center mb-4">
                {brandLogos[currentBrandIndex].imgSrc ? (
                  <img 
                    src={brandLogos[currentBrandIndex].imgSrc} 
                    alt={`${brandLogos[currentBrandIndex].name} logo`} 
                    className="max-w-[220px] max-h-[150px] object-contain"
                  />
                ) : (
                  <p className="text-lg font-semibold text-brand-darkblue text-center">{brandLogos[currentBrandIndex].name}</p>
                )}
              </div>
              <div className="flex items-center justify-center gap-4 mt-2">
                <Button 
                  variant="outline" 
                  onClick={goToPreviousBrand}
                  className="flex items-center justify-center"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span>Anterior</span>
                </Button>
                <p className="font-medium">
                  {currentBrandIndex + 1} / {brandLogos.length}
                </p>
                <Button 
                  variant="outline" 
                  onClick={goToNextBrand}
                  className="flex items-center justify-center"
                >
                  <span>Próximo</span>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="relative w-full group">
        {/* Navigation arrows - only visible on hover or when paused */}
        <button 
          onClick={scrollPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous brand"
        >
          <ChevronLeft className="h-6 w-6 text-brand-darkblue" />
        </button>
        
        <button 
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next brand"
        >
          <ChevronRight className="h-6 w-6 text-brand-darkblue" />
        </button>
        
        <div 
          ref={dragRef}
          className="w-full overflow-hidden cursor-grab scroll-smooth"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div 
            ref={animationRef}
            className="flex transition-all duration-300"
            style={{
              animation: isPaused ? 'none' : 'scroll 15s linear infinite',
              willChange: 'transform' // Performance optimization
            }}
          >
            {displayBrands.map((brand, index) => (
              <div 
                key={index} 
                className="min-w-[220px] flex-shrink-0 mx-6 py-4 transition-all duration-300"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div 
                  className={`bg-brand-lightblue bg-opacity-50 rounded-lg p-4 border border-gray-200 h-[120px] flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg ${isPaused ? 'cursor-pointer' : ''}`}
                >
                  {brand.imgSrc ? (
                    <img 
                      src={brand.imgSrc} 
                      alt={`${brand.name} logo`} 
                      className="max-w-[180px] max-h-[90px] object-contain"
                    />
                  ) : (
                    <p className="text-lg font-semibold text-brand-darkblue text-center">{brand.name}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
