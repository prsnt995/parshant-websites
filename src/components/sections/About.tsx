import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Cpu, Smartphone, Globe2, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
            <Sparkles size={14} /> About NOEUL ENTERPRISES
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Innovating Technology & <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent">
              India 🇮🇳 ↔ Korea 🇰🇷 Cross-Border Trade
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            <strong className="text-foreground">{siteConfig.name}</strong>, owned and led by <strong className="text-foreground">{siteConfig.owner}</strong>, is a multi-disciplinary company specializing in custom <strong className="text-foreground">AI Models</strong>, native <strong className="text-foreground">iOS & Android Apps</strong>, and cross-border <strong className="text-blue-600 dark:text-blue-400 font-bold">Import & Export between India & South Korea</strong>.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            From cross-border trading between India and South Korea to delivering cutting-edge AI software and mobile apps globally, we drive innovation and trade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-background border border-border p-6 rounded-2xl">
              <Cpu className="text-indigo-600 mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">AI Model Development</h3>
              <p className="text-xs text-muted-foreground">Building intelligent LLM workflows, vision models, and task automation.</p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl">
              <Smartphone className="text-emerald-600 mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">iOS & Android Apps</h3>
              <p className="text-xs text-muted-foreground">Engineering polished mobile apps published for global users.</p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl">
              <Globe2 className="text-blue-600 mb-3" size={28} />
              <h3 className="font-bold text-base mb-1">India ↔ Korea Trade</h3>
              <p className="text-xs text-muted-foreground">Importing & exporting spices, food goods, tech, and consumer items.</p>
            </div>
          </div>
          
          <div className="mb-10 text-base">
            <span className="text-muted-foreground font-medium">Owner & Founder:</span>{" "}
            <span className="text-foreground font-extrabold text-lg">{siteConfig.owner}</span>
          </div>

          <Link 
            href="#contact" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg hover:scale-105"
          >
            Work With NOEUL ENTERPRISES
          </Link>
        </div>
      </div>
    </section>
  );
}

