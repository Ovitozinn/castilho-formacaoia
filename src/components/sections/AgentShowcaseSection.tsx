import { Bot, DollarSign, MessageCircle, Target } from "lucide-react";
import CTAButton from "../CTAButton";

const AgentShowcaseSection = () => {
  const notifications = [
    { text: "Pix recebido R$ 2.000", delay: "0s", position: "top-10 left-10" },
    { text: "Transferência recebida R$ 4.800", delay: "0.5s", position: "top-20 right-20" },
    { text: "Contrato fechado R$ 7.000", delay: "1s", position: "bottom-32 left-16" },
    { text: "Pix recebido R$ 1.500", delay: "1.5s", position: "bottom-20 right-10" },
    { text: "Proposta aceita R$ 3.200", delay: "2s", position: "top-32 left-1/3" },
    { text: "Pagamento R$ 5.500", delay: "2.5s", position: "bottom-40 right-1/3" },
    { text: "Lead convertido R$ 2.800", delay: "3s", position: "top-40 right-16" },
    { text: "Venda confirmada R$ 6.000", delay: "3.5s", position: "bottom-16 left-1/2" }
  ];

  return (
    <section id="agent-showcase" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-5">
        <div className="text-green-500/30 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
              AI_AGENT REVENUE_BOT {Math.random().toString(36).substring(7)} AUTOPILOT SUCCESS
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-mono text-sm ml-4">agente@revenue:~$ SHOWCASE_RESULTS</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-black/95 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-400 font-mono animate-fade-in">
              Esse único Agente me fez faturar mais de 
              <span className="text-white block mt-2">80 MIL REAIS</span>
              <span className="text-green-300 text-2xl md:text-3xl block mt-2">apenas esse ano.</span>
            </h2>
          </div>

          {/* Agent showcase area with image and notifications */}
          <div className="relative mb-12 md:mb-16 h-96 md:h-[500px] rounded-xl overflow-hidden border border-green-500/30 bg-gray-900/50">
            {/* Background image with opacity */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ 
                backgroundImage: "url('/lovable-uploads/5b0a6b5c-594b-4a06-8908-cc42cc36c757.png')",
                filter: "brightness(0.7) contrast(1.2)"
              }}
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Central AI Robot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <Bot className="w-12 h-12 md:w-16 md:h-16 text-black" />
                </div>
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-green-400/50 animate-ping"></div>
                <div className="absolute inset-[-10px] rounded-full border border-green-400/30 animate-ping" style={{ animationDelay: "0.5s" }}></div>
              </div>
            </div>

            {/* Floating notifications */}
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`absolute ${notification.position} animate-fade-in`}
                style={{ animationDelay: notification.delay, animationDuration: "0.8s" }}
              >
                <div className="bg-green-500/90 text-black px-3 py-2 rounded-lg font-mono text-sm font-semibold shadow-lg border border-green-400 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {notification.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Description and features */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-gray-900/80 border border-green-500/30 rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-mono">
                🚀 IMPLEMENTE ESSE AGENTE DE ATENDIMENTO
              </h3>
              <p className="text-lg md:text-xl text-green-300 mb-4">
                Em até <span className="text-white font-bold">5 dias</span> e receba até 
                <span className="text-green-400 font-bold text-2xl"> R$ 10.000</span> por isso
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-green-500/20">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">Atendimento 24/7</div>
                    <div className="text-xs text-gray-400">Nunca perde um lead</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-green-500/20">
                  <Target className="w-8 h-8 text-green-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">Qualificação IA</div>
                    <div className="text-xs text-gray-400">Identifica prospects</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-green-500/20">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">ROI Garantido</div>
                    <div className="text-xs text-gray-400">Resultado em dias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <CTAButton 
              onClick={() => window.location.href = "https://pay.hub.la/ARX176QDkdSkVfgpXqIb"}
              className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full md:w-auto hover:scale-105 transition-transform duration-300 mb-4"
            >
              🎯 Quero Criar Meu Agente Agora
            </CTAButton>
            <p className="text-sm md:text-base text-gray-400">
              ⚡ Ganhe dinheiro enquanto dorme • Automatização completa
            </p>
          </div>

          <div className="font-mono text-green-300 text-sm mt-8 text-center">
            {'>'} agente_showcase_carregado ✓ revenue_generator_ativo ✓
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentShowcaseSection;