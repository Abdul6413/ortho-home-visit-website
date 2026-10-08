import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const areaSlug = (a: string) => a.toLowerCase().replace(/\s+/g, "-");

export default function ServiceAreas() {
  return (
    <section aria-labelledby="areas-heading" className="section">
      <div className="container-page">
        <h2 id="areas-heading" className="max-w-2xl text-3xl font-semibold sm:text-4xl">Orthopedic home visits across Delhi NCR</h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-700">{siteConfig.serviceAreaNote}</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {siteConfig.serviceAreas.map((a) => (
            <li key={a}>
              <Link href={`/areas-we-serve#${areaSlug(a)}`} className="flex min-h-[56px] items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 font-semibold shadow-soft hover:border-brand-500 hover:text-brand-700">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-600" />
                {a}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/areas-we-serve" className="font-semibold text-brand-700 underline">See all areas we serve</Link>
        </p>
      </div>
    </section>
  );
}
