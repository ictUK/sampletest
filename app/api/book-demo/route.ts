import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, company, website, role } = body;

    if (!firstName || !lastName || !email || !phone || !company || !website || !role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save to database
    const demoRequest = await prisma.demoRequest.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        website,
        role,
      },
    });

    // Send email to admin
    const adminEmailContent = `
      <h2>New Demo Request from XPEER.AI</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Job Role:</strong> ${role}</p>
      <p><strong>Submitted at:</strong> ${new Date(demoRequest.createdAt).toLocaleString()}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Demo Request: ${firstName} ${lastName}`,
      html: adminEmailContent,
    });

    // Send confirmation email to user
    const userEmailContent = `
      <h2>Thank you for requesting a demo!</h2>
      <p>Hi ${firstName},</p>
      <p>We have received your demo request and will get back to you within one business day.</p>
      <p>Our team will review your information and reach out to schedule a time that works best for you.</p>
      <p>Best regards,<br>XPEER AI Team</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Demo Request Confirmation - XPEER AI",
      html: userEmailContent,
    });

    return NextResponse.json(
      { success: true, message: "Demo request submitted successfully", id: demoRequest.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { error: "Failed to process demo request. Please try again later." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
