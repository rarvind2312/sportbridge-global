"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      organisation: String(data.get("organisation") || ""),
      country: String(data.get("country") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      const result = (await res.json()) as { notice?: string };
      setStatus("success");
      setMessage(
        result.notice ||
          "Message received and logged. Email delivery is not configured yet—please also email arvindr@sportbridgeglobal.com.au or sriramv@sportbridgeglobal.com.au if urgent."
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-field">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="input-field"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="label-field">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            className="input-field"
            placeholder="Club, academy, brand or federation"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="label-field">
            Country
          </label>
          <input
            id="country"
            name="country"
            required
            autoComplete="country-name"
            className="input-field"
            placeholder="Country of operation"
          />
        </div>
        <div>
          <label htmlFor="email" className="label-field">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field"
            placeholder="you@organisation.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label-field">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field resize-y"
          placeholder="Tell us about your organisation, athletes or opportunity."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {message && (
          <p
            className={`text-sm ${status === "success" ? "text-primary" : "text-red-600"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
