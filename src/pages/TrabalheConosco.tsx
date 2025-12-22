
import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import WorkWithUs from '@/components/WorkWithUs';

const TrabalheConosco = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-2 bg-gradient-to-b from-brand-lightblue/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-2">Trabalhe Conosco</h1>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-3"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos para nossa equipe. Preencha o formulário abaixo com seus dados e anexe seu currículo.
              Nossa equipe analisará seu perfil e entrará em contato caso haja compatibilidade com nossas vagas abertas.
            </p>
          </div>
        </div>
      </section>
      
      <WorkWithUs />
      
      <WhatsAppButton />
    </div>
  );
};

export default TrabalheConosco;
