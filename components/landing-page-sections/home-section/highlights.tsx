"use client";

import React, { useState, useEffect } from "react";

interface FeatureCard {
  id: string;
  badge: string;
  title: string;
  headline: string;
  summary: string;
  perk: string;
  icon: React.ReactNode;
}

/* =========================================================
   High-fidelity Isometric Stroke Icons
   Primary: #ffffff   Secondary/Depth: #ffffff45
   ========================================================= */

const IconCRM = () => (
  <svg
    width="340"
    height="340"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[400px]"
  >
    {/* Bottom layers – depth lines in #ffffff45 */}
    <path
      d="M85 248 L170 290 L255 248 L170 206 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M85 248 L85 268 L170 310 L170 290 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M255 248 L255 268 L170 310 L170 290 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M85 222 L170 264 L255 222 L170 180 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M85 222 L85 242 L170 284 L170 264 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M255 222 L255 242 L170 284 L170 264 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M85 196 L170 238 L255 196 L170 154 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M85 196 L85 216 L170 258 L170 238 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M255 196 L255 216 L170 258 L170 238 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M85 170 L170 212 L255 170 L170 128 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M85 170 L85 190 L170 232 L170 212 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M255 170 L255 190 L170 232 L170 212 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M85 144 L170 186 L255 144 L170 102 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M85 144 L85 164 L170 206 L170 186 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M255 144 L255 164 L170 206 L170 186 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Top plate – strongest */}
    <path
      d="M85 118 L170 160 L255 118 L170 76 Z"
      stroke="#ffffff"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    <path
      d="M85 118 L85 138 L170 180 L170 160 Z"
      stroke="#ffffff"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    <path
      d="M255 118 L255 138 L170 180 L170 160 Z"
      stroke="#ffffff"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    {/* Logo mark */}
    <circle cx="170" cy="118" r="20" stroke="#ffffff" strokeWidth="1.1" />
    <path
      d="M150 126 H190"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M154 135 H186"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const IconOmnichannel = () => (
  <svg
    width="340"
    height="340"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[400px]"
  >
    {/* Soft ambient rings */}
    <circle
      cx="170"
      cy="170"
      r="95"
      stroke="#ffffff15"
      strokeWidth="1"
      className="animate-pulse-slow"
    />
    <circle
      cx="170"
      cy="170"
      r="70"
      stroke="#ffffff10"
      strokeWidth="1"
      className="animate-pulse-slow"
    />
    {/* Back cubes – lighter */}
    <path
      d="M175 95 L215 115 L255 95 L215 75 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M175 95 L175 125 L215 145 L215 115 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M255 95 L255 125 L215 145 L215 115 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M215 140 L255 160 L295 140 L255 120 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M215 140 L215 170 L255 190 L255 160 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M295 140 L295 170 L255 190 L255 160 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    {/* Front / main cubes – full white */}
    <path
      d="M95 130 L135 150 L175 130 L135 110 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M95 130 L95 170 L135 190 L135 150 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M175 130 L175 170 L135 190 L135 150 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M145 175 L185 195 L225 175 L185 155 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M145 175 L145 215 L185 235 L185 195 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M225 175 L225 215 L185 235 L185 195 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M85 195 L125 215 L165 195 L125 175 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M85 195 L85 235 L125 255 L125 215 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M165 195 L165 235 L125 255 L125 215 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    {/* Small detail dots */}
    <circle cx="135" cy="130" r="2.2" fill="#ffffff" />
    <circle cx="185" cy="175" r="2.2" fill="#ffffff" />
    <circle cx="125" cy="195" r="2.2" fill="#ffffff" />
  </svg>
);

const IconWorkflows = () => (
  <svg
    width="340"
    height="340"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[400px]"
  >
    {/* Soft glow rings */}
    {/* <circle
      cx="170"
      cy="175"
      r="100"
      stroke="#ffffff12"
      strokeWidth="1"
      className="animate-pulse-slow"
    />
    <circle
      cx="170"
      cy="175"
      r="75"
      stroke="#ffffff08"
      strokeWidth="1"
      className="animate-pulse-slow"
    /> */}
    {/* Upper cube */}
    <path
      d="M155 85 L195 105 L235 85 L195 65 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M155 85 L155 125 L195 145 L195 105 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M235 85 L235 125 L195 145 L195 105 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    {/* Middle-left cube */}
    <path
      d="M90 140 L130 160 L170 140 L130 120 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M90 140 L90 180 L130 200 L130 160 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M170 140 L170 180 L130 200 L130 160 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    {/* Middle-right stacked */}
    <path
      d="M195 145 L235 165 L275 145 L235 125 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M195 145 L195 175 L235 195 L235 165 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M275 145 L275 175 L235 195 L235 165 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M195 175 L235 195 L275 175 L235 155 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M195 175 L195 205 L235 225 L235 195 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M275 175 L275 205 L235 225 L235 195 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    {/* Front lower cube */}
    <path
      d="M125 210 L165 230 L205 210 L165 190 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M125 210 L125 250 L165 270 L165 230 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M205 210 L205 250 L165 270 L165 230 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    {/* Detail dots */}
    <circle cx="195" cy="85" r="2" fill="#ffffff" />
    <circle cx="130" cy="140" r="2" fill="#ffffff" />
    <circle cx="165" cy="210" r="2" fill="#ffffff" />
  </svg>
);

const IconTicketing = () => (
  <svg
    width="340"
    height="340"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[400px]"
  >
    {/* Deep stack – bottom layers lighter */}
    <path
      d="M70 245 L170 295 L270 245 L170 195 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M70 245 L70 270 L170 320 L170 295 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M270 245 L270 270 L170 320 L170 295 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M70 210 L170 260 L270 210 L170 160 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M70 210 L70 235 L170 285 L170 260 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M270 210 L270 235 L170 285 L170 260 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    {/* Mid layers */}
    <path
      d="M70 175 L170 225 L270 175 L170 125 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M70 175 L70 200 L170 250 L170 225 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M270 175 L270 200 L170 250 L170 225 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Top ticket – strongest */}
    <path
      d="M70 140 L170 190 L270 140 L170 90 Z"
      stroke="#ffffff"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    <path
      d="M70 140 L70 165 L170 215 L170 190 Z"
      stroke="#ffffff"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    <path
      d="M270 140 L270 165 L170 215 L170 190 Z"
      stroke="#ffffff"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    {/* Ticket content lines */}
    <path
      d="M115 150 H225"
      stroke="#ffffff"
      strokeWidth="0.95"
      strokeLinecap="round"
    />
    <path
      d="M125 165 H215"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
  </svg>
);

const IconReporting = () => (
  <svg
    width="340"
    height="340"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[400px]"
  >
    {/* Vertical panels – exact style of your rightmost reference */}
    {/* Front short bars */}
    <path
      d="M55 255 L55 210 L75 200 L75 245 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M55 210 L75 200 L95 210 L75 220 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M80 245 L80 185 L100 175 L100 235 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M80 185 L100 175 L120 185 L100 195 Z"
      stroke="#ffffff45"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M105 235 L105 160 L125 150 L125 225 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M105 160 L125 150 L145 160 L125 170 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M130 225 L130 140 L150 130 L150 215 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M130 140 L150 130 L170 140 L150 150 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M155 215 L155 120 L175 110 L175 205 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M155 120 L175 110 L195 120 L175 130 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M180 205 L180 105 L200 95 L200 195 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M180 105 L200 95 L220 105 L200 115 Z"
      stroke="#ffffff"
      strokeWidth="1.05"
      strokeLinejoin="round"
    />
    <path
      d="M205 195 L205 95 L225 85 L225 185 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M205 95 L225 85 L245 95 L225 105 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    {/* Tallest back panels */}
    <path
      d="M230 185 L230 90 L250 80 L250 175 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M230 90 L250 80 L270 90 L250 100 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M255 175 L255 100 L275 90 L275 165 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M255 100 L275 90 L295 100 L275 110 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
  </svg>
);

const IconIntegrations = () => (
  <svg
    width="340"
    height="340"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[400px]"
  >
    {/* Soft rings */}
    <circle
      cx="170"
      cy="170"
      r="105"
      stroke="#ffffff10"
      strokeWidth="1"
      className="animate-pulse-slow"
    />
    <circle
      cx="170"
      cy="170"
      r="78"
      stroke="#ffffff08"
      strokeWidth="1"
      className="animate-pulse-slow"
    />
    {/* Central block */}
    <path
      d="M120 155 L170 180 L220 155 L170 130 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M120 155 L120 200 L170 225 L170 180 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M220 155 L220 200 L170 225 L170 180 Z"
      stroke="#ffffff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    {/* Left module */}
    <path
      d="M45 130 L85 150 L125 130 L85 110 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M45 130 L45 165 L85 185 L85 150 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M125 130 L125 165 L85 185 L85 150 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Right module */}
    <path
      d="M215 130 L255 150 L295 130 L255 110 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M215 130 L215 165 L255 185 L255 150 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M295 130 L295 165 L255 185 L255 150 Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Top connector block */}
    <path
      d="M140 75 L170 90 L200 75 L170 60 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M140 75 L140 100 L170 115 L170 90 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    <path
      d="M200 75 L200 100 L170 115 L170 90 Z"
      stroke="#ffffff45"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    {/* Connection lines */}
    <path d="M85 150 L120 165" stroke="#ffffff45" strokeWidth="0.9" />
    <path d="M255 150 L220 165" stroke="#ffffff45" strokeWidth="0.9" />
    <path d="M170 115 L170 130" stroke="#ffffff45" strokeWidth="0.9" />
  </svg>
);

/* ---------- Feature data ---------- */

const customerFeatures: FeatureCard[] = [
  {
    id: "crm",
    badge: "Customer Profile",
    title: "CRM",
    headline: "All your customer history in one easy view.",
    summary:
      "Stop digging around for past chats. See everything a customer bought, asked, or said instantly so your team never misses a detail.",
    perk: "Zero guesswork, instant context",
    icon: <IconCRM />,
  },
  {
    id: "omnichannel",
    badge: "Everywhere Support",
    title: "Omnichannel",
    headline: "Chat with customers on WhatsApp, email, and web in one place.",
    summary:
      "No more switching between ten different browser tabs. All customer messages land in a single stream that follows them wherever they go.",
    perk: "Never miss a single message",
    icon: <IconOmnichannel />,
  },
  {
    id: "workflows",
    badge: "Smart Automation",
    title: "Workflows",
    headline: "Let robot helpers handle the boring, repetitive chores.",
    summary:
      "Automatically send welcome texts, sort messages, and pass chats to the right team member without you having to lift a finger.",
    perk: "Save hours of busywork every day",
    icon: <IconWorkflows />,
  },
  {
    id: "ticketing",
    badge: "Issue Tracking",
    title: "Ticketing",
    headline: "Keep every customer request organized from start to finish.",
    summary:
      "Turn every conversation into a trackable ticket so nothing ever slips through the cracks or gets lost in the inbox.",
    perk: "Complete clarity on every case",
    icon: <IconTicketing />,
  },
  {
    id: "reporting",
    badge: "Live Insights",
    title: "Reporting",
    headline: "See how your business is doing at a quick glance.",
    summary:
      "Clear, picture-based charts show you how fast your team is replying and how happy your customers are, helping you make smart choices.",
    perk: "Clear data without the confusion",
    icon: <IconReporting />,
  },
  {
    id: "integrations",
    badge: "App Connections",
    title: "Integrations",
    headline: "Plug into the apps you already use with one click.",
    summary:
      "Connect your favorite payment tools, email lists, and team software instantly without needing to write a single line of code.",
    perk: "Plug and play setup in seconds",
    icon: <IconIntegrations />,
  },
];

export default function LaymanExperienceSection() {
  const [activeTab, setActiveTab] = useState<string>(customerFeatures[0].id);
  const [isAnimating, setIsAnimating] = useState(true);

  const activeFeature =
    customerFeatures.find((item) => item.id === activeTab) ||
    customerFeatures[0];

  // Trigger entrance animation on tab change
  useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => setIsAnimating(true), 30);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="w-full py-24 bg-black text-white border-t border-b border-white/10 relative overflow-hidden">
      {/* Custom keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1.5deg);
          }
        }

        @keyframes float-alt {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(-1.2deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes icon-enter {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-float {
          animation: float 5.5s ease-in-out infinite;
        }

        .animate-float-alt {
          animation: float-alt 6.2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-icon-enter {
          animation: icon-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-0 mb-12 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-left mb-4">
            Build customer moments that start with a friendly
            &ldquo;Hello&rdquo;
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-normal text-left">
            Give your team simple, powerful tools that make customer service
            effortless, fast, and remarkably human.
          </p>
        </div>

        {/* Pill Selector Bar */}
        <div className="w-full flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {customerFeatures.map((feat) => {
            const isSelected = feat.id === activeTab;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shrink-0 border flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#fff] text-black"
                    : "bg-neutral-900 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Display Spotlight Box */}
        <div className="w-full bg-neutral-950 border border-white/15 rounded-3xl p-4 md:p-8 relative overflow-hidden shadow-2xl">
  
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column: Details */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-snug">
                {activeFeature.headline}
              </h3>
              <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-8">
                {activeFeature.summary}
              </p>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-white/5 border border-white/10"
                //         style={{ color: "#a3e635" }}
              >
                <span>{activeFeature.perk}</span>
              </div>
            </div>

            {/* Right Column: Animated Icon */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
       
                <div
                  key={activeTab} // forces remount + re-trigger animation
                  className={`relative z-10 opacity-95 ${
                    isAnimating ? "animate-icon-enter" : "opacity-0"
                  }`}
                >
                  <div
                    className={
                      activeTab === "reporting" || activeTab === "ticketing"
                        ? "animate-float-alt"
                        : "animate-float"
                    }
                  >
                    {activeFeature.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
