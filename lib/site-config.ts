/**
 * CENTRAL CONFIGURATION — edit this file (and .env.local) to update the whole site.
 * Any value starting with "[" is treated as a placeholder and is shown with a
 * highlighted style and skipped from structured data until you replace it.
 */
const env = process.env;

function resolveSiteUrl(): string {
  if (env.NEXT_PUBLIC_SITE_URL) return env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const isPlaceholder = (v?: string) => !v || v.trim().startsWith("[");
export const real = (v?: string) => (isPlaceholder(v) ? undefined : v);

export const siteConfig = {
  siteUrl: resolveSiteUrl(),
  businessName: env.NEXT_PUBLIC_BUSINESS_NAME || "Dr. Mohammad Zubair",
  shortName: "Ortho Home Care",
  tagline: "Orthopedic care at your doorstep in Delhi NCR",
  description:
    "Request an orthopedic consultation at home in Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad. Joint, knee and back pain, arthritis, sports injuries and elderly orthopedic care.",
  logo: "/images/logo/logo.png",

  doctor: {
    name: "Dr. Mohammad Zubair",
    // TODO: fill these three in with your real details. While they start with "[" or are empty,
    // they are simply hidden on the public site and left out of structured data.
    qualifications: "[Qualifications — e.g. MBBS, MS (Orthopaedics)]",
    specialization: "Orthopedics",
    experience: "[Years of Experience]",
    registration: "[Medical Council Registration Number]",
    memberships: [] as string[], // e.g. ["Indian Orthopaedic Association"]
    expertise: [
      "Joint and knee pain",
      "Back and neck pain",
      "Arthritis",
      "Sports and soft-tissue injuries",
      "Fracture follow-up",
      "Elderly orthopedic care",
    ],
    bio: "Dr. Mohammad Zubair offers orthopedic consultations at home across Delhi NCR for patients who find travelling to a clinic painful or tiring. Each visit starts with listening: your symptoms, your daily routine and any reports you already have. You then receive a clear explanation of the likely cause and the next steps, including whether tests or an in-person hospital visit are advisable.",
    photoHero: "/images/doctor/doctor-hero.jpg", // optional: add your real photo here (any shape, never cropped)
    photoAbout: "/images/doctor/doctor-about.jpg",
  },

  // Defaults are the clinic's real contact details; env vars (if set) override them.
  phone: env.NEXT_PUBLIC_PHONE_NUMBER || "+919456938356",
  whatsapp: env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919456938356",
  email: env.NEXT_PUBLIC_CONTACT_EMAIL || "mozubair1989@gmail.com",

  /** Leave null unless you have a public clinic address. Never invent one. */
  address: null as null | {
    street: string;
    locality: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  },

  /** Optional opening hours (used for display and structured data). Leave empty if by appointment only. */
  hours: [] as { days: string[]; opens: string; closes: string }[],
  hoursNote: "Home visits are scheduled by appointment. Share your preferred date and time and we will confirm.",

  socials: [] as string[], // full profile URLs, e.g. ["https://www.facebook.com/yourpage"]

  /** Service areas. Keep wording honest — coverage depends on your real schedule. */
  serviceAreas: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurugram", "Faridabad"],
  serviceAreaNote:
    "Home visits are offered across parts of Delhi NCR. Availability depends on your exact location and the doctor's schedule, so please confirm by phone or WhatsApp before booking.",

  /** Add ONLY real testimonials with the patient's permission. Empty = section hidden. */
  testimonials: [] as { quote: string; name: string; area?: string }[],
};

export const WHATSAPP_MESSAGE =
  "Hello Doctor, I would like to enquire about an orthopedic home visit in Delhi NCR.";

/** "+919456938356" -> "+91 94569 38356" (falls back to the raw value for non-Indian formats). */
export const formatPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "");
  return /^91[6-9]\d{9}$/.test(d) ? `+91 ${d.slice(2, 7)} ${d.slice(7)}` : raw;
};

export const telHref = () => `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
export const whatsappHref = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
export const displayName = () =>
  real(siteConfig.businessName) ?? real(siteConfig.doctor.name) ?? siteConfig.shortName;
