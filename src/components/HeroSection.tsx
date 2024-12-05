import { Bot, Brain, Rocket } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('main-offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-6 animate-fade-in">
          <Bot className="w-8 h-8 text-primary" />
          <Brain className="w-8 h-8 text-primary" />
          <Rocket className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Domine a Inteligência Artificial
          <br />
          <span className="text-primary">e Automação</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Transforme sua carreira com as tecnologias mais inovadoras do mercado. 
          Aprenda a criar soluções inovadoras com IA e automação.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <CTAButton onClick={scrollToOffer}>Começar agora</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;