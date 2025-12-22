
import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactSection from '@/components/ContactSection';

const Contato = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-6 bg-gradient-to-b from-brand-lightblue/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-darkblue mb-4">Entre em Contato</h1>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-darkblue mb-6 text-center">Horário de Funcionamento</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-lightblue/20 p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-4">Segunda a Sexta</h3>
                <p className="text-lg">07:30 às 18:00</p>
              </div>
              <div className="bg-brand-lightblue/20 p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-4">Sábado</h3>
                <p className="text-lg">07:30 às 13:00</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <h3 className="font-semibold mb-2">Feriados</h3>
              <p>Consulte nosso funcionamento em feriados através de nossos canais de contato.</p>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>;
};

export default Contato;
