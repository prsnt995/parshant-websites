import { ArrowUpRight, Cpu, Smartphone } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "NOEUL Native & Cross-Platform Mobile Suite",
    desc: "Full-featured iOS & Android application ecosystem built for seamless performance, real-time sync, and user engagement.",
    tech: "Swift, Kotlin, React Native, Firebase",
    category: "Mobile Apps",
    icon: <Smartphone size={15} className="text-slate-700" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "NOEUL AI Model & Assistant Engine",
    desc: "Custom generative AI model integration platform powering smart automation, fine-tuned LLMs, and predictive vision analytics.",
    tech: "Python, PyTorch, Next.js, FastAPI",
    category: "AI & Machine Learning",
    icon: <Cpu size={15} className="text-slate-700" />,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-background border-b border-border">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Featured Projects & Products
          </h2>
          <p className="text-muted-foreground text-base">
            A glimpse into the flagship products, AI platforms, and mobile apps built by NOEUL ENTERPRISES.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-background border border-border rounded-lg overflow-hidden hover:border-slate-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-border">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-background/95 border border-border px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 text-foreground">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                    <a href="#contact" className="p-1.5 bg-slate-100 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-200 transition-colors" aria-label="View Project">
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="text-xs font-mono font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md border border-slate-200 inline-block">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

