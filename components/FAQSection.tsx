"use client";

import React, { useMemo, useState } from "react";
import { Plus, X } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "Do I need to know about how to code?",
    a: "No. You can build and manage your workflows without writing code. If you do want to extend things, you can plug into your existing tools and APIs anytime.",
  },
  {
    q: "Can I use it for commercial projects?",
    a: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
  },
  {
    q: "Can I use it for multiple projects?",
    a: "Yes. Create as many workspaces and projects as you need, and keep everything organized per client, team, or product.",
  },
  {
    q: "Can I use this to create and sell a product?",
    a: "Absolutely. Many teams use it to validate ideas, ship products, and iterate fast with clear analytics and collaboration.",
  },
  {
    q: "What is your refund policy?",
    a: "If something isn’t a fit, contact support and we’ll help. Refunds are handled case-by-case depending on your plan and billing cycle.",
  },
];

function IconButton({ open }: { open: boolean }) {
  return (
    <div className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500">
      {open ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
    </div>
  );
}

export default function FAQSection() {
  const defaultOpen = useMemo(() => 1, []);
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <section className="bg-white pt-10 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0d1f2d] mb-10">
          Frequently asked questions!
        </h2>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          {faqs.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.q} className="border-t border-gray-100 first:border-t-0">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-5 text-left"
                  onClick={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
                  aria-expanded={open}
                >
                  <span className="text-sm md:text-base font-bold text-[#0d1f2d]">
                    {item.q}
                  </span>
                  <IconButton open={open} />
                </button>

                {open && (
                  <div className="px-6 md:px-8 pb-6 -mt-2">
                    <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-[#123b43] text-white px-6 md:px-10 py-10 md:py-12 shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-extrabold mb-2">
              Still have questions?
            </h3>
            <p className="text-sm text-white/75 max-w-md mx-auto">
              Can’t find the answer you’re looking for? <br className="hidden md:block" />
              Please chat to our friendly team.
            </p>

            <div className="mt-5 flex items-center justify-center -space-x-2">
              <div className="h-10 w-10 rounded-full bg-white/90 ring-2 ring-[#123b43]" />
              <div className="h-10 w-10 rounded-full bg-white/85 ring-2 ring-[#123b43]" />
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c5f135] text-[#0d1f2d] px-8 py-3 text-sm font-extrabold hover:opacity-90 active:scale-[0.99] transition"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

