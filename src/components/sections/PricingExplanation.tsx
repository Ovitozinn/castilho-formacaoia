import { Clock, Shield, Gift, TrendingUp } from "lucide-react";

const PricingExplanation = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark-lighter" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
            Por que este preço?
          </h2>
          
          <div className="glass p-8 rounded-2xl mb-12">
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
                  className="flex items-start gap-4 p-4 glass rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
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