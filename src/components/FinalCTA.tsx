
import React from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, CheckCircle2, Flame } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark-lighter animate-gradient-x" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-6 md:mb-8 animate-pulse">
            <Flame className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold text-sm md:text-base">Oferta Especial!</span>
            <Flame className="w-4 h-4 md:w-5 md:h-5" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in">
            Não Perca Esta Oportunidade Única
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Junte-se aos profissionais que já estão transformando suas carreiras com IA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12 mx-auto max-w-3xl">
            {[
              "Acesso vitalício a todo conteúdo",
              "Bônus exclusivos",
              "Atualizações gratuitas",
              "Templates liberados",
              "Aulas do básico ao avançado",
              "Monetização (como ganhar dinheiro com isso)",
              "Módulo de prospecção e vendas",
              "Criando sua automação do zero"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 glass rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
              <span className="text-xl md:text-2xl text-gray-400 line-through">R$ 1.997</span>
              <span className="text-3xl md:text-4xl font-bold text-white">R$ 297</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-6">
            <CTAButton 
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 animate-bounce w-full md:w-auto hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = "https://pay.hub.la/ARX176QDkdSkVfgpXqIb"}
            >
              <span className="flex items-center justify-center gap-2">
                Garantir Minha Vaga Agora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </CTAButton>
            
            <p className="text-xs md:text-sm text-gray-400">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
