
import { Bot, Brain, Rocket } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('main-offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[5rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-6 animate-fade-in">
          <Bot className="w-8 h-8 text-primary" />
          <Brain className="w-8 h-8 text-primary" />
          <Rocket className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Monte agentes de IA que vendem por você e cobram até 10&nbsp;mil&nbsp;reais
          <br />
          <span className="hero-dash"></span> <span className="text-green">mesmo começando do zero.</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          A formação definitiva pra quem quer sair do operacional, fechar contratos e dominar a nova era da inteligência artificial sem programar nada.
        </p>
        
        <div className="video-wrapper mt-8 mb-10 max-w-[720px] w-full mx-auto">
          <iframe src="https://www.loom.com/embed/b984d14da64e46edb6afa46ced75f802?sid=87eb0792-0427-4a69-84dd-2208ac4d181d"
                  className="w-full aspect-video rounded-lg shadow-xl"
                  aria-label="Vídeo explicativo"
                  allowFullScreen></iframe>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <CTAButton onClick={scrollToOffer}>Quero começar agora</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
