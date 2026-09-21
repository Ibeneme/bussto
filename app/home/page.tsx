import type { Metadata } from "next";
import {
  generateSeoMetadata,
  JsonLd,
} from "@/components/metadata/generate-seo-metadata";
import Hero from "@/components/landing-page-sections/home-section/hero";
import IntegrationsShowcase from "@/components/landing-page-sections/home-section/integrations-showcase";
import HomeStats from "@/components/landing-page-sections/home-section/home-stats";
import InfiniteTestimonials from "@/components/landing-page-sections/home-section/infinite-testimonials";
import Highlights from "@/components/landing-page-sections/home-section/highlights";
import LandingCTASection from "@/components/landing-page-sections/home-section/cta";

export const metadata: Metadata = generateSeoMetadata({
  title: "Bussto | Modern Customer Support & Ticketing Platform",
  description:
    "Fast, reliable customer support and service platform built for seamless user experiences and automated resolution.",
  path: "",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        title="Bussto | Modern Customer Support & Ticketing Platform"
        description="Fast, reliable customer support and service platform built for seamless user experiences and automated resolution."
        path=""
      />
      <main className="flex-1 flex flex-col">
        <Hero />
        <IntegrationsShowcase />
        <HomeStats />
        <InfiniteTestimonials />
        <Highlights />
        <LandingCTASection showVideo={true}/>
      </main>
    </>
  );
}
