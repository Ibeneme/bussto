import React from "react";
import Link from "next/link";
import { EMAILS } from "@/constants/mail"; // Make sure this points to your mail.tsx/ts file

export default function TermsOfServiceContent() {
  return (
    <div className="space-y-12 text-white/80 font-light leading-relaxed max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-white/50">
          Last Updated: September 20, 2026
        </p>
      </div>

      {/* 1. Acceptance of Terms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          1. Acceptance of Terms
        </h2>
        <p>
          Please read these Terms of Service (“Terms”) carefully before using
          the bussto website, CRM platform, API, or any related services
          (collectively, the “Services”).
        </p>
        <p>
          By accessing or using the Services you agree to be legally bound by
          these Terms. If you do not accept these Terms, do not use the
          Services.
        </p>
        <p>
          You represent that you are lawfully able to enter into contracts (you
          are not a minor). If you are entering into these Terms on behalf of a
          company or other entity, you represent that you have authority to bind
          that entity, and “you” includes both you personally and the entity you
          represent.
        </p>
      </section>

      {/* 2. Relationship to Master Agreement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          2. Relationship to Subscription Agreement
        </h2>
        <p>
          These Terms primarily govern use of the public website and free or
          trial access. Paid use of the bussto CRM platform is additionally
          governed by our Master Subscription Agreement (or other written
          contract signed between you and bussto). In the event of a conflict
          between these Terms and a signed Master Subscription Agreement, the
          signed agreement controls.
        </p>
      </section>

      {/* 3. Account Registration & Security */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          3. Account Registration and Security
        </h2>
        <p>
          To access certain features you must create an account. You agree to
          provide accurate, current, and complete information and to keep it
          updated. You are solely responsible for safeguarding your password and
          for all activity that occurs under your account.
        </p>
        <p>
          You must notify us immediately of any unauthorized use of your
          account. We are not liable for any loss arising from unauthorized use
          of your credentials.
        </p>
      </section>

      {/* 4. Customer Data Ownership */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          4. Customer Data Ownership and License
        </h2>
        <p>
          You retain all right, title, and interest in and to the data, content,
          and information you upload or transmit through the Services (“Customer
          Data”), including your end-customer contact records and conversation
          history.
        </p>
        <p>
          You grant bussto a limited, non-exclusive, worldwide license to host,
          process, transmit, and display Customer Data solely as necessary to
          provide and improve the Services, in accordance with our Privacy
          Policy and any Data Processing Addendum.
        </p>
      </section>

      {/* 5. Acceptable Use */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          5. Acceptable Use and Restrictions
        </h2>
        <p>
          You agree to use the Services only for lawful purposes. You shall not:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            Reverse engineer, decompile, disassemble, or attempt to extract the
            source code of the platform
          </li>
          <li>
            Use the Services to send unsolicited bulk messages (spam) or violate
            anti-spam laws
          </li>
          <li>
            Store or transmit highly regulated data (e.g. full payment card data
            or protected health information under HIPAA) unless you have a
            separate written agreement with us authorizing it
          </li>
          <li>
            Attempt to bypass rate limits, security controls, or access accounts
            that do not belong to you
          </li>
          <li>
            Use the Services in any way that could damage, disable, or impair
            the platform or interfere with any other party’s use
          </li>
        </ul>
      </section>

      {/* 6. Third-Party Integrations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          6. Third-Party Services and Integrations
        </h2>
        <p>
          The Services may allow you to connect third-party tools, channels, and
          applications. When you use a third-party integration you are
          interacting with that third party, not with bussto. We are not
          responsible for the availability, accuracy, privacy practices, or
          content of any third-party service.
        </p>
        <p>
          Your use of third-party services is governed solely by their own terms
          and privacy policies.
        </p>
      </section>

      {/* 7. Subscriptions & Billing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          7. Subscriptions, Billing, and Cancellation
        </h2>
        <p>
          Paid plans are billed on a subscription basis (monthly or annually)
          according to the plan and number of seats you select. Subscriptions
          automatically renew unless you cancel before the renewal date.
        </p>
        <p>
          Fees are non-refundable except where required by law. No refunds or
          credits are provided for partial billing periods, unused seats, or
          plan downgrades.
        </p>
      </section>

      {/* 8. Intellectual Property */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          8. Intellectual Property and Content
        </h2>
        <p>
          The Services, including all software, text, graphics, logos, and other
          content (“bussto Content”), are owned by bussto or its licensors and
          are protected by copyright, trademark, and other laws.
        </p>
        <p>
          We grant you a limited, revocable, non-sublicensable license to access
          and use the bussto Content solely as necessary to use the Services.
          You may not copy, modify, distribute, sell, or create derivative works
          from the bussto Content except as expressly permitted.
        </p>
      </section>

      {/* 9. Disclaimers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          9. Disclaimers
        </h2>
        <p className="uppercase text-sm tracking-wide text-white/60">
          THE SERVICES AND ALL CONTENT ARE PROVIDED ON AN “AS IS” AND “AS
          AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
          IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
          NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>
        <p>
          We do not warrant that the Services will be uninterrupted, error-free,
          or completely secure.
        </p>
      </section>

      {/* 10. Limitation of Liability */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          10. Limitation of Liability
        </h2>
        <p className="uppercase text-sm tracking-wide text-white/60">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BUSSTO AND ITS
          AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF
          PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR
          RELATING TO YOUR USE OF (OR INABILITY TO USE) THE SERVICES.
        </p>
        <p>
          Our total aggregate liability under these Terms shall not exceed the
          greater of (a) the amounts you paid us in the twelve (12) months
          preceding the claim, or (b) one hundred U.S. dollars ($100).
        </p>
      </section>

      {/* 11. Indemnification */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          11. Indemnification
        </h2>
        <p>
          You agree to defend, indemnify, and hold harmless bussto, its
          affiliates, and their respective officers, directors, employees, and
          agents from and against any claims, damages, losses, liabilities, and
          expenses (including reasonable attorneys’ fees) arising out of or
          related to your use of the Services, your Customer Data, your
          violation of these Terms, or your violation of any law or third-party
          rights.
        </p>
      </section>

      {/* 12. Termination */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          12. Termination and Data Export
        </h2>
        <p>
          We may suspend or terminate your access to the Services immediately if
          you breach these Terms or if we believe it is necessary to protect the
          security or integrity of the platform.
        </p>
        <p>
          Upon termination, your right to use the Services ceases. You may
          request an export of your Customer Data within thirty (30) days after
          termination. After that period we will permanently delete the data in
          accordance with our retention policy, except where we are required to
          retain it by law.
        </p>
      </section>

      {/* 13. Governing Law */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          13. Governing Law and Dispute Resolution
        </h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of Delaware, United States, without regard to its
          conflict of laws principles. Any legal action arising under these
          Terms shall be brought exclusively in the state or federal courts
          located in Delaware, and you consent to personal jurisdiction there.
        </p>
      </section>

      {/* 14. Changes to Terms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          14. Changes to These Terms
        </h2>
        <p>
          We may modify these Terms at any time by posting a revised version on
          the website. Continued use of the Services after the effective date of
          any changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      {/* 15. Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          15. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
          <Link
            href={`mailto:${EMAILS.support}`}
            className="text-[#DCFF36] underline hover:text-[#DCFF36]/90"
          >
            {EMAILS.support}
          </Link>
        </p>
      </section>
    </div>
  );
}
