import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceGrid from "@/components/ServiceGrid";
import CtaBand from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Orthopedic Services at Home in Delhi NCR",
  description: "Joint, knee and back pain, arthritis, sports injuries, fracture follow-up and elderly orthopedic care — consultation at home across Delhi NCR.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Orthopedic services" intro="Consultation and assessment at home for common bone, joint and muscle problems." crumbs={[{ name: "Services", path: "/services" }]} />
      <ServiceGrid headingId="all-services" heading="Choose a service to learn more" />
      <CtaBand />
    </>
  );
}
