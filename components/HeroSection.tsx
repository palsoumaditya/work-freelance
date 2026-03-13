import React from 'react';
import { Target, Users, Search, MonitorDot, UserCheck, Zap, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-lime to-white min-h-[calc(100vh-100px)] pt-[180px] pb-32 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* FLOATING DECORATIVE ICONS */}
      <div className="absolute top-[20%] left-[6%] w-14 h-14 rounded-full border-2 border-navy bg-lime flex items-center justify-center animate-float-slow">
        <Target className="text-navy w-6 h-6" />
      </div>
      
      <div className="absolute top-[55%] left-[3%] w-14 h-14 rounded-full border-2 border-navy bg-lime flex items-center justify-center animate-float">
        <Users className="text-navy w-6 h-6" />
      </div>

      <div className="absolute top-[75%] left-[14%] w-14 h-14 rounded-full border-2 border-navy bg-lime flex items-center justify-center animate-float-delay">
        <div className="relative flex items-center justify-center">
          <Search className="text-navy w-6 h-6" />
          <Sparkles className="text-navy w-3 h-3 absolute -top-1 -right-2" />
        </div>
      </div>

      <div className="absolute top-[20%] right-[6%] w-14 h-14 rounded-full border-2 border-navy bg-lime flex items-center justify-center animate-float-delay">
        <MonitorDot className="text-navy w-6 h-6" />
      </div>

      <div className="absolute top-[55%] right-[-1%] w-14 h-14 rounded-full border-2 border-navy bg-lime flex items-center justify-center animate-float-slow">
        <UserCheck className="text-navy w-6 h-6" />
      </div>

      {/* HERO CONTENT */}
      <div className="z-10 relative flex flex-col items-center px-4 w-full">
        
        {/* 1. BADGE */}
        <div className="border border-navy rounded-full px-4 py-1 mb-6">
          <span className="text-xs font-semibold text-navy">Automate your workflow</span>
        </div>

        {/* 2. HEADLINE */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-navy leading-tight mb-4 tracking-tight">
          Get more done in less time<br />
          with <TypewriterText />
        </h1>

        {/* 3. SUBHEADLINE */}
        <p className="text-lg text-navy max-w-xl mx-auto text-center leading-relaxed mb-8">
          Unlock your <span className="font-semibold">productivity</span> potential and automate as fast as you can type with our intuitive and powerful <span className="font-semibold">AI automation</span> app.
        </p>

        {/* 4. CTA BUTTON */}
        <Button variant="outline" className="bg-white border border-gray-200 rounded-full px-8 py-3 h-auto flex items-center gap-3 hover:shadow-md transition mb-10">
          <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <span className="text-base font-semibold text-navy">Start free trial</span>
        </Button>

        {/* 5. FEATURE PILLS */}
        <div className="flex flex-row items-center gap-8 justify-center w-full">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-navy" />
            <span className="text-sm font-medium text-navy">AI-Powered Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-navy" />
            <span className="text-sm font-medium text-navy">Chatbots, Free forever</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-navy" />
            <span className="text-sm font-medium text-navy">Cutting-edge AI features</span>
          </div>
        </div>

      </div>
    </section>
  );
}
