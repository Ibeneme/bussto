import CookiePolicyContent from "@/components/landing-page-sections/legal-section/cookies";
import React from "react";

export const metadata = {
  title: "Cookie Policy | bussto.",
  description: "Understand how we use cookies and tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="w-full bg-black text-white min-h-screen py-24 pt-32 px-6 md:px-12 relative overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-[0.05]"
        style={{ backgroundColor: "#DCFF36" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 border-b border-white/10 pb-8">
          <span className="text-xs uppercase tracking-widest text-[#DCFF36] mb-3 inline-block px-3 py-1 rounded bg-white/5 border border-white/10">
            Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-white/60 text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <CookiePolicyContent />
      </div>
    </main>
  );
}
