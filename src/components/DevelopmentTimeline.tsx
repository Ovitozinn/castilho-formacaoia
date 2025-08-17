import { Layout, Copy, Target } from "lucide-react";
import TechCard from "./TechCard";

const DevelopmentTimeline = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} TIMELINE {Math.random().toString(36).substring(7)} PROJECT {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-mono text-sm ml-4">timeline@projeto:~$ LOADING_TIMELINE</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-black/90 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-400 font-mono animate-fade-in">
            Do Zero ao Primeiro Projeto em 5 Dias
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Passo a Passo Comprovado para Criar e Vender Soluções com IA
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-green-500/30 bg-gray-900/50 p-6 rounded-lg hover:border-green-400/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold font-mono">
                    1
                  </span>
                  <Layout className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Dias 1-2: Estrutura Simplificada</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Criação da estrutura base</li>
                  <li>Configuração inicial</li>
                  <li>Preparação do ambiente</li>
                </ul>
              </div>
            </div>

            <div className="border border-green-500/30 bg-gray-900/50 p-6 rounded-lg hover:border-green-400/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold font-mono">
                    2
                  </span>
                  <Copy className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Dias 3-4: Adaptação do Projeto Principal</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Cópia do projeto principal</li>
                  <li>Adaptações necessárias</li>
                  <li>Personalização da solução</li>
                </ul>
              </div>
            </div>

            <div className="border border-green-500/30 bg-gray-900/50 p-6 rounded-lg hover:border-green-400/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold font-mono">
                    3
                  </span>
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Dia 5: Monetização e Melhorias</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Implementação de melhorias</li>
                  <li>Estratégias de monetização</li>
                  <li>Otimização do projeto</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <div className="border border-green-500/30 bg-gray-900/50 p-6 rounded-xl hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">
                Método Validado
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                <li className="flex items-center gap-2 justify-center">
                  <Layout className="w-5 h-5 text-green-400" />
                  Suporte direto durante todo o processo
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <Copy className="w-5 h-5 text-green-400" />
                  Templates prontos para usar
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <Target className="w-5 h-5 text-green-400" />
                  Comunidade ativa de alunos
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <Layout className="w-5 h-5 text-green-400" />
                  Cases reais de sucesso
                </li>
              </ul>
            </div>
          </div>

          <div className="font-mono text-green-300 text-sm mt-6 text-center">
            {'>'} timeline_carregada_com_sucesso ✓
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimeline;