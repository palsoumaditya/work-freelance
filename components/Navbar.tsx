"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <nav className={`fixed top-[35.5px] z-40 w-full h-16 bg-lime flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
      scrollDirection === "down" ? "-translate-y-[calc(100%+35.5px)]" : "translate-y-0"
    }`}>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* LEFT SIDE - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-navy flex items-center justify-center relative overflow-hidden">
            {/* Concentric rings style mocked with SVG paths inside a circle */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
              <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-0.5 mt-0.5">Ads Online</span>
            <span className="text-2xl font-black text-navy leading-none">360°</span>
          </div>
        </div>

        {/* CENTER - Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-navy hover:text-gray-500 transition flex items-center gap-1 group">
            Products
            <ChevronDown className="w-3.5 h-3.5 text-navy group-hover:text-gray-500 transition" />
          </Link>
          <Link href="#" className="text-sm font-medium text-navy hover:text-gray-500 transition flex items-center gap-1 group">
            Solutions
            <ChevronDown className="w-3.5 h-3.5 text-navy group-hover:text-gray-500 transition" />
          </Link>
          <Link href="#" className="text-sm font-medium text-navy hover:text-gray-500 transition">
            Insights
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-navy hover:text-gray-500 transition">
            Pricing
          </Link>
        </div>

        {/* RIGHT SIDE - Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-navy hover:underline">
            Contact sales
          </Link>
          <Link href="/login" className="text-sm font-medium text-navy hover:underline">
            Log in
          </Link>
          <Button
            asChild
            variant="default"
            className="bg-navy text-white text-sm font-semibold rounded-full px-5 py-2 h-auto hover:bg-[#1a3347] transition"
          >
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center">
          <button aria-label="Menu" className="p-2 text-navy">
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>
    </nav>
  );
}
