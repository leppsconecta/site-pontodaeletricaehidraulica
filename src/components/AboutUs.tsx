
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-brand-lightblue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">Quem Somos</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="transparent-card rounded-lg p-6 shadow-lg transform md:rotate-1">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Com mais de 10 anos de experiência, o <strong>Ponto da Elétrica e Hidráulica</strong> é referência em Itupeva 
                e região em soluções elétricas e hidráulicas.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Atendemos milhares de clientes com excelência, oferecendo produtos de qualidade das melhores marcas. 
                Atuamos com o cliente final, comércios e construtores, garantindo suporte técnico, 
                agilidade e materiais de primeira.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-medium">
                Seja para sua casa, comércio ou obra, conte com quem entende do assunto.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-darkblue rounded-lg p-6 text-white transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2 text-brand-yellow">10+</div>
                <p className="text-lg">Anos de experiência</p>
              </div>
              <div className="bg-brand-yellow rounded-lg p-6 text-brand-darkblue transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-lg">Clientes atendidos</p>
              </div>
              <div className="col-span-2 bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-brand-darkblue mb-3">Nossa Missão</h3>
                <p className="text-gray-700">
                  Fornecer as melhores soluções elétricas e hidráulicas com atendimento técnico especializado e produtos de qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
