import { Layout, Copy, Target } from "lucide-react";
import TechCard from "./TechCard";

const DevelopmentTimeline = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text animate-fade-in">
          Do Zero ao Primeiro Projeto em 5 Dias
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Passo a Passo Comprovado para Criar e Vender Soluções com IA
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <TechCard>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <span className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </span>
                <Layout className="w-8 h-8 text-cyber-blue animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold">Dias 1-2: Estrutura Simplificada</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Criação da estrutura base</li>
                <li>Configuração inicial</li>
                <li>Preparação do ambiente</li>
              </ul>
            </div>
          </TechCard>

          <TechCard>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <span className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </span>
                <Copy className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold">Dias 3-4: Adaptação do Projeto Principal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Cópia do projeto principal</li>
                <li>Adaptações necessárias</li>
                <li>Personalização da solução</li>
              </ul>
            </div>
          </TechCard>

          <TechCard>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <span className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </span>
                <Target className="w-8 h-8 text-cyber-purple animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold">Dia 5: Monetização e Melhorias</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Implementação de melhorias</li>
                <li>Estratégias de monetização</li>
                <li>Otimização do projeto</li>
              </ul>
            </div>
          </TechCard>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Método Validado
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li className="flex items-center gap-2 justify-center">
                <Layout className="w-5 h-5 text-primary" />
                Suporte direto durante todo o processo
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Copy className="w-5 h-5 text-primary" />
                Templates prontos para usar
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Target className="w-5 h-5 text-primary" />
                Comunidade ativa de alunos
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Layout className="w-5 h-5 text-primary" />
                Cases reais de sucesso
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimeline;