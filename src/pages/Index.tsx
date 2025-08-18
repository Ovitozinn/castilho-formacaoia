
import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import StudentTestimonial from "@/components/StudentTestimonial";
import FinalCTA from "@/components/FinalCTA";
import ParticlesBackground from "@/components/ParticlesBackground";
import StatsSection from "@/components/sections/StatsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
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
          <GuaranteeSection />
          <CoursesSection />
          <CastilhoBio />
          <StudentTestimonial />
          <YouTubeSection />
          <FinalCTA />
        </div>
      </div>
    </div>
  );
};

export default Index;
