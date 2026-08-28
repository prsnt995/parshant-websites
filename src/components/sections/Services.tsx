import { Cpu, Smartphone, Code2, Brain, CheckCircle2, Globe2 } from "lucide-react";

const services = [
  {
    id: "ai-models",
    title: "AI Models & AI App Development",
    badge: "Cutting-Edge AI",
    icon: <Brain className="w-6 h-6 text-slate-800" />,
    items: [
      "Custom AI Models & LLM Integration",
      "AI Assistants & Autonomous Agents",
      "Computer Vision & Predictive Models",
      "AI-Powered Mobile & Web Apps"
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & API Infrastructure",
    badge: "Reliable & Scalable",
    icon: <Globe2 className="w-6 h-6 text-slate-800" />,
    items: [
      "RESTful & GraphQL API Architecture",
      "Cloud Database Design (Firebase, PostgreSQL)",
      "Serverless Deployments & Microservices",
      "High Availability & Security Best Practices"
    ]
  },
  {
    id: "mobile-apps",
    title: "iOS & Android App Development",
    badge: "Cross-Platform & Native",
    icon: <Smartphone className="w-6 h-6 text-slate-800" />,
    items: [
      "Native iOS Apps (Swift / SwiftUI)",
      "Native Android Apps (Kotlin / Jetpack)",
      "Cross-Platform Apps (React Native)",
      "App Store & Google Play Publishing"
    ]
  },
  {
    id: "web-dev",
    title: "Custom Web Applications",
    badge: "Fast & Modern",
    icon: <Code2 className="w-6 h-6 text-slate-800" />,
    items: [
      "High-Performance Next.js Websites",
      "Full-stack Web Platforms",
      "Admin Dashboards & Management Tools",
      "SEO Optimized & Ultra-Fast Loading"
    ]
  },
  {
    id: "software",
    title: "Enterprise Custom Software",
    badge: "Scalable Architecture",
    icon: <Cpu className="w-6 h-6 text-slate-800" />,
    items: [
      "Business Automation Systems",
      "Cloud Infrastructure & APIs",
      "Database Architecture & Security",
      "SaaS Platform Development"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50/60 border-b border-border relative">
      <div id="ai-solutions" className="absolute -top-20" />
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground text-base">
            From custom AI models and mobile apps to scalable cloud platforms, we bring end-to-end technical excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-background border border-border p-6 rounded-lg hover:border-slate-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-md bg-slate-100 border border-slate-200">
                    {service.icon}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight text-foreground">{service.title}</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-slate-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

