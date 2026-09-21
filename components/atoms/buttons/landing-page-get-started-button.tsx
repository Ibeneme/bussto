import React from "react";
import Link from "next/link";
import { EMAILS } from "@/constants/mail"; // Make sure this points to your mail.tsx file

interface LandingPageGetStartedButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  showOnlyOne?: boolean;
  primaryButton?: "get-started" | "contact-sales";
  align?: "left" | "right" | "center";
}

export default function LandingPageGetStartedButton({
  href = "/auth/login",
  className = "",
  children = "Get Started",
  showOnlyOne = false, // By default, show both buttons
  primaryButton = "get-started",
  align = "center", // Default alignment is center
}: LandingPageGetStartedButtonProps) {
  // Shared height & alignment classes to keep them identical
  const sharedButtonClasses = `px-4 sm:px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg`;

  // Determine flex justification based on align prop
  const alignmentClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  // Render only Contact Sales if requested and showOnlyOne is true
  if (showOnlyOne && primaryButton === "contact-sales") {
    return (
      <div className={`flex w-full ${alignmentClass}`}>
        <a
          href={`mailto:${EMAILS.sales}`}
          className={`bg-neutral-900 text-white border border-white/15 hover:border-white/40 hover:bg-neutral-800 transition-all duration-200 ${sharedButtonClasses} ${className}`}
        >
          <span>Contact sales</span>
        </a>
      </div>
    );
  }

  // Render only Get Started if requested and showOnlyOne is true
  if (showOnlyOne && primaryButton === "get-started") {
    return (
      <div className={`flex w-full ${alignmentClass}`}>
        <Link
          href={href}
          style={{
            backgroundColor: "#a3e635",
            color: "#000000",
          }}
          className={`hover:opacity-90 ${sharedButtonClasses} ${className}`}
        >
          <span>{children}</span>
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    );
  }

  // Default: Show both buttons side-by-side with dynamic alignment
  return (
    <div
      className={`flex flex-row items-center gap-3 w-full ${alignmentClass}`}
    >
      {/* Get Started Button */}
      <Link
        href={href}
        style={{
          backgroundColor: "#a3e635",
          color: "#000000",
        }}
        className={`hover:opacity-90 ${sharedButtonClasses} ${className}`}
      >
        <span className="truncate">{children}</span>
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Contact Sales Button */}
      <a
        href={`mailto:${EMAILS.sales}`}
        className={`bg-neutral-900 text-white border border-white/15 hover:border-white/40 hover:bg-neutral-800 transition-all duration-200 ${sharedButtonClasses} ${className}`}
      >
        <span className="truncate">Contact sales</span>
      </a>
    </div>
  );
}
