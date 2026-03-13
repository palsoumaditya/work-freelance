"use client";

import React from "react";
import { Layers, Box, Zap, Link2, Circle } from "lucide-react";

interface LogoItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  textColor: string;
  iconColor: string;
  className?: string;
}

const logos: LogoItem[] = [
  {
    id: "alt-shift",
    name: "Alt+Shift",
    icon: <Layers className="w-5 h-5 text-gray-300" />,
    textColor: "text-gray-400",
    iconColor: "text-gray-300",
  },
  {
    id: "lightbox",
    name: "Lightbox",
    icon: <Box className="w-5 h-5 text-[#0c6b5e]" />,
    textColor: "text-[#0c6b5e]",
    iconColor: "text-[#0c6b5e]",
  },
  {
    id: "boltshift",
    name: "Boltshift",
    icon: (
      <div className="w-8 h-8 rounded-full bg-[#0c6b5e] flex items-center justify-center">
        <Zap className="w-5 h-5 text-white" />
      </div>
    ),
    textColor: "text-[#153d47]",
    iconColor: "text-[#0c6b5e]",
  },
  {
    id: "interlock",
    name: "Interlock",
    icon: (
      <div className="w-8 h-8 rounded-full border-2 border-[#0c6b5e] flex items-center justify-center">
        <Link2 className="w-5 h-5 text-[#0c6b5e]" />
      </div>
    ),
    textColor: "text-[#153d47]",
    iconColor: "text-[#0c6b5e]",
  },
  {
    id: "capsule",
    name: "Capsule",
    icon: (
      <div className="w-8 h-8 rounded-full border-2 border-[#0c6b5e] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#0c6b5e]" />
      </div>
    ),
    textColor: "text-[#153d47]",
    iconColor: "text-[#0c6b5e]",
  },
  {
    id: "layers",
    name: "Layers",
    icon: <Layers className="w-5 h-5 text-[#4ade80]" />,
    textColor: "text-[#0c3d3d]",
    iconColor: "text-[#4ade80]",
  },
];

export default function MarqueeLogos() {
  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      <p className="text-sm text-gray-500 font-normal text-center tracking-wide mb-8">
        Trusted by over 1.7 million companies worldwide
      </p>
      <div className="flex overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((logo) => (
            <div key={`${logo.id}-1`} className="flex items-center gap-2 mx-12">
              <div className="flex items-center justify-center">
                {logo.icon}
              </div>
              <span className={`text-base font-semibold ${logo.textColor}`}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {logos.map((logo) => (
            <div key={`${logo.id}-2`} className="flex items-center gap-2 mx-12">
              <div className="flex items-center justify-center">
                {logo.icon}
              </div>
              <span className={`text-base font-semibold ${logo.textColor}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
