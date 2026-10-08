"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { TIME_SLOTS } from "@/lib/constants";
import { SERVICE_OPTIONS, validateAppointment, type AppointmentInput, type FormErrors } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

const EMPTY: AppointmentInput = {
  name: "", phone: "", email: "", location: "", date: "", time: "", service: "", message: "", consent: false, website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {optional && <span className="font-normal text-slate-600"> (optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}

export default function BookingForm({ defaultService = "" }: { defaultService?: string }) {
  const [values, setValues] = useState<AppointmentInput>({ ...EMPTY, service: defaultService });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [minDate, setMinDate] = useState("");
  const started = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = new Date();
    const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    setMinDate(local.toISOString().slice(0, 10));
  }, []);
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const next = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setValues((v) => ({ ...v, [name]: next }));
    if (errors[name as keyof AppointmentInput]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    trackEvent("appointment_form_start", { location: "booking_form" });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateAppointment(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Request failed");
      }
      trackEvent("appointment_form_submit", { location: "booking_form" }); // no patient data
      setStatus("success");
      setValues(EMPTY);
    } catch (err) {
      setServerError(err instanceof Error && err.message !== "Request failed" ? err.message : "We could not send your request. Please call or message us on WhatsApp instead.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="card border-brand-200 bg-brand-50 text-center outline-none">
        <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-brand-600" />
        <h2 className="mt-4 text-2xl font-semibold">Request received</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-700">
          Thank you. We will contact you on the mobile number you shared to confirm the date, time and fees for your home visit.
        </p>
        <p className="mt-2 text-sm text-slate-600">For anything urgent, please call us directly.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton location="booking_success" />
          <WhatsAppButton location="booking_success" label="Message on WhatsApp" />
        </div>
      </div>
    );
  }

  const aria = (n: keyof AppointmentInput) => ({
    id: `f-${n}`,
    name: n,
    "aria-invalid": errors[n] ? (true as const) : undefined,
    "aria-describedby": errors[n] ? `f-${n}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} onFocus={onStart} noValidate className="card space-y-5" aria-label="Book a home visit">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="f-name" label="Patient name" error={errors.name}>
          <input {...aria("name")} value={values.name} onChange={onChange} type="text" autoComplete="name" className="input" />
        </Field>
        <Field id="f-phone" label="Mobile number" error={errors.phone}>
          <input {...aria("phone")} value={values.phone} onChange={onChange} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" className="input" />
        </Field>
        <Field id="f-email" label="Email" optional error={errors.email}>
          <input {...aria("email")} value={values.email} onChange={onChange} type="email" autoComplete="email" className="input" />
        </Field>
        <Field id="f-location" label="Location / area" error={errors.location}>
          <input {...aria("location")} value={values.location} onChange={onChange} type="text" autoComplete="off" placeholder="e.g. Sector 62, Noida" className="input" />
        </Field>
        <Field id="f-date" label="Preferred date" error={errors.date}>
          <input {...aria("date")} value={values.date} onChange={onChange} type="date" min={minDate || undefined} className="input" />
        </Field>
        <Field id="f-time" label="Preferred time" error={errors.time}>
          <select {...aria("time")} value={values.time} onChange={onChange} className="input">
            <option value="">Select a time</option>
            {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      <Field id="f-service" label="Service required" error={errors.service}>
        <select {...aria("service")} value={values.service} onChange={onChange} className="input">
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>

      <Field id="f-message" label="Short description of the problem" error={errors.message}>
        <textarea {...aria("message")} value={values.message} onChange={onChange} rows={4} maxLength={1000} className="input" />
      </Field>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input {...aria("consent")} type="checkbox" checked={values.consent} onChange={onChange} className="mt-1 h-5 w-5 shrink-0 rounded border-navy-200 accent-brand-600" />
          <label htmlFor="f-consent" className="text-sm leading-relaxed text-slate-700">
            I agree to be contacted about this request and to my details being used to arrange the visit, as described in the{" "}
            <a href="/privacy-policy" className="font-semibold text-brand-700 underline">privacy policy</a>.
          </label>
        </div>
        {errors.consent && <p id="f-consent-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.consent}</p>}
      </div>

      {status === "error" && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-800">{serverError}</p>}

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto">
        {status === "submitting" ? "Sending…" : "Request Home Visit"}
      </button>
      <p className="text-sm text-slate-600">Please do not use this form for emergencies. Call 112 or go to the nearest hospital.</p>
    </form>
  );
}
