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
 * Send email notification directly to site owner when a visitor submits a contact form message.
 */
export async function sendContactNotificationEmail(payload: ContactEmailPayload) {
  const { name, email, phone, projectType, description } = payload;
  const targetEmail = process.env.NOTIFICATION_EMAIL || siteConfig.email;

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpUser && smtpPass && !smtpPass.startsWith("your_")) {
    try {
      const cleanPass = smtpPass.replace(/\s+/g, "");
      
      const transportConfig = smtpHost.includes("gmail")
        ? {
            service: "gmail",
            auth: {
              user: smtpUser,
              pass: cleanPass,
            },
          }
        : {
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: cleanPass,
            },
          };

      const transporter = nodemailer.createTransport(transportConfig);

      const mailOptions = {
        from: `"${siteConfig.name} Website" <${smtpUser}>`,
        to: targetEmail,
        replyTo: `"${name}" <${email}>`,
        subject: `🚨 New Message from ${name} (${projectType})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #4f46e5; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #1e293b; margin: 0 0 6px 0; font-size: 22px;">New Website Inquiry</h2>
              <p style="color: #64748b; margin: 0; font-size: 14px;">A user sent you a message from ${siteConfig.name} website.</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Sender Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Sender Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #0f172a;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Project Type:</td>
                <td style="padding: 8px 0;"><span style="background: #e0e7ff; color: #3730a3; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600;">${projectType}</span></td>
              </tr>
            </table>

            <div style="margin-bottom: 24px;">
              <h3 style="color: #334155; font-size: 15px; margin: 0 0 8px 0;">Message Content:</h3>
              <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #4f46e5; border-radius: 6px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${description}</div>
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
              💡 <strong>Tip:</strong> Simply reply to this email in your inbox to respond directly to <strong>${name}</strong> (${email}).
            </div>
          </div>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`[Email Success] Direct message sent to ${targetEmail} (Message ID: ${info.messageId})`);
      return { sent: true, messageId: info.messageId };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "SMTP send failed";
      console.error("[Email Error] Failed to send notification email:", errorMsg);
      return { sent: false, error: errorMsg };
    }
  } else {
    console.warn(`[Email Warning] SMTP credentials missing or invalid in .env.local`);
    return { sent: false, error: "SMTP credentials not configured" };
  }
}

