import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { siteConfig } from "@/config/site";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of Service for ${siteConfig.name}. Rules for using our website and agency services.`,
};

export default function TermsPage() {
  return (
    <>
      <LegalHeader
        title="Terms of Service"
        description={`These Terms govern your use of ${siteConfig.url} and our agency services (AI, web, Android, iOS, custom software). By using the site you agree to these Terms.`}
      />
      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. Acceptance</h2>
          <p>By accessing {siteConfig.url} you agree to these Terms and our Privacy Policy. If you do not agree, do not use the site.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. Services</h2>
          <p>{siteConfig.name} provides technology consulting, AI model development, website, Android/iOS app, and custom software services. Project scope, timeline, and fees are agreed separately in writing before work begins.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">3. Your Obligations</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate information via the contact form</li>
            <li>Do not misuse the site, attempt to hack, spam, or upload malicious content</li>
            <li>Respect intellectual property of the site and third parties</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">4. Intellectual Property</h2>
          <p>All content on {siteConfig.url} (text, design, logos) is owned by {siteConfig.name} unless stated. Client deliverables IP transfers upon full payment unless otherwise agreed.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">5. Quotes & Payment</h2>
          <p>Quotes via the contact form are non-binding until a formal proposal is signed. Payment terms will be specified per project.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">6. Warranties & Liability</h2>
          <p>Services are provided &quot;as is&quot;. We do not warrant uninterrupted or error-free operation. To the extent permitted by law, {siteConfig.name}&apos;s liability is limited to fees paid for the relevant project. We are not liable for indirect or consequential damages.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">7. External Links</h2>
          <p>Links to external sites (e.g., namastemart.me, noeul.me, GitHub, Instagram) are for convenience; we are not responsible for their content.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">8. Termination</h2>
          <p>We may suspend access if you violate these Terms.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">9. Governing Law</h2>
          <p>These Terms are governed by the laws of {legalConfig.governingLaw}. Disputes shall be submitted to courts in {legalConfig.jurisdiction}.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">10. Contact</h2>
          <p>Questions: <a href={`mailto:${legalConfig.controller.email}`}>{legalConfig.controller.email}</a></p>
        </section>
      </div>
    </>
  );
}
