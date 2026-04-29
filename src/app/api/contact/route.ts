import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, projectType, message } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Farga Contact <contact@farga.me>",
    to: "contact@farga.me",
    replyTo: email,
    subject: `Nouveau devis — ${projectType}`,
    text: `Nom : ${name}\nEmail : ${email}\nProjet : ${projectType}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
