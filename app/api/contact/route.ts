import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

// Your email – change RESEND_TO_EMAIL in .env or it defaults to hi@joemac.co.nz
const TO_EMAIL = process.env.RESEND_TO_EMAIL || "hi@joemac.co.nz"

// "From" must be a verified domain in Resend. Use onboarding@resend.dev for testing.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Website <onboarding@resend.dev>"

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const { name, email, eventType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const html = `
      <h2>New message from your website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${eventType ? `<p><strong>Event type:</strong> ${escapeHtml(eventType)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Website contact: ${name}`,
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email" },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (char) => map[char] ?? char)
}
