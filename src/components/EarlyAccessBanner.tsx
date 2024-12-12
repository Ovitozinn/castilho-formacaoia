import { Clock, Crown, Flame } from "lucide-react";

const EarlyAccessBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          <div className="flex items-center gap-2 animate-pulse">
            <Crown className="w-5 h-5 text-primary" />
            <span className="font-medium text-sm md:text-base">
              Seja um Fundador
            </span>
            <Flame className="w-5 h-5 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base font-medium">
              Economia de R$ 1.798,00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessBanner;