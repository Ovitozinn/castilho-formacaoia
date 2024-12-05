import { Bot, Brain, Code, Users, TrendingUp, Globe, Cpu, LineChart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import CastilhoBio from "@/components/CastilhoBio";
import StudentTestimonial from "@/components/StudentTestimonial";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Aprenda os fundamentos e aplicações práticas de IA, Machine Learning e Deep Learning"
    },
    {
      icon: Code,
      title: "Automação Inteligente",
      description: "Desenvolva sistemas automatizados baseados em IA para otimizar processos"
    },
    {
      icon: Users,
      title: "Mentoria em Grupo",
      description: "Suporte personalizado e networking com profissionais da área"
    },
    {
      icon: Bot,
      title: "Projetos Práticos",
      description: "Construa seu portfólio desenvolvendo projetos do mundo real"
    }
  ];

  const individualCourses = [
    {
      title: "Desenvolvedor n8n",
      price: "397",
      features: [
        "Automação de processos",
        "Integração de sistemas",
        "Workflows avançados",
        "Projetos práticos",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Engenharia de Prompt",
      price: "197",
      features: [
        "Técnicas avançadas de prompt",
        "Otimização de resultados",
        "Cases práticos",
        "Frameworks de prompt",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Prospecção e Fechamento",
      price: "97",
      features: [
        "Estratégias de vendas",
        "Negociação efetiva",
        "Scripts prontos",
        "Templates de propostas",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Formação Agentes IA",
      price: "897",
      features: [
        "Criação de agentes autônomos",
        "Integração com APIs",
        "Automação avançada",
        "Projetos completos",
        "Certificado de conclusão"
      ]
    }
  ];

  const completePackage = {
    title: "Formação Completa em IA",
    price: "199",
    originalPrice: "997",
    features: [
      "Acesso a TODOS os cursos acima",
      "Mentoria em grupo semanal",
      "Certificados individuais",
      "Bônus exclusivos de lançamento",
      "Acesso vitalício ao conteúdo",
      "Atualizações gratuitas"
    ],
    isPopular: true,
    description: "🔥 OFERTA ESPECIAL DE LANÇAMENTO 2024 🔥\n\nGaranta agora sua vaga com mais de 80% de desconto!"
  };

  const aiGrowthStats = [
    {
      icon: TrendingUp,
      title: "Crescimento Exponencial",
      description: "Previsão de crescimento de 38% ao ano até 2030 no mercado de IA"
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "90% das empresas planejam aumentar investimentos em IA nos próximos 3 anos"
    },
    {
      icon: Cpu,
      title: "Transformação Digital",
      description: "75% das empresas já utilizam ou planejam utilizar IA em seus processos"
    },
    {
      icon: LineChart,
      title: "Oportunidades",
      description: "Aumento de 71% na demanda por profissionais especializados em IA"
    }
  ];

  return (
    <div className="bg-dark text-white">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Por que escolher nosso curso?
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Desenvolvemos um programa completo para você dominar as tecnologias mais demandadas do mercado
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-dark-lighter">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Cursos Disponíveis
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Escolha o módulo ideal para sua jornada ou aproveite a oferta especial da formação completa
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {individualCourses.map((course, index) => (
              <PricingCard
                key={index}
                {...course}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                🚀 Oferta Imperdível - Tempo Limitado 🚀
              </h3>
              <p className="text-gray-300">
                A revolução da IA está acontecendo agora. Não perca a oportunidade de se tornar um especialista em Inteligência Artificial com o melhor preço já oferecido!
              </p>
            </div>
            <PricingCard
              {...completePackage}
              className="animate-scale-in transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <CastilhoBio />

      {/* Student Testimonial Section */}
      <StudentTestimonial />

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
};

export default Index;
