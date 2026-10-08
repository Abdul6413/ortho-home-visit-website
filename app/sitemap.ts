import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";
import { FULL_GALLERY, IMAGES } from "@/lib/images";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top = ["/", "/about", "/services", "/gallery", "/areas-we-serve", "/faq", "/contact", "/book-home-visit"];
  return [
    ...top.map((p) => ({
      url: absoluteUrl(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.8,
      ...(p === "/gallery" ? { images: FULL_GALLERY.map((k) => absoluteUrl(IMAGES[k].src)) } : {}),
    })),
    ...SERVICES.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...["/privacy-policy", "/terms"].map((p) => ({ url: absoluteUrl(p), lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
