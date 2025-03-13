
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { user_name, user_email, phone, message } = await req.json();

  if (!user_name || !user_email || !message || !phone) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }


  const transporter = nodemailer.createTransport({
    host:'smtp.zoho.com',
    port:465,
    secure: true,
    auth: {
      user: process.env.USER || 'contact@advixs.com',
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${user_name}" <contact@advixs.com>`,
    replyTo: user_email,
    to: process.env.USER || 'contact@advixs.com',
    subject: `New Contact Form Submission from ${user_name}`,
    text: `
      Name: ${user_name}
      Email: ${user_email}
      Phone: ${phone}
      Message: ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}