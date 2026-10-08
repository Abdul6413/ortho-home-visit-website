import Icon from "./Icon";
import { PROCESS } from "@/lib/constants";

export default function HomeVisitProcess() {
  return (
    <section aria-labelledby="process-heading" className="section bg-navy-50">
      <div className="container-page">
        <h2 id="process-heading" className="max-w-2xl text-3xl font-semibold sm:text-4xl">How a home visit works</h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="relative rounded-2xl bg-white p-6 shadow-soft">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white">
                <Icon name={p.icon} />
              </span>
              <h3 className="text-lg font-semibold"><span className="sr-only">Step {i + 1}: </span>{p.title}</h3>
              <p className="mt-2 text-slate-700">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
