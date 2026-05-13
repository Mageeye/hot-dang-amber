"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactInquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send contact form");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      aria-label="Contact form"
      onSubmit={handleSubmit}
    >
      <label>
        <span>Name*</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email*</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        <span>Message*</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send Message"}
      </button>
      <p className="contact-form-status" aria-live="polite">
        {status === "sent" && "Message sent."}
        {status === "error" && "Something went wrong. Please email us."}
      </p>
    </form>
  );
}
