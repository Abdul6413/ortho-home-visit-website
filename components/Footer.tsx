import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SERVICES, NAV_LINKS } from "@/lib/constants";
import { displayName, formatPhone, siteConfig, telHref } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const year = new Date().getFullYear();
  const c = siteConfig;
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-semibold text-white">{displayName()}</p>
          <p className="mt-3 text-sm leading-relaxed text-navy-200">
            Orthopedic consultation at home across Delhi NCR. Patient-focused, unhurried care for bone, joint and mobility concerns.
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="font-sans text-base font-semibold text-white">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white hover:underline">{s.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-base font-semibold text-white">Service areas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {c.serviceAreas.map((a) => (
              <li key={a}><Link href={`/areas-we-serve#${a.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white hover:underline">{a}</Link></li>
            ))}
          </ul>
          <h2 className="mt-6 font-sans text-base font-semibold text-white">Quick links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm">
            {c.phone && (
              <li className="flex gap-2"><Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /><a href={telHref()} className="hover:text-white hover:underline">{formatPhone(c.phone)}</a></li>
            )}
            {c.email && (
              <li className="flex gap-2"><Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /><a href={`mailto:${c.email}`} className="break-all hover:text-white hover:underline">{c.email}</a></li>
            )}
            <li className="flex gap-2"><MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /><span>Home visits across Delhi NCR</span></li>
          </ul>
          <div className="mt-4"><WhatsAppButton location="footer" label="Chat on WhatsApp" className="btn btn-wa !min-h-[44px] !py-2" /></div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 pb-24 text-xs text-navy-200 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>© {year} {displayName()}. All rights reserved.</p>
          <p className="max-w-xl">Information on this site is for general awareness and is not a substitute for professional medical advice. In an emergency call 112.</p>
          <p className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white hover:underline">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
