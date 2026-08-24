import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Video, Code2, Camera, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="font-extrabold text-2xl tracking-tight block mb-3">
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-4">
              Building custom AI Models, high-performance iOS & Android Apps, and modern Web Applications.
            </p>
            <p className="text-xs text-muted-foreground font-semibold">
              Owner & Founder: {siteConfig.owner}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2.5 text-sm font-medium">
            <h4 className="font-bold mb-2 text-foreground">Quick Navigation</h4>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#ai-solutions" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Cpu size={14} /> AI Models & Apps
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-foreground">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-background border border-border rounded-full hover:bg-muted hover:scale-110 transition-all" aria-label="YouTube">
                <Video size={18} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-background border border-border rounded-full hover:bg-muted hover:scale-110 transition-all" aria-label="GitHub">
                <Code2 size={18} />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-background border border-border rounded-full hover:bg-muted hover:scale-110 transition-all" aria-label="Instagram">
                <Camera size={18} />
              </a>
            </div>
            <div className="text-sm font-medium">
              <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-border/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-semibold text-foreground">AI Models • iOS & Android Apps • Custom Web Solutions</p>
        </div>
      </div>
    </footer>
  );
}

