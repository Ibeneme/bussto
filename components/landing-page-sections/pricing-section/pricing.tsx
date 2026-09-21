"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EMAILS } from "@/constants/mail";

interface Plan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "For small teams that have outgrown a shared inbox and need core support essentials.",
    priceMonthly: 9.99,
    priceYearly: 7.99, // 20% off
    features: [
      "Full CRM & complete customer history",
      "Omnichannel inbox (WhatsApp, Email, Web)",
      "Ticketing system & basic routing",
      "Pre-written responses & macros",
      "Customer context in every conversation",
      "Basic automations & triggers",
      "Daily summary reports",
      "Up to 5 team members",
    ],
    cta: "Start free trial",
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "For teams ready to unify channels and resolve more tickets with AI assistance.",
    priceMonthly: 19.99,
    priceYearly: 15.99, // 20% off
    popular: true,
    features: [
      "Everything in Starter",
      "AI Agents for auto-resolutions",
      "1,500 Bussto AI credits / month",
      "Knowledge Base + AI answers",
      "Advanced workflows & smart routing",
      "Messaging, live chat & telephony",
      "Custom reporting & insights",
      "Unlimited team members",
      "Priority email support",
    ],
    cta: "Start free trial",
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "For teams optimizing operations with advanced automation, AI insights, and control.",
    priceMonthly: 59.99,
    priceYearly: 47.99, // 20% off
    features: [
      "Everything in Growth",
      "5,000 Bussto AI credits / month",
      "AI Agent Studio (build your own agents)",
      "Admin Copilot & Writing Tools",
      "Skills-based routing & IVR",
      "Advanced security, SSO & audit logs",
      "Sandbox environment",
      "Custom integrations & API access",
      "Dedicated success manager",
      "24/7 priority support",
    ],
    cta: "Contact sales",
  },
];

export default function PricingPage() {
  const [seats, setSeats] = useState(1);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual"
  );
  const MAX_SEATS = 40;
  const isYearly = billingCycle === "annual";

  const handleSeatsChange = (value: number) => {
    if (value < 1) return;
    if (value > MAX_SEATS) return;
    setSeats(value);
  };

  return (
    <section className="w-full bg-black text-white py-20 sm:py-24 pt-28 sm:pt-32 relative overflow-hidden">

   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Controls */}
        <div className="flex flex-col items-center justify-center gap-6 mb-6">
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-neutral-900 border border-white/15 shadow-lg backdrop-blur-md max-w-full">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span
                className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${
                  billingCycle === "annual"
                    ? "bg-black text-[#a3e635]"
                    : "bg-[#a3e635]/10 text-[#a3e635]"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>

          {/* Seat Selector */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60 font-medium">Seats:</span>
            <div className="flex items-center border border-white/15 rounded-xl overflow-hidden bg-neutral-900">
              <button
                type="button"
                onClick={() => handleSeatsChange(seats - 1)}
                disabled={seats <= 1}
                className="w-10 h-10 flex items-center justify-center text-white/75 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium text-base touch-manipulation"
              >
                −
              </button>
              <input
                type="number"
                value={seats}
                onChange={(e) => handleSeatsChange(Number(e.target.value))}
                className="w-14 h-10 bg-transparent text-center text-white text-sm font-medium outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min={1}
                max={MAX_SEATS}
              />
              <button
                type="button"
                onClick={() => handleSeatsChange(seats + 1)}
                disabled={seats >= MAX_SEATS}
                className="w-10 h-10 flex items-center justify-center text-white/75 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium text-base touch-manipulation"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Max seats note */}
        <div className="text-center mb-10 sm:mb-12 px-2">
          {seats >= MAX_SEATS ? (
            <p className="text-xs sm:text-sm text-[#a3e635]">
              Need more than 40 seats?{" "}
              <Link
                href="#contact"
                className="underline hover:text-white transition-colors"
              >
                Contact support
              </Link>
            </p>
          ) : (
            <p className="text-xs sm:text-sm text-white/40">
              Maximum 40 seats. Need more?{" "}
              <Link
                href="#contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Contact support
              </Link>
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const pricePerSeat = isYearly
              ? plan.priceYearly
              : plan.priceMonthly;
            const total = pricePerSeat * seats;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl border p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-[#a3e635]/50 bg-neutral-950 shadow-2xl"
                    : "border-white/10 bg-neutral-950/60 hover:border-white/20"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#a3e635] text-black whitespace-nowrap shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-end gap-1.5 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      ${total.toFixed(2)}
                    </span>
                    <span className="text-white/50 text-sm mb-1.5">/ mo</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">
                    ${pricePerSeat.toFixed(2)} per seat
                    {isYearly && " · billed annually"}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={plan.id === "pro" ? "#contact" : "#signup"}
                  className={`w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 mb-8 mt-6 inline-flex items-center justify-center ${
                    plan.popular
                      ? "bg-[#a3e635] text-black hover:bg-[#c8eb2f]"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <ul className="space-y-3.5 mt-auto">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-[#a3e635]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 sm:mt-16 text-center px-2">
          <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
            All plans include a 14-day free trial. No credit card required. Need
            a custom plan or more than 40 seats?{" "}
            <Link
              href={`mailto:${EMAILS.sales}`}
              className="text-[#a3e635] hover:underline whitespace-nowrap"
            >
              Talk to sales
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
