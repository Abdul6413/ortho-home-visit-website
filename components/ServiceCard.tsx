import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import FitImage from "./FitImage";
import { IMAGES } from "@/lib/images";
import type { Service } from "@/lib/constants";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card relative flex flex-col !p-0 overflow-hidden transition-shadow focus-within:ring-2 focus-within:ring-brand-600 hover:shadow-lg">
      <FitImage image={IMAGES[service.image]} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 92vw" />
      <div className="flex flex-1 flex-col p-6">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
        <Icon name={service.icon} />
      </span>
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-slate-700">{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 after:absolute after:inset-0 after:rounded-2xl hover:underline focus-visible:ring-0"
      >
        Learn more<span className="sr-only"> about {service.title}</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
      </div>
    </article>
  );
}
