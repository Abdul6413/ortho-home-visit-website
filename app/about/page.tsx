import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DoctorProfile from "@/components/DoctorProfile";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About the Doctor",
  description: "Meet the orthopedic doctor offering home consultations across Delhi NCR — qualifications, areas of expertise and approach to care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About the doctor" intro="Orthopedic consultation that comes to you, with time to listen and explain." crumbs={[{ name: "About", path: "/about" }]} />
      <DoctorProfile />
      <div className="container-page pb-6"><EmergencyNotice /></div>
      <CtaBand />
    </>
  );
}
