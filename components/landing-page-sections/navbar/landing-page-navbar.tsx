"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingPageGetStartedButton from "@/components/atoms/buttons/landing-page-get-started-button";

const solutionsItems = [
  {
    title: "Omnichannel",
    description: "Voice, chat, email, social in one workspace",
    href: "#omnichannel",
  },
  {
    title: "Workflows & Automation",
    description: "No-code process automation at scale",
    href: "#workflows",
  },
  {
    title: "Reporting & Analytics",
    description: "Metrics that tie to business outcomes",
    href: "#reporting",
  },
  {
    title: "Integrations",
    description: "30+ prebuilt connectors",
    href: "#integrations",
  },
];

interface LandingPageNavbarProps {
  showOnlyOneButton?: boolean;
  primaryButton?: "get-started" | "contact-sales";
  mobileShowOnlyOneButton?: boolean;
  mobilePrimaryButton?: "get-started" | "contact-sales";
}

export default function LandingPageNavbar({
  showOnlyOneButton = false,
  primaryButton = "get-started",
  mobileShowOnlyOneButton = false,
  mobilePrimaryButton = "get-started",
}: LandingPageNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close desktop solutions dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsSolutionsOpen(false);
      }

      // Close mobile menu when clicking outside
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !(target as HTMLElement).closest("[data-mobile-toggle]")
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileSolutionsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 sm:px-6 mx-4 ${
        isScrolled
          ? "top-4 sm:top-6 max-w-5xl mx-auto rounded-full bg-black/80 backdrop-blur-lg shadow-2xl py-3"
          : "top-0 max-w-7xl mx-auto w-full bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="w-full flex items-center justify-between relative">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
          >
            <Image
              src="/bussto.svg"
              alt="Bussto Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span>
              bussto<span style={{ color: "#a3e635" }}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium opacity-90 text-white">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1.5 hover:opacity-100 transition-opacity text-white cursor-pointer py-1"
              >
                <span>Solutions</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-black border border-white/10 p-3 shadow-2xl backdrop-blur-[40px] z-50 flex flex-col gap-2">
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider"
                      style={{ color: "#a3e635" }}
                    >
                      Intelligent CX
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Unified customer record for every interaction
                    </p>
                  </div>

                  {solutionsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/5 transition-colors flex flex-col gap-0.5 group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#a3e635] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-400 font-light">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="hover:opacity-100 transition-opacity text-white"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right side (Desktop Actions) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <LandingPageGetStartedButton
              align="right"
              showOnlyOne={showOnlyOneButton}
              primaryButton={primaryButton}
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            data-mobile-toggle
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsMobileSolutionsOpen(false);
            }}
            className="md:hidden relative z-[60] p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 mt-3 mx-2 sm:mx-4 rounded-2xl bg-[#0a0a0a]/95 border border-white/15 p-5 shadow-2xl backdrop-blur-3xl z-[55] flex flex-col gap-1"
        >
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              className="flex items-center justify-between text-base font-medium text-white py-3 w-full text-left"
            >
              <span>Solutions</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileSolutionsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileSolutionsOpen && (
              <div className="flex flex-col gap-1 pl-3 border-l border-white/10 mb-2 ml-1">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsMobileSolutionsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="py-2.5 text-sm text-gray-300 hover:text-[#a3e635] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-white py-3 hover:text-[#a3e635] transition-colors"
          >
            Pricing
          </Link>

          <div className="pt-3 border-t border-white/10 mt-1">
            <LandingPageGetStartedButton
              align="left"
              showOnlyOne={mobileShowOnlyOneButton}
              primaryButton={mobilePrimaryButton}
            />
          </div>
        </div>
      )}
    </header>
  );
}
