import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Video, Code2, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50 py-8 text-xs text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Tagline & Connect With Us */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap">
          <Link href="/" className="font-bold text-sm tracking-tight text-foreground">
            {siteConfig.name}
          </Link>
          <span className="hidden sm:inline text-slate-300">|</span>
          <p className="font-medium text-slate-700">Technology • AI • Web • Android • iOS</p>
          <span className="hidden sm:inline text-slate-300">|</span>
          
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Connect With Us:</span>
            <div className="flex items-center gap-1.5">
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:text-foreground hover:bg-slate-100 transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <Video size={14} />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:text-foreground hover:bg-slate-100 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <Code2 size={14} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:text-foreground hover:bg-slate-100 transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <Camera size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div>
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

