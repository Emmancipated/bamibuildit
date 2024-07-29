// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any) {
  const { name, email, phone, message } = await request.json();

  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can use other services like 'SendGrid', 'Mailgun', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.SITE_OWNER_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
    html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #344054; background-color: #f9f9f9; font-weight: 500; padding: 30px;">
  <div>
    <h3>Hello BAMIBUILDIT,</h3>
    <h3>you have a message from <strong style="color: #099250;">${name}</strong></h3>
    <h3>You can also reach me via this phone number <strong>${phone}</strong></h3>
    <p>My email address is <a href="mailto:${email}">${email}</a></p>
    <div style="background-color: #f9f9f9; border-radius: 5px;">
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
    <p>Sent from <strong>BAMIBUILDIT</strong></p>
    </div>
  </div>
`,
  };
  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
