import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import InsightsSection from "@/components/InsightsSection";
import AutomationBox from "@/components/AutomationBox";
import FooterSection from "@/components/FooterSection";
import { Moon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <DemoSection />
      <SolutionsSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <InsightsSection />
      <AutomationBox />
      <FooterSection />

      {/* DARK MODE TOGGLE */}
      <button 
        className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition"
        aria-label="Toggle Dark Mode"
      >
        <Moon className="w-5 h-5 text-navy" />
      </button>
    </main>
  );
}
