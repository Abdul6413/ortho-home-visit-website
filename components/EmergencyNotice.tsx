import { TriangleAlert } from "lucide-react";
import { MEDICAL_DISCLAIMER } from "@/lib/constants";

export default function EmergencyNotice() {
  return (
    <aside role="note" className="flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
      <TriangleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <p><strong>Not for emergencies.</strong> {MEDICAL_DISCLAIMER}</p>
    </aside>
  );
}
