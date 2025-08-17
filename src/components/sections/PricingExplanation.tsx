import { Clock, Shield, Gift, TrendingUp } from "lucide-react";

const PricingExplanation = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} PRICING {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400 font-mono">
            Por que este preço?
          </h2>
          
          <div className="border border-green-500/30 bg-black/90 p-8 rounded-2xl mb-12">
            <p className="text-xl text-gray-300 mb-8">
              Este é um preço especial de lançamento, disponível apenas para os primeiros alunos que se juntarem ao programa. O valor normal do curso é <span className="line-through text-gray-400">R$ 1.997</span>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Acesso Antecipado",
                  description: "Seja um dos primeiros a ter acesso ao conteúdo completo"
                },
                {
                  icon: Gift,
                  title: "Bônus Exclusivos",
                  description: "Receba materiais e recursos adicionais sem custo extra"
                },
                {
                  icon: Shield,
                  title: "Garantia Total",
                  description: "7 dias de garantia incondicional de satisfação"
                },
                {
                  icon: TrendingUp,
                  title: "Atualizações Gratuitas",
                  description: "Acesso a todas as atualizações futuras do curso"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 border border-green-500/20 bg-gray-900/30 rounded-lg animate-fade-in hover:border-green-400/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingExplanation;