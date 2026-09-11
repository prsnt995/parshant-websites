import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.name}`,
  description: `Cookie Policy for ${siteConfig.name}. How we use cookies and Firebase Analytics.`,
};

export default function CookiesPage() {
  return (
    <>
      <LegalHeader
        title="Cookie Policy"
        description={`How ${siteConfig.name} uses cookies and similar technologies on ${siteConfig.url}.`}
      />
      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device. We use cookies to operate the site and, with consent, to understand usage.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. Types We Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Strictly necessary:</strong> required for the site to function (no consent needed)</li>
            <li><strong>Analytics (Firebase Analytics):</strong> collects anonymized usage via <code>getAnalytics</code> only if your browser supports it and you have not opted out — helps us improve the site</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">3. Third-Party</h2>
          <p>Google Firebase may set cookies for analytics. See Google&apos;s policies for details.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">4. Your Choices</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Browser settings: block or delete cookies (may break site features)</li>
            <li>Analytics opt-out: use your browser&apos;s Do Not Track or install Google Analytics Opt-out Add-on</li>
            <li>Contact us to withdraw consent</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">5. Updates</h2>
          <p>We may update this policy when our cookie use changes. Check the &quot;Last updated&quot; date above.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">6. Contact</h2>
          <p>Questions: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> · <a href="/privacy">Privacy Policy</a></p>
        </section>
      </div>
    </>
  );
}
