import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 text-xs text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-sm tracking-tight text-foreground">
            {siteConfig.name}
          </Link>
          <span className="text-slate-300">|</span>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5 text-xs font-medium">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="#ai-solutions" className="hover:text-foreground transition-colors">AI Models</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>

        {/* Contact Email */}
        <div>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors font-medium">
            {siteConfig.email}
          </a>
        </div>

      </div>
    </footer>
  );
}

