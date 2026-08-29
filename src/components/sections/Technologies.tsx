import { Cpu, Globe, Smartphone, Code2, Database, Terminal, Cloud, GitBranch } from "lucide-react";

export interface TechItem {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend", icon: <Globe size={18} /> },
  { name: "JavaScript", category: "Language", icon: <Code2 size={18} /> },
  { name: "TypeScript", category: "Language", icon: <Code2 size={18} /> },
  { name: "Node.js", category: "Backend", icon: <Terminal size={18} /> },
  { name: "Firebase", category: "Database & Cloud", icon: <Database size={18} /> },
  { name: "Python", category: "AI & Backend", icon: <Terminal size={18} /> },
  { name: "AI / Machine Learning", category: "Artificial Intelligence", icon: <Cpu size={18} /> },
  { name: "Android", category: "Mobile Development", icon: <Smartphone size={18} /> },
  { name: "iOS", category: "Mobile Development", icon: <Smartphone size={18} /> },
  { name: "GitHub", category: "Version Control", icon: <GitBranch size={18} /> },
  { name: "Cloud Technologies", category: "Infrastructure", icon: <Cloud size={18} /> },
];

export function Technologies() {
  return (
    <section className="section-padding bg-background border-b border-border">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Modern tools, languages, and frameworks used by NOEUL ENTERPRISES to build scalable software.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/70 border border-slate-200 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-slate-100 hover:border-slate-300 transition-colors"
            >
              <div className="text-slate-800 mb-2">
                {tech.icon}
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-foreground">{tech.name}</h3>
              <span className="text-[11px] text-muted-foreground mt-0.5">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
