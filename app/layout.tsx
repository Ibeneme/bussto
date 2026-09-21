import type { Metadata } from "next";
import "./globals.css";
import { generateSeoMetadata } from "@/components/metadata/generate-seo-metadata";
import { ThemeProvider } from "@/contexts/theme-context";
import { lufga } from "@/constants/fonts";
import LayoutWrapper from "@/components/_layouts/layout-wrapper";

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: "Bussto: Customer Support Platform",
    description:
      "Fast, reliable customer support and service platform built for seamless user experiences.",
    path: "",
  }),
  icons: {
    icon: "/bussto.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lufga.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "var(--font-lufga), sans-serif" }}
      >
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}