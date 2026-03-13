"use client";

import React, { useEffect, useRef, useState } from "react";

interface VideoMockupProps {
  src: string;
}

export default function VideoMockup({ src }: VideoMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`max-w-5xl mx-auto transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
      }`}
    >
      {/* MacBook-style Frame */}
      <div className="relative bg-[#153d47] rounded-2xl border border-[#1a4a55] shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* Video Element (Full Frame) */}
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full rounded-2xl object-cover relative z-10"
        />
      </div>

      {/* MacBook Base Shadow (The "Black Base") */}
      <div className="mx-auto w-[98%] h-2 bg-black/90 rounded-b-full blur-[1px] shadow-[0_4px_20px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
