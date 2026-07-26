import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  organisation?: string;
  country?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const country = body.country?.trim();

  if (!name || !email || !message || !country) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Development fallback: no email provider configured yet.
  // Persist-safe server log only — does not send email.
  console.info("[contact:logged]", {
    name,
    email,
    organisation: body.organisation?.trim() || null,
    country,
    messageLength: message.length,
    delivery: "logged-only",
  });

  return NextResponse.json({
    ok: true,
    delivery: "logged",
    notice:
      "Message received and logged. Email delivery is not configured yet—please also email arvindr@sportbridgeglobal.com.au or sriramv@sportbridgeglobal.com.au if urgent.",
  });
}
