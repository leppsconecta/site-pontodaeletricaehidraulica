import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
const productCategories = [{
  id: 1,
  name: "Material Elétrico",
  products: [{
    name: "Disjuntores",
    image: "/lovable-uploads/c54b0f7e-5a70-4771-b443-a5ab1e6e36ec.png"
  }, {
    name: "Cabos e Fios",
    image: "/lovable-uploads/170033d1-6c27-490a-a3b8-893d498f7f99.png"
  }, {
    name: "Interruptores",
    image: "/lovable-uploads/5d43da36-46f9-41de-a530-2d9268b9468b.png"
  }, {
    name: "Tomadas",
    image: "/lovable-uploads/788e8214-df14-4d3c-a833-09aa123eeb06.png"
  }]
}, {
  id: 2,
  name: "Material de Hidráulica",
  products: [{
    name: "Tubos e Conexões",
    image: "/lovable-uploads/c64a3eda-c635-4d90-89fa-9fc23db0cda7.png"
  }, {
    name: "Registros e Válvulas",
    image: "/lovable-uploads/5adffa36-b171-45de-90ac-799590b71fd0.png"
  }, {
    name: "Caixas d'Água",
    image: "/lovable-uploads/84215474-2766-4c1e-b53f-017f0ea3af32.png"
  }, {
    name: "Peças e Acessórios",
    image: "/lovable-uploads/bc08a3b1-8226-48ec-9a92-934fdf869bf5.png"
  }]
}, {
  id: 3,
  name: "Iluminação",
  products: [{
    name: "Lâmpadas LED",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80"
  }, {
    name: "Lustres",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80"
  }, {
    name: "Arandelas",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80"
  }, {
    name: "Spots",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80"
  }]
}, {
  id: 4,
  name: "Ferramentas",
  products: [{
    name: "Chaves e ferramentas",
    image: "/lovable-uploads/42be50e9-faa8-4e94-b6d1-cacb8f720f6f.png"
  }, {
    name: "Medidores",
    image: "/lovable-uploads/160fba2d-1e25-4d49-b2e2-c335c0acf830.png"
  }]
}];
const Produtos = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-lightblue/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-darkblue mb-4">Nossos Produtos</h1>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Oferecemos uma ampla variedade de produtos elétricos e de hidráulica das melhores marcas do mercado. Confira nossas categorias e entre em contato para mais informações.</p>
          </div>
          
          <div className="space-y-16">
            {productCategories.map(category => <div key={category.id} className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:shadow-xl">
                <h2 className="text-2xl font-bold text-brand-darkblue mb-6 flex items-center">
                  <span className="bg-brand-yellow h-6 w-1 mr-3 rounded-full"></span>
                  {category.name}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product, index) => <div key={index} className="group">
                      <div className="relative rounded-lg overflow-hidden h-48 mb-3">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
                    backgroundImage: `url(${product.image})`
                  }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 w-full">
                          <h3 className="text-lg font-bold text-white">{product.name}</h3>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>)}
          </div>
          
          <div className="text-center mt-16 bg-brand-lightblue/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-brand-darkblue mb-4">Não encontrou o que procura?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Temos muitos outros produtos disponíveis em nossa loja. Entre em contato conosco para verificar disponibilidade e preços.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-[#25D366] hover:bg-[#20c25e] text-white">
                <a href="https://wa.me/551144965057">Falar via WhatsApp</a>
              </Button>
              <Button asChild variant="outline" className="border-brand-darkblue text-brand-darkblue hover:bg-brand-darkblue hover:text-white">
                <a href="tel:+551144965057">Ligar Agora: (11) 4496-5057</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>;
};
export default Produtos;