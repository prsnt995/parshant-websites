import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Cpu, Smartphone, Layout } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/60 border-b border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            About {siteConfig.name}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            Innovating Technology & Digital Software Solutions
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
            <strong className="text-foreground font-semibold">{siteConfig.name}</strong>, founded by <strong className="text-foreground font-semibold">{siteConfig.owner}</strong>, specializes in custom <strong className="text-foreground font-semibold">AI Models</strong>, native <strong className="text-foreground font-semibold">iOS & Android Apps</strong>, and high-performance <strong className="text-foreground font-semibold">Web Applications</strong>.
          </p>
          
          <p className="text-sm sm:text-base text-muted-foreground mb-10 leading-relaxed">
            Delivering cutting-edge AI software and mobile apps globally, we drive digital innovation and help businesses build modern products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 text-left">
            <div className="bg-background border border-border p-5 rounded-lg">
              <Cpu className="text-slate-800 mb-3" size={24} />
              <h3 className="font-bold text-sm mb-1 text-foreground">AI Model Development</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Building intelligent LLM workflows, vision models, and task automation.</p>
            </div>
            <div className="bg-background border border-border p-5 rounded-lg">
              <Smartphone className="text-slate-800 mb-3" size={24} />
              <h3 className="font-bold text-sm mb-1 text-foreground">iOS & Android Apps</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Engineering polished mobile apps published for global users.</p>
            </div>
            <div className="bg-background border border-border p-5 rounded-lg">
              <Layout className="text-slate-800 mb-3" size={24} />
              <h3 className="font-bold text-sm mb-1 text-foreground">Full-Stack Web Systems</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Designing fast Next.js websites, cloud backends, and databases.</p>
            </div>
          </div>
          
          <div className="mb-8 text-sm">
            <span className="text-muted-foreground font-medium">Founder & Leadership:</span>{" "}
            <span className="text-foreground font-bold">{siteConfig.owner}</span>
          </div>

          <Link 
            href="#contact" 
            className="inline-block bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Work With {siteConfig.name}
          </Link>
        </div>
      </div>
    </section>
  );
}

