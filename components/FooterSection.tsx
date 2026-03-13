"use client";

import React from "react";
import { ChevronDown, Facebook, Twitter, Youtube } from "lucide-react";

type FooterLink = { label: string; href: string };

const products: FooterLink[] = [
  { label: "Email Builder", href: "#" },
  { label: "Landing Builder", href: "#" },
  { label: "Reporting", href: "#" },
  { label: "Chatbots", href: "#" },
  { label: "AI Tools", href: "#" },
];

const company: FooterLink[] = [
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "News", href: "#" },
  { label: "Contact", href: "#" },
];

const resources: FooterLink[] = [
  { label: "Blog", href: "#" },
  { label: "Newsletter", href: "#" },
  { label: "Events", href: "#" },
  { label: "Tutorials", href: "#" },
  { label: "Support", href: "#" },
];

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold mb-4">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-[#0d1f2d] font-semibold hover:opacity-75 transition"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full border border-[#0d1f2d]/15 bg-white/50 flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border-2 border-[#0d1f2d]/70" />
      </div>
      <div className="leading-tight">
        <div className="text-[11px] text-gray-500 font-semibold">Ads Online</div>
        <div className="text-xl font-extrabold text-[#0d1f2d]">360</div>
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="relative px-6 pt-20 pb-10 bg-gradient-to-b from-[#fbfce9] via-[#eef6cf] to-[#e3f1a6]">
      <div className="pointer-events-none absolute inset-0 bg-white/35" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12">
          <div className="max-w-sm">
            <LogoMark />
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              Design amazing digital experiences that create more happy in the
              world.
            </p>

            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-4 py-2 text-sm font-semibold text-[#0d1f2d] shadow-sm hover:bg-white/80 transition"
                aria-label="Language selector"
              >
                English <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>

          <Column title="Products" links={products} />
          <Column title="Company" links={company} />
          <Column title="Resources" links={resources} />
        </div>

        <div className="mt-14 h-px w-full bg-[#0d1f2d]/10" />

        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-gray-600">
            Ads Online 360° © 2026, All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:opacity-80">
              Privacy policy
            </a>
            <a href="#" className="text-xs text-gray-600 hover:opacity-80">
              Terms of use
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="h-8 w-8 rounded-full bg-[#0d1f2d] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="h-8 w-8 rounded-full bg-[#0d1f2d] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="h-8 w-8 rounded-full bg-[#c5f135] text-[#0d1f2d] flex items-center justify-center hover:opacity-90 transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

