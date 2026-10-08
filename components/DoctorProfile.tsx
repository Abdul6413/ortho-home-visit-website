import Link from "next/link";
import DoctorImage from "./DoctorImage";
import { isPlaceholder, siteConfig } from "@/lib/site-config";

/** One row of the details list. Rows whose value is still a "[placeholder]" are not shown to the public. */
function Row({ label, value }: { label: string; value?: string }) {
  if (!value || isPlaceholder(value)) return null;
  return (
    <div>
      <dt className="text-sm font-semibold text-slate-600">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}

export default function DoctorProfile({ compact = false }: { compact?: boolean }) {
  const d = siteConfig.doctor;
  const hasRows = [d.qualifications, d.experience, d.registration].some((v) => !isPlaceholder(v)) || d.memberships.length > 0;
  return (
    <section aria-labelledby="doctor-heading" className={compact ? "section bg-navy-50" : "section"}>
      <div className="container-page grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <DoctorImage src={d.photoAbout} sizes="(min-width: 1024px) 380px, 90vw" className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl shadow-soft" />
        <div>
          <h2 id="doctor-heading" className="text-3xl font-semibold sm:text-4xl">{d.name}</h2>
          <p className="mt-2 text-lg text-brand-700">{d.specialization} · Home visits across Delhi NCR</p>

          {hasRows && (
            <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <Row label="Qualifications" value={d.qualifications} />
              <Row label="Experience" value={d.experience} />
              <Row label="Registration" value={d.registration} />
              <Row label="Professional memberships" value={d.memberships.join(", ")} />
            </dl>
          )}

          {!isPlaceholder(d.bio) && <p className="mt-6 max-w-prose leading-relaxed text-slate-700">{d.bio}</p>}

          <h3 className="mt-8 text-xl font-semibold">Areas of expertise</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {d.expertise.map((e) => (
              <li key={e} className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-900">{e}</li>
            ))}
          </ul>

          {compact && <Link href="/about" className="btn btn-outline mt-8">Read more about the doctor</Link>}
        </div>
      </div>
    </section>
  );
}
