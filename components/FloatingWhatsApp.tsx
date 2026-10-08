import TrackedLink from "./TrackedLink";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/lib/site-config";

/** Round WhatsApp button pinned to the bottom-right on every screen size. */
export default function FloatingWhatsApp() {
  if (!siteConfig.whatsapp) return null;
  return (
    <TrackedLink
      href={whatsappHref()}
      external
      event="whatsapp_click"
      location="floating_button"
      ariaLabel="Chat with Dr. Mohammad Zubair on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2 rounded-full bg-[#128C7E] px-[0.9rem] text-white shadow-lg ring-4 ring-white/80 transition hover:bg-[#0e7468] md:flex"
    >
      <WhatsAppIcon className="h-8 w-8" />
      <span className="hidden pr-2 text-sm font-semibold md:inline">Chat on WhatsApp</span>
    </TrackedLink>
  );
}
