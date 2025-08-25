import { Sparkles, TrendingUp, Clock, MapPin } from "lucide-react";
import CTAButton from "./CTAButton";

const ImagineSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('courses-section');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black to-green-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-green-400 animate-bounce" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            <span className="text-green-400">Imagine você</span> daqui a 90 dias...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-black/30 border border-green-500/20 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Sua Nova Realidade</h3>
              </div>
              <ul className="text-left space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  Faturando <strong className="text-green-400">R$ 15k+ por mês</strong> trabalhando de casa
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <strong>5-8 clientes fixos</strong> pagando entre R$ 2-5k mensais
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  Trabalhando apenas <strong className="text-white">3-4 horas por dia</strong>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  Empresários te procurando para <strong className="text-white">automatizar negócios</strong>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/30 border border-red-500/20 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-bold text-white">Ou Continue Assim...</h3>
              </div>
              <ul className="text-left space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  Vendo outros faturarem enquanto você <strong className="text-red-400">fica parado</strong>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <strong>Perdendo oportunidades</strong> que não voltam mais
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  Trabalhando <strong className="text-white">8h+ por dia</strong> por salário fixo
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  Assistindo a IA <strong className="text-white">substituir sua profissão</strong>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-green-600/10 border border-green-500/30 rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Você está aqui 👆</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              A única diferença entre você e quem já está faturando R$ 15k+ é que eles <strong className="text-green-400">começaram</strong>.
            </p>
            <p className="text-xl font-bold text-white mb-8">
              Daqui a 6 meses, você vai estar ganhando dinheiro com IA... 
              <br />
              <span className="text-green-400">ou assistindo outros ganharem.</span>
            </p>
            
            <CTAButton onClick={scrollToOffer} className="text-xl px-16 py-4">
              Quero começar HOJE mesmo
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagineSection;