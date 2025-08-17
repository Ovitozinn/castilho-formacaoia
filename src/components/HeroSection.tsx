
import { Bot, Brain, Rocket } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('courses-section');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[5rem]">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-5">
        <div className="text-green-500/30 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
              {Math.random().toString(36).substring(7)} AI AGENT {Math.random().toString(36).substring(7)} AUTOMATION {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-mono text-sm ml-4">castilho@ia_agents:~$ EXECUTING</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-black/90 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-6 animate-fade-in">
            <Bot className="w-8 h-8 text-green-400" />
            <Brain className="w-8 h-8 text-green-400" />
            <Rocket className="w-8 h-8 text-green-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-mono">
            Agentes de IA que fazem o trabalho sujo no seu lugar
            <br />
            <span className="hero-dash"></span> <span className="text-green-400">e você cobra caro por isso.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Você não precisa programar nada. Só seguir o método, montar o agente e entregar. O mercado já tá pagando caro por isso.
          </p>
          
          <div className="video-wrapper mt-8 mb-10 max-w-[720px] w-full mx-auto">
            <div className="border border-green-500/30 rounded-lg p-2 bg-gray-900/50">
              <iframe src="https://www.loom.com/embed/b984d14da64e46edb6afa46ced75f802?sid=87eb0792-0427-4a69-84dd-2208ac4d181d"
                      className="w-full aspect-video rounded-lg shadow-xl"
                      aria-label="Vídeo explicativo"
                      allowFullScreen></iframe>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-16">
            <CTAButton onClick={scrollToOffer}>Quero começar agora</CTAButton>
          </div>

          <div className="font-mono text-green-300 text-sm">
            {'>'} sistema_iniciado_com_sucesso ✓
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
