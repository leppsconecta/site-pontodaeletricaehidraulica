import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
const QuemSomos = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-lightblue/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-darkblue mb-4">Quem Somos</h1>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="transparent-card rounded-lg p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Com mais de 10 anos de experiência, o <strong>Ponto da Elétrica e Hidráulica</strong> é referência em Itupeva 
                e região em soluções elétricas e hidráulicas.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">Atendemos milhares de clientes com excelência, oferecendo produtos de qualidade das melhores marcas. Atuamos com o cliente final, comércios e construtores, garantindo agilidade e materiais de primeira.</p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Nossa loja está estrategicamente localizada em Itupeva - SP, proporcionando fácil acesso 
                para toda a região. Contamos com uma equipe de profissionais capacitados e prontos para 
                oferecer o melhor atendimento e orientação técnica.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Trabalhamos com as melhores marcas do mercado, garantindo a qualidade e durabilidade dos 
                produtos. Nossa ampla variedade de itens permite que você encontre tudo o que precisa em um só lugar.
              </p>
              <p className="text-xl leading-relaxed text-brand-darkblue font-medium">
                Seja para sua casa, comércio ou obra, conte com quem entende do assunto!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
                <h2 className="text-xl font-bold text-brand-darkblue mb-4">Nossa Missão</h2>
                <p className="text-gray-700">
                  Fornecer soluções elétricas e hidráulicas com excelência, oferecendo produtos de qualidade
                  e atendimento especializado.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
                <h2 className="text-xl font-bold text-brand-darkblue mb-4">Nossa Visão</h2>
                <p className="text-gray-700">Ser referência no fornecimento de materiais elétricos e de hidráulica em toda a região, expandindo nosso alcance e mantendo a excelência.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
                <h2 className="text-xl font-bold text-brand-darkblue mb-4">Nossos Valores</h2>
                <p className="text-gray-700">
                  Qualidade, comprometimento, honestidade, respeito ao cliente e ética profissional em 
                  todas as nossas relações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>;
};
export default QuemSomos;