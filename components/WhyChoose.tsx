import Icon from "./Icon";
import { WHY_CHOOSE } from "@/lib/constants";

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="section">
      <div className="container-page">
        <h2 id="why-heading" className="max-w-2xl text-3xl font-semibold sm:text-4xl">Why patients choose a home consultation</h2>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w) => (
            <li key={w.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-1 text-slate-700">{w.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
