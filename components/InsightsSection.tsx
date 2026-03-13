"use client";

import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Insight = {
  title: string;
  excerpt: string;
  tag?: string;
};

const insights: Insight[] = [
  {
    title: "Team solve today’s biggest challenges",
    excerpt:
      "Join the thousands of satisfied users and take your business to the next level today and the power.",
  },
  {
    title: "Leading work from tasks management",
    excerpt:
      "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert.",
  },
  {
    title: "Unlock productivity potential with AI",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    title: "Automate as fast as you can type with AI",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
  },
];

function ImagePlaceholder({ index }: { index: number }) {
  const styles = [
    "bg-gradient-to-br from-gray-200 to-gray-100",
    "bg-gradient-to-br from-[#c7b7e6] to-[#d9cff0]",
    "bg-gradient-to-br from-[#d7d7d7] to-[#f1f1f1]",
    "bg-gradient-to-br from-gray-200 to-gray-100",
  ];
  return (
    <div
      className={`h-[120px] w-full rounded-xl ${styles[index % styles.length]}`}
    />
  );
}

export default function InsightsSection() {
  return (
    <section className="bg-white pt-6 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f2d]">
            Latest from{" "}
            <span className="bg-[#c5f135] px-2 rounded-sm inline-block">
              our insights
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((post, idx) => (
            <article
              key={post.title}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4"
            >
              <ImagePlaceholder index={idx} />
              <div className="mt-4">
                <h3 className="text-sm font-extrabold text-[#0d1f2d] leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0d1f2d] hover:opacity-80 transition"
                >
                  Read post <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

