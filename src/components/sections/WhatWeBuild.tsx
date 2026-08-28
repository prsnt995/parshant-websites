import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const examples = [
  "Custom AI Models",
  "iOS App (iPhone/iPad)",
  "Android App (Play Store)",
  "Cloud & API Integrations",
  "LLM & AI Assistant",
  "E-Commerce Store",
  "Admin Dashboard",
  "Company Website",
  "Custom Software"
];

export function WhatWeBuild() {
  return (
    <section className="section-padding bg-background border-b border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            Custom Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Got an Idea?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Tell us what you want to build. We turn your ideas into functional websites, mobile apps, and software products.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {examples.map((example, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-md border border-slate-200 text-slate-800"
              >
                <CheckCircle2 size={16} className="text-slate-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{example}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-base font-medium mb-6 text-foreground">
              Your idea doesn&apos;t have to be complicated.
            </p>
            <Link 
              href="#contact" 
              className="bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              Let&apos;s Build It <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
