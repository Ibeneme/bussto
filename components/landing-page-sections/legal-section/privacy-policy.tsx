import React from "react";
import Link from "next/link";
import { EMAILS } from "@/constants/mail"; // Make sure this points to your mail.tsx/ts file

export default function PrivacyPolicyContent() {
  return (
    <div className="space-y-12 text-white/80 font-light leading-relaxed max-w-4xl">
      {/* Header / Effective Date */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Product Privacy Statement
        </h1>
        <p className="text-sm text-white/50">
          Effective Updated: September 20, 2026
        </p>
      </div>

      {/* 1. Introduction & Scope */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          1. Introduction & Scope
        </h2>
        <p>
          Welcome to <strong className="text-white">bussto</strong> (“bussto,”
          “we,” “us,” or “our”). We provide a modern SaaS Customer Relationship
          Management (CRM) platform that helps our business clients (“Client,”
          “you,” or “your”) manage communications and interactions with the
          end-users of their products and services (“Customers”).
        </p>
        <p>
          This Product Privacy Statement explains how we collect, use, disclose,
          and otherwise process Personal Data on behalf of our Clients in
          connection with their use of our products and services (collectively,
          the “Services”).
        </p>
        <p>
          When we process Personal Data under the direction of our Clients, we
          act as a <strong className="text-white">data processor</strong> (under
          GDPR) or <strong className="text-white">service provider</strong>{" "}
          (under CCPA). Our Clients are the data controllers / businesses. This
          Statement does <em>not</em> apply to data we collect on our own
          marketing website — that is covered by a separate Privacy Policy.
        </p>
        <p>
          Individuals seeking access, correction, or deletion of Personal Data
          stored in the Services should contact the relevant Client (the data
          controller) directly.
        </p>
      </section>

      {/* 2. Personal Data We Collect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          2. Personal Data We Collect or Receive
        </h2>
        <p>
          We receive or collect Personal Data that is stored in or transmitted
          through the Services by or on behalf of our Clients. This may include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            <strong className="text-white">Customer Data</strong> — contact
            information (name, email, phone, social handles, physical address),
            conversation history (WhatsApp, email, web chat, tickets), order &
            purchase history, and any other data Clients choose to store about
            their Customers.
          </li>
          <li>
            <strong className="text-white">Client User Data</strong> — name,
            email address, role, account credentials, device information
            (browser, OS, IP address, device ID), and usage data (pages viewed,
            feature interactions, timestamps, searches).
          </li>
          <li>
            <strong className="text-white">Integration Data</strong> —
            information authorized through third-party integrations (Shopify,
            Stripe, Slack, Meta, etc.) via APIs, webhooks, or workflows.
          </li>
        </ul>
        <p>
          We also collect limited technical and usage data automatically via
          cookies, log files, and similar technologies necessary for the
          operation and security of the Services.
        </p>
      </section>

      {/* 3. How We Use Personal Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          3. How We Use Personal Data
        </h2>
        <p>
          We process Personal Data only at the instruction of our Clients and in
          accordance with our agreements, for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Providing, operating, securing, and improving the Services</li>
          <li>
            Enabling Client Users to access and use the platform (including AI
            features such as summarization and intelligent routing)
          </li>
          <li>Responding to support requests, inquiries, and complaints</li>
          <li>
            Maintaining security, preventing fraud, and complying with
            applicable law
          </li>
          <li>
            Generating aggregated or de-identified insights to improve the
            product (never in a way that identifies individuals)
          </li>
        </ul>
      </section>

      {/* 4. How We Share Personal Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          4. How We Share Personal Data
        </h2>
        <p>
          We share Personal Data only in the following limited circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            With the Client and authorized Client Users (to the extent the data
            relates to their Customers or account)
          </li>
          <li>
            With carefully selected sub-processors that help us operate, secure,
            and improve the Services (a current list is available upon request)
          </li>
          <li>
            With Third-Party Applications that you choose to connect to the
            Services
          </li>
          <li>
            When required by law, or when we believe disclosure is necessary to
            protect rights, safety, or investigate fraud / illegal activity
          </li>
        </ul>
        <p>
          We do <strong className="text-white">not sell</strong> Personal Data.
        </p>
      </section>

      {/* 5. Security */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          5. How We Secure Personal Data
        </h2>
        <p>
          We implement industry-standard technical and organizational measures,
          including encryption in transit and at rest, access controls, regular
          penetration testing, and continuous monitoring. We maintain SOC 2 Type
          II compliance and regularly engage independent security experts.
        </p>
        <p>
          Clients remain responsible for protecting their own account
          credentials and for securing any devices or third-party applications
          connected to the Services.
        </p>
      </section>

      {/* 6. Cross-Border Transfers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          6. Cross-Border Data Transfers
        </h2>
        <p>
          The Services are hosted primarily in the European Union and the United
          States. When Personal Data is transferred outside the country of
          origin, we rely on appropriate safeguards such as Standard Contractual
          Clauses approved by the European Commission and other approved
          transfer mechanisms under applicable data protection laws.
        </p>
      </section>

      {/* 7. Data Retention */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          7. Data Retention
        </h2>
        <p>
          We retain Personal Data processed on behalf of Clients for as long as
          our contractual relationship remains active. After termination, we
          delete Customer Personal Data within{" "}
          <strong className="text-white">ninety (90) days</strong>, unless a
          longer period is required by law or requested by the Client in
          writing.
        </p>
        <p>
          Client Users with administrative rights can delete Customer data
          directly in the platform. We will permanently remove such data
          promptly (and in any case within 90 days of the request).
        </p>
        <p>
          Limited account, billing, and log data may be retained longer where
          necessary for legal, accounting, or security purposes, and will
          continue to be treated in accordance with this Statement.
        </p>
      </section>

      {/* 8. Data Subject Rights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          8. Data Subject Rights (GDPR & CCPA)
        </h2>
        <p>
          Clients are the data controllers / businesses and are responsible for
          responding to requests from their Customers. If we receive a data
          subject request directly, we will direct the individual to contact the
          relevant Client and will assist the Client in fulfilling the request
          as required under our agreements and applicable law.
        </p>
        <p>
          Under the CCPA we do not “sell” or “share” Personal Data for
          cross-context behavioral advertising. We process Personal Data solely
          to perform our contractual obligations.
        </p>
      </section>

      {/* 9. Do Not Track */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          9. Do Not Track
        </h2>
        <p>
          Because certain tracking of Client User activity is necessary for the
          proper functioning and security of the Services, we currently do not
          respond to “Do Not Track” browser signals.
        </p>
      </section>

      {/* 10. Changes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          10. Changes to This Statement
        </h2>
        <p>
          If we make material changes, we will notify Clients in a manner we
          reasonably believe will reach them (email, in-app notice, or
          announcement on this page).
        </p>
      </section>

      {/* 11. Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          11. Contact Us
        </h2>
        <p>
          If you are a Client and have questions about this Product Privacy
          Statement, please contact us at:
        </p>
        <p>
          <Link
            href={`mailto:${EMAILS.support}`}
            className="text-[#DCFF36] underline hover:text-[#DCFF36]/90"
          >
            {EMAILS.support}
          </Link>
        </p>
        <p className="text-sm text-white/50 pt-2">
          For alternative formats or accessibility needs, reach out to the same
          address.
        </p>
      </section>
    </div>
  );
}
