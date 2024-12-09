import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import StudentTestimonial from "@/components/StudentTestimonial";
import FinalCTA from "@/components/FinalCTA";
import EarlyAccessBanner from "@/components/EarlyAccessBanner";
import ParticlesBackground from "@/components/ParticlesBackground";
import StatsSection from "@/components/sections/StatsSection";
import PricingExplanation from "@/components/sections/PricingExplanation";
import EntrepreneurSection from "@/components/sections/EntrepreneurSection";
import CoursesSection from "@/components/sections/CoursesSection";
import YouTubeSection from "@/components/sections/YouTubeSection";

const Index = () => {
  return (
    <div className="bg-dark text-white relative">
      {/* Animated background */}
      <ParticlesBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <EarlyAccessBanner />
        <HeroSection />
        <div id="main-offer">
          <StatsSection />
          <CoursesSection />
          <CastilhoBio />
          <StudentTestimonial />
          <YouTubeSection />
          <EntrepreneurSection />
          <FinalCTA />
          <PricingExplanation />
        </div>
      </div>
    </div>
  );
};

export default Index;