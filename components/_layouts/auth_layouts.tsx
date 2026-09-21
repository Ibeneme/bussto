"use client";

import { useTheme } from "@/contexts/theme-context";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IMAGES } from "@/constants/images"; // Adjust import path to match your project structure

const rotatingImages: { key: string; src: string | StaticImageData }[] = [
  { key: "auth_image_b", src: IMAGES.hero },
//   { key: "auth_image_c", src: IMAGES.auth_image_c },
//   { key: "auth_image_d", src: IMAGES.auth_image_d },
//   { key: "auth_image_e", src: IMAGES.auth_image_e },
//   { key: "auth_image_f", src: IMAGES.auth_image_f },
//   { key: "auth_image_g", src: IMAGES.auth_image_g },
//   { key: "auth_image_h", src: IMAGES.auth_image_h },
//   { key: "auth_image_i", src: IMAGES.auth_image_i },
//   { key: "auth_image_j", src: IMAGES.auth_image_j },
//   { key: "auth_image_k", src: IMAGES.auth_image_k },
//   { key: "auth_image_l", src: IMAGES.auth_image_l },
];

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { theme, toggleTheme, colors } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(11);

  // Pick a random image index on initial mount/page reload and log it
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * rotatingImages.length);
    setCurrentImageIndex(randomIndex);
    console.log(
      "Current Auth Image Loaded:",
      rotatingImages[randomIndex].key,
      rotatingImages[randomIndex].src
    );
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bg,
        color: colors.text,
        display: "flex",
        width: "100%",
        position: "relative",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Mobile Header (Small Screens Only) */}
      <header
        className="flex lg:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "1rem 1.25rem",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 30,
          backgroundColor: colors.bg,
          borderBottom: `1px solid ${colors.text}15`,
        }}
      >
        <Link href="/" className="inline-block cursor-pointer">
          <Image
            src={IMAGES.bussto}
            alt="Bussto Logo"
            width={120}
            height={32}
            priority
            className="cursor-pointer"
            style={{ height: "auto", width: "auto", maxHeight: "32px" }}
          />
        </Link>
        <button
          onClick={toggleTheme}
          type="button"
          aria-label="Toggle theme"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "0.5rem",
            backgroundColor: colors.shadeBg,
            color: colors.text,
            border: `1px solid ${colors.text}20`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {theme === "dark" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </header>

      {/* Left Panel: FIXED Viewport-Locked with Static Reload Image */}
      <div
        className="hidden lg:flex"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "50%",
          height: "100vh",
          overflow: "hidden",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        {/* Left Floating Header Overlay */}
        <header
          style={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            right: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <Link href="/" className="inline-block cursor-pointer">
            <Image
              src={IMAGES.bussto}
              alt="Bussto Logo"
              width={130}
              height={36}
              priority
              style={{ height: "auto", width: "auto", maxHeight: "36px" }}
            />
          </Link>
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.5rem",
              backgroundColor: colors.shadeBg,
              color: colors.text,
              border: `1px solid ${colors.text}20`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {theme === "dark" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </header>

        {/* Full-bleed Cover Image Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {rotatingImages.map((item, index) => (
            <div
              key={item.key}
              style={{
                position: "absolute",
                inset: 0,
                opacity: index === currentImageIndex ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Image
                src={item.src}
                alt={`Bussto Auth Illustration ${index + 1}`}
                fill
                priority={index === 0}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Content Area with 32px Top Padding */}
      <div
        className="w-full lg:w-1/2 lg:ml-auto"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 1.5rem",
          paddingTop: "32px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          className="mt-16 lg:mt-0"
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "1.25rem",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
