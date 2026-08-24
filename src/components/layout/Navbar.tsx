"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/80 shadow-xs">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight flex items-center gap-2">
          <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          
          <Link href="#ai-solutions" className="hover:text-primary transition-colors flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold">
            <Cpu size={15} />
            <span>AI Models</span>
          </Link>

          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          
          <Link 
            href="#contact" 
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity font-semibold shadow-xs"
          >
            Start Your Project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg px-4 py-5 space-y-4 font-medium shadow-xl">
          <Link href="/" onClick={toggleMenu} className="block py-2">Home</Link>
          <Link href="#services" onClick={toggleMenu} className="block py-2">Services</Link>
          <Link href="#ai-solutions" onClick={toggleMenu} className="flex items-center gap-2 py-2 text-indigo-600 font-semibold">
            <Cpu size={18} /> AI Models & Apps
          </Link>
          <Link href="#projects" onClick={toggleMenu} className="block py-2">Projects</Link>
          <Link href="#about" onClick={toggleMenu} className="block py-2">About</Link>
          <Link href="#contact" onClick={toggleMenu} className="block py-2">Contact</Link>
          <Link 
            href="#contact" 
            onClick={toggleMenu}
            className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-full w-full font-semibold"
          >
            Start Your Project
          </Link>
        </div>
      )}
    </header>
  );
}

