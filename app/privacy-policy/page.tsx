import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { LAST_UPDATED } from "@/lib/constants";
import { displayName, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How we collect, use and protect personal information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  const email = siteConfig.email || "the email address on our Contact page";
  return (
    <>
      <PageHeader title="Privacy Policy" intro={`Last updated: ${LAST_UPDATED}`} crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <div className="container-page prose-page max-w-3xl py-12">
        <p>This policy explains how {displayName()} (“we”) handles personal information collected through this website. It is a general template — please have it reviewed against current Indian law, including the Digital Personal Data Protection Act, 2023, before relying on it.</p>
        <h2>Information we collect</h2>
        <ul>
          <li>Details you submit in the home visit form: name, mobile number, optional email, location, preferred date and time, service needed and a short description of the problem.</li>
          <li>Messages you send us by phone, WhatsApp or email.</li>
          <li>Anonymous usage data (pages visited, button clicks), only if you accept analytics.</li>
        </ul>
        <h2>How we use it</h2>
        <p>We use your details only to respond to your request, arrange and carry out the visit, and follow up on your care. We do not sell personal information.</p>
        <h2>Analytics</h2>
        <p>With your consent we use Google Analytics 4 to understand how the site is used. We never send names, phone numbers, health descriptions, addresses or appointment details to analytics. You can decline analytics and still use every part of the site.</p>
        <h2>Sharing</h2>
        <p>We share information only with service providers that help us deliver your request (for example email or messaging tools) or where the law requires it.</p>
        <h2>Retention and your rights</h2>
        <p>We keep request details only as long as needed for your care and legal record-keeping. You may ask to access, correct or delete your information by contacting {email}.</p>
        <h2>Security</h2>
        <p>We take reasonable steps to protect your information, but no online transmission is completely secure. Please avoid sharing sensitive details unless necessary.</p>
        <h2>Contact</h2>
        <p>For privacy questions, contact {email}.</p>
      </div>
    </>
  );
}
