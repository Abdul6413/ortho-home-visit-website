import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServiceGrid({ headingId = "services-heading", heading = "Orthopedic services at home" }: { headingId?: string; heading?: string }) {
  return (
    <section aria-labelledby={headingId} className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id={headingId} className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-lg text-slate-700">
            Consultation and assessment for common bone, joint and muscle problems. The doctor will advise if you need tests or a hospital visit.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </div>
    </section>
  );
}
