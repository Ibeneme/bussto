"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PartnerLogo {
  name: string;
  logoSvg: React.ReactNode;
}

const partners: PartnerLogo[] = [
  {
    name: "GitHub",
    logoSvg: (
      <div className="flex items-center space-x-2.5">
        <svg
          className="w-6 h-6 text-white shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
        <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white">
          GitHub
        </span>
      </div>
    ),
  },
  {
    name: "Figma",
    logoSvg: (
      <div className="flex items-center space-x-2.5">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 shrink-0"
          viewBox="0 0 38 57"
          fill="none"
        >
          <path
            d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z"
            fill="#0ACF83"
          />
          <path
            d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z"
            fill="#1ABCFE"
          />
          <path
            d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z"
            fill="#F24E1E"
          />
          <path
            d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z"
            fill="#FF7262"
          />
          <path
            d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z"
            fill="#A259FF"
          />
        </svg>
        <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white">
          Figma
        </span>
      </div>
    ),
  },
  {
    name: "Gmail",
    logoSvg: (
      <div className="flex items-center space-x-2.5">
        <svg
          className="w-6 h-6 text-white shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white">
          Gmail
        </span>
      </div>
    ),
  },
  {
    name: "Slack",
    logoSvg: (
      <div className="flex items-center space-x-2.5">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 shrink-0"
          viewBox="0 0 127 127"
          fill="none"
        >
          <path
            d="M27.3 80c0 7.3-5.9 13.2-13.2 13.2C6.8 93.2.9 87.3.9 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z"
            fill="#E01E5A"
          />
          <path
            d="M47.1 27.3c-7.3 0-13.2-5.9-13.2-13.2C33.9 6.8 39.8.9 47.1.9c7.3 0 13.2 5.9 13.2 13.2v13.2H47.1zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14.1C6.8 60.3.9 54.4.9 47.1c0-7.3 5.9-13.2 13.2-13.2h33z"
            fill="#36C5F0"
          />
          <path
            d="M99.7 47.1c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.7V47.1zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14.1C66.7 6.8 72.6.9 79.9.9c7.3 0 13.2 5.9 13.2 13.2v33z"
            fill="#2EB67D"
          />
          <path
            d="M79.9 99.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.7h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2h-33z"
            fill="#ECB22E"
          />
        </svg>
        <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white">
          Slack
        </span>
      </div>
    ),
  },
  {
    name: "Notion",
    logoSvg: (
      <div className="flex items-center space-x-2.5">
        <svg
          className="w-6 h-6 text-white shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
        </svg>
        <span className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white">
          Notion
        </span>
      </div>
    ),
  },
  {
    name: "Salesforce",
    logoSvg: (
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center p-1 text-black shrink-0">
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.9 10.5c-.5-1.5-1.9-2.6-3.6-2.6-.4 0-.8.1-1.2.2C13.4 6.7 11.5 5 9.2 5 6.3 5 4 7.3 4 10.2c0 .4.1.8.2 1.1C2.5 12 1.3 13.5 1.3 15.3c0 2.2 1.8 4 4 4h14.7c2.2 0 4-1.8 4-4 0-1.8-1.2-3.3-3.1-3.8z" />
          </svg>
        </div>
        <span className="text-xs md:text-sm font-semibold tracking-tight text-white uppercase">
          salesforce
        </span>
      </div>
    ),
  },
];

export default function IntegrationsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

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
        logosRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 md:py-16 bg-black text-white overflow-hidden border-t border-b border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start">
        {/* Fine header text */}
        <div ref={headerRef} className="mb-6 md:mb-10"></div>

        <div
          ref={logosRef}
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-nowrap items-center justify-between gap-6 md:gap-8 lg:gap-12 py-8 md:border-t md:border-b border-white/10"
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center lg:justify-start hover:opacity-70 opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer py-2"
            >
              {partner.logoSvg}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm md:text-base text-white/40 max-w-md">
          Connect with the tools your team already loves.
        </p>
      </div>
    </section>
  );
}
