import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
    {/* INÍCIO: Seção Hero */}
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      data-page="home"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-lightblue to-white opacity-50"></div>
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-10" style={{
      backgroundImage: "url('/lovable-uploads/a9f399ef-958f-4114-a4d1-b0f59b007649.png')"
    }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkblue mb-6">
              Materiais Elétrica e Hidráulica de Qualidade
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Há mais de 10 anos, referência em Itupeva e região em soluções elétricas e hidráulica.
              Produtos de qualidade das melhores marcas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/produtos" 
                className="btn-primary flex items-center gap-2 cta-hover"
                id="btn-ver-produtos-hero"
                data-tag="ver_produtos_hero"
                aria-label="Ver todos os produtos"
              >
                Ver Produtos <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contato" 
                className="bg-[#25D366] px-6 py-3 text-white rounded-md font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg flex items-center gap-2 cta-hover"
                id="btn-fale-conosco-hero"
                data-tag="fale_conosco_whatsapp_hero"
                aria-label="Fale conosco via WhatsApp"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="transparent-card rounded-xl p-8 transform rotate-3 shadow-xl animate-[fade-in_0.8s_ease-out_0.2s_both]">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">
                Atendemos:
              </h2>
              <ul className="space-y-3">
                {["Clientes finais", "Comércios", "Construtores", "Empreiteiros", "Indústrias"].map((item, index) => <li key={index} className="flex items-center gap-2 text-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                    {item}
                  </li>)}
              </ul>
            </div>
            <div className="transparent-card rounded-xl p-8 absolute -bottom-4 -left-4 transform -rotate-2 shadow-xl animate-[fade-in_0.8s_ease-out_0.5s_both]">
              <p className="text-lg font-medium text-brand-darkblue italic">
                "Seja para sua casa, comércio ou obra, conte com quem entende do assunto."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FIM: Seção Hero */}
    </>
  );
};
export default Hero;