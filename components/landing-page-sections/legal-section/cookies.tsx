import React from "react";
import Link from "next/link";
import { EMAILS } from "@/constants/mail"; // Make sure this points to your mail.tsx/ts file

export default function CookiePolicyContent() {
  return (
    <div className="space-y-10 text-white/80 font-light leading-relaxed">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          1. What Are Cookies?
        </h2>
        <p>
          Cookies are small data files placed on your computer or mobile device
          when you visit a website. We use cookies and similar tracking
          technologies (like web beacons and pixels) to ensure our CRM platform
          functions securely, to track user behavior to improve our software,
          and to store your preferences.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          2. Categorization of Cookies We Use
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-white/70">
          <li>
            <strong className="text-white">Strictly Necessary Cookies:</strong>{" "}
            These are required for the operation of our platform. They include
            cookies that enable you to log into secure areas, authenticate
            sessions, and prevent CSRF attacks. The platform cannot function
            without these.
          </li>
          <li>
            <strong className="text-white">
              Performance &amp; Analytics Cookies:
            </strong>{" "}
            These allow us to count visits and traffic sources so we can measure
            and improve the performance of our site. We use third-party services
            like Google Analytics and PostHog to understand how users interact
            with our features.
          </li>
          <li>
            <strong className="text-white">Functional Cookies:</strong> These
            enable the website to provide enhanced functionality and
            personalization, such as remembering your selected language,
            timezone, or dashboard layout preferences.
          </li>
          <li>
            <strong className="text-white">Targeting/Marketing Cookies:</strong>{" "}
            These may be set through our marketing pages by our advertising
            partners to build a profile of your interests and show you relevant
            adverts on other sites. (Note: We strictly do not use these inside
            the actual CRM application).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          3. Third-Party Cookies
        </h2>
        <p>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the service, deliver
          advertisements on and through the service, and process payments (e.g.,
          Stripe security tokens).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          4. Managing Your Cookie Preferences
        </h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in our
          Cookie Consent Manager prompt. Furthermore, you can amend your web
          browser controls to accept or refuse cookies. If you choose to reject
          strictly necessary cookies, you may still use our website, but access
          to the CRM dashboard will be restricted.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          5. Contact Us
        </h2>
        <p>
          If you have any questions about our use of cookies or tracking
          technologies, please contact us at{" "}
          <Link
            href={`mailto:${EMAILS.support}`}
            className="text-[#DCFF36] underline"
          >
            {EMAILS.support}
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
