import Link from "next/link";
import { ArrowRight, Cpu, Smartphone, Globe, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border bg-background">
      <div className="container max-w-4xl flex flex-col items-center text-center">
        
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-200">
          <span>{siteConfig.name}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
          {siteConfig.tagline}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
          {siteConfig.name} is a technology-focused company creating AI models, websites, Android applications, iOS applications, and innovative digital projects.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-medium">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-800 border border-slate-200">
            <Cpu size={14} className="text-slate-600" /> AI Models & ML
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-800 border border-slate-200">
            <Globe size={14} className="text-slate-600" /> Modern Web Applications
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-800 border border-slate-200">
            <Smartphone size={14} className="text-slate-600" /> Android & iOS Apps
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-800 border border-slate-200">
            <Code2 size={14} className="text-slate-600" /> Custom Software Solutions
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link 
            href="#projects" 
            className="w-full sm:w-auto bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-background text-foreground border border-slate-300 px-6 py-3 rounded-md font-medium text-sm hover:bg-slate-100 transition-colors flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}


