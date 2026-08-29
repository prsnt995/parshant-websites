import { Cpu, Smartphone, Code2, Brain, CheckCircle2, Globe, SmartphoneNfc } from "lucide-react";

const services = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    badge: "Artificial Intelligence",
    icon: <Brain className="w-6 h-6 text-slate-800" />,
    items: [
      "AI model development",
      "AI-powered applications",
      "Intelligent automation"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    badge: "Web Applications",
    icon: <Globe className="w-6 h-6 text-slate-800" />,
    items: [
      "Modern websites",
      "E-commerce websites",
      "Business websites",
      "Web applications"
    ]
  },
  {
    id: "android-dev",
    title: "Android Development",
    badge: "Mobile Apps",
    icon: <Smartphone className="w-6 h-6 text-slate-800" />,
    items: [
      "Android applications",
      "Mobile solutions",
      "Native Android performance"
    ]
  },
  {
    id: "ios-dev",
    title: "iOS Development",
    badge: "Apple Ecosystem",
    icon: <SmartphoneNfc className="w-6 h-6 text-slate-800" />,
    items: [
      "iPhone and iPad applications",
      "Native mobile experiences",
      "App Store publishing"
    ]
  },
  {
    id: "software-dev",
    title: "Software Development",
    badge: "Custom Engineering",
    icon: <Code2 className="w-6 h-6 text-slate-800" />,
    items: [
      "Custom software",
      "APIs & Integration",
      "Backend systems",
      "Database integration"
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

