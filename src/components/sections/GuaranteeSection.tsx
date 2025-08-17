import React from 'react';
import { Shield, Code, Brain, ArrowRight } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95" />
      <div className="absolute inset-0 opacity-10">
        <div className="text-green-500/30 font-mono text-xs leading-3 whitespace-pre-wrap overflow-hidden animate-pulse">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              {Math.random().toString(36).substring(7)} {Math.random().toString(36).substring(7)} {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-mono text-sm ml-4">castilho@garantia:~$</span>
            </div>
          </div>

          {/* Main content */}
          <div className="bg-black/80 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center">
              {/* Glitch effect title */}
              <div className="relative mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono relative animate-fade-in">
                  GARANTIA CASTILHO
                  <span className="absolute inset-0 text-green-300 opacity-70 animate-pulse">
                    GARANTIA CASTILHO
                  </span>
                </h2>
                <div className="w-24 h-1 bg-green-500 mx-auto mt-4 animate-pulse"></div>
              </div>

              {/* Terminal-style content */}
              <div className="text-left max-w-3xl mx-auto mb-8">
                <div className="font-mono text-green-300 text-sm mb-4 animate-fade-in">
                  {'>'} iniciando_protocolo_garantia.exe...
                </div>
                
                <div className="text-lg md:text-xl text-gray-100 leading-relaxed space-y-4 animate-fade-in">
                  <p>
                    <span className="text-green-400 font-semibold">Sou obrigado por lei</span> a te dar 7 dias de garantia, 
                    porém <span className="text-green-400 font-semibold">eu faço melhor que isso!</span>
                  </p>
                  
                  <p>
                    Se você comprar a formação e <span className="text-red-400 font-semibold">não conseguir montar seu primeiro agente</span>, 
                    eu <span className="text-green-400 font-semibold">devolvo seu dinheiro</span> e ainda te dou uma 
                    <span className="text-yellow-400 font-semibold"> mentoria individual</span>, que o plano mais básico custa 
                    <span className="text-green-400 font-semibold"> R$ 1.997</span>.
                  </p>
                </div>

                <div className="font-mono text-green-300 text-sm mt-6 animate-fade-in">
                  {'>'} garantia_aprovada ✓
                </div>
              </div>

              {/* Features grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Shield,
                    title: "7 DIAS + EXTRA",
                    description: "Garantia legal + bônus exclusivo"
                  },
                  {
                    icon: Brain,
                    title: "MENTORIA R$ 1.997",
                    description: "Grátis se não conseguir resultado"
                  },
                  {
                    icon: Code,
                    title: "100% SEGURO",
                    description: "Dinheiro de volta garantido"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="border border-green-500/30 bg-gray-900/50 p-6 rounded-lg hover:border-green-400/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <feature.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-green-400 font-mono font-bold text-sm mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Bottom signature */}
              <div className="border-t border-green-500/30 pt-6">
                <div className="font-mono text-green-400 text-sm animate-fade-in">
                  {'>'} assinado_digitalmente: <span className="text-white font-bold">Castilho</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Esta garantia é pessoal e intransferível
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;