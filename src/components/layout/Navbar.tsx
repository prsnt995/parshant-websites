"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-foreground flex items-center gap-2">
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
          
          <Link href="#ai-solutions" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Cpu size={15} />
            <span>AI Models</span>
          </Link>

          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          
          <Link 
            href="#contact" 
            className="bg-foreground text-background px-4 py-2 rounded-md hover:bg-foreground/90 transition-colors font-medium text-xs tracking-wide uppercase"
          >
            Start Project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-5 space-y-3 font-medium text-sm text-muted-foreground">
          <Link href="/" onClick={toggleMenu} className="block py-2 hover:text-foreground">Home</Link>
          <Link href="#services" onClick={toggleMenu} className="block py-2 hover:text-foreground">Services</Link>
          <Link href="#ai-solutions" onClick={toggleMenu} className="flex items-center gap-2 py-2 hover:text-foreground">
            <Cpu size={16} /> AI Models & Apps
          </Link>
          <Link href="#projects" onClick={toggleMenu} className="block py-2 hover:text-foreground">Projects</Link>
          <Link href="#about" onClick={toggleMenu} className="block py-2 hover:text-foreground">About</Link>
          <Link href="#contact" onClick={toggleMenu} className="block py-2 hover:text-foreground">Contact</Link>
          <Link 
            href="#contact" 
            onClick={toggleMenu}
            className="block text-center bg-foreground text-background px-4 py-2.5 rounded-md w-full font-medium text-xs tracking-wide uppercase mt-2"
          >
            Start Project
          </Link>
        </div>
      )}
    </header>
  );
}

