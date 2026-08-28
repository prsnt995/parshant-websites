import Link from "next/link";
import { ArrowRight, Cpu, Smartphone, Layout } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border bg-background">
      <div className="container max-w-4xl flex flex-col items-center text-center">
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium tracking-wide uppercase border border-slate-200 dark:border-slate-700">
          <span>{siteConfig.name} • Founder: {siteConfig.owner}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-foreground">
          AI Models, Custom Software & <br className="hidden sm:inline" />
          <span className="text-foreground">
            iOS & Android Mobile Apps
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
          Founded by <strong className="text-foreground font-semibold">{siteConfig.owner}</strong> — We build custom <span className="text-foreground font-semibold">AI Models</span>, high-performance <span className="text-foreground font-semibold">iOS & Android Apps</span>, and modern <span className="text-foreground font-semibold">Web Applications</span>.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
            <Cpu size={14} className="text-slate-500" /> Custom AI Models & LLMs
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
            <Smartphone size={14} className="text-slate-500" /> iOS & Android Native Apps
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
            <Layout size={14} className="text-slate-500" /> Full-Stack Web Systems
          </span>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}


