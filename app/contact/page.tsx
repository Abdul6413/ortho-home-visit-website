import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookButton from "@/components/BookButton";
import EmergencyNotice from "@/components/EmergencyNotice";
import { buildMetadata } from "@/lib/seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { formatPhone, siteConfig, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dr. Mohammad Zubair — Orthopedic Home Visit Delhi NCR",
  description: "Call or WhatsApp Dr. Mohammad Zubair on +91 94569 38356, or request an orthopedic home visit in Delhi NCR online.",
  path: "/contact",
});

export default function ContactPage() {
  const c = siteConfig;
  return (
    <>
      <PageHeader title="Contact us" intro="Reach us to ask a question or arrange an orthopedic home visit." crumbs={[{ name: "Contact", path: "/contact" }]} />
      <div className="container-page grid gap-8 py-12 lg:grid-cols-2">
        <div className="card space-y-5">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <ul className="space-y-4">
            <li className="flex gap-3"><Phone aria-hidden="true" className="mt-1 h-5 w-5 text-brand-600" /><span>{c.phone ? <a className="font-semibold underline" href={`tel:${c.phone.replace(/[^\d+]/g, "")}`}>{formatPhone(c.phone)}</a> : "Phone number coming soon"}</span></li>
            {c.whatsapp && (
              <li className="flex gap-3"><WhatsAppIcon className="mt-1 h-5 w-5 text-[#128C7E]" /><span><a className="font-semibold underline" href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp {formatPhone(c.whatsapp)}</a></span></li>
            )}
            <li className="flex gap-3"><Mail aria-hidden="true" className="mt-1 h-5 w-5 text-brand-600" /><span>{c.email ? <a className="break-all font-semibold underline" href={`mailto:${c.email}`}>{c.email}</a> : "Email coming soon"}</span></li>
            <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-1 h-5 w-5 text-brand-600" /><span>{c.address ? `${c.address.street}, ${c.address.locality}, ${c.address.city} ${c.address.postalCode}` : "Home visits across Delhi NCR"}</span></li>
            <li className="flex gap-3"><Clock aria-hidden="true" className="mt-1 h-5 w-5 text-brand-600" /><span>{c.hoursNote}</span></li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row"><CallButton location="contact" /><WhatsAppButton location="contact" /></div>
        </div>
        <div className="space-y-5">
          <div className="card">
            <h2 className="text-2xl font-semibold">Prefer to book online?</h2>
            <p className="mt-2 text-slate-700">Share your area, preferred date and a short description and we will get back to you.</p>
            <div className="mt-5"><BookButton location="contact" /></div>
          </div>
          <EmergencyNotice />
        </div>
      </div>
    </>
  );
}
