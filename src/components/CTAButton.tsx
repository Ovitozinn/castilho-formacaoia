
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const CTAButton = ({ 
  children, 
  variant = "primary", 
  className,
  ...props 
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105",
        variant === "primary" 
          ? "bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl" 
          : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
