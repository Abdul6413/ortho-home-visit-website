import { siteConfig } from "@/lib/site-config";

/** Renders nothing until you add REAL testimonials (with permission) in siteConfig.testimonials. */
export default function Testimonials() {
  const items = siteConfig.testimonials;
  if (!items.length) return null;
  return (
    <section aria-labelledby="testimonials-heading" className="section bg-navy-50">
      <div className="container-page">
        <h2 id="testimonials-heading" className="text-3xl font-semibold sm:text-4xl">What patients say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name + t.quote.slice(0, 12)} className="card">
              <blockquote className="leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{t.name}{t.area ? `, ${t.area}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
