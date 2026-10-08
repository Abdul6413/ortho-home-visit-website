import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import HomeVisitProcess from "@/components/HomeVisitProcess";
import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import DoctorProfile from "@/components/DoctorProfile";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Orthopedic Doctor Home Visit in Delhi NCR — Dr. Mohammad Zubair",
  description:
    "Dr. Mohammad Zubair offers orthopedic consultation at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Knee, joint and back pain, arthritis and elderly care. Call or WhatsApp +91 94569 38356.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <HomeVisitProcess />
      <Gallery />
      <WhyChoose />
      <DoctorProfile compact />
      <ServiceAreas />
      <Testimonials />
      <FAQ limit={5} />
      <CtaBand />
    </>
  );
}
