// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (
      !formData.f_name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter with Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
      port: parseInt(process.env.ZOHO_SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.NOTIFICATION_EMAIL || "umar@umarweb.com",
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.f_name} ${
        formData.l_name || ""
      }`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; margin-bottom: 5px; }
            .value { padding: 8px; background-color: #f8f9fa; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>From your website contact form</p>
            </div>
            
            <div class="field">
              <div class="label">First Name</div>
              <div class="value">${formData.f_name}</div>
            </div>
            
            ${
              formData.l_name
                ? `
            <div class="field">
              <div class="label">Last Name</div>
              <div class="value">${formData.l_name}</div>
            </div>
            `
                : ""
            }
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${formData.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone</div>
              <div class="value">${formData.phone}</div>
            </div>
            
            ${
              formData.business_name
                ? `
            <div class="field">
              <div class="label">Business Name</div>
              <div class="value">${formData.business_name}</div>
            </div>
            `
                : ""
            }
            
            ${
              formData.industry
                ? `
            <div class="field">
              <div class="label">Industry</div>
              <div class="value">${formData.industry}</div>
            </div>
            `
                : ""
            }
            
            <div class="field">
              <div class="label">Message</div>
              <div class="value">${formData.message.replace(
                /\n/g,
                "<br>"
              )}</div>
            </div>
            
            <p><em>This message was sent from your website contact form.</em></p>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
