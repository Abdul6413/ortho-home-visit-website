import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

/** Accessible accordion using native <details>/<summary> — keyboard friendly and zero JavaScript. */
export default function FAQ({ limit, headingId = "faq-heading", showHeading = true }: { limit?: number; headingId?: string; showHeading?: boolean }) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <section aria-labelledby={showHeading ? headingId : undefined} className={showHeading ? "section bg-navy-50" : ""}>
      <div className={showHeading ? "container-page max-w-3xl" : ""}>
        {showHeading && <h2 id={headingId} className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>}
        <div className={showHeading ? "mt-8 space-y-3" : "space-y-3"}>
          {items.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-navy-100 bg-white shadow-soft">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
