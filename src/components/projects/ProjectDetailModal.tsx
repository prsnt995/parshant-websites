"use client";

import { Project } from "@/types/project";
import { X, ExternalLink, GitBranch, Smartphone, CheckCircle2, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return null;

  const currentImage = selectedImage || project.image;
  const allImages = [project.image, ...(project.screenshots || [])].filter((v, i, a) => a.indexOf(v) === i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-background border border-border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800">
              {project.category}
            </span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-md border ${
              project.status === "Completed"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : project.status === "In Development"
                ? "bg-amber-50 text-amber-800 border-amber-200"
                : "bg-slate-100 text-slate-700 border-slate-200"
            }`}>
              {project.status}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Title & Slogan */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden bg-slate-100 border border-border">
            <Image
              src={currentImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Screenshot Thumbnails (if multiple) */}
          {allImages.length > 1 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Screenshots & Gallery
              </h4>
              <div className="flex gap-2.5 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-14 rounded-md overflow-hidden border shrink-0 transition-all ${
                      currentImage === img ? "border-slate-900 ring-2 ring-slate-900/20" : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Screenshot ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Description */}
          {project.fullDescription && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Detailed Overview
              </h4>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
                {project.fullDescription}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 bg-background p-2.5 rounded-md border border-border">
                    <CheckCircle2 size={16} className="text-slate-800 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
              <Tag size={13} /> Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Development Info */}
          <div className="text-xs text-muted-foreground flex items-center gap-2 border-t border-border pt-4">
            <Calendar size={14} /> Added: {project.createdAt}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.liveUrl && (
              <a 
                href={project.links.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-foreground text-background px-4 py-2.5 rounded-md text-xs font-medium hover:bg-foreground/90 transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={14} /> Live Demo / Website
              </a>
            )}
            {project.links.githubUrl && (
              <a 
                href={project.links.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <GitBranch size={14} /> GitHub Repository
              </a>
            )}
            {project.links.appStoreUrl && (
              <a 
                href={project.links.appStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <Smartphone size={14} /> App Store
              </a>
            )}
            {project.links.playStoreUrl && (
              <a 
                href={project.links.playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <Smartphone size={14} /> Google Play Store
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
