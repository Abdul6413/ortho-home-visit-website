import { siteConfig, real, displayName } from "./site-config";
import { absoluteUrl } from "./seo";
import { publicFileExists } from "./files";
import type { Service } from "./constants";
import { FULL_GALLERY, IMAGES } from "./images";

const PHYSICIAN_ID = `${siteConfig.siteUrl}/#physician`;

export function physicianSchema() {
  const c = siteConfig;
  const phone = c.phone ? c.phone.replace(/[^\d+]/g, "") : undefined;
  const doctorPhoto = publicFileExists(c.doctor.photoAbout) ? [absoluteUrl(c.doctor.photoAbout)] : [];
  const images = [...doctorPhoto, ...FULL_GALLERY.slice(0, 6).map((k) => absoluteUrl(IMAGES[k].src))];
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: real(c.businessName) ?? real(c.doctor.name) ?? c.shortName,
    description: c.description,
    url: c.siteUrl,
    image: images,
    contactPoint: phone
      ? { "@type": "ContactPoint", telephone: phone, email: c.email || undefined, contactType: "appointments", areaServed: "IN" }
      : undefined,
    telephone: phone,
    email: c.email || undefined,
    medicalSpecialty: "https://schema.org/Musculoskeletal",
    areaServed: c.serviceAreas.map((name) => ({ "@type": "City", name })),
    address: c.address
      ? {
          "@type": "PostalAddress",
          streetAddress: c.address.street,
          addressLocality: c.address.locality,
          addressRegion: c.address.region,
          postalCode: c.address.postalCode,
          addressCountry: c.address.country,
        }
      : undefined,
    openingHoursSpecification: c.hours.length
      ? c.hours.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes }))
      : undefined,
    sameAs: c.socials.length ? c.socials : undefined,
    employee: real(c.doctor.name)
      ? { "@type": "Person", name: c.doctor.name, jobTitle: "Orthopedic Doctor" }
      : undefined,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: displayName(),
    url: siteConfig.siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": PHYSICIAN_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.seoDescription,
    url: absoluteUrl(`/services/${s.slug}`),
    serviceType: s.title,
    provider: { "@id": PHYSICIAN_ID },
    areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
  };
}
