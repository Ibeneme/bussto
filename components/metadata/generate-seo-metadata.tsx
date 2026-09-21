import type { Metadata } from "next";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  authorName?: string;
  noIndex?: boolean;
}

const siteConfig = {
  name: "Bussto",
  legalName: "Bussto Technologies Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bussto.com",
  twitterHandle: "@bussto_app",
  supportPhone: "+2349164860591",
  supportEmail: "support@bussto.com",
  defaultImage: "/opengraphs/og-image.png",
};

export function generateSeoMetadata({
  title = "Bussto: Your Modern Support & Service Hub",
  description = "Fast, reliable customer support and service platform built for seamless user experiences.",
  path = "",
  image = siteConfig.defaultImage,
  type = "website",
  noIndex = false,
}: SEOProps): Metadata {
  const fullUrl = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [
      "Bussto",
      "Customer Support",
      "Service Hub",
      "Help Desk",
      "SaaS",
      "Port Harcourt",
      "Nigeria",
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-NG": fullUrl,
        "x-default": fullUrl,
      },
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
      shortcut: "/logo.svg",
      apple: [{ url: "/logo.svg" }],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: siteConfig.name,
    },
    openGraph: {
      type,
      url: fullUrl,
      siteName: siteConfig.name,
      locale: "en_NG",
      title,
      description,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "geo.region": "NG-RI",
      "geo.placename": "Port Harcourt",
      "geo.position": "4.824167;7.080833",
      ICBM: "4.824167, 7.080833",
      language: "English",
      coverage: "Port Harcourt, Rivers State, Nigeria",
      distribution: "local",
      target: "all",
      HandheldFriendly: "True",
      MobileOptimized: "320",
      "format-detection": "telephone=no",
    },
  };
}

interface JsonLdProps {
  title?: string;
  description?: string;
  path?: string;
  type?: "WebSite" | "WebPage" | "Organization" | "LocalBusiness" | "FAQPage";
}

export function JsonLd({
  title = "Bussto: Your Modern Support & Service Hub",
  description = "Fast, reliable customer support and service platform built for seamless user experiences.",
  path = "",
}: JsonLdProps) {
  const fullUrl = `${siteConfig.url}${path}`;
  const logoUrl = `${siteConfig.url}/logo.svg`;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        description,
        inLanguage: "en-NG",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 1200,
          height: 630,
        },
        sameAs: [
          "https://www.instagram.com/bussto_official",
          "https://x.com/bussto_app",
          "https://www.linkedin.com/company/bussto",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.supportPhone,
            email: siteConfig.supportEmail,
            contactType: "customer service",
            areaServed: "NG",
            availableLanguage: ["English"],
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
