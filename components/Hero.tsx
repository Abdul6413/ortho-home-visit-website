import { Check, Phone } from "lucide-react";
import BookButton from "./BookButton";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import Photo from "./Photo";
import { IMAGES, ILLUSTRATIVE_NOTE } from "@/lib/images";
import { formatPhone, siteConfig, telHref } from "@/lib/site-config";

const TRUST = ["Orthopedic care", "Home visit service", "Delhi NCR", "Patient-focused care"];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-gradient-to-b from-brand-50/60 to-white">
      <div className="container-page grid items-center gap-8 py-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-900">
            {siteConfig.doctor.name} · Orthopedic Doctor
          </p>
          <h1 id="hero-heading" className="text-[2rem] font-semibold leading-[1.15] sm:text-5xl lg:text-[3.2rem]">
            Orthopedic Doctor Home Visit in Delhi NCR
            <span className="mt-2 block text-[1.35rem] font-medium text-brand-700 sm:text-3xl">Care at your doorstep</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
            Request an orthopedic consultation at home for joint pain, knee pain, back pain, arthritis, sports injuries and elderly care — without the strain of travelling to a clinic.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookButton location="hero" />
            <CallButton location="hero" />
            <WhatsAppButton location="hero" />
          </div>

          {siteConfig.phone && (
            <p className="mt-4 flex items-center gap-2 text-[15px] text-slate-700">
              <Phone aria-hidden="true" className="h-4 w-4 text-brand-600" />
              Call or WhatsApp:{" "}
              <a href={telHref()} className="font-semibold text-navy-900 underline decoration-brand-500 underline-offset-2">
                {formatPhone(siteConfig.phone)}
              </a>
            </p>
          )}

          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 text-[15px] font-medium text-navy-800 min-[420px]:grid-cols-2">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <Photo image={IMAGES.familyWelcome} priority showCaption={false} sizes="(min-width: 1024px) 520px, (min-width: 640px) 576px, 94vw" />
          <p className="mt-2 text-xs text-slate-600">{ILLUSTRATIVE_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
