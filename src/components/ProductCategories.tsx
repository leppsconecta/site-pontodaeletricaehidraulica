
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const categories = [
    {
      title: "Material Elétrico",
      description: "Fios, cabos, disjuntores, tomadas, interruptores e mais",
      imageUrl: "/lovable-uploads/c54b0f7e-5a70-4771-b443-a5ab1e6e36ec.png",
    },
    {
      title: "Material de Hidráulica",
      description: "Tubos, conexões, registros e válvulas, peças e acessórios",
      imageUrl: "/lovable-uploads/5adffa36-b171-45de-90ac-799590b71fd0.png",
    },
    {
      title: "Iluminação",
      description: "Lâmpadas, lustres, arandelas, spots e mais",
      imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
    },
    {
      title: "Ferramentas",
      description: "Chaves e ferramentas, medidores",
      imageUrl: "/lovable-uploads/42be50e9-faa8-4e94-b6d1-cacb8f720f6f.png",
    }
  ];

  // Handle clicks to ensure page scrolls to top
  const handleCategoryClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    {/* INÍCIO: Seção Produtos */}
    <section id="produtos" className="py-20 bg-white" data-page="produtos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">Nossos Produtos</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre os melhores produtos para seu projeto. Trabalhamos com marcas reconhecidas e oferecemos suporte técnico especializado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link to="/produtos" key={index} className="group" onClick={handleCategoryClick}>
              <div className="relative rounded-lg overflow-hidden h-72 shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-brand-lightblue text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/produtos" 
            className="btn-primary cta-hover" 
            onClick={handleCategoryClick}
            id="btn-ver-todos-produtos"
            data-tag="ver_todos_produtos"
            aria-label="Ver todos os produtos disponíveis"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
    {/* FIM: Seção Produtos */}
    </>
  );
};

export default ProductCategories;
