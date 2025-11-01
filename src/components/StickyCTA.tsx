import { useState, useEffect } from "react";
import { X, Flame, ArrowRight } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Mostrar quando rolar mais de 1 tela
      if (scrollPosition > windowHeight && !isHidden) {
        setIsVisible(true);
      } else if (scrollPosition <= windowHeight) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const goToCheckout = () => {
    // Redirect to checkout page
    window.location.href = 'https://pay.hub.la/ARX176QDkdSkVfgpXqIb';
  };

  const hideCTA = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  if (!isVisible || isHidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in">
      <div className="bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl border-t-2 border-yellow-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Flame className="w-6 h-6 text-yellow-400 animate-bounce" />
              <div>
                <p className="text-white font-bold text-lg">
                  🔥 Condição de <span className="text-yellow-400">BLACK FRIDAY</span>
                </p>
                <p className="text-gray-300 text-sm">
                  100 vagas disponíveis (98 restantes) - Não perca!
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={goToCheckout}
                className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Garantir minha vaga
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={hideCTA}
                className="text-white hover:text-red-200 transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;