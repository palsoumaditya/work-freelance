import React from "react";
import VideoMockup from "./VideoMockup";
import MarqueeLogos from "./MarqueeLogos";
import IntegrationShowcase from "./IntegrationShowcase";

export default function DemoSection() {
  return (
    <section className="w-full">
      {/* PART A: Video Mockup */}
      <div className="bg-white px-6 md:px-16 lg:px-24 pt-16 pb-20">
        <VideoMockup src="/afterhero.webm" />
      </div>

      {/* PART B: Trusted Logos + Integrations */}
      <div className="pt-20 pb-0">
        <MarqueeLogos />
        
        {/* Integrations Heading */}
        <div className="pt-16 pb-12 text-center px-4">
          <div className="border border-[#0d1f2d] rounded-full px-4 py-1 mb-4 mx-auto w-fit">
            <span className="text-xs font-semibold text-[#0d1f2d]">Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f2d]">
            <span className="px-0 rounded-sm">AI Automation</span>
            <span> across 500+ apps</span>
          </h2>
        </div>

        {/* Integration Showcase (Filterable Grid) */}
        <div className="pb-24">
          <IntegrationShowcase />
        </div>
      </div>
    </section>
  );
}
