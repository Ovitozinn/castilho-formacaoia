
import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import StudentTestimonial from "@/components/StudentTestimonial";
import FinalCTA from "@/components/FinalCTA";
import ParticlesBackground from "@/components/ParticlesBackground";
import StatsSection from "@/components/sections/StatsSection";
import PricingExplanation from "@/components/sections/PricingExplanation";
import CoursesSection from "@/components/sections/CoursesSection";
import YouTubeSection from "@/components/sections/YouTubeSection";
import DevelopmentTimeline from "@/components/DevelopmentTimeline";

const Index = () => {
  return (
    <div className="bg-dark text-white relative">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <div id="main-offer">
          <StatsSection />
          <DevelopmentTimeline />
          <CoursesSection />
          <CastilhoBio />
          <StudentTestimonial />
          <PricingExplanation />
          <YouTubeSection />
          <FinalCTA />
        </div>
      </div>
    </div>
  );
};

export default Index;
