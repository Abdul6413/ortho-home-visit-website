import Link from "next/link";
import StructuredData from "./StructuredData";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <StructuredData data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-navy-900">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-brand-700 hover:underline">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
