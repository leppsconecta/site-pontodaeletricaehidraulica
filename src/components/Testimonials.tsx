import React, { useState } from 'react';
const testimonials = [{
  name: "João Silva",
  role: "Cliente Residencial",
  stars: 5,
  comment: "Excelente atendimento! Encontrei tudo que precisava para a reforma da minha casa. Os preços são justos e a qualidade dos produtos é excepcional."
}, {
  name: "Maria Oliveira",
  role: "Arquiteta",
  stars: 5,
  comment: "Sempre indico o Ponto da Elétrica para meus clientes. Eles têm uma variedade incrível de produtos e o suporte técnico é nota 10."
}, {
  name: "Carlos Mendes",
  role: "Construtor",
  stars: 4,
  comment: "Parceria de anos! Consigo tudo que preciso para minhas obras com preços competitivos e entrega rápida. Recomendo fortemente."
}, {
  name: "Ana Beatriz",
  role: "Cliente Comercial",
  stars: 5,
  comment: "Quando precisei fazer a instalação elétrica da minha loja, encontrei todo o suporte e materiais necessários. Equipe muito prestativa!"
}];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextTestimonial = () => {
    setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  const prevTestimonial = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  return <section className="bg-brand-lightblue/20 py-[33px] px-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">O Que Nossos Clientes Dizem</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10">
            {/* Quotation mark */}
            <div className="absolute -top-5 -left-5 text-6xl text-brand-yellow opacity-50">"</div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {Array.from({
                length: testimonials[activeIndex].stars
              }).map((_, i) => <svg key={i} className="w-6 h-6 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                {testimonials[activeIndex].comment}
              </p>
              
              <div>
                <p className="text-xl font-semibold text-brand-darkblue">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500">{testimonials[activeIndex].role}</p>
              </div>
              
              <div className="flex justify-center mt-8 space-x-4">
                <button onClick={prevTestimonial} className="p-2 rounded-full bg-brand-darkblue text-white hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={nextTestimonial} className="p-2 rounded-full bg-brand-darkblue text-white hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 mx-1 rounded-full ${index === activeIndex ? 'bg-brand-yellow' : 'bg-gray-300'}`} onClick={() => setActiveIndex(index)}></button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;