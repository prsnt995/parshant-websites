"use client";

import { Project, ProjectCategory, ProjectStatus } from "@/types/project";
import { X, Plus, Trash2, Edit3, RotateCcw, Check, Sparkles } from "lucide-react";
import { useState } from "react";

interface ProjectAdminModalProps {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSaveProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
  onResetDefaults: () => void;
}

export function ProjectAdminModal({
  projects,
  isOpen,
  onClose,
  onSaveProject,
  onDeleteProject,
  onResetDefaults,
}: ProjectAdminModalProps) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const emptyForm: Project = {
    id: "",
    title: "",
    description: "",
    fullDescription: "",
    category: "Website",
    status: "Completed",
    technologies: [],
    features: [],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    screenshots: [],
    links: { liveUrl: "", githubUrl: "", appStoreUrl: "", playStoreUrl: "" },
    createdAt: new Date().toISOString().split("T")[0],
  };

  const [formData, setFormData] = useState<Project>(emptyForm);
  const [techInput, setTechInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");
  const [screenshotInput, setScreenshotInput] = useState("");

  if (!isOpen) return null;

  const handleStartAdd = () => {
    setFormData({
      ...emptyForm,
      id: `project-${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0],
    });
    setTechInput("");
    setFeatureInput("");
    setScreenshotInput("");
    setIsAddingNew(true);
    setEditingProject(null);
  };

  const handleStartEdit = (project: Project) => {
    setFormData({ ...project });
    setTechInput("");
    setFeatureInput("");
    setScreenshotInput("");
    setEditingProject(project);
    setIsAddingNew(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    onSaveProject(formData);
    setIsAddingNew(false);
    setEditingProject(null);
  };

  const handleAddTech = () => {
    if (!techInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, techInput.trim()],
    }));
    setTechInput("");
  };

  const handleRemoveTech = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
  };

  const handleAddFeature = () => {
    if (!featureInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      features: [...(prev.features || []), featureInput.trim()],
    }));
    setFeatureInput("");
  };

  const handleRemoveFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== index),
    }));
  };

  const handleAddScreenshot = () => {
    if (!screenshotInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      screenshots: [...(prev.screenshots || []), screenshotInput.trim()],
    }));
    setScreenshotInput("");
  };

  const handleRemoveScreenshot = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      screenshots: (prev.screenshots || []).filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-slate-800" />
            <h2 className="font-bold text-lg text-foreground tracking-tight">Project Management Admin Panel</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Action Bar */}
          {!isAddingNew && !editingProject && (
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div>
                <h3 className="font-bold text-sm text-foreground">Manage Portfolio Items</h3>
                <p className="text-xs text-muted-foreground">Add new projects, update existing ones, or edit links and descriptions.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleStartAdd}
                  className="bg-foreground text-background px-4 py-2 rounded-md text-xs font-medium hover:bg-foreground/90 transition-colors flex items-center gap-1.5"
                >
                  <Plus size={14} /> Add New Project
                </button>
                <button
                  onClick={onResetDefaults}
                  className="bg-slate-100 text-slate-700 border border-slate-300 px-3 py-2 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors flex items-center gap-1"
                  title="Reset to default initial projects"
                >
                  <RotateCcw size={13} /> Reset
                </button>
              </div>
            </div>
          )}

          {/* Form for Adding / Editing */}
          {(isAddingNew || editingProject) && (
            <form onSubmit={handleFormSubmit} className="bg-slate-50 border border-slate-200 p-5 rounded-lg space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-2">
                <h3 className="font-bold text-sm text-foreground">
                  {isAddingNew ? "Add New Project" : `Edit Project: ${formData.title}`}
                </h3>
                <button
                  type="button"
                  onClick={() => { setIsAddingNew(false); setEditingProject(null); }}
                  className="text-xs text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-slate-700">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="border border-slate-300 rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:border-slate-900"
                    placeholder="e.g. AI Image Analytics Engine"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1 text-xs">
                    <label className="font-semibold text-slate-700">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as ProjectCategory })}
                      className="border border-slate-300 rounded-md px-3 py-2 bg-background text-foreground focus:outline-none"
                    >
                      <option value="AI">AI</option>
                      <option value="Website">Website</option>
                      <option value="Android">Android</option>
                      <option value="iOS">iOS</option>
                      <option value="Software">Software</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1 text-xs">
                    <label className="font-semibold text-slate-700">Status *</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as ProjectStatus })}
                      className="border border-slate-300 rounded-md px-3 py-2 bg-background text-foreground focus:outline-none"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Development">In Development</option>
                      <option value="Coming Soon">Coming Soon</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-slate-700">Short Description *</label>
                <input
                  type="text"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="border border-slate-300 rounded-md px-3 py-2 bg-background text-foreground focus:outline-none"
                  placeholder="Brief 1-line overview"
                />
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-slate-700">Full Description</label>
                <textarea
                  rows={3}
                  value={formData.fullDescription || ""}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  className="border border-slate-300 rounded-md px-3 py-2 bg-background text-foreground focus:outline-none resize-y"
                  placeholder="Detailed project summary..."
                />
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-slate-700">Main Cover Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="border border-slate-300 rounded-md px-3 py-2 bg-background text-foreground focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              {/* Technologies */}
              <div className="flex flex-col gap-1.5 text-xs">
                <label className="font-semibold text-slate-700">Technologies Stack</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    className="border border-slate-300 rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none flex-grow"
                    placeholder="e.g. Next.js, Python, SwiftUI"
                  />
                  <button
                    type="button"
                    onClick={handleAddTech}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-3 py-1.5 rounded-md font-medium"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {formData.technologies.map((t, idx) => (
                    <span key={idx} className="bg-background border border-slate-300 text-slate-800 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1">
                      {t}
                      <button type="button" onClick={() => handleRemoveTech(idx)} className="text-slate-400 hover:text-slate-700">
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Live Demo URL</label>
                  <input
                    type="text"
                    value={formData.links.liveUrl || ""}
                    onChange={(e) => setFormData({ ...formData, links: { ...formData.links, liveUrl: e.target.value } })}
                    className="border border-slate-300 rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none"
                    placeholder="https://noeulenterprises.kr"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">GitHub URL</label>
                  <input
                    type="text"
                    value={formData.links.githubUrl || ""}
                    onChange={(e) => setFormData({ ...formData, links: { ...formData.links, githubUrl: e.target.value } })}
                    className="border border-slate-300 rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">App Store URL</label>
                  <input
                    type="text"
                    value={formData.links.appStoreUrl || ""}
                    onChange={(e) => setFormData({ ...formData, links: { ...formData.links, appStoreUrl: e.target.value } })}
                    className="border border-slate-300 rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none"
                    placeholder="https://apps.apple.com/..."
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-slate-700">Google Play URL</label>
                  <input
                    type="text"
                    value={formData.links.playStoreUrl || ""}
                    onChange={(e) => setFormData({ ...formData, links: { ...formData.links, playStoreUrl: e.target.value } })}
                    className="border border-slate-300 rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none"
                    placeholder="https://play.google.com/..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setIsAddingNew(false); setEditingProject(null); }}
                  className="px-4 py-2 rounded-md text-xs font-medium border border-slate-300 bg-background text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md text-xs font-medium bg-foreground text-background hover:bg-foreground/90 flex items-center gap-1"
                >
                  <Check size={14} /> Save Project
                </button>
              </div>
            </form>
          )}

          {/* Existing Projects List Table */}
          {!isAddingNew && !editingProject && (
            <div className="border border-border rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 border-b border-border text-slate-700 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Project</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-foreground">
                        <div className="font-bold">{proj.title}</div>
                        <div className="text-[11px] text-muted-foreground line-clamp-1">{proj.description}</div>
                      </td>
                      <td className="p-3">
                        <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md font-semibold text-[11px]">
                          {proj.category}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-[11px] font-medium">
                          {proj.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleStartEdit(proj)}
                            className="p-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-200"
                            title="Edit Project"
                          >
                            <Edit3 size={14} />
                          </button>
                          <button
                            onClick={() => onDeleteProject(proj.id)}
                            className="p-1.5 bg-red-50 text-red-700 border border-red-200 rounded-md hover:bg-red-100"
                            title="Delete Project"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
