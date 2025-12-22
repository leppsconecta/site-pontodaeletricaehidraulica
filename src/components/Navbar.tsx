import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const showNavOnHover = () => {
    if (isScrolled) {
      setIsHovered(true);
    }
  };
  const hideNavOnLeave = () => {
    if (isScrolled) {
      setIsHovered(false);
    }
  };
  const navbarVisibility = isScrolled && !isHovered ? 'translate-y-[-100%]' : 'translate-y-0';
  
  return (
    <>
    {/* INÍCIO: Header Principal */}
    <header 
      id="header-principal"
      className={`fixed w-full z-50 transition-all duration-300 ${navbarVisibility} bg-[#1EAEDB]`} 
      onMouseEnter={showNavOnHover} 
      onMouseLeave={hideNavOnLeave}
      data-page="header"
    >
      <div className="container mx-auto px-4 bg-gray-900">
        <div className="flex justify-between items-center py-2 bg-gray-900">
          <Link 
            to="/" 
            className="flex items-center"
            id="logo-home"
            data-tag="logo_home"
            aria-label="Ir para página inicial"
          >
            <img 
              src="/lovable-uploads/4e29d28c-0930-42cc-b46f-bb7a52048ffb.png" 
              alt="Ponto da Elétrica e Hidráulica - Logo" 
              className="h-12 md:h-14" 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-white focus:outline-none" 
            onClick={toggleMenu}
            id="btn-menu-mobile"
            data-tag="menu_mobile_toggle"
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav id="menu-principal" className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/" 
              className="nav-link text-white"
              id="menu-home"
              data-tag="menu_home"
            >
              Início
            </Link>
            <Link 
              to="/quem-somos" 
              className="nav-link text-white"
              id="menu-quem-somos"
              data-tag="menu_quem_somos"
            >
              Quem Somos
            </Link>
            <Link 
              to="/produtos" 
              className="nav-link text-white"
              id="menu-produtos"
              data-tag="menu_produtos"
            >
              Produtos
            </Link>
            <Link 
              to="/trabalhe-conosco" 
              className="nav-link text-white"
              id="menu-trabalhe-conosco"
              data-tag="menu_trabalhe_conosco"
            >
              Trabalhe Conosco
            </Link>
            <Link 
              to="/contato" 
              className="nav-link text-white"
              id="menu-contato"
              data-tag="menu_contato"
            >
              Contato
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 animate-fade-in bg-[#1EAEDB]`}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="nav-link text-white" 
              onClick={toggleMenu}
              id="menu-mobile-home"
              data-tag="menu_mobile_home"
            >
              Início
            </Link>
            <Link 
              to="/quem-somos" 
              className="nav-link text-white" 
              onClick={toggleMenu}
              id="menu-mobile-quem-somos"
              data-tag="menu_mobile_quem_somos"
            >
              Quem Somos
            </Link>
            <Link 
              to="/produtos" 
              className="nav-link text-white" 
              onClick={toggleMenu}
              id="menu-mobile-produtos"
              data-tag="menu_mobile_produtos"
            >
              Produtos
            </Link>
            <Link 
              to="/trabalhe-conosco" 
              className="nav-link text-white" 
              onClick={toggleMenu}
              id="menu-mobile-trabalhe-conosco"
              data-tag="menu_mobile_trabalhe_conosco"
            >
              Trabalhe Conosco
            </Link>
            <Link 
              to="/contato" 
              className="nav-link text-white" 
              onClick={toggleMenu}
              id="menu-mobile-contato"
              data-tag="menu_mobile_contato"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
    {/* FIM: Header Principal */}
    </>
  );
};
export default Navbar;