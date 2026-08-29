import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Cpu, Globe, Smartphone, SmartphoneNfc, Code2, Sparkles } from "lucide-react";

export function About() {
  const areas = [
    {
      title: "Artificial Intelligence",
      desc: "Developing custom AI models, neural networks, and intelligent machine learning workflows.",
      icon: <Cpu className="text-slate-800 mb-2.5" size={22} />
    },
    {
      title: "Web Development",
      desc: "Creating high-performance web applications, responsive websites, and business platforms.",
      icon: <Globe className="text-slate-800 mb-2.5" size={22} />
    },
    {
      title: "Android App Development",
      desc: "Engineering native Kotlin & Android mobile applications built for scale.",
      icon: <Smartphone className="text-slate-800 mb-2.5" size={22} />
    },
    {
      title: "iOS App Development",
      desc: "Building Swift & SwiftUI iPhone and iPad native mobile experiences.",
      icon: <SmartphoneNfc className="text-slate-800 mb-2.5" size={22} />
    },
    {
      title: "Software Projects",
      desc: "Architecting backend systems, cloud APIs, microservices, and databases.",
      icon: <Code2 className="text-slate-800 mb-2.5" size={22} />
    },
    {
      title: "Digital Solutions",
      desc: "Transforming complex business requirements into intuitive technology products.",
      icon: <Sparkles className="text-slate-800 mb-2.5" size={22} />
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/60 border-b border-border">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            About {siteConfig.name}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Building Modern Digital Products & Tech Solutions
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            {siteConfig.name} focuses on building modern digital products and technology solutions across mobile, web, artificial intelligence, and custom software.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-background border border-border p-5 rounded-lg">
                {area.icon}
                <h3 className="font-bold text-sm mb-1 text-foreground">{area.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <Link 
            href="#contact" 
            className="inline-block bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
