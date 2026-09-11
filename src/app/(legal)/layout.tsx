export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background">
      <div className="container max-w-3xl py-12 md:py-16">
        <article className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:tracking-tight prose-headings:font-bold prose-p:leading-relaxed prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-slate-900 prose-a:underline">
          {children}
        </article>
        <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          This document does not constitute legal advice. For questions contact us at the email below.
        </div>
      </div>
    </div>
  );
}
