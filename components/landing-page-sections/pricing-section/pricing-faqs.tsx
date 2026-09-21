"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EMAILS } from "@/constants/mail";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer: (
      <>
        Every plan includes a 14-day free trial. No credit card is required to
        start. You will get full access to the features of the plan you choose
        during the trial period.
      </>
    ),
  },
  {
    question: "Can I change or upgrade my plan later?",
    answer: (
      <>
        Yes. You can upgrade, downgrade, or change the number of seats at any
        time from your billing settings. Changes take effect immediately and are
        prorated.
      </>
    ),
  },
  {
    question: "How does seat-based pricing work?",
    answer: (
      <>
        You only pay for the number of team members who need access to the
        platform. You can add or remove seats at any time. The price shown is
        calculated based on the number of seats you select.
      </>
    ),
  },
  {
    question: "What happens if I need more than 40 seats?",
    answer: (
      <>
        Our self-serve plans support up to 40 seats. If you need more, or
        require custom security, SLAs, or dedicated support, please{" "}
        <Link
          href={`mailto:${EMAILS.sales}`}
          className="text-[#a3e635] hover:underline"
        >
          contact our sales team
        </Link>{" "}
        for an Enterprise plan.
      </>
    ),
  },
  {
    question: "What is the difference between monthly and annual billing?",
    answer: (
      <>
        Annual billing gives you a 20% discount compared to monthly billing. You
        are billed once per year instead of every month. You can switch between
        monthly and annual at any time.
      </>
    ),
  },
  {
    question: "How do Bussto AI credits work?",
    answer: (
      <>
        AI credits are used for AI Agents, auto-resolutions, summarization, and
        other AI-powered features. Starter does not include AI credits. Growth
        includes 1,500 credits per month and Pro includes 5,000 credits per
        month. Unused credits do not roll over.
      </>
    ),
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: (
      <>
        Yes. You can cancel your subscription at any time from your account
        settings. Your access will continue until the end of your current
        billing period. We do not offer refunds for partial periods.
      </>
    ),
  },
  {
    question: "Do you offer custom or Enterprise plans?",
    answer: (
      <>
        Yes. For larger teams that need advanced security, custom integrations,
        dedicated success managers, or higher AI limits, we offer custom
        Enterprise plans.{" "}
        <Link
          href={`mailto:${EMAILS.sales}`}
          className="text-[#a3e635] hover:underline"
        >
          Talk to sales
        </Link>{" "}
        to get started.
      </>
    ),
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Two Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Header & Help Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs uppercase tracking-wider">
                Support & Info
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Frequently asked questions
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Everything you need to know about pricing, billing, plans, and
                AI credits on the Bussto platform.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl border border-white/10 bg-neutral-950/80 backdrop-blur-md space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Still have questions?
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Can&apos;t find the answer you&apos;re looking for? Our team is
                always here to chat about your workflow requirements.
              </p>
              <Link
                href={`mailto:${EMAILS.sales}`}
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#a3e635] text-black font-semibold text-sm hover:bg-[#bbf246] transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#a3e635]/40 bg-neutral-950 shadow-lg shadow-[#a3e635]/5"
                      : "border-white/10 bg-neutral-950/40 hover:border-white/20 hover:bg-neutral-950/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-medium text-white/90">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#a3e635] text-black rotate-45"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
