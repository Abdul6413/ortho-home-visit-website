import Image from "next/image";
import type { SiteImage } from "@/lib/images";

type Props = { image: SiteImage; sizes: string; priority?: boolean; className?: string; showCaption?: boolean };

/** A photo at its natural proportions with an optional caption. Nothing is ever cropped. */
export default function Photo({ image, sizes, priority, className = "", showCaption = true }: Props) {
  return (
    <figure className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full rounded-2xl shadow-soft ring-1 ring-navy-100"
      />
      {showCaption && <figcaption className="mt-2 text-sm leading-snug text-slate-600">{image.caption}</figcaption>}
    </figure>
  );
}
