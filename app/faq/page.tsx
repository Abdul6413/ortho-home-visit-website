import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import StructuredData from "@/components/StructuredData";
import { FAQS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Orthopedic Home Visit in Delhi NCR",
  description: "Answers about orthopedic home visits: what they are, areas covered, how to book, who can request one and how to get in touch.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema(FAQS)} />
      <PageHeader title="Frequently asked questions" intro="Common questions about orthopedic consultation at home." crumbs={[{ name: "FAQ", path: "/faq" }]} />
      <div className="container-page max-w-3xl py-12"><FAQ showHeading={false} /></div>
      <CtaBand />
    </>
  );
}
