
import React, { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    // Play sound when component mounts (only once)
    const sound = new Audio('/notification.mp3');
    sound.volume = 0.5;
    sound.play().catch(error => console.log('Audio playback failed:', error));
    
    // Set up the expansion and collapse loop
    const expandTimer = setInterval(() => {
      setIsExpanded(true);
      
      // Schedule collapse after 5 seconds of expansion
      setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
    }, 15000); // Total cycle: 15 seconds (5s expanded + 10s collapsed)
    
    // Initial expansion after a short delay
    setTimeout(() => {
      setIsExpanded(true);
      
      // Initial collapse
      setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
    }, 2000);
    
    return () => {
      clearInterval(expandTimer);
    };
  }, []);
  
  const openWhatsApp = () => {
    window.open("https://wa.me/551144965057", "_blank");
  };

  return (
    <>
    {/* INÍCIO: Botão Flutuante WhatsApp */}
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* The entire clickable area - now a single connected element */}
      <div 
        className="flex items-center cursor-pointer" 
        onClick={openWhatsApp}
        id="whatsapp-flutuante"
        data-tag="whatsapp_flutuante"
        role="button"
        aria-label="Atendimento rápido via WhatsApp"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            openWhatsApp();
          }
        }}
      >
        {/* Sliding text container - connected to the circle */}
        <div 
          className={`bg-[#25D366] text-white py-3 px-4 rounded-full shadow-lg transform transition-all duration-700 ease-in-out ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full w-0 px-0'
          }`}
        >
          <span className="font-medium whitespace-nowrap">
            Atendimento rápido no WhatsApp
          </span>
        </div>
        
        {/* WhatsApp button - now connected to the text */}
        <div 
          className="bg-[#25D366] hover:bg-[#20c25e] text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <img 
            src="/lovable-uploads/7afbd7b3-8b3a-4e5e-93b5-d5c4f279fc2c.png" 
            alt="Ícone WhatsApp" 
            className="w-7 h-7"
          />
        </div>
      </div>
    </div>
    {/* FIM: Botão Flutuante WhatsApp */}
    </>
  );
};

export default WhatsAppButton;
