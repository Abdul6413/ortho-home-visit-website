import TrackedLink from "./TrackedLink";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/lib/site-config";

type Props = { location: string; label?: string; className?: string; iconOnly?: boolean; message?: string };

export default function WhatsAppButton({ location, label = "WhatsApp", className = "btn btn-wa", iconOnly, message }: Props) {
  if (!siteConfig.whatsapp) return null;
  return (
    <TrackedLink
      href={whatsappHref(message)}
      external
      event="whatsapp_click"
      location={location}
      className={className}
      ariaLabel={iconOnly ? "Chat on WhatsApp" : undefined}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {!iconOnly && label}
    </TrackedLink>
  );
}
