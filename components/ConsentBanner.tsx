"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GA_ID, getConsent, setConsent } from "@/lib/analytics";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(Boolean(GA_ID) && getConsent() === null), []);
  if (!show) return null;

  const choose = (v: "granted" | "denied") => {
    setConsent(v);
    setShow(false);
  };

  return (
    <div role="region" aria-label="Analytics preferences" className="fixed inset-x-0 bottom-20 z-50 px-3 md:bottom-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-soft sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-slate-700">
          We use anonymous analytics to understand how the site is used. We never send your name, phone number or health details.{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand-700 underline">Privacy policy</Link>
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => choose("denied")} className="btn btn-outline !min-h-[44px] !py-2">Decline</button>
          <button type="button" onClick={() => choose("granted")} className="btn btn-primary !min-h-[44px] !py-2">Accept</button>
        </div>
      </div>
    </div>
  );
}
