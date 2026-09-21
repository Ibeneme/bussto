"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "CRM", href: "#crm" },
      { label: "Omnichannel", href: "#omnichannel" },
      { label: "Workflows", href: "#workflows" },
      { label: "Reporting", href: "#reporting" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Reference", href: "#developers", badge: "Coming Soon" },
      { label: "Documentation", href: "#docs", badge: "Coming Soon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "mailto:sales@bussto.com", isExternal: true },
    ],
  },
];

export default function LandingPageFooter() {
  return (
    <footer className="w-full bg-black text-white  relative overflow-hidden">
      {/* Subtle ambient glow */}

      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Adjusted padding for smaller screens (px-5) up to large screens (px-12) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-16 lg:py-20 relative z-10">
        {/* Main Flex Container: Stacks on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white mb-4 group"
            >
              <Image
                src="/bussto.svg"
                alt="Bussto"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span>
                bussto
                <span className="text-[#DCFF36]">.</span>
              </span>
            </Link>

            <p className="text-white/55 text-[14px] sm:text-[15px] leading-relaxed max-w-[280px]">
              Customer service that feels effortless, fast, and remarkably
              human.
            </p>
          </div>

          {/* Link Columns Grid: 2 cols on mobile, 3 on tablet+ */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-12">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h4 className="text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase text-white/90 mb-4 sm:mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3 sm:space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          className="text-[13px] sm:text-[14px] text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[13px] sm:text-[14px] text-white/50 hover:text-white transition-colors duration-200 flex flex-wrap items-center gap-2"
                        >
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="text-[9px] sm:text-[10px] bg-white/10 text-white/70 px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 w-full select-none overflow-hidden">
          <h1 className="w-full text-center text-[clamp(6.6rem,28vw,20rem)]  md:text-[clamp(24.6rem)] font-black leading-[0.8] tracking-tighter text-[#ffffff] sm:text-left">
            Bussto<span className="text-[#a3e635]">.</span>
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6 sm:mb-8" />

        {/* Bottom Bar: Reverses order on mobile so copyright is at the very bottom */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6">
          <p className="text-[12px] sm:text-[13px] text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Bussto Technologies, Inc. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-[12px] sm:text-[13px] text-white/40">
            <Link
              href="/legal/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/legal/cookies"
              className="hover:text-white transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
