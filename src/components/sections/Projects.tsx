"use client";

import { Project, ProjectCategory } from "@/types/project";
import { getStoredProjects, saveProjectsToStorage, resetProjectsToDefault } from "@/lib/projectsStorage";
import { ProjectDetailModal } from "@/components/projects/ProjectDetailModal";
import { ProjectAdminModal } from "@/components/admin/ProjectAdminModal";
import { ArrowUpRight, ExternalLink, GitBranch, Smartphone, Settings, Eye } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const categories: Array<{ label: string; value: ProjectCategory | "All" }> = [
  { label: "All Projects", value: "All" },
  { label: "AI Models", value: "AI" },
  { label: "Websites", value: "Website" },
  { label: "Android", value: "Android" },
  { label: "iOS", value: "iOS" },
  { label: "Software", value: "Software" },
  { label: "Other", value: "Other" },
];

export function Projects() {
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");
  const [selectedDetailProject, setSelectedDetailProject] = useState<Project | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    setProjectsList(getStoredProjects());
  }, []);

  const filteredProjects = projectsList.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  const handleSaveProject = (updatedOrNewProject: Project) => {
    setProjectsList((prev) => {
      const exists = prev.some((p) => p.id === updatedOrNewProject.id);
      let updated: Project[];
      if (exists) {
        updated = prev.map((p) => (p.id === updatedOrNewProject.id ? updatedOrNewProject : p));
      } else {
        updated = [updatedOrNewProject, ...prev];
      }
      saveProjectsToStorage(updated);
      return updated;
    });
  };

  const handleDeleteProject = (projectId: string) => {
    setProjectsList((prev) => {
      const updated = prev.filter((p) => p.id !== projectId);
      saveProjectsToStorage(updated);
      return updated;
    });
  };

  const handleResetDefaults = () => {
    const defaults = resetProjectsToDefault();
    setProjectsList(defaults);
  };

  return (
    <section id="projects" className="section-padding bg-background border-b border-border">
      <div className="container">
        
        {/* Header Title & Admin Trigger */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Technology Projects & Products
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Explore AI models, web platforms, Android & iOS apps, and software built by NOEUL ENTERPRISES.
            </p>
          </div>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="shrink-0 bg-slate-100 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-md text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            title="Owner Project Management Admin"
          >
            <Settings size={14} /> Manage Projects
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-border">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                selectedCategory === cat.value
                  ? "bg-foreground text-background"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-muted-foreground text-sm">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-border">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-background/95 border border-border px-2.5 py-1 rounded-md text-xs font-semibold text-foreground">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
                        project.status === "Completed"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : project.status === "In Development"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-foreground mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-[11px] font-mono font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedDetailProject(project)}
                    className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
                  >
                    <Eye size={14} /> View Details
                  </button>

                  <div className="flex items-center gap-1.5">
                    {project.links.liveUrl && (
                      <a 
                        href={project.links.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 text-slate-600 hover:text-foreground bg-slate-100 rounded-md border border-slate-200 hover:bg-slate-200 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.links.githubUrl && (
                      <a 
                        href={project.links.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 text-slate-600 hover:text-foreground bg-slate-100 rounded-md border border-slate-200 hover:bg-slate-200 transition-colors"
                        title="GitHub Code"
                      >
                        <GitBranch size={14} />
                      </a>
                    )}
                    {(project.links.appStoreUrl || project.links.playStoreUrl) && (
                      <a 
                        href={project.links.appStoreUrl || project.links.playStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 text-slate-600 hover:text-foreground bg-slate-100 rounded-md border border-slate-200 hover:bg-slate-200 transition-colors"
                        title="App Store / Google Play"
                      >
                        <Smartphone size={14} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedDetailProject}
          onClose={() => setSelectedDetailProject(null)}
        />

        {/* Admin Management Modal */}
        <ProjectAdminModal
          projects={projectsList}
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          onSaveProject={handleSaveProject}
          onDeleteProject={handleDeleteProject}
          onResetDefaults={handleResetDefaults}
        />

      </div>
    </section>
  );
}
