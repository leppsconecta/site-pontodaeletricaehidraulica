import React from 'react';
import { Phone, Instagram, Facebook, Link as LinkIcon } from 'lucide-react';
const ContactSection = () => {
  return (
    <>
    {/* INÍCIO: Seção Contato */}
    <section 
      id="contato" 
      className="bg-white py-px"
      data-page="contato"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="transparent-card rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-darkblue mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-darkblue p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-darkblue">Endereço</h4>
                  <p className="text-gray-600">Av. Guanabara, 79 - Jd São Vicente</p>
                  <p className="text-gray-600">Itupeva - SP</p>
                </div>
              </div>
              
              <a 
                href="tel:+551144965057" 
                className="flex items-start space-x-4 group"
                id="link-telefone-contato"
                data-tag="telefone_contato"
                aria-label="Ligar para (11) 4496-5057"
              >
                <div className="bg-brand-darkblue p-3 rounded-full transform transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-darkblue">Telefone</h4>
                  <p className="text-gray-600">(11) 4496-5057</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/551144965057" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start space-x-4 group"
                id="link-whatsapp-contato"
                data-tag="whatsapp_contato_principal"
                aria-label="Contato via WhatsApp (11) 4496-5057"
              >
                <div className="bg-[#25D366] p-3 rounded-full transform transition-transform group-hover:scale-110">
                  <img 
                    src="/lovable-uploads/7afbd7b3-8b3a-4e5e-93b5-d5c4f279fc2c.png" 
                    alt="Ícone WhatsApp" 
                    className="h-6 w-6" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-darkblue">WhatsApp</h4>
                  <p className="text-gray-600">(11) 4496-5057</p>
                </div>
              </a>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-brand-darkblue mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/pontodaeletricaehidraulica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  id="link-instagram-contato"
                  data-tag="instagram_contato"
                  aria-label="Visite nosso Instagram"
                >
                  <Instagram />
                </a>
                <a 
                  href="https://www.facebook.com/pontodaeletricaehidraulica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  id="link-facebook-contato"
                  data-tag="facebook_contato"
                  aria-label="Visite nosso Facebook"
                >
                  <Facebook />
                </a>
                <a 
                  href="https://linktr.ee/pontodaeletricaehidraulica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  id="link-linktree-contato"
                  data-tag="linktree_contato"
                  aria-label="Acesse nosso Linktree"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-100 rounded-lg p-1">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9617111054856!2d-47.05118448515401!3d-23.015807847550377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf348b8334e18d%3A0x6cb5ed1e5d9613d0!2sAv.%20Guanabara%2C%2079%20-%20Jardim%20S%C3%A3o%20Vicente%2C%20Itupeva%20-%20SP%2C%2013295-000!5e0!3m2!1spt-BR!2sbr!4v1673458674425!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
              border: 0,
              borderRadius: '0.5rem'
            }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FIM: Seção Contato */}
    </>
  );
};
export default ContactSection;