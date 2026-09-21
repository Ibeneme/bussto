import LandingCTASection from "@/components/landing-page-sections/home-section/cta";
import IntegrationsShowcase from "@/components/landing-page-sections/home-section/integrations-showcase";
import PricingSection from "@/components/landing-page-sections/pricing-section/pricing";
import PricingFAQ from "@/components/landing-page-sections/pricing-section/pricing-faqs";
import PricingHero from "@/components/landing-page-sections/pricing-section/pricing-hero";
import React from "react";

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PricingSection />
      <IntegrationsShowcase />
      <PricingFAQ />
      <LandingCTASection />
    </div>
  );
};

export default PricingPage;
