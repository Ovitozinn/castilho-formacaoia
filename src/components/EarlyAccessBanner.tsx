import { Clock, Flame } from "lucide-react";

const EarlyAccessBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base animate-pulse">
          <Flame className="w-5 h-5 text-primary" />
          <span className="font-medium">
            Acesso Antecipado - Economia de R$ 1.798,00
          </span>
          <Clock className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessBanner;