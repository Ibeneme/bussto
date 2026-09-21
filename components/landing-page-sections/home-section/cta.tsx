"use client";

import React from "react";
import Link from "next/link";
import LandingPageGetStartedButton from "@/components/atoms/buttons/landing-page-get-started-button";

interface LandingCTASectionProps {
  showVideo?: boolean;
}

export default function LandingCTASection({
  showVideo = false,
}: LandingCTASectionProps) {
  const heroVideo = "/videos/hero.mp4";

  return (
    <section className="w-full pt-24 bg-black text-white relative overflow-hidden border-b border-white/10">


      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Main Header Copy */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Built for the future. <br className="hidden sm:block" />
          <span className="text-white/80">Available today.</span>
        </h2>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
          Join forward-thinking support teams delivering effortless, fast, and
          remarkably human customer service with bussto.
        </p>

        {/* Action Buttons */}
        <div className="max-w-5xl mb-32 mx-auto px-6 md:px-24 relative z-10">
          <LandingPageGetStartedButton />
        </div>
      </div>

      {/* Full-width Video Section */}
      {showVideo && (
        <div className="relative w-screen left-1/2 -translate-x-1/2 mb-0">
          <div className="relative w-full overflow-hidden border-y border-white/10">
            {/* <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover  max-h-[70vh]"
            /> */}

            {/* Stronger Noise Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "180px 180px",
              }}
            />

            {/* Extra fine grain layer */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-soft-light"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Subtle dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none" />
          </div>
        </div>
      )}
    </section>
  );
}
