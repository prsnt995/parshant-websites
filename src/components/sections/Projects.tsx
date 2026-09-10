"use client";

import { ExternalLink, ShoppingBag, Shirt, Globe } from "lucide-react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  websiteDisplay: string;
  websiteUrl: string;
  logo?: string;
  icon: React.ReactNode;
}

const projects: ProjectItem[] = [
  {
    id: "namaste-mart",
    title: "Namaste Mart",
    category: "Indian Store",
    description: "Indian Store marketplace offering authentic groceries, daily essentials, specialty foods, and South Asian products.",
    websiteDisplay: "namastemart.me",
    websiteUrl: "https://namastemart.me",
    logo: "/images/namaste-mart-logo.jpg",
    icon: <ShoppingBag className="w-6 h-6 text-slate-800" />,
  },
  {
    id: "noeul-fashion",
    title: "NOEUL",
    category: "Fashion / Clothing Brand",
    description: "Contemporary Korean fashion and clothing brand featuring curated apparel, minimalist streetwear, and modern designs.",
    websiteDisplay: "noeul.me",
    websiteUrl: "https://noeul.me",
    logo: "/images/noeul-logo.png",
    icon: <Shirt className="w-6 h-6 text-slate-800" />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-background border-b border-border">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            Our Brands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            OUR BUSINESSES
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Explore active businesses and digital platforms operating under NOEUL ENTERPRISES.
          </p>
        </div>

        {/* Projects Cards Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background border border-border rounded-xl p-6 md:p-8 hover:border-slate-400 transition-all duration-200 shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Logo / Icon & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  {project.logo ? (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-white p-0.5 group-hover:scale-105 transition-transform">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain p-0.5 rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-slate-200 transition-colors">
                      {project.icon}
                    </div>
                  )}
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-slate-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Website Link & Action Button */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600">
                  <Globe size={14} className="text-slate-400" />
                  <span>{project.websiteDisplay}</span>
                </div>

                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-slate-50 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


