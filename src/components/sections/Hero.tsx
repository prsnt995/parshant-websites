import Link from "next/link";
import { ArrowRight, Cpu, Smartphone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="section-padding flex flex-col items-center justify-center text-center mt-6 md:mt-12 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-500/20 via-indigo-500/20 to-orange-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container max-w-5xl flex flex-col items-center">
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-orange-500/10 text-foreground text-xs font-bold tracking-wider uppercase border border-border shadow-xs">
          <Sparkles size={14} className="text-amber-500" />
          <span>{siteConfig.name} • Owner: {siteConfig.owner}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          AI Models, Custom Software & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent">
            iOS & Android Mobile Apps
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
          Founded by <strong className="text-foreground">{siteConfig.owner}</strong> — We build custom <span className="text-foreground font-semibold">AI Models</span>, high-performance <span className="text-foreground font-semibold">iOS & Android Apps</span>, and modern <span className="text-foreground font-semibold">Web Applications</span>.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-500/20">
            <Cpu size={14} /> Custom AI Models & LLMs
          </span>
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/20">
            <Smartphone size={14} /> iOS & Android Native Apps
          </span>
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-bold border border-sky-500/20">
            <Sparkles size={14} /> Full-Stack Web Development
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>

        <div className="pt-4 border-t border-border/60 w-full max-w-xl">
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
            NOEUL ENTERPRISES • Owner & Founder: {siteConfig.owner}
          </p>
        </div>
      </div>
    </section>
  );
}


