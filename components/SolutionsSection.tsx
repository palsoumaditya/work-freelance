"use client";

import React from "react";
import { 
  Zap, 
  Search, 
  Database, 
  ShieldCheck, 
  Lock, 
  Share2,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Fast and Reliable",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <Zap className="w-6 h-6 text-[#0d1f2d]" />,
  },
  {
    title: "Discover Data Everywhere",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <Search className="w-6 h-6 text-[#0d1f2d]" />,
  },
  {
    title: "Enrich Data with Context",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <Database className="w-6 h-6 text-[#0d1f2d]" />,
  },
  {
    title: "Risk Management",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <ShieldCheck className="w-6 h-6 text-[#0d1f2d]" />,
  },
  {
    title: "Privacy compliance",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <Lock className="w-6 h-6 text-[#0d1f2d]" />,
  },
  {
    title: "Third-Party Management",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <Share2 className="w-6 h-6 text-[#0d1f2d]" />,
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-12">
      <div className="bg-[#0b1c24] text-white py-24 px-6 relative overflow-hidden rounded-[40px] shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Top Badge */}
          <div className="border border-gray-700 bg-gray-900/50 rounded-full px-4 py-1 mb-8">
            <span className="text-xs font-semibold text-[#c5f135]">Solutions</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            <span className="bg-[#c5f135] text-[#0d1f2d] px-2 rounded-sm mr-2">AI-Powered</span>
            <span>Automation Solutions</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-gray-400 text-center max-w-2xl mb-20">
            Offers a unified platform that fosters innovation while providing end-to-end data management.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-24 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-[#c5f135] rounded-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(197,241,53,0.3)] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Area */}
          <div className="flex flex-col items-center text-center mt-12 relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Say goodbye to the hassle of multi-tasks
            </h3>
            <p className="text-gray-400 mb-8">
              Managing multiple tasks with AI automation.
            </p>

            {/* Google Button Mockup */}
            <button className="bg-white text-navy flex items-center gap-3 px-8 py-3 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-bold">Start free trial</span>
            </button>
            <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest font-semibold">
              No credit card required
            </p>
          </div>

          {/* Character Illustration (Simplified SVG Mockup) */}
          <div className="absolute bottom-[-10px] left-[5%] opacity-80 pointer-events-none hidden lg:block">
             <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 150 C 100 150, 110 220, 100 240" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="100" cy="50" r="25" stroke="white" strokeWidth="2" fill="none" />
                <path d="M75 100 Q 100 80, 125 100" stroke="white" strokeWidth="2" fill="none" />
                <path d="M100 75 L 100 150" stroke="white" strokeWidth="2" fill="none" />
                <path d="M100 100 L 150 50" stroke="white" strokeWidth="2" fill="none" />
                <path d="M100 100 L 50 150" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="150" cy="50" r="3" fill="white" />
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
