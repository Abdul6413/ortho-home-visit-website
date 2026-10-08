import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { LAST_UPDATED } from "@/lib/constants";
import { displayName } from "@/lib/site-config";
import { MEDICAL_DISCLAIMER } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms for using this website and requesting orthopedic home visits.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Use" intro={`Last updated: ${LAST_UPDATED}`} crumbs={[{ name: "Terms", path: "/terms" }]} />
      <div className="container-page prose-page max-w-3xl py-12">
        <p>By using this website you agree to these terms. This is a general template — please have it reviewed by a legal professional for {displayName()}.</p>
        <h2>Medical disclaimer</h2>
        <p>{MEDICAL_DISCLAIMER}</p>
        <h2>Appointments</h2>
        <p>Submitting the form is a request, not a confirmed appointment. A visit is confirmed only when we contact you. Availability depends on location and schedule, and fees are shared before confirmation.</p>
        <h2>No emergency service</h2>
        <p>Home visits are not an emergency service. In an emergency, call 112 or go to the nearest hospital.</p>
        <h2>Website content</h2>
        <p>Content is provided for general information. We aim to keep it accurate but make no guarantee of completeness. Outcomes of any treatment vary between individuals.</p>
        <h2>Acceptable use</h2>
        <p>Do not misuse the site, submit false information or attempt to disrupt it.</p>
        <h2>Changes</h2>
        <p>We may update these terms from time to time. Continued use means you accept the updated terms.</p>
      </div>
    </>
  );
}
