import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ConsentBanner from "@/components/ConsentBanner";
import StructuredData from "@/components/StructuredData";
import { displayName, siteConfig } from "@/lib/site-config";
import { physicianSchema, websiteSchema } from "@/lib/schema";
import { PRIMARY_KEYWORDS } from "@/lib/seo";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `Orthopedic Doctor Home Visit in Delhi NCR | ${displayName()}`,
    template: `%s | ${displayName()}`,
  },
  description: siteConfig.description,
  applicationName: displayName(),
  alternates: { canonical: "/" },
  openGraph: { siteName: displayName(), locale: "en_IN", type: "website", url: "/" },
  twitter: { card: "summary_large_image" },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: false },
  authors: [{ name: displayName() }],
  creator: displayName(),
  category: "health",
  keywords: PRIMARY_KEYWORDS,
};

export const viewport: Viewport = { themeColor: "#0f7b76", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold">
          Skip to content
        </a>
        <StructuredData data={[physicianSchema(), websiteSchema()]} />
        <Header />
        <main id="main" className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
        <FloatingWhatsApp />
        <ConsentBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
