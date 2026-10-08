import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

export default function PageHeader({ title, intro, crumbs }: { title: string; intro?: string; crumbs: Crumb[] }) {
  return (
    <div className="border-b border-navy-100 bg-gradient-to-b from-brand-50/60 to-white">
      <div className="container-page py-10 sm:py-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">{intro}</p>}
      </div>
    </div>
  );
}
