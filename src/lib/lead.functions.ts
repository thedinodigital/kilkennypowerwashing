import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  service: z.string().min(1).max(100),
  area: z.string().trim().min(2).max(100),
  notes: z.string().trim().max(1000).optional(),
});

export async function submitLead(data: z.infer<typeof leadSchema>): Promise<{ success: boolean }> {
  const res = await fetch("/.netlify/functions/submit-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(body.error || `Request failed (${res.status})`);
  }

  return res.json();
}
