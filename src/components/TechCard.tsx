import { cn } from "@/lib/utils";

interface TechCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  style?: React.CSSProperties;
}

const TechCard = ({ children, className, glowColor = "primary", style }: TechCardProps) => {
  return (
    <div 
      style={style}
      className={cn(
        "relative group",
        "backdrop-blur-md bg-white/5 border border-white/10",
        "rounded-xl p-6 transition-all duration-300",
        "hover:scale-105 hover:bg-white/10",
        className
      )}
    >
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute -inset-px rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300",
          "blur-md",
          glowColor === "primary" ? "bg-primary" : "bg-gradient-to-r from-primary to-primary-hover"
        )}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TechCard;