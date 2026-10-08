import type { Metadata } from "next";
import { siteConfig, displayName } from "./site-config";

type Args = { title: string; description: string; path?: string; noIndex?: boolean };

export function buildMetadata({ title, description, path = "/", noIndex }: Args): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: displayName(),
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export const absoluteUrl = (path = "/") => `${siteConfig.siteUrl}${path === "/" ? "" : path}`;

export const PRIMARY_KEYWORDS = [
  "orthopedic doctor home visit Delhi",
  "orthopedic home visit Delhi NCR",
  "orthopedic doctor at home Delhi",
  "orthopedic home service Delhi NCR",
  "knee pain doctor Delhi",
  "joint pain doctor Delhi",
  "back pain doctor Delhi",
];
