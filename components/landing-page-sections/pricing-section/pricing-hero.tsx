"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroSvg from "@/assets/landing-page-images/home/pricing-hero.svg";

export default function PricingHero() {
  return (
    <section className="relative w-full min-h-[55vh] bg-black text-white flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden border-b border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src={heroSvg}
          alt="Pricing Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Noise Overlay Layer */}
      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />


      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <span className="text-xs uppercase tracking-widest text-white/70 mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          Pricing Plans
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Simple, transparent pricing <br className="hidden sm:block" />
          <span className="text-white/80">for every team.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Scale your customer support with powerful tools, predictable pricing,
          and zero hidden fees. Choose the plan that fits your growth.
        </p>
      </div>
    </section>
  );
}
