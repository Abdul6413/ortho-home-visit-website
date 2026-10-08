import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StructuredData from "@/components/StructuredData";
import BookButton from "@/components/BookButton";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmergencyNotice from "@/components/EmergencyNotice";
import Photo from "@/components/Photo";
import { IMAGES } from "@/lib/images";
import ServicePageView from "@/components/ServicePageView";
import { SERVICES, getService } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <StructuredData data={serviceSchema(s)} />
      <ServicePageView service={s.slug} />
      <PageHeader
        title={s.title}
        intro={s.short}
        crumbs={[{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]}
      />

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[1fr_340px]">
        <article className="prose-page max-w-none">
          <Photo image={IMAGES[s.image]} sizes="(min-width: 1024px) 640px, 94vw" className="mb-8 max-w-xl" priority />
          <p className="text-lg">{s.intro}</p>

          <h2>What the consultation can include</h2>
          <ul className="!list-none !pl-0 space-y-3">
            {s.covers.map((c) => (
              <li key={c} className="flex gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-600" />{c}</li>
            ))}
          </ul>

          <h2>When to consider a consultation</h2>
          <ul>{s.consult.map((c) => <li key={c}>{c}</li>)}</ul>

          <h2>Home visits across Delhi NCR</h2>
          <p>
            We offer consultations in parts of {siteConfig.serviceAreas.join(", ")}. See{" "}
            <Link href="/areas-we-serve" className="font-semibold text-brand-700 underline">areas we serve</Link> or{" "}
            <Link href="/faq" className="font-semibold text-brand-700 underline">read the FAQs</Link>. Treatment depends on a proper assessment by the doctor, and results vary from person to person.
          </p>

          <EmergencyNotice />

          <h2>Other services</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {others.slice(0, 6).map((o) => (
              <li key={o.slug}><Link href={`/services/${o.slug}`} className="font-medium text-brand-700 underline">{o.title}</Link></li>
            ))}
          </ul>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold">Request a home visit</h2>
            <p className="text-sm text-slate-700">Tell us about {s.title.toLowerCase()} and we will confirm a suitable time.</p>
            <BookButton location={`service_${s.slug}`} className="btn btn-primary w-full" />
            <CallButton location={`service_${s.slug}`} className="btn btn-outline w-full" />
            <WhatsAppButton
              location={`service_${s.slug}`}
              className="btn btn-wa w-full"
              message={`Hello Doctor, I would like to enquire about ${s.title.toLowerCase()} and an orthopedic home visit in Delhi NCR.`}
            />
          </div>
        </aside>
      </div>
    </>
  );
}
