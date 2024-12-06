import { Brain, Cpu, Globe, TrendingUp } from "lucide-react";
import TechCard from "../TechCard";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      title: "Crescimento Exponencial",
      value: "38%",
      description: "ao ano até 2030 no mercado de IA"
    },
    {
      icon: Globe,
      title: "Impacto Global",
      value: "90%",
      description: "das empresas planejam aumentar investimentos em IA"
    },
    {
      icon: Cpu,
      title: "Transformação Digital",
      value: "75%",
      description: "das empresas já utilizam ou planejam utilizar IA"
    },
    {
      icon: Brain,
      title: "Oportunidades",
      value: "71%",
      description: "aumento na demanda por especialistas em IA"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          O Mercado de IA está Explodindo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <TechCard
              key={index}
              className="animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.description}</p>
            </TechCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;