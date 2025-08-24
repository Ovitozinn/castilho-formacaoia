
import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import StudentTestimonial from "@/components/StudentTestimonial";
import FinalCTA from "@/components/FinalCTA";
import ParticlesBackground from "@/components/ParticlesBackground";
import StatsSection from "@/components/sections/StatsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import YouTubeSection from "@/components/sections/YouTubeSection";
import AgentShowcaseSection from "@/components/sections/AgentShowcaseSection";
import DevelopmentTimeline from "@/components/DevelopmentTimeline";
import SpecificProofSection from "@/components/SpecificProofSection";
import ImagineSection from "@/components/ImagineSection";
import ObjectionsFAQ from "@/components/ObjectionsFAQ";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="bg-dark text-white relative">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <SpecificProofSection />
        <div id="main-offer">
          <StatsSection />
          <ImagineSection />
          <DevelopmentTimeline />
          <GuaranteeSection />
          <CoursesSection />
          <ObjectionsFAQ />
          <StudentTestimonial />
          <CastilhoBio />
          <YouTubeSection />
          <AgentShowcaseSection />
          <FinalCTA />
        </div>
        <StickyCTA />
      </div>
    </div>
  );
};

export default Index;
