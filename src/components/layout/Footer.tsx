import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50 py-8 text-xs text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <Link href="/" className="font-bold text-sm tracking-tight text-foreground">
            {siteConfig.name}
          </Link>
          <span className="hidden sm:inline text-slate-300">|</span>
          <p className="font-medium text-slate-700">Technology • AI • Web • Android • iOS</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
            {siteConfig.email}
          </a>
          <span className="text-slate-300">|</span>
          <a 
            href={siteConfig.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-foreground transition-colors"
          >
            Instagram: @noeulenterprises
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

