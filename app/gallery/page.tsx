import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Orthopedic Home Visit in Delhi NCR",
  description: "Pictures of an orthopedic home visit in Delhi NCR: arrival, examination, X-ray review, fracture follow-up and care at home with Dr. Mohammad Zubair.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" intro="A look at how an orthopedic home visit works, from arrival to follow-up." crumbs={[{ name: "Gallery", path: "/gallery" }]} />
      <Gallery full headingId="full-gallery-heading" />
      <CtaBand />
    </>
  );
}
