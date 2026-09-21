import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EMAILS } from "@/constants/mail";
import {
  Sparkles,
  Users,
  Zap,
  ShieldCheck,
  MessageSquare,
  Bot,
  Activity,
  Clock,
  Globe,
  Layers,
} from "lucide-react";
import { IMAGES } from "@/constants/images";

export default function AboutComponent() {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        {/* Hero / Mission */}
        <div className="max-w-4xl mb-12 md:mb-16 text-left">
          <div className="inline-flex items-center gap-2 py-1 rounded-full  text-[#ffffff80] text-xs  uppercase tracking-wider mb-6">
            This is bussto
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-8">
            We are on a mission to make customer support{" "}
            <span className="text-[#ffffff80]">simple, fast, and human</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
            Bussto is built for modern teams who want to unify customer
            conversations across WhatsApp, email, live chat, and AI agents
            without the clutter of legacy helpdesks.
          </p>
        </div>

        {/* Stats Grid with Icons */}
        <div className="mb-24 sm:mb-32 text-left animate-on-scroll">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-neutral-950/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Global Edge Delivery</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Deployed across multi-region edge networks to ensure zero
                latency for your support agents and customers worldwide.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-neutral-950/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Unified Data Layer</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Seamlessly sync customer history across WhatsApp chats, email
                threads, and live chat widgets into one coherent view.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-neutral-950/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Enterprise Security</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                SOC2 compliant infrastructure with encrypted message storage,
                role-based access controls, and custom data retention.
              </p>
            </div>
          </div>
        </div>

        {/* Why it matters / The Vision */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 mb-24 sm:mb-32 items-center text-left">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Because we are all customers first.
            </h2>
            <p className="text-white/60 leading-relaxed text-base sm:text-medium">
              We have all experienced the frustration of endless ticket queues,
              unresponsive bots, and disjointed support channels. We built
              Bussto because support shouldn’t feel like a barrier between a
              company and its users.
            </p>
            <p className="text-white/60 leading-relaxed text-base sm:text-medium">
              By combining unified inbox workflows with smart AI agents, we
              empower teams to resolve issues faster and build genuine long-term
              customer loyalty.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed">
              &ldquo;Support shouldn’t feel like an operational burden. It
              should feel like a seamless conversation between people who
              actually care about the product.&rdquo;
            </p>
            <p className="mt-6 text-sm text-[#a3e635] ">
              — The Bussto Engineering & Product Team
            </p>
          </div>
        </div>

        {/* What we stand for - Enhanced with Unsplash Images & Icons */}
        <div className="mb-24 sm:mb-32 text-left">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              What we stand for
            </h2>
            <p className="text-white/50 text-sm sm:text-base">
              The core principles driving every line of code and feature we ship
              at Bussto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Simplicity First",
                description:
                  "We strip away enterprise bloat to deliver clean, lightning-fast interfaces that teams love using every day.",
                icon: Zap,
                image:
                  "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Human Connections",
                description:
                  "Technology should bring teams and customers closer together, eliminating friction from every single touchpoint.",
                icon: Users,
                image: IMAGES.hero,
              },
              {
                title: "AI with Purpose",
                description:
                  "Our AI agents handle repetitive triage and auto-resolutions so human agents can focus on high-value conversations.",
                icon: Sparkles,
                image:
                  "https://images.unsplash.com/photo-1746883741191-731ab4e2bb4f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-neutral-950/50 overflow-hidden flex flex-col text-left hover:border-[#a3e635]/30 transition-all duration-300 group"
                >
                  {/* Card Image with Overlay */}
                  <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-5 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#a3e635]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#a3e635] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Let’s build together / CTA Box */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-950 to-black p-8 sm:p-14 text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-[#a3e635]/5 opacity-30 pointer-events-none" />
          <div className="max-w-xl relative z-10">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
              Let’s build better support together
            </h2>
            <p className="text-white/55 mb-8 leading-relaxed text-sm sm:text-base">
              Whether you are a fast-growing startup or an established
              enterprise scaling your customer operations, Bussto has a plan for
              you.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#a3e635] text-black text-sm font-semibold hover:bg-[#bbf246] transition-all"
              >
                View pricing & plans
              </Link>
              <Link
                href={`mailto:${EMAILS.sales}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-semibold transition-all text-white"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
