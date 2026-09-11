import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { siteConfig } from "@/config/site";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: `Disclaimer | ${siteConfig.name}`,
  description: `Disclaimer for ${siteConfig.name}. Limitations regarding AI outputs and external links.`,
};

export default function DisclaimerPage() {
  return (
    <>
      <LegalHeader
        title="Disclaimer"
        description={`Important information about the content and services on ${siteConfig.url}.`}
      />
      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. General Information</h2>
          <p>Content on {siteConfig.url} is for general information about our agency services. It is not professional, legal, or financial advice.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. AI & Software</h2>
          <p>AI models and software solutions involve probabilistic outputs. We do not guarantee accuracy, completeness, or fitness for a particular purpose. Test thoroughly before production use.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">3. External Links</h2>
          <p>Links to external sites (e.g., YouTube, GitHub, Instagram, namastemart.me, noeul.me) are not endorsements. We are not responsible for their content or availability.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">4. No Warranty</h2>
          <p>The site is provided &quot;as is&quot; without warranties of any kind.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">5. Contact</h2>
          <p>For concerns contact <a href={`mailto:${legalConfig.controller.email}`}>{legalConfig.controller.email}</a>.</p>
        </section>
      </div>
    </>
  );
}
