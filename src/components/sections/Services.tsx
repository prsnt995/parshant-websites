import { Cpu, Smartphone, Code2, Brain, CheckCircle2, Globe2 } from "lucide-react";

const services = [
  {
    id: "ai-models",
    title: "AI Models & AI App Development",
    badge: "Cutting-Edge AI",
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    icon: <Brain className="w-8 h-8 mb-4 text-indigo-600 dark:text-indigo-400" />,
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
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    icon: <Globe2 className="w-8 h-8 mb-4 text-sky-600 dark:text-sky-400" />,
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
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    icon: <Smartphone className="w-8 h-8 mb-4 text-emerald-600 dark:text-emerald-400" />,
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
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    icon: <Code2 className="w-8 h-8 mb-4 text-sky-600 dark:text-sky-400" />,
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
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    icon: <Cpu className="w-8 h-8 mb-4 text-purple-600 dark:text-purple-400" />,
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
    <section id="services" className="section-padding bg-muted/30 relative">
      <div id="ai-solutions" className="absolute -top-20" />
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20 inline-block mb-3">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            From custom AI models and mobile apps to scalable cloud platforms, we bring end-to-end technical excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-background border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
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

