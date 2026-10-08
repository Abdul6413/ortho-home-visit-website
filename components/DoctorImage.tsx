import { publicFileExists } from "@/lib/files";
import { isPlaceholder, siteConfig } from "@/lib/site-config";
import FitImage from "./FitImage";

type Props = { src: string; priority?: boolean; sizes: string; className?: string };

const initials = (name: string) =>
  name.replace(/^dr\.?\s+/i, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]!.toUpperCase()).join("");

/**
 * Doctor photo. The whole photo is always shown (never cropped, any shape works).
 * Until a photo is added at `src`, a tidy monogram card is shown instead.
 */
export default function DoctorImage({ src, priority, sizes, className = "" }: Props) {
  const named = !isPlaceholder(siteConfig.doctor.name);
  const alt = named
    ? `${siteConfig.doctor.name}, orthopedic doctor offering home visits in Delhi NCR`
    : "Orthopedic doctor offering home visits in Delhi NCR";

  if (publicFileExists(src)) {
    return <FitImage image={{ src, width: 0, height: 0, alt, caption: "" }} sizes={sizes} ratio="aspect-[4/5]" priority={priority} className={className} />;
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex aspect-[4/5] flex-col items-center justify-center gap-4 bg-gradient-to-br from-navy-900 to-brand-700 p-6 text-center text-white ${className}`}
    >
      <span className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10 font-serif text-5xl font-semibold ring-2 ring-white/40">
        {named ? initials(siteConfig.doctor.name) : "Dr"}
      </span>
      {named && <span className="font-serif text-2xl font-semibold">{siteConfig.doctor.name}</span>}
      <span className="text-sm font-medium text-brand-100">Orthopedic Doctor · Home Visits, Delhi NCR</span>
    </div>
  );
}
