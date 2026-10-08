/**
 * Privacy-first analytics helpers.
 * - GA only loads after the visitor accepts (see ConsentBanner / GoogleAnalytics).
 * - Events carry ONLY an allow-listed, non-personal context (`location`, `service`).
 * - Never pass names, phone numbers, symptoms, addresses or appointment details.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const CONSENT_KEY = "analytics-consent";
export const CONSENT_EVENT = "analytics-consent-change";
export type Consent = "granted" | "denied" | null;

export type EventName =
  | "phone_click"
  | "whatsapp_click"
  | "book_home_visit_click"
  | "appointment_form_start"
  | "appointment_form_submit"
  | "service_page_view";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function getConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: "granted" | "denied") {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function trackEvent(name: EventName, params: { location?: string; service?: string } = {}) {
  if (typeof window === "undefined" || !GA_ID || getConsent() !== "granted") return;
  const safe: Record<string, string> = {};
  if (params.location) safe.location = params.location.slice(0, 40);
  if (params.service) safe.service = params.service.slice(0, 60);
  window.gtag?.("event", name, safe);
}
