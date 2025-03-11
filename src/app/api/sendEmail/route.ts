import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
  runtime: "nodejs",
};

console.log("Email host:", process.env.EMAIL_HOST);


export async function POST(request: Request) {
  try {
    const { user_name, user_email, phone, message } = await request.json();

    if (!user_name || !user_email || !message || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      // host: process.env.EMAIL_HOST,
      // port: Number(process.env.EMAIL_PORT),
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `${user_name}`,
      to: process.env.EMAIL_USER,
      replyTo: user_email,
      subject: "New Contact Form Message",
      text: message,
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">New Contact Form Message</h2>
        
        <h3 style="color: #333; margin-top: 20px;">Contact Details</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Name:</strong> ${user_name}</li>
          <li><strong>Email:</strong> ${user_email}</li>
          <li><strong>Phone:</strong> ${phone || "N/A"}</li>
        </ul>
  
        <h4 style="color: #333; margin-top: 20px;">Message</h4>
        <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #eee;">
          <p style="white-space: pre-wrap; margin: 0;">${message}</p>
        </div>
  
        <footer style="margin-top: 30px; text-align: center; color: #888;">
          <p style="font-size: 12px;">This message was sent from your website contact form.</p>
        </footer>
      </div>
    `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
