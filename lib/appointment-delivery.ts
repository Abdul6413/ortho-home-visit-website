import "server-only";
import { normalizePhone, type AppointmentInput } from "./validation";

type Result = { ok: true } | { ok: false; status: number };

/**
 * Delivers a booking request. Configure ONE (or both) of:
 *   - APPOINTMENT_WEBHOOK_URL            (Zapier / Make / n8n / Google Apps Script / CRM)
 *   - RESEND_API_KEY + APPOINTMENT_FROM_EMAIL + APPOINTMENT_TO_EMAIL
 * Patient data is never logged.
 */
export async function deliverAppointment(a: AppointmentInput): Promise<Result> {
  const { website: _honeypot, ...rest } = a;
  void _honeypot;
  const payload = {
    ...rest,
    phone: `+91${normalizePhone(a.phone) ?? a.phone}`,
    submittedAt: new Date().toISOString(),
    source: "website-booking-form",
  };

  const webhook = process.env.APPOINTMENT_WEBHOOK_URL;
  const { RESEND_API_KEY: key, APPOINTMENT_TO_EMAIL: to, APPOINTMENT_FROM_EMAIL: from } = process.env;
  const emailConfigured = Boolean(key && to && from);

  if (!webhook && !emailConfigured) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[appointment] No delivery configured (development only) — request accepted but not stored.");
      return { ok: true };
    }
    return { ok: false, status: 503 };
  }

  let delivered = false;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      delivered = res.ok;
    } catch {
      /* fall through to email */
    }
  }

  if (!delivered && emailConfigured) {
    try {
      const text = [
        "New home visit request",
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email || "-"}`,
        `Location: ${payload.location}`,
        `Preferred: ${payload.date}, ${payload.time}`,
        `Service: ${payload.service}`,
        `Problem: ${payload.message}`,
        `Submitted: ${payload.submittedAt}`,
      ].join("\n");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], subject: "New orthopedic home visit request", text }),
        signal: AbortSignal.timeout(8000),
      });
      delivered = res.ok;
    } catch {
      /* handled below */
    }
  }

  return delivered ? { ok: true } : { ok: false, status: 502 };
}
