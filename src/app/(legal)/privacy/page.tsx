import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { siteConfig } from "@/config/site";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information under PIPA and GDPR.`,
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader
        title="Privacy Policy"
        description={`This Privacy Policy explains how ${siteConfig.name} collects, uses, and protects your personal information when you use ${siteConfig.url} and submit inquiries via our contact form. Compliant with the Korean PIPA and GDPR.`}
      />

      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. Data Controller</h2>
          <p>
            Controller: <strong>{legalConfig.controller.name}</strong> (Owner: {legalConfig.controller.owner})<br />
            Email: <a href={`mailto:${legalConfig.controller.email}`}>{legalConfig.controller.email}</a><br />
            Website: <a href={legalConfig.controller.url}>{legalConfig.controller.url}</a><br />
            Address: {legalConfig.controller.address}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact form:</strong> name, email, phone/WhatsApp (optional), project type, description</li>
            <li><strong>Technical:</strong> IP address, browser, device, pages visited (via Firebase Analytics if consented)</li>
            <li><strong>Correspondence:</strong> emails you send to {legalConfig.controller.email}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">3. Purpose & Legal Basis</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your project inquiries and provide quotes (contract pre-performance, PIPA consent)</li>
            <li>Improve website performance and analytics (legitimate interest, consent for cookies)</li>
            <li>Comply with legal obligations and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">4. How We Store & Process</h2>
          <p>
            Submissions are stored in <strong>Google Firebase Firestore</strong> (region: asia-northeast3, database: default, collection: &quot;noeul connect&quot;) and forwarded via <strong>Gmail SMTP</strong> to {legalConfig.controller.email}. Firebase Analytics may process usage data. We retain contact inquiries for <strong>{legalConfig.retention}</strong> unless you request deletion earlier.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">5. Sharing & Transfers</h2>
          <p>We do not sell your data. Processors:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google LLC (Firebase / Analytics) — may transfer outside Korea under SCCs</li>
            <li>Gmail (SMTP) for email delivery</li>
          </ul>
          <p>Transfers outside Korea occur only to provide the service you requested.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">6. Your Rights (PIPA & GDPR)</h2>
          <p>You may request access, correction, deletion, or withdrawal of consent by emailing <a href={`mailto:${legalConfig.controller.email}`}>{legalConfig.controller.email}</a>. We respond within 30 days. You may also lodge a complaint with the Korean PIPC or your EU supervisory authority.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">7. Cookies</h2>
          <p>We use essential cookies and, with consent, analytics cookies (Firebase Analytics). See our <Link href="/cookies">Cookie Policy</Link> for details and opt-out.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">8. Security & Children</h2>
          <p>We apply reasonable technical measures (TLS, Firestore rules). Our services are not directed to children under 14 (PIPA) / 16 (GDPR). We do not knowingly collect children&apos;s data.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">9. Changes</h2>
          <p>We may update this policy. The &quot;Last updated&quot; date will change and continued use after posting constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">10. Contact</h2>
          <p>Questions? Contact <a href={`mailto:${legalConfig.controller.email}`}>{legalConfig.controller.email}</a> or use our <Link href="/#contact">contact form</Link>.</p>
        </section>
      </div>
    </>
  );
}
