"use client";

import { siteConfig } from "@/config/site";
import { Video, Code2, Camera, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Website",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.warning || "Thank you! Your project request has been submitted. We will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Website",
          description: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || data.hint || "Failed to submit request. Please try again.",
        });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error. Please try again later.";
      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background border-b border-border">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start">
          
          {/* Left: Contact Info */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Have a Project in Mind?</h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">Tell us about your product requirements and goals.</p>
            
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-foreground">Direct Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-slate-700 hover:text-foreground transition-colors">
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-foreground">Connect With Us</h3>
              <div className="flex gap-2.5">
                <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition-colors" aria-label="YouTube">
                  <Video size={18} />
                </a>
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition-colors" aria-label="GitHub">
                  <Code2 size={18} />
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition-colors" aria-label="Instagram">
                  <Camera size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-slate-50/50 border border-border p-6 rounded-lg">
            {status && (
              <div
                className={`mb-5 p-3.5 rounded-md flex items-start gap-2.5 text-xs font-medium ${
                  status.type === "success"
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-medium text-slate-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-slate-300 rounded-md px-3.5 py-2.5 bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-slate-300 rounded-md px-3.5 py-2.5 bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors" 
                    placeholder="yourname@example.com" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-medium text-slate-700">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md px-3.5 py-2.5 bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors" 
                  placeholder="+1 234 567 8900" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="projectType" className="font-medium text-slate-700">Project Type</label>
                <select 
                  id="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md px-3.5 py-2.5 bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors"
                >
                  <option>Website</option>
                  <option>Android App</option>
                  <option>iOS App</option>
                  <option>E-commerce</option>
                  <option>Custom Software</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="description" className="font-medium text-slate-700">Project Description</label>
                <textarea 
                  id="description" 
                  required 
                  rows={4} 
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md px-3.5 py-2.5 bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors resize-y" 
                  placeholder="Tell us about your project requirements..." 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
