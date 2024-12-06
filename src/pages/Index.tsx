import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import StudentTestimonial from "@/components/StudentTestimonial";
import FinalCTA from "@/components/FinalCTA";
import EarlyAccessBanner from "@/components/EarlyAccessBanner";
import ParticlesBackground from "@/components/ParticlesBackground";
import StatsSection from "@/components/sections/StatsSection";
import PricingExplanation from "@/components/sections/PricingExplanation";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="bg-dark text-white relative">
      {/* Animated background */}
      <ParticlesBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <EarlyAccessBanner />
        <HeroSection />
        <StatsSection />
        <CastilhoBio />
        <StudentTestimonial />
        <FinalCTA />
        <PricingExplanation />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;