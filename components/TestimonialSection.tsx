"use client";

import React from "react";
import { ArrowRight, Link2, Zap, Layers, Box } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Nathalia Larsson",
    title: "Operations",
  },
  {
    quote:
      "We are based in Europe and the latest Data Protection Regulations forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!",
    name: "Sarah Edricsi",
    title: "Founder",
  },
  {
    quote:
      "We’re looking for people who share our vision! Most of our time used to be taken up by administrative work and now we can focus on building out to help our employees.",
    name: "Arms Yun",
    title: "HR Lead",
  },
  {
    quote:
      "We’re looking for people who share our vision! Most of our time used to be taken up by administrative work and now we can focus on building out to help our employees.",
    name: "Mari Zellers",
    title: "People Ops",
  },
  {
    quote:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Nathalia Larsson",
    title: "Operations",
  },
  {
    quote:
      "We are based in Europe and the latest Data Protection Regulations forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!",
    name: "Sarah Edricsi",
    title: "Founder",
  },
];

type Brand = {
  id: string;
  name: string;
  icon: React.ReactNode;
  textClass: string;
};

const brands: Brand[] = [
  {
    id: "alt-shift",
    name: "Alt+Shift",
    icon: <Layers className="h-5 w-5 text-gray-300" />,
    textClass: "text-gray-400",
  },
  {
    id: "lightbox",
    name: "Lightbox",
    icon: <Box className="h-5 w-5 text-[#0c6b5e]" />,
    textClass: "text-[#0c6b5e]",
  },
  {
    id: "boltshift",
    name: "Boltshift",
    icon: (
      <div className="h-8 w-8 rounded-full bg-[#0c6b5e] flex items-center justify-center">
        <Zap className="h-5 w-5 text-white" />
      </div>
    ),
    textClass: "text-[#0c3d3d]",
  },
  {
    id: "interlock",
    name: "Interlock",
    icon: (
      <div className="h-8 w-8 rounded-full border-2 border-[#0c6b5e] flex items-center justify-center">
        <Link2 className="h-5 w-5 text-[#0c6b5e]" />
      </div>
    ),
    textClass: "text-[#0c3d3d]",
  },
  {
    id: "capsule",
    name: "Capsule",
    icon: (
      <div className="h-8 w-8 rounded-full border-2 border-[#0c6b5e] flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-[#0c6b5e]" />
      </div>
    ),
    textClass: "text-[#0c3d3d]",
  },
  {
    id: "layers",
    name: "Layers",
    icon: <Layers className="h-5 w-5 text-gray-400" />,
    textClass: "text-gray-400",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[10px] leading-none text-[#f7b731]">
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div className="h-7 w-7 rounded-full bg-[#0d1f2d] text-white flex items-center justify-center text-xs font-bold">
      {initial}
    </div>
  );
}

function AwardPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 text-[#0d1f2d]">
      <div className="text-[11px] leading-tight text-gray-500">
        <div className="font-medium">{label}</div>
        <div className="text-base font-extrabold text-[#0d1f2d]">{value}</div>
      </div>
      <div className="h-8 w-px bg-gray-200" />
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-white pt-20 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f2d] leading-tight">
            See what our{" "}
            <span className="bg-[#c5f135] px-2 rounded-sm inline-block">
              happy users
            </span>{" "}
            <br className="hidden md:block" />
            are sharing about us!
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            Trusted by over 1.7 million companies worldwide
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 mb-10">
          {brands.map((b) => (
            <div key={b.id} className="flex items-center gap-2">
              <div className="flex items-center justify-center">{b.icon}</div>
              <span className={`text-sm font-semibold ${b.textClass}`}>
                {b.name}
              </span>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="hide-scrollbar flex gap-6 overflow-x-auto pb-6 -mx-2 px-2 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="min-w-[280px] md:min-w-[340px] max-w-[360px] snap-start bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
              >
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  “{t.quote}”
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div className="leading-tight">
                      <div className="text-sm font-bold text-[#0d1f2d]">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-400">{t.title}</div>
                    </div>
                  </div>
                  <Stars />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <a
            href="#"
            className="text-sm font-semibold text-[#0d1f2d] inline-flex items-center gap-2 hover:opacity-80 transition"
          >
            See all feedbacks <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className="flex items-center gap-6 text-center">
            <div className="flex items-center gap-6">
              <div className="text-[11px] leading-tight text-gray-500">
                <div className="font-medium">Product of the month</div>
                <div className="text-base font-extrabold text-[#0d1f2d]">
                  2nd
                </div>
              </div>
              <div className="text-[11px] leading-tight text-gray-500">
                <div className="font-medium">Product of the week</div>
                <div className="text-base font-extrabold text-[#0d1f2d]">
                  1st
                </div>
              </div>
              <div className="text-[11px] leading-tight text-gray-500">
                <div className="font-medium">Product of the day</div>
                <div className="text-base font-extrabold text-[#0d1f2d]">
                  1st
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

