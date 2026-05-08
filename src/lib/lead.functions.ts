import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  service: z.string().min(1).max(100),
  area: z.string().trim().min(2).max(100),
  notes: z.string().trim().max(1000).optional(),
});

const TO_EMAIL = "kilkennypowerwash@gmail.com";
const FROM_EMAIL = "Kilkenny Power Washing <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

    const html = `
      <h2>New Power Washing Quote Request</h2>
      <table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px">
        <tr><td><b>Name</b></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><b>Service</b></td><td>${escapeHtml(data.service)}</td></tr>
        <tr><td><b>Area</b></td><td>${escapeHtml(data.area)}</td></tr>
        <tr><td valign="top"><b>Notes</b></td><td>${escapeHtml(data.notes ?? "—")}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New quote request — ${data.service} (${data.area})`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error", res.status, body);
      throw new Error(`Failed to send email (${res.status})`);
    }

    return { success: true };
  });
