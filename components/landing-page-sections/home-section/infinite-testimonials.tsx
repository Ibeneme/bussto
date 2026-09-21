"use client";

import React from "react";
import Image from "next/image";
import pickars from "@/assets/landing-page-images/home/pickars.svg";
import colsphere from "@/assets/landing-page-images/home/colsphere.svg";
import boringthinkers from "@/assets/landing-page-images/home/boringthinkers.svg";
import yare from "@/assets/landing-page-images/home/yare.svg";

interface ReviewDetails {
  organization: string;
  artwork: string;
  metric?: string;
  metricDesc?: string;
  statement?: string;
  spokesperson: string;
}

const customerReviews: ReviewDetails[] = [
  {
    organization: "Boring Thinkers",
    artwork: boringthinkers,
    metric: "21%",
    metricDesc: "Growth in long-term customer value",
    spokesperson: "Benjamin, Managing Director",
  },
  {
    organization: "Pickars",
    artwork: pickars,
    metric: "40%",
    metricDesc: "Reduction in per-interaction support expenses",
    spokesperson: "Sandra, Head of Support",
  },
  {
    organization: "Colsphere",
    artwork: colsphere,
    statement:
      "Client happiness has jumped by 40%, freeing our crew to concentrate on complex, high-touch human engagement.",
    spokesperson: "Reeves, Co-Founder and CRO",
  },
  {
    organization: "Yare",
    artwork: yare,
    metric: "3.5x",
    metricDesc: "Faster turnaround on customer inquiries",
    spokesperson: "Boma, Lead Operations",
  },
];

export default function MarqueeTestimonials() {
  const extendedReviews = [...customerReviews, ...customerReviews];

  return (
    <section className="w-full py-20 bg-black text-white overflow-hidden border-t border-b border-white/10 relative">
      {/* Decorative ambient lighting backdrops */}
      {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#a3e635]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto  md:px-12 flex flex-col items-start">
        {/* Left-aligned text container with max-width 3xl and flushed left margin */}
        <div className="max-w-3xl mx-0 px-6 md:px-0 mb-12 flex flex-col items-start text-left relative z-10">
          {/* <span
          className="text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          style={{ color: "#a3e635" }}
        >
          Proven Impact
        </span> */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-left mb-4">
            Trusted by top creators and brands globally.
          </h2>
          <p className="text-base mb-16 sm:text-lg text-white/70 font-normal text-left">
            Discover how innovative companies use our platform to accelerate
            growth, reduce support overhead, and deliver exceptional client
            experiences.
          </p>
        </div>{" "}
      </div>

      {/* Continuous Marquee Container */}
      <div className="w-full relative overflow-hidden flex z-10">
        <div className="animate-marquee flex gap-6 px-3">
          {extendedReviews.map((entry, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[380px] h-[480px] rounded-3xl overflow-hidden flex flex-col justify-between p-6 shrink-0 border border-white/15 bg-black/40 group shadow-2xl"
            >
              {/* Visual Asset Background with Overlay Effects */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={entry.artwork}
                  alt={entry.organization}
                  fill
                  sizes="(max-width: 640px) 340px, 380px"
                  quality={75}
                  priority={idx < 4}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-50"
                />

                {/* Texture Grain Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay z-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />
              </div>

              {/* Top Branding Pill */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-white/90 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
                  {entry.organization}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-20 flex flex-col justify-end mt-auto pt-20">
                {entry.metric ? (
                  <>
                    <div
                      className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-md"
                      style={{ color: "#a3e635" }}
                    >
                      {entry.metric}
                    </div>
                    <p className="text-base sm:text-lg font-medium text-white/90 leading-snug mb-3">
                      {entry.metricDesc}
                    </p>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                      — {entry.spokesperson}
                    </span>
                  </>
                ) : (
                  <>
                    <p className="text-base sm:text-lg font-medium text-white/90 leading-snug mb-4">
                      &ldquo;{entry.statement}&rdquo;
                    </p>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                      — {entry.spokesperson}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
