
import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

const Privacidade = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-6">Política de Privacidade</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Última atualização: maio de 2024
              </p>
              
              <p className="mb-4">
                O Ponto da Elétrica e Hidráulica está comprometido com a proteção de sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas 
                informações pessoais.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">1. Informações que coletamos</h2>
              <p className="mb-4">
                Podemos coletar as seguintes informações pessoais:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Endereço</li>
                <li>Informações contidas em currículos (para candidatos a vagas)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">2. Como usamos suas informações</h2>
              <p className="mb-4">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Responder às suas solicitações e fornecer informações</li>
                <li>Processar candidaturas para vagas de emprego</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Enviar comunicações de marketing (com seu consentimento)</li>
                <li>Cumprir obrigações legais</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">3. Compartilhamento de informações</h2>
              <p className="mb-4">
                Não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar suas 
                informações apenas nas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Com seu consentimento</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger nossos direitos e propriedades</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">4. Segurança de dados</h2>
              <p className="mb-4">
                Implementamos medidas de segurança para proteger suas informações contra acesso não 
                autorizado, alteração, divulgação ou destruição.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">5. Seus direitos</h2>
              <p className="mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Acessar, corrigir ou excluir suas informações pessoais</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Solicitar a limitação do processamento de suas informações</li>
                <li>Opor-se ao processamento de suas informações</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">6. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <p className="mb-4">
                Ponto da Elétrica e Hidráulica<br />
                Av. Guanabara, 79 - Jd São Vicente<br />
                Itupeva - SP<br />
                Telefone: (11) 4496-5057
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3 text-brand-darkblue">7. Alterações nesta política</h2>
              <p className="mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você 
                verifique regularmente para estar ciente de quaisquer alterações.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default Privacidade;
