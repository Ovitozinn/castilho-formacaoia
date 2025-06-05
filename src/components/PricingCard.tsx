import { Check } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PricingCard = ({ 
  title, 
  price, 
  originalPrice,
  features, 
  isPopular,
  description,
  className, 
  style 
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl backdrop-blur-sm border transition-all duration-300",
        "transform hover:scale-105",
        isPopular 
          ? "bg-primary/10 border-primary shadow-lg shadow-primary/20" 
          : "bg-white/5 border-white/10",
        className
      )}
      style={style}
    >
      {isPopular && (
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/20 rounded-full animate-pulse">
            Oferta Especial
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      
      <div className="mb-6">
        <div className="flex flex-col items-center mb-1">
          {originalPrice && (
            <span className="text-base md:text-lg text-gray-400 line-through opacity-75 mb-1">
              R$ {originalPrice}
            </span>
          )}
          <span className="text-3xl md:text-4xl font-bold text-white">
            R$ {price}
          </span>
        </div>
        {description && (
          <p className="text-sm text-primary mt-2 text-center">
            {description}
          </p>
        )}
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      {isPopular && (
        <CTAButton
          variant="primary"
          className="w-full"
          onClick={() => window.location.href = "https://pay.hub.la/ARX176QDkdSkVfgpXqIb"}
        >
          Garantir minha vaga
        </CTAButton>
      )}
    </div>
  );
};

export default PricingCard;
