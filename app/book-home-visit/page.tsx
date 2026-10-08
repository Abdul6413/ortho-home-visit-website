import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmergencyNotice from "@/components/EmergencyNotice";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book an Orthopedic Home Visit in Delhi NCR",
  description: "Request an orthopedic home visit in Delhi NCR. Share your location, preferred date and the problem, and we will confirm your appointment.",
  path: "/book-home-visit",
});

export default function BookPage() {
  return (
    <>
      <PageHeader title="Book a home visit" intro="Fill in the form and we will contact you to confirm the date, time and fees." crumbs={[{ name: "Book Home Visit", path: "/book-home-visit" }]} />
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_340px]">
        <BookingForm />
        <aside className="space-y-5">
          <div className="card">
            <h2 className="text-xl font-semibold">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>We review your request.</li>
              <li>We call you to confirm availability and fees.</li>
              <li>The doctor visits at the agreed time.</li>
            </ol>
            <div className="mt-5 flex flex-col gap-3"><CallButton location="book_page" className="btn btn-outline w-full" /><WhatsAppButton location="book_page" className="btn btn-wa w-full" /></div>
          </div>
          <div className="card text-sm leading-relaxed text-slate-700">
            <h2 className="text-base font-semibold text-navy-900">Your privacy</h2>
            <p className="mt-2">Your details are used only to arrange this visit. They are never sent to analytics tools.</p>
          </div>
          <EmergencyNotice />
        </aside>
      </div>
    </>
  );
}
