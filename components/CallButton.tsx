import { Phone } from "lucide-react";
import TrackedLink from "./TrackedLink";
import { siteConfig, telHref } from "@/lib/site-config";

type Props = { location: string; label?: string; className?: string; iconOnly?: boolean };

export default function CallButton({ location, label = "Call Now", className = "btn btn-outline", iconOnly }: Props) {
  if (!siteConfig.phone) return null;
  return (
    <TrackedLink href={telHref()} event="phone_click" location={location} className={className} ariaLabel={iconOnly ? "Call now" : undefined}>
      <Phone aria-hidden="true" className="h-5 w-5" />
      {!iconOnly && label}
    </TrackedLink>
  );
}
