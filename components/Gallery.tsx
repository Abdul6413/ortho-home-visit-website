import Link from "next/link";
import Photo from "./Photo";
import { FULL_GALLERY, HOME_GALLERY, IMAGES, ILLUSTRATIVE_NOTE, type ImageKey } from "@/lib/images";

type Props = { full?: boolean; headingId?: string };

/** Masonry-style gallery using CSS columns: every photo keeps its own shape, nothing is cropped. */
export default function Gallery({ full = false, headingId = "gallery-heading" }: Props) {
  const keys: ImageKey[] = full ? FULL_GALLERY : HOME_GALLERY;
  const Heading = full ? "h2" : "h2";
  return (
    <section aria-labelledby={headingId} className="section bg-navy-50">
      <div className="container-page">
        <div className="max-w-2xl">
          <Heading id={headingId} className="text-3xl font-semibold sm:text-4xl">
            {full ? "Home visit care in pictures" : "See how a home visit looks"}
          </Heading>
          <p className="mt-3 text-lg text-slate-700">
            From arrival to follow-up, care is unhurried and takes place in your own surroundings.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure]:mb-5 [&>figure]:break-inside-avoid">
          {keys.map((k) => (
            <Photo key={k} image={IMAGES[k]} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw" />
          ))}
        </div>

        <p className="mt-2 text-xs text-slate-600">{ILLUSTRATIVE_NOTE}</p>
        {!full && (
          <p className="mt-6">
            <Link href="/gallery" className="font-semibold text-brand-700 underline">View the full gallery</Link>
          </p>
        )}
      </div>
    </section>
  );
}
