"use client";

import React, { useState } from "react";
import { 
  Smile, 
  Triangle, 
  Sparkle, 
  Database, 
  CreditCard, 
  Cloud, 
  ArrowRight
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  brandColor: string;
  bgColor: string;
  categories: string[];
}

const categories = [
  "Marketing Automation",
  "Scheduling",
  "Project Management",
  "Finance",
  "Spreadsheets",
];

const integrations: Integration[] = [
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Share your ideas with Mailchimp email newsletters.",
    icon: <Smile className="w-10 h-10 text-navy" />,
    brandColor: "#FFE01B",
    bgColor: "bg-[#FFF9E6]",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
  {
    id: "asana",
    name: "Asana",
    description: "Leading work management from daily tasks to strategic initiatives.",
    icon: <Triangle className="w-10 h-10 text-[#F06A6A]" />,
    brandColor: "#F06A6A",
    bgColor: "bg-[#FFF0F0]",
    categories: ["Marketing Automation", "Scheduling", "Project Management"],
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Send and receive email via a custom Zapier.",
    icon: <Sparkle className="w-10 h-10 text-[#FF4F00]" />,
    brandColor: "#FF4F00",
    bgColor: "bg-[#FFF4EE]",
    categories: ["Marketing Automation", "Scheduling", "Spreadsheets"],
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    description: "File sync app that lets you store all of your files online.",
    icon: <Database className="w-10 h-10 text-[#2684FF]" />,
    brandColor: "#2684FF",
    bgColor: "bg-[#E6F0FF]",
    categories: ["Marketing Automation", "Scheduling", "Project Management"],
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Developer-friendly way to accept payments online and in mobile apps.",
    icon: <CreditCard className="w-10 h-10 text-[#635BFF]" />,
    brandColor: "#635BFF",
    bgColor: "bg-[#EEEEFF]",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "File sync app that lets you store all of your files online.",
    icon: <Cloud className="w-10 h-10 text-[#34A853]" />,
    brandColor: "#34A853",
    bgColor: "bg-[#F3FDF5]",
    categories: ["Marketing Automation", "Finance", "Spreadsheets"],
  },
];

export default function IntegrationShowcase() {
  const [activeCategory, setActiveCategory] = useState("Marketing Automation");

  const filteredIntegrations = integrations.filter((item) =>
    item.categories.includes(activeCategory)
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <p className="text-sm text-gray-500 font-normal text-center mb-10">
        See how we help your team solve today&apos;s biggest challenges.
      </p>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === category
                ? "bg-[#c5f135] border-[#c5f135] text-navy shadow-sm"
                : "bg-white border-gray-200 text-[#0d1f2d] hover:border-gray-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredIntegrations.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            {/* Top Section with Brand Color */}
            <div className={`h-44 flex items-center justify-center rounded-t-2xl ${item.bgColor} transition-colors`}>
              {item.icon}
            </div>
            
            {/* Bottom Content */}
            <div className="p-8 flex flex-col gap-3 flex-grow border-t border-gray-100">
              <h3 className="text-xl font-bold text-[#0d1f2d]">{item.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                {item.description}
              </p>
              <button className="flex items-center gap-1 text-sm font-bold text-[#0d1f2d] hover:gap-2 transition-all mt-4">
                Get started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Global CTA */}
      <div className="flex justify-center">
        <button className="bg-[#0d1f2d] text-[#c5f135] px-8 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
          Browse all integrations
        </button>
      </div>
    </div>
  );
}
