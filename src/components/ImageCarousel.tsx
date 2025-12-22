
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      imageUrl: '/lovable-uploads/c940c699-d608-4f22-9d44-128ac68c0f7b.png',
      title: 'Materiais e equipamentos de qualidade',
      description: 'As melhores marcas para suas instalações'
    },
    {
      id: 2,
      imageUrl: '/lovable-uploads/54c8c338-3d85-47da-bca7-4aeeff86fb2a.png',
      title: 'Soluções completas',
      description: 'Para projetos residenciais e comerciais'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="relative h-[600px] w-full">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Card className="border-none h-full">
              <CardContent className="p-0 overflow-hidden group h-full">
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10 vignette-effect"></div>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-10 z-20">
                    <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                    <p className="text-xl text-white/90">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
