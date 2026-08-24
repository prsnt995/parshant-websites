import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  description: string;
}

/**
 * Send email notification to site owner when a project request is submitted.
 */
export async function sendContactNotificationEmail(payload: ContactEmailPayload) {
  const { name, email, phone, projectType, description } = payload;
  const targetEmail = process.env.NOTIFICATION_EMAIL || siteConfig.email;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const isRealPass = smtpPass && !smtpPass.startsWith("your_");

  if (smtpHost && smtpUser && isRealPass) {
    try {
      const cleanPass = smtpPass.replace(/\s+/g, "");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: cleanPass,
        },
      });

      const mailOptions = {
        from: `"${siteConfig.name} Website" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: `🚨 New Project Request from ${name} (${projectType})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded-radius: 8px;">
            <h2 style="color: #4f46e5; margin-bottom: 20px;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone / WhatsApp:</strong> ${phone || "Not provided"}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Description:</strong></p>
            <blockquote style="background: #f9fafb; padding: 15px; border-left: 4px solid #4f46e5; margin: 0;">
              ${description.replace(/\n/g, "<br/>")}
            </blockquote>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #eeeeee;" />
            <p style="font-size: 12px; color: #6b7280;">This message was submitted via ${siteConfig.name} website contact form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Email] Notification sent successfully to ${targetEmail}`);
      return { sent: true };
    } catch (err: unknown) {
      console.error("[Email Error] Failed to send notification email:", err);
      return { sent: false, error: err instanceof Error ? err.message : "SMTP send failed" };
    }
  } else {
    // If SMTP is pending configuration in .env.local, log formatted message
    console.log(`[Email Mock Log] New Project Request for ${targetEmail}:`, {
      name,
      email,
      phone,
      projectType,
      description,
    });
    return { sent: false, mock: true };
  }
}
