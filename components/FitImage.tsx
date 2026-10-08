import Image from "next/image";
import type { SiteImage } from "@/lib/images";

type Props = {
  image: SiteImage;
  sizes: string;
  /** Tailwind aspect-ratio class for the frame, e.g. "aspect-[4/3]". */
  ratio?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Fixed-shape frame that shows the WHOLE photo (object-contain, never cropped). Any spare space is
 * filled with a soft blurred copy of the same photo so portrait/landscape mixes still look tidy.
 */
export default function FitImage({ image, sizes, ratio = "aspect-[4/3]", priority, className = "" }: Props) {
  return (
    <div className={`relative isolate overflow-hidden bg-navy-100 ${ratio} ${className}`}>
      <Image src={image.src} alt="" aria-hidden="true" fill sizes="120px" quality={40} className="-z-10 scale-125 object-cover opacity-60 blur-2xl" />
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-contain" />
    </div>
  );
}
