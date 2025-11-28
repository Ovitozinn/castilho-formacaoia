import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import FinalCTA from "@/components/FinalCTA";
import ParticlesBackground from "@/components/ParticlesBackground";
import StatsSection from "@/components/sections/StatsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import DevelopmentTimeline from "@/components/DevelopmentTimeline";
import SpecificProofSection from "@/components/SpecificProofSection";
import ImagineSection from "@/components/ImagineSection";
import StickyCTA from "@/components/StickyCTA";
import BlackFridayBanner from "@/components/BlackFridayBanner";

// Lazy load components below the fold for better performance
const YouTubeSection = lazy(() => import("@/components/sections/YouTubeSection"));
const AgentShowcaseSection = lazy(() => import("@/components/sections/AgentShowcaseSection"));
const ObjectionsFAQ = lazy(() => import("@/components/ObjectionsFAQ"));

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
          <Suspense fallback={<div className="py-20" />}>
            <ObjectionsFAQ />
          </Suspense>
          <CastilhoBio />
          <Suspense fallback={<div className="py-20" />}>
            <YouTubeSection />
          </Suspense>
          <Suspense fallback={<div className="py-20" />}>
            <AgentShowcaseSection />
          </Suspense>
          <FinalCTA />
        </div>
        <StickyCTA />
      </div>
    </div>
  );
};

export default Index;
