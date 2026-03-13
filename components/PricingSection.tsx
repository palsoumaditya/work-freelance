"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  subtext: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  yearlyText: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "0",
    subtext: "Free forever",
    buttonText: "Start for free",
    buttonVariant: "secondary",
    yearlyText: "Free forever!",
  },
  {
    name: "Pro",
    price: "9",
    subtext: "Per month billing yearly",
    buttonText: "Get started",
    buttonVariant: "primary",
    yearlyText: "Billed $108 per year.",
    isPopular: true,
  },
  {
    name: "Business",
    price: "29",
    subtext: "Per month billing yearly",
    buttonText: "Get started",
    buttonVariant: "secondary",
    yearlyText: "Billed $348 per year.",
  },
];

const features = [
  { name: "Real-time tracking and notifications", free: true, pro: true, business: true },
  { name: "Real-time analytics", free: false, pro: true, business: true },
  { name: "CRM and Zapier integrations", free: false, pro: true, business: true },
  { name: "Files uploads", free: "1GB", pro: "5GB", business: "Unlimited" },
  { name: "User performance", free: "1 user", pro: "10 users", business: "Unlimited users" },
  { name: "Unlimited team workspaces", free: true, pro: true, business: true },
  { name: "SSO support and custom user roles", free: false, pro: true, business: true },
  { name: "Approval workflows", free: false, pro: true, business: true },
  { name: "Salesforce integration", free: false, pro: false, business: true },
  { name: "Bulk send & Forms", free: "5 forms", pro: "50 forms", business: "Unlimited forms" },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="border border-gray-100 bg-white rounded-full px-4 py-1 mb-4 mx-auto w-fit shadow-sm">
            <span className="text-xs font-semibold text-gray-500">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f2d] mb-4">
            Simple, <span className="bg-[#c5f135] px-2 rounded-sm inline-block">scalable pricing</span>
          </h2>
          <p className="text-gray-500">No extra charges. No hidden fees.</p>
        </div>

        {/* Pricing Layout */}
        <div className="w-full flex flex-col items-center">
          {/* Illustration (Above table on mobile) */}
          <div className="pointer-events-none mb-10 flex w-full justify-center lg:hidden">
            <Image
              src="/price_section.svg"
              alt="Pricing Illustration"
              width={170}
              height={240}
              className="opacity-100"
              priority
            />
          </div>

          {/* Pricing Table */}
          <div className="w-full overflow-x-auto lg:overflow-visible z-10">
            <div className="min-w-[900px] lg:min-w-full bg-white border border-gray-100 rounded-[32px] relative">
              {/* Continuous highlight outline for the "Pro" column (matches reference) */}
              <div
                className="pointer-events-none absolute inset-y-0 z-20"
                style={{ left: "52%", width: "24%" }}
              >
                <div className="relative h-full w-full rounded-[20px] border-2 border-[#0d1f2d] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  {/* Slightly stronger right edge, like the reference */}
                  <div className="absolute inset-y-0 right-0 w-[3px] bg-[#0d1f2d] rounded-tr-[20px] rounded-br-[20px]" />
                </div>
              </div>

              <table className="relative z-10 w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="w-[28%] p-8 text-left align-top">
                      {/* Illustration (Left of plans on desktop, inside the table header column) */}
                      <div className="hidden lg:flex w-full justify-center pt-2">
                        <Image
                          src="/price_section.svg"
                          alt="Pricing Illustration"
                          width={170}
                          height={240}
                          className="opacity-100"
                        />
                      </div>
                    </th>
                    {plans.map((plan) => (
                      <th 
                        key={plan.name} 
                        className={`w-[24%] p-8 pb-10 text-center relative ${
                          plan.isPopular ? "" : ""
                        }`}
                      >
                        {plan.isPopular && (
                          <div className="absolute top-4 right-4 bg-[#c5f135] text-[#0d1f2d] text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm ring-1 ring-black/5">
                            Best value!
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-[#0d1f2d] mb-6">{plan.name}</h3>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <span className="text-2xl font-bold text-[#0d1f2d] self-start mt-1">$</span>
                          <span className="text-6xl font-extrabold text-[#0d1f2d] tracking-tight">{plan.price}</span>
                        </div>
                        <p className="text-xs text-gray-400 font-medium px-4">{plan.subtext}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, fIndex) => (
                    <tr key={feature.name} className={fIndex % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-5 px-8 text-sm font-semibold text-[#0d1f2d] border-t border-gray-50">
                        {feature.name}
                      </td>
                      <td className="p-5 text-center align-middle border-t border-gray-50">
                        {renderFeatureValue(feature.free)}
                      </td>
                      <td className="p-5 text-center align-middle border-t border-gray-50">
                        {renderFeatureValue(feature.pro)}
                      </td>
                      <td className="p-5 text-center align-middle border-t border-gray-50">
                        {renderFeatureValue(feature.business)}
                      </td>
                    </tr>
                  ))}
                  {/* Bottom Footer with Buttons */}
                  <tr>
                    <td className="p-8 pb-10" />
                    {plans.map((plan) => (
                      <td 
                        key={`${plan.name}-footer`} 
                        className={`p-8 pb-10 text-center border-t border-gray-50 ${
                          plan.isPopular ? "" : ""
                        }`}
                      >
                        <button className={`w-full py-4 rounded-2xl font-bold transition-all mb-4 ${
                          plan.buttonVariant === "primary"
                            ? "bg-[#0d1f2d] text-white hover:opacity-90 active:scale-95 shadow-lg shadow-navy/20"
                            : "bg-[#f1f4f5] text-[#0d1f2d] hover:bg-gray-200 active:scale-95"
                        }`}>
                          {plan.buttonText}
                        </button>
                        <p className="text-xs text-gray-400 font-medium">{plan.yearlyText}</p>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function renderFeatureValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`h-6 w-6 rounded-full flex items-center justify-center shadow-sm ${
            value ? "bg-[#1a3d3d]" : "bg-gray-200"
          }`}
        >
          {value ? (
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
          ) : (
            <X className="h-3.5 w-3.5 text-gray-500" strokeWidth={3} />
          )}
        </div>
      </div>
    );
  }
  return (
    <span className="inline-flex min-h-6 items-center justify-center text-sm font-bold text-[#0d1f2d]">
      {value}
    </span>
  );
}
