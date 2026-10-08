"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ServicePageView({ service }: { service: string }) {
  useEffect(() => {
    trackEvent("service_page_view", { service });
  }, [service]);
  return null;
}
