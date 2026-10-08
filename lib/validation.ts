import { SERVICES, TIME_SLOTS } from "./constants";

export type AppointmentInput = {
  name: string;
  phone: string;
  email: string;
  location: string;
  date: string;
  time: string;
  service: string;
  message: string;
  consent: boolean;
  website: string; // honeypot — must stay empty
};

export type FormErrors = Partial<Record<keyof AppointmentInput, string>>;

export const SERVICE_OPTIONS = ["General orthopedic consultation", ...SERVICES.map((s) => s.title)];

/** Normalises an Indian mobile number to 10 digits (or returns null if invalid). */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/[\s\-()]/g, "").replace(/^(\+91|91|0)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export function validateAppointment(v: AppointmentInput): FormErrors {
  const e: FormErrors = {};
  if (v.name.trim().length < 2) e.name = "Enter the patient's name.";
  if (!normalizePhone(v.phone)) e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.location.trim().length < 3) e.location = "Enter your area or locality (e.g. Sector 62, Noida).";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.date)) e.date = "Choose a preferred date.";
  else {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000); // tolerance for time zones
    if (v.date < isoDate(yesterday)) e.date = "Choose today or a future date.";
  }
  if (!TIME_SLOTS.includes(v.time)) e.time = "Choose a preferred time.";
  if (!SERVICE_OPTIONS.includes(v.service)) e.service = "Choose the service you need.";
  if (v.message.trim().length < 10) e.message = "Briefly describe the problem (at least 10 characters).";
  if (v.message.length > 1000) e.message = "Please keep the description under 1000 characters.";
  if (!v.consent) e.consent = "Please agree so we can contact you about this request.";
  return e;
}

const str = (x: unknown, max: number) => (typeof x === "string" ? x.trim().slice(0, max) : "");

/** Coerces untrusted JSON into an AppointmentInput (server side). */
export function parseAppointment(body: unknown): AppointmentInput {
  const b = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  return {
    name: str(b.name, 100),
    phone: str(b.phone, 20),
    email: str(b.email, 120),
    location: str(b.location, 150),
    date: str(b.date, 10),
    time: str(b.time, 40),
    service: str(b.service, 80),
    message: str(b.message, 1100),
    consent: b.consent === true,
    website: str(b.website, 100),
  };
}
