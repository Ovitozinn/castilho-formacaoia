
import React from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, CheckCircle2, Flame } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} FINAL CTA {Math.random().toString(36).substring(7)} LAST CHANCE {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-mono text-sm ml-4">final_cta@oportunidade:~$ ULTIMA_CHANCE</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-black/90 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-6 md:mb-8 border border-red-500/30">
              <Flame className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base font-mono">Oferta Especial!</span>
              <Flame className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-green-400 font-mono animate-fade-in">
              Não Perca Esta Oportunidade Única
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Junte-se aos profissionais que já estão transformando suas carreiras com IA
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12 mx-auto max-w-3xl">
              {[
                "Comunidade Aberta no WhatsApp",
                "Bônus exclusivos",
                "Aulas do básico ao avançado",
                "Monetização (como ganhar dinheiro com isso)",
                "Criando sua automação do zero",
                "Projetos reais que o mercado busca"
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 border border-green-500/20 bg-gray-900/30 rounded-lg animate-fade-in hover:border-green-400/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
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
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto hover:scale-105 transition-transform duration-300"
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

            <div className="font-mono text-green-300 text-sm mt-6">
              {'>'} oportunidade_carregada_com_sucesso ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
