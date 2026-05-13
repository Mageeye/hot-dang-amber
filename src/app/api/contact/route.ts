import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const submission = {
    name: readString(body?.name),
    email: readString(body?.email),
    phone: readString(body?.phone),
    message: readString(body?.message),
    submittedAt: new Date().toISOString(),
  };

  if (!submission.name || !submission.email || !submission.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (process.env.CONTACT_WEBHOOK_URL) {
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Contact webhook failed." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
