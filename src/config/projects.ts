import { Project } from "@/types/project";

export const initialProjects: Project[] = [
  {
    id: "noeul-ai-engine",
    title: "NOEUL AI Model & Assistant Engine",
    description: "Generative AI model platform powering autonomous task workflows, LLM fine-tuning, and vision analytics.",
    fullDescription: "NOEUL AI Model & Assistant Engine is a high-performance artificial intelligence suite engineered for intelligent task automation, custom LLM fine-tuning, natural language processing, and computer vision model deployment.",
    category: "AI",
    status: "Completed",
    technologies: ["Python", "PyTorch", "Next.js", "FastAPI", "OpenAI", "Firebase"],
    features: [
      "Custom Fine-Tuned Language Models",
      "Autonomous Agent Task Execution",
      "Real-Time Vision & Image Analytics",
      "High-Throughput RESTful API Access"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      liveUrl: "https://noeulenterprises.kr",
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-08-01"
  },
  {
    id: "noeul-mobile-suite",
    title: "NOEUL iOS & Android Mobile Suite",
    description: "Cross-platform and native mobile applications featuring real-time data sync, push notifications, and offline caching.",
    fullDescription: "A native mobile application suite built for iOS (SwiftUI) and Android (Kotlin) providing intuitive mobile user experiences, real-time cloud data synchronization, offline caching, and secure authentication.",
    category: "Android",
    status: "Completed",
    technologies: ["Swift", "Kotlin", "React Native", "Firebase", "TypeScript"],
    features: [
      "Native iOS & Android Architecture",
      "Real-Time Firebase Synchronization",
      "Push Notifications & Analytics",
      "Biometric Authentication & Offline Storage"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      liveUrl: "https://noeulenterprises.kr",
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-08-10"
  },
  {
    id: "noeul-web-platform",
    title: "NOEUL Enterprise Web Platform",
    description: "Ultra-fast Next.js full-stack web application with dynamic server rendering, admin dashboards, and SEO optimization.",
    fullDescription: "A modern enterprise web application engineered with Next.js App Router, Tailwind CSS, TypeScript, and serverless backend API integrations delivering lightning-fast load times and SEO optimization.",
    category: "Website",
    status: "Completed",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Next.js App Router & Server Components",
      "Full Responsive Mobile-First Design",
      "RESTful API & Database Integration",
      "Optimized Performance & Accessibility"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      liveUrl: "https://noeulenterprises.kr",
      githubUrl: "https://github.com/prsnt995/parshant-websites"
    },
    createdAt: "2026-08-15"
  },
  {
    id: "noeul-cloud-backend",
    title: "NOEUL Microservices & Cloud API System",
    description: "Scalable backend API ecosystem powering database management, secure authentication, and cloud infrastructure.",
    fullDescription: "Robust backend API service providing serverless database integrations, enterprise security layers, background worker processing, and microservice communication pipelines.",
    category: "Software",
    status: "In Development",
    technologies: ["Node.js", "Python", "Firebase", "PostgreSQL", "Docker", "Cloud"],
    features: [
      "Microservices Backend Architecture",
      "Firebase Firestore & Relational DB",
      "OAuth2 & JWT Security Protocols",
      "Background Jobs & Cloud Queue Worker"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-08-20"
  }
];
