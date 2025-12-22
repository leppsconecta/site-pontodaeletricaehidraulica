import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const SuccessScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="py-16 bg-brand-lightblue/20 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="transparent-card rounded-lg p-12 shadow-lg">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-darkblue mb-4">
              Currículo Enviado com Sucesso!
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Obrigado por seu interesse em fazer parte da nossa equipe.
            </p>
            <p className="text-base text-gray-500">
              Analisaremos seu perfil e entraremos em contato em breve.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Você será redirecionado para a página inicial em instantes...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessScreen;
