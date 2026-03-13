"use client";

import React from "react";

export default function AutomationBox() {
  return (
    <section className="bg-white pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0c2f35] px-6 py-16 md:px-16 md:py-20 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
          </div>

          {/* tiny decorative sparkles */}
          <div className="pointer-events-none absolute left-10 top-16 hidden md:block">
            <div className="h-2 w-2 rounded-full bg-white/15" />
            <div className="mt-8 h-1.5 w-1.5 rounded-full bg-white/10" />
            <div className="mt-10 h-1 w-1 rounded-full bg-white/10" />
          </div>
          <div className="pointer-events-none absolute right-14 top-16 hidden md:block">
            <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
            <div className="mt-10 h-2 w-2 rounded-full bg-white/15" />
            <div className="mt-8 h-1 w-1 rounded-full bg-white/10" />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="bg-[#c5f135] text-[#0d1f2d] px-2 py-1 rounded-sm inline-block">
                AI automation
              </span>{" "}
              solutions!
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/75 max-w-xl">
              See how we help your team solve today’s biggest challenges.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c5f135] text-[#0d1f2d] px-8 py-3 text-sm font-extrabold hover:opacity-90 active:scale-[0.99] transition"
            >
              Start free trial with email
            </button>

            <p className="mt-4 text-xs text-white/60">No credit card required!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

