import BookButton from "./BookButton";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function CtaBand({ location = "cta_band" }: { location?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="section">
      <div className="container-page">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center sm:px-12">
          <h2 id="cta-heading" className="mx-auto max-w-2xl text-3xl font-semibold !text-white sm:text-4xl">
            Need an orthopedic consultation at home?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-navy-100">
            Tell us where you are and what you need. We will confirm availability and a suitable time.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <BookButton location={location} />
            <CallButton location={location} />
            <WhatsAppButton location={location} />
          </div>
        </div>
      </div>
    </section>
  );
}
