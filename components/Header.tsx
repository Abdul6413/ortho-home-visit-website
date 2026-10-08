import Image from "next/image";
import Link from "next/link";
import { Bone, Phone } from "lucide-react";
import MobileNav from "./MobileNav";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import BookButton from "./BookButton";
import { NAV_LINKS } from "@/lib/constants";
import { displayName, formatPhone, siteConfig, telHref } from "@/lib/site-config";
import { publicFileExists } from "@/lib/files";

export default function Header() {
  const hasLogo = publicFileExists(siteConfig.logo);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="container-page relative flex h-[4.25rem] items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${displayName()} — home`}>
          {hasLogo ? (
            <Image src={siteConfig.logo} alt={displayName()} width={160} height={48} priority className="h-10 w-auto" />
          ) : (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Bone aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="whitespace-nowrap font-serif text-[1.05rem] font-semibold text-navy-950 sm:text-lg">{displayName()}</span>
                <span className="hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-brand-700 min-[380px]:block">Orthopedic Home Visit · Delhi NCR</span>
              </span>
            </>
          )}
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[15px] font-medium text-navy-800 hover:bg-navy-50 hover:text-brand-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          {siteConfig.phone && (
            <a href={telHref()} className="hidden items-center gap-1.5 whitespace-nowrap text-[15px] font-semibold text-navy-900 hover:text-brand-700 2xl:flex">
              <Phone aria-hidden="true" className="h-4 w-4 text-brand-600" />
              {formatPhone(siteConfig.phone)}
            </a>
          )}
          <BookButton location="header" label="Book Home Visit" className="btn btn-primary whitespace-nowrap !min-h-[44px] !py-2" />
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <CallButton location="header_mobile" iconOnly className="hidden h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white min-[400px]:inline-flex" />
          <WhatsAppButton location="header_mobile" iconOnly className="hidden h-12 w-12 items-center justify-center rounded-xl bg-emerald-700 text-white min-[400px]:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
