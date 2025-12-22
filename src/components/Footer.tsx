import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Link as LinkIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    {/* INÍCIO: Footer */}
    <footer 
      id="footer-principal" 
      className="bg-brand-darkblue text-white"
      data-page="footer"
    >
      <div className="container mx-auto px-4">
        <div className="py-12 grid md:grid-cols-3 gap-8">
          <div>
            <Link 
              to="/" 
              className="flex flex-col items-start mb-4"
              id="logo-footer"
              data-tag="logo_footer"
              aria-label="Ir para página inicial"
            >
              <img 
                src="/lovable-uploads/08f322f5-e98e-445e-a43b-815e864231db.png" 
                alt="Ponto da Elétrica e Hidráulica - Logo" 
                className="h-24 mb-3" 
              />
            </Link>
            <p className="text-gray-300 mb-6">Materiais elétrica e hidráulica de qualidade para residências, comércios e obras.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pontodaeletricaehidraulica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-yellow transition-colors"
                id="link-instagram-footer"
                data-tag="instagram_footer"
                aria-label="Instagram Ponto da Elétrica"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/pontodaeletricaehidraulica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-yellow transition-colors"
                id="link-facebook-footer"
                data-tag="facebook_footer"
                aria-label="Facebook Ponto da Elétrica"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://linktr.ee/pontodaeletricaehidraulica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-yellow transition-colors"
                id="link-linktree-footer"
                data-tag="linktree_footer"
                aria-label="Linktree Ponto da Elétrica"
              >
                <LinkIcon size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                  id="footer-link-home"
                  data-tag="footer_home"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/quem-somos" 
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                  id="footer-link-quem-somos"
                  data-tag="footer_quem_somos"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link 
                  to="/produtos" 
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                  id="footer-link-produtos"
                  data-tag="footer_produtos"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/trabalhe-conosco" 
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                  id="footer-link-trabalhe-conosco"
                  data-tag="footer_trabalhe_conosco"
                >
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                  id="footer-link-contato"
                  data-tag="footer_contato"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacidade" 
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                  id="footer-link-privacidade"
                  data-tag="footer_privacidade"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Av. Guanabara, 79 - Jd São Vicente, Itupeva - SP
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 4496-5057
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Seg - Sex: 07:30 - 18:00
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sáb: 07:30 - 13:00
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Ponto da Elétrica e Hidráulica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    {/* FIM: Footer */}
    </>
  );
};
export default Footer;