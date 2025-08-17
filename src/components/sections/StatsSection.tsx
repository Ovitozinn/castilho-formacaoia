import React from 'react';
import { Skull, AlertTriangle, Target, Zap } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Matrix background effect - mais sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black opacity-95" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-red-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} REPLACE {Math.random().toString(36).substring(7)} AI TAKEOVER {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal header */}
          <div className="bg-gray-900 border border-red-500/30 rounded-t-lg p-4 mb-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-red-400 font-mono text-sm ml-4">sistema@mercado_ia:~$ ALERTA_CRITICO</span>
            </div>
          </div>

          {/* Main content */}
          <div className="bg-black/90 border-x border-b border-red-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              {/* Título limpo sem sobreposição */}
              <div className="relative mb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-red-400 font-mono animate-fade-in leading-tight">
                  IGNORAR A IA HOJE É ASSINAR
                  <br />
                  <span className="text-white">SUA SENTENÇA DE MORTE</span>
                  <br />
                  <span className="text-red-300">NO MERCADO.</span>
                </h2>
              </div>

              {/* Subtitle */}
              <div className="text-xl md:text-2xl text-gray-200 mb-8 font-bold animate-fade-in">
                <div className="border-l-4 border-red-500 pl-6 text-left max-w-2xl mx-auto">
                  <p className="text-red-400 mb-2">A revolução não é opcional.</p>
                  <p className="text-white mb-2">Quem sabe usar IA fecha contratos.</p>
                  <p className="text-gray-300">Quem não sabe… vai ser substituído.</p>
                </div>
              </div>
            </div>

            {/* Content blocks */}
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              {/* Block 1 */}
              <div className="border border-red-500/20 bg-gray-900/30 p-6 rounded-lg animate-fade-in">
                <div className="font-mono text-red-300 text-sm mb-3">
                  {'>'} analisando_mercado_atual.exe...
                </div>
                <div className="text-lg text-gray-100 space-y-3">
                  <p>O mercado está mudando numa <span className="text-red-400 font-bold">velocidade brutal</span>.</p>
                  <p>Tarefas que hoje você faz manualmente…</p>
                  <p><span className="text-yellow-400 font-bold">Amanhã um agente de IA faz em segundos</span>.</p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="border border-yellow-500/20 bg-gray-900/30 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="font-mono text-yellow-300 text-sm mb-3">
                  {'>'} detectando_realidade_mercado.exe...
                </div>
                <div className="text-lg text-gray-100 space-y-3">
                  <p>E sabe o que é <span className="text-red-400 font-bold">pior</span>?</p>
                  <div className="space-y-2 ml-4">
                    <p><span className="text-green-400">👉</span> Empresas vão preferir pagar <span className="text-green-400 font-bold">5 a 10 mil</span> pra quem monta esses agentes…</p>
                    <p><span className="text-red-400">👉</span> Do que continuar contratando gente que só <span className="text-red-400 font-bold">"executa tarefa"</span>.</p>
                  </div>
                </div>
              </div>

              {/* Block 3 - The choice */}
              <div className="border border-white/20 bg-gray-900/50 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="font-mono text-white text-sm mb-3">
                  {'>'} DECISAO_CRITICA_DETECTADA...
                </div>
                <div className="text-xl text-center text-white font-bold mb-6">
                  VOCÊ TEM DUAS OPÇÕES:
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-500/30 bg-green-900/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-green-400" />
                      <span className="text-green-400 font-bold">OPÇÃO 1: DOMINAR</span>
                    </div>
                    <p className="text-gray-100">
                      Dominar a IA agora e vender soluções que o mercado <span className="text-green-400 font-bold">implora</span>.
                    </p>
                  </div>

                  <div className="border border-red-500/30 bg-red-900/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Skull className="w-6 h-6 text-red-400" />
                      <span className="text-red-400 font-bold">OPÇÃO 2: MORRER</span>
                    </div>
                    <p className="text-gray-100">
                      Ficar preso no operacional, vendo sua função ser <span className="text-red-400 font-bold">engolida</span> e o cliente escolher outro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Final warning */}
              <div className="border border-red-600 bg-red-900/30 p-8 rounded-lg animate-fade-in text-center" style={{ animationDelay: '0.6s' }}>
                <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-4">
                  NÃO EXISTE MEIO-TERMO.
                </div>
                <div className="text-lg text-gray-100 space-y-2">
                  <p>Ou você aprende IA <span className="text-yellow-400 font-bold">agora</span>…</p>
                  <p>Ou você vai ser substituído por quem <span className="text-red-400 font-bold">já aprendeu</span>.</p>
                </div>
                
                <div className="font-mono text-red-300 text-sm mt-6">
                  {'>'} WARNING: tempo_para_adaptacao = CRITICO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;