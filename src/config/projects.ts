import { Project } from "@/types/project";

export const initialProjects: Project[] = [
  {
    id: "namaste-mart",
    title: "Namaste Mart (namastemart.kr)",
    description: "South Asian grocery e-commerce marketplace & international parcel delivery platform in South Korea with Korean payment integration.",
    fullDescription: "Namaste Mart (namastemart.kr) is a premier e-commerce platform and mobile application engineered for South Asian groceries, authentic food products, daily essentials, and international parcel logistics in South Korea. Built with Next.js, React Native/Expo, Korean payment gateway integration (Cards, KG Inicis, Bank Transfer), multilingual support, and real-time shipment tracking.",
    category: "Website",
    status: "In Development",
    technologies: ["Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Firebase", "Payment Gateway"],
    features: [
      "Full Online Grocery & Mart Storefront with Live Inventory",
      "Korean Domestic Payment Integration (Cards, Toss, Bank Transfer)",
      "International & Domestic Parcel Delivery Tracking System",
      "Multilingual Support (Korean, English, Hindi, Nepali)",
      "Cross-Platform Native Mobile Experience (iOS & Android)"
    ],
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      liveUrl: "https://namastemart.kr",
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-08-28"
  },
  {
    id: "noeul-clothing",
    title: "NOEUL (노을) Korean Clothing Brand",
    description: "Contemporary streetwear & modern Korean fashion e-commerce storefront with curated lookbooks, seasonal drops, and online checkout.",
    fullDescription: "NOEUL (노을) is a modern Korean fashion and clothing brand e-commerce platform designed to deliver an aesthetic, minimalist shopping experience. It features high-resolution lookbooks, seasonal apparel drops, size guides, seamless shopping bag workflows, and Korean payment gateway integration.",
    category: "Website",
    status: "In Development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Stripe / Toss Payments"],
    features: [
      "Curated Korean Streetwear & Apparel Lookbook",
      "Dynamic Shopping Bag & Quick Checkout Workflow",
      "Korean Domestic & International Payment Processing",
      "Minimalist Modern Fashion Storefront Design",
      "Real-Time Order Tracking & Customer Accounts"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      liveUrl: "https://www.noeul.me/",
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-08-25"
  },
  {
    id: "nexpora",
    title: "NEXPORA",
    description: "Modern multi-venture corporate portfolio uniting engineering systems, digital innovation, creative services, and AI media production.",
    fullDescription: "NEXPORA is a high-performance multi-venture corporate portfolio and digital platform uniting precision engineering, interactive design studios, AI video generation, and contemporary lifestyle brands under one cohesive digital ecosystem.",
    category: "Website",
    status: "Completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Turbopack", "Vercel"],
    features: [
      "Multi-Venture Corporate Network Architecture",
      "Interactive Company Directory & Profile Pages",
      "Modern Dark-Aesthetic Visual Identity & Responsive UI",
      "Engineering, Digital Studio, and AI Media Integration"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    links: {
      liveUrl: "https://pks-three.vercel.app/",
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-10-18"
  },
  {
    id: "interview553",
    title: "Interview553 Official Online Boutique",
    description: "Modern luxury fashion house and online boutique featuring curated runway collections, designer apparel, and seasonal editorial drops.",
    fullDescription: "Interview553 is a modern luxury fashion brand and official online boutique crafted for high-end designer apparel, seasonal collection showcases, and an immersive editorial shopping experience. Features high-resolution boutique galleries, bespoke fashion lookbooks, and sleek digital storefront interactions.",
    category: "Website",
    status: "Completed",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Luxury Fashion House & Official Boutique Storefront",
      "Curated Seasonal Runway & Editorial Collections",
      "High-Resolution Lookbooks & Designer Showcases",
      "Responsive High-Performance Boutique Experience"
    ],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop"
    ],
    links: {
      liveUrl: "https://inter-view-gamma.vercel.app/",
      githubUrl: "https://github.com/prsnt995"
    },
    createdAt: "2026-10-24"
  },
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
