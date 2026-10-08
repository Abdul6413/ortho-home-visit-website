import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { areaSlug } from "@/components/ServiceAreas";
import { AREA_DETAILS, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Serve — Delhi, Noida, Gurugram, Ghaziabad, Faridabad",
  description: "Orthopedic home visits across Delhi NCR: Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad. Confirm availability for your area by phone or WhatsApp.",
  path: "/areas-we-serve",
});

export default function AreasPage() {
  return (
    <>
      <PageHeader title="Areas we serve in Delhi NCR" intro={siteConfig.serviceAreaNote} crumbs={[{ name: "Areas We Serve", path: "/areas-we-serve" }]} />
      <div className="container-page grid gap-6 py-12 md:grid-cols-2">
        {siteConfig.serviceAreas.map((a) => (
          <section key={a} id={areaSlug(a)} aria-labelledby={`${areaSlug(a)}-h`} className="card">
            <h2 id={`${areaSlug(a)}-h`} className="text-2xl font-semibold">Orthopedic home visit in {a}</h2>
            <p className="mt-3 leading-relaxed text-slate-700">{AREA_DETAILS[a] ?? `Ask about orthopedic home consultation in ${a}.`}</p>
            <p className="mt-4 text-sm text-slate-700">
              Popular requests:{" "}
              {SERVICES.slice(1, 4).map((s, i) => (
                <span key={s.slug}>{i > 0 && ", "}<Link href={`/services/${s.slug}`} className="font-medium text-brand-700 underline">{s.title}</Link></span>
              ))}
            </p>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
