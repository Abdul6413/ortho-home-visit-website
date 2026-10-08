"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type EventName } from "@/lib/analytics";

type Props = {
  href: string;
  event: EventName;
  location: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

/** Link that fires an anonymous analytics event (only if the visitor consented). */
export default function TrackedLink({ href, event, location, className, children, external, ariaLabel }: Props) {
  const onClick = () => trackEvent(event, { location });
  if (external || !href.startsWith("/")) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
