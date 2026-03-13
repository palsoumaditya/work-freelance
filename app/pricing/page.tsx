"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

type BillingPeriod = "monthly" | "yearly";

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlySubtext: string;
  yearlySubtext: string;
  yearlyTotal?: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    monthlyPrice: "0",
    yearlyPrice: "0",
    monthlySubtext: "Free forever",
    yearlySubtext: "Free forever",
  },
  {
    name: "Pro",
    monthlyPrice: "9",
    yearlyPrice: "9",
    monthlySubtext: "Per month, billed monthly",
    yearlySubtext: "Per month, billed yearly",
    yearlyTotal: "$108 per year",
    isPopular: true,
  },
  {
    name: "Business",
    monthlyPrice: "29",
    yearlyPrice: "29",
    monthlySubtext: "Per month, billed monthly",
    yearlySubtext: "Per month, billed yearly",
    yearlyTotal: "$348 per year",
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <main className="min-h-screen relative bg-white">
      <AnnouncementBar />
      <Navbar />

      <div className="pt-32 pb-24 px-6">
        <section className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d1f2d] mb-4">
              Simple,{" "}
              <span className="bg-[#c5f135] px-2 rounded-sm inline-block">
                scalable pricing
              </span>
            </h1>
            <p className="text-gray-500">
              No extra charges. No hidden fees.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-4 text-sm font-medium text-[#0d1f2d]">
              <span
                className={
                  billingPeriod === "monthly"
                    ? "text-[#0d1f2d]"
                    : "text-gray-400"
                }
              >
                Monthly
              </span>
              <button
                type="button"
                aria-label="Toggle billing period"
                onClick={() =>
                  setBillingPeriod((prev) =>
                    prev === "monthly" ? "yearly" : "monthly"
                  )
                }
                className="relative h-7 w-12 rounded-full bg-[#0d1f2d] flex items-center px-[3px] transition-colors"
              >
                <span
                  className={`h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${
                    billingPeriod === "yearly"
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={
                  billingPeriod === "yearly"
                    ? "text-[#0d1f2d]"
                    : "text-gray-400"
                }
              >
                Yearly
              </span>
            </div>

            {billingPeriod === "yearly" && (
              <div className="inline-flex items-center gap-2 rounded-full bg-[#c5f135] px-4 py-2 text-xs font-semibold text-[#0d1f2d] shadow-sm">
                <span role="img" aria-hidden="true">
                  💰
                </span>
                SAVE UP TO 20% WITH YEARLY BILLING
              </div>
            )}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
            {plans.map((plan) => {
              const price =
                billingPeriod === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice;
              const subtext =
                billingPeriod === "monthly"
                  ? plan.monthlySubtext
                  : plan.yearlySubtext;

              const isPopular = plan.isPopular;

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl border bg-white px-8 py-10 text-center shadow-sm ${
                    isPopular
                      ? "border-[#0d1f2d] shadow-[0_20px_50px_rgba(0,0,0,0.08)] scale-[1.02]"
                      : "border-gray-200"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c5f135] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0d1f2d] shadow-sm">
                      Best value!
                    </div>
                  )}
                  <h2 className="mb-4 text-lg font-semibold text-[#0d1f2d]">
                    {plan.name}
                  </h2>
                  <div className="mb-1 flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-[#0d1f2d] self-start">
                      $
                    </span>
                    <span className="text-6xl font-extrabold tracking-tight text-[#0d1f2d]">
                      {price}
                    </span>
                  </div>
                  <p className="mb-6 text-xs font-medium text-gray-400">
                    {subtext}
                  </p>
                  <button
                    type="button"
                    className={`mb-3 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isPopular
                        ? "bg-[#0d1f2d] text-white hover:opacity-90"
                        : "bg-[#f1f4f5] text-[#0d1f2d] hover:bg-gray-200"
                    }`}
                  >
                    {plan.name === "Free" ? "Start for free" : "Get started"}
                  </button>
                  {billingPeriod === "yearly" && plan.yearlyTotal && (
                    <p className="text-[11px] font-medium text-gray-400">
                      Billed {plan.yearlyTotal}
                    </p>
                  )}
                  {billingPeriod === "monthly" && plan.name === "Free" && (
                    <p className="text-[11px] font-medium text-gray-400">
                      No credit card required
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Compare section copy */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#0d1f2d] mb-2">
              Let&apos;s compare plans and choose what&apos;s right for your
              needs!
            </h2>
            <p className="text-sm text-gray-500">
              Start with Free and upgrade to Pro or Business any time as your
              team and automation needs grow.
            </p>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
