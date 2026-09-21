"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCard {
  number: string;
  title: string;
  description: string;
  actionText: string;
}

const enterpriseFeatures: FeatureCard[] = [
  {
    number: "01",
    title: "Team Inbox",
    description:
      "Bring your whole team into one place to answer customer questions. Assign tasks, chat internally, and solve customer problems together faster.",
    actionText: "Join team workspace",
  },
  {
    number: "02",
    title: "All-in-One Messaging",
    description:
      "Reach customers everywhere they are. Send personalized email updates and news directly from a single screen.",
    actionText: "Start your campaign",
  },
  {
    number: "03",
    title: "Smart AI Assistant",
    description:
      "Learns your business inside and out to answer questions instantly and fix customer issues automatically 24/7.",
    actionText: "Test AI assistant",
  },
];

const individualFeatures: FeatureCard[] = [
  {
    number: "01",
    title: "Instant AI Replies",
    description:
      "Automatically routes incoming messages to the right answers in seconds, getting customers help before you even start typing.",
    actionText: "See AI in action",
  },
  {
    number: "02",
    title: "Unified Inbox",
    description:
      "Combine WhatsApp, email, live website chat, and social messages into one clean, super-fast screen.",
    actionText: "Try the shared inbox",
  },
  {
    number: "03",
    title: "Reliable & Simple Pricing",
    description:
      "Built to grow with your business without breaking down or slowing you down. Straightforward costs with no hidden fees.",
    actionText: "Calculate your cost",
  },
];

export default function EnterpriseSupportSection() {
  const [activeTab, setActiveTab] = useState<"companies" | "individuals">(
    "companies"
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const currentCards =
    activeTab === "companies" ? enterpriseFeatures : individualFeatures;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-[8rem] pb-[6rem] bg-black text-white overflow-hidden border-t border-b border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
        {/* Header Section */}
        <div ref={headerRef} className="text-left max-w-4xl mb-[5rem]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Companies / Individuals Toggle */}
            <div className="inline-flex p-1 rounded-full bg-neutral-900 border border-white/10">
              <button
                onClick={() => setActiveTab("companies")}
                className={`px-4 py-1.5 text-xs  tracking-wider rounded-full transition-all duration-300 ${
                  activeTab === "companies"
                    ? "bg-[#a3e635] text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Companies
              </button>
              <button
                onClick={() => setActiveTab("individuals")}
                className={`px-4 py-1.5 text-xs font-mono  tracking-wider rounded-full transition-all duration-300 ${
                  activeTab === "individuals"
                    ? "bg-[#a3e635] text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Individuals
              </button>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#f3f4f6] tracking-tight leading-[1.1]">
            {activeTab === "companies" ? (
              <>
                Customer support, team messaging, and automated AI chat made
                simple
                <span style={{ color: "#a3e635" }}>.</span>
              </>
            ) : (
              <>
                Speed up your daily workflow with simple smart inbox tools and
                fast AI
                <span style={{ color: "#a3e635" }}>.</span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-neutral-300 font-light max-w-2xl">
            {activeTab === "companies"
              ? "Connect all your support agents in one place. Send targeted customer emails, manage high message volumes effortlessly, and let AI answer common questions automatically."
              : "Take full control of your messages across all your channels. Use smart automation to save hours of repetitive typing every week."}
          </p>
        </div>

        {/* Feature Grid Section */}
        <div
          ref={gridRef}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[1.5rem]"
        >
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="p-[2rem] rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-none"
            >
              <div>
                <div className="w-[2.5rem] h-[2.5rem] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#a3e635] mb-[1.5rem] font-mono text-sm">
                  {card.number}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-[0.75rem]">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-[2rem] pt-[1rem] border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white transition-colors">
                <span>{card.actionText}</span>
                <span className="font-mono text-[#a3e635]">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
