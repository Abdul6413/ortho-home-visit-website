import { NextResponse } from "next/server";
import { parseAppointment, validateAppointment } from "@/lib/validation";
import { deliverAppointment } from "@/lib/appointment-delivery";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort, per-instance rate limit. For stronger protection use Vercel Firewall / Upstash.
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

function limited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || rec.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > LIMIT;
}

const json = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  if (Number(req.headers.get("content-length") ?? 0) > 20_000) return json({ ok: false, error: "Request too large." }, 413);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (limited(ip)) return json({ ok: false, error: "Too many requests. Please call us instead." }, 429);

  const data = parseAppointment(body);
  if (data.website) return json({ ok: true }); // honeypot filled: pretend success

  if (Object.keys(validateAppointment(data)).length) return json({ ok: false, error: "Please check the form and try again." }, 422);

  const result = await deliverAppointment(data);
  if (!result.ok) {
    return json({ ok: false, error: "We could not send your request right now. Please call or message us on WhatsApp." }, result.status);
  }
  return json({ ok: true });
}
