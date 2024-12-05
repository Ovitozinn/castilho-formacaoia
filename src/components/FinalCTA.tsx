import React from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, CheckCircle2, Clock, Flame } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark-lighter" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-8 animate-pulse">
            <Flame className="w-5 h-5" />
            <span className="font-semibold">Oferta por tempo limitado!</span>
            <Clock className="w-5 h-5" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Não Perca Esta Oportunidade Única
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8">
            Junte-se aos profissionais que já estão transformando suas carreiras com IA
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 text-left">
            {[
              "Acesso vitalício a todo conteúdo",
              "Mentoria em grupo semanal",
              "Certificados individuais",
              "Bônus exclusivos de lançamento",
              "Atualizações gratuitas",
              "Comunidade exclusiva de alunos"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 glass rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-gray-400 line-through text-2xl">R$ 997</span>
              <span className="text-4xl font-bold text-white">R$ 199</span>
            </div>
            <p className="text-primary font-semibold">
              12x de R$ 19,90 sem juros
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <CTAButton 
              className="text-lg px-8 py-4 animate-bounce"
              onClick={() => window.location.href = "https://pay.kirvano.com/186d210d-4150-4fb3-9643-fc870759dda3"}
            >
              Garantir Minha Vaga Agora
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
            
            <p className="text-sm text-gray-400">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;