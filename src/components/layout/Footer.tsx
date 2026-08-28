import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Video, Code2, Camera, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50 pt-12 pb-8 text-xs text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-base tracking-tight text-foreground block mb-2">
              {siteConfig.name}
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm mb-3">
              Building custom AI Models, high-performance iOS & Android Apps, and modern Web Applications.
            </p>
            <p className="text-xs text-slate-700 font-medium">
              Founder & Leadership: {siteConfig.owner}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2 font-medium">
            <h4 className="font-bold mb-1.5 text-foreground text-xs uppercase tracking-wide">Navigation</h4>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="#ai-solutions" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Cpu size={13} /> AI Models & Apps
            </Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-3 text-xs uppercase tracking-wide text-foreground">Connect With Us</h4>
            <div className="flex gap-2 mb-3">
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition-colors" aria-label="YouTube">
                <Video size={16} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition-colors" aria-label="GitHub">
                <Code2 size={16} />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition-colors" aria-label="Instagram">
                <Camera size={16} />
              </a>
            </div>
            <div className="font-medium">
              <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-3">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-medium text-slate-700">AI Models • iOS & Android Apps • Custom Software</p>
        </div>
      </div>
    </footer>
  );
}

