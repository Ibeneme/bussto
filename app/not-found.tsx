"use client";

import React from "react";
import Link from "next/link";
import { Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="w-full min-h-[105vh] bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 py-20">
      {/* Ambient glow matching your theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] rounded-full blur-[120px] sm:blur-[160px] pointer-events-none opacity-[0.07]"
        style={{ backgroundColor: "#a3e635" }}
      />

      <div className="max-w-xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">
            Error 404
          </span>
        </div>

        {/* Big Code / Title */}
        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight mb-4 text-white">
          4<span style={{ color: "#fff" }}>0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
          This page took a wrong turn
        </h2>

        <p className="text-sm sm:text-base text-white/60 mb-10 leading-relaxed max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            style={{
              backgroundColor: "#a3e635",
              color: "#000000",
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg hover:opacity-90"
          >
            <Home className="w-4 h-4 pointer-events-none" strokeWidth={2.5} />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <HelpCircle
              className="w-4 h-4 pointer-events-none text-white/70"
              strokeWidth={2.2}
            />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
