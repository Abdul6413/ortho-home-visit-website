import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import BookButton from "./BookButton";

/** Sticky bottom bar — mobile and tablet only. */
export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-6px_20px_-12px_rgba(11,37,69,0.3)] md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <CallButton location="bottom_bar" label="Call" className="btn btn-outline flex-1 !px-3" />
        <WhatsAppButton location="bottom_bar" label="WhatsApp" className="btn btn-wa flex-1 !px-3" />
        <BookButton location="bottom_bar" label="Book" className="btn btn-primary flex-1 !px-3" />
      </div>
    </div>
  );
}
