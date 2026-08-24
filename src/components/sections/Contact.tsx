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
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-muted-foreground mb-12">Tell us what you want to build.</p>
            
            <div className="mb-12">
              <h3 className="text-lg font-bold mb-4">Or contact us directly</h3>
              <div className="flex flex-col gap-3 font-medium">
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-muted transition-colors" aria-label="YouTube">
                  <Video size={24} />
                </a>
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-muted transition-colors" aria-label="GitHub">
                  <Code2 size={24} />
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-muted transition-colors" aria-label="Instagram">
                  <Camera size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-background border border-border p-8 rounded-3xl shadow-sm">
            {status && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm font-medium ${
                  status.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                    : "bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-border rounded-lg px-4 py-3 bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-border rounded-lg px-4 py-3 bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-border rounded-lg px-4 py-3 bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                  placeholder="+1 234 567 8900" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
                <select 
                  id="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                  className="border border-border rounded-lg px-4 py-3 bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground appearance-none"
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

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium">Project Description</label>
                <textarea 
                  id="description" 
                  required 
                  rows={4} 
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-border rounded-lg px-4 py-3 bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-y" 
                  placeholder="Tell us about your project requirements..." 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending to Firebase..." : "Send Project Request"}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
