"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";
import heroSvg from "@/assets/landing-page-images/home/hero.svg";
import LandingPageGetStartedButton from "@/components/atoms/buttons/landing-page-get-started-button";

export default function Hero() {
  useTheme();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-[#000] pb-24 pt-32">
      {/* Background Image Container with SVG Hero, Fine Radial Gradient Aura & Noise Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSvg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center transition-opacity duration-700"
          style={{
            filter: "brightness(0.65) contrast(1.1)",
          }}
        />

   

        {/* SVG Film Grain / Noise Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Bottom / Overall Readability Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </div>

      {/* Hero Bottom-Left Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-start text-left">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          style={{ color: "#ffffff" }}
        >
          The customer support platform for modern brands and businesses
          <span style={{ color: "#a3e635" }}>.</span>
        </h1>
        <p className="mt-6 mb-8 text-lg md:text-xl max-w-2xl font-light opacity-90 text-white/50 ">
          Empower your support team with automated workflows, intelligent
          routing, and real-time resolution tools designed for modern
          enterprises.
        </p>
        <LandingPageGetStartedButton align="left" />
      </div>
    </section>
  );
}
