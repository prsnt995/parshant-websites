import { ArrowUpRight, Cpu, Globe2 } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "India 🇮🇳 ↔ South Korea 🇰🇷 Import & Export Trade",
    desc: "Cross-border trading network exporting authentic Indian products & goods to South Korea, and importing premium Korean tech and consumer items.",
    tech: "Logistics, Customs, B2B Supply Chain",
    category: "Import & Export",
    icon: <Globe2 size={18} className="text-blue-600" />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "NOEUL AI Model & Assistant Engine",
    desc: "Custom generative AI model integration platform powering smart automation, fine-tuned LLMs, and predictive vision analytics.",
    tech: "Python, PyTorch, Next.js, FastAPI",
    category: "AI & Machine Learning",
    icon: <Cpu size={18} className="text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20 inline-block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured Projects & Products
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the flagship products, AI platforms, and mobile apps built by NOEUL ENTERPRISES.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-background border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="relative h-56 w-full bg-muted overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 border border-border shadow-xs">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <a href="#contact" className="p-2 bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors" aria-label="View Project">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="text-xs font-mono font-semibold bg-muted text-foreground px-3.5 py-1.5 rounded-full inline-block">
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

