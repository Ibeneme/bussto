"use client";

import { usePathname } from "next/navigation";
import LandingPageNavbar from "@/components/landing-page-sections/navbar/landing-page-navbar";
import LandingPageFooter from "@/components/landing-page-sections/footer/landing-page-footer";

const HIDDEN_PREFIXES = ["/app", "/auth", "/dashboard", "/admin"];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHiddenRoute = HIDDEN_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isHiddenRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <LandingPageNavbar />
      {children}
      <LandingPageFooter />
    </>
  );
}
