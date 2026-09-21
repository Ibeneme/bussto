import LandingPageNavbar from "@/components/landing-page-sections/navbar/landing-page-navbar";
import LandingPageFooter from "@/components/landing-page-sections/footer/landing-page-footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingPageNavbar />
      {children}
      <LandingPageFooter />
    </>
  );
}
