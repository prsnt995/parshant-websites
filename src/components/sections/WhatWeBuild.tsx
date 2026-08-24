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
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Got an Idea?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Tell us what you want to build. We can help turn your idea into a real website, mobile app or software product.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {examples.map((example, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 bg-primary-foreground/10 px-5 py-3 rounded-full border border-primary-foreground/20"
              >
                <CheckCircle2 size={18} className="text-primary-foreground/60" />
                <span className="text-sm font-medium">{example}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-medium mb-8">
              Your idea doesn&apos;t have to be complicated.
            </p>
            <Link 
              href="#contact" 
              className="bg-background text-foreground px-8 py-4 rounded-full font-bold hover:bg-muted transition-colors flex items-center gap-2"
            >
              Let&apos;s Build It <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
