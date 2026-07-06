import { Project } from "@/types/technologies";

export const projectsData: Project[] = [
  {
    id: "ai-system-design-simulator",
    title: "AI System Design Simulator",
    description: "AI-powered platform to simulate system design interviews with smart feedback and scoring.",
    image: "/projects/ai-system-design.png",
    technologies: [
      { id: "nextjs", name: "Next.js", icon: "nextjs" },
      { id: "typescript", name: "TypeScript", icon: "typescript" },
      { id: "tailwindcss", name: "Tailwind CSS", icon: "tailwindcss" },
    ],
    githubUrl: "https://github.com/santo/ai-system-design-simulator",
    liveUrl: "#",
  },
  {
    id: "fitflow-gym",
    title: "FitFlow_Gym",
    description: "Production-grade Fitness app with inventory, payments, order processing and analytics.",
    image: "/projects/fitflow-gym-carol.jpeg",
    technologies: [
      { id: "nextjs", name: "Next.js", icon: "nextjs" },
      { id: "react", name: "React", icon: "react" },
      { id: "tailwindcss", name: "Tailwind CSS", icon: "tailwindcss" },
    ],
    githubUrl: "https://github.com/santhoshnagaraj-info/FitFlow-Gym",
    liveUrl: "#",
  },
  {
    id: "devops-monitoring-platform",
    title: "DevOps Monitoring Platform",
    description: "Monitoring and observability platform with metrics, logs, alerts and beautiful dashboards.",
    image: "/projects/devops-monitoring.png",
    technologies: [
      { id: "docker", name: "Docker", icon: "docker" },
      { id: "kubernetes", name: "Kubernetes", icon: "kubernetes" },
      { id: "prometheus", name: "Prometheus", icon: "prometheus" },
      { id: "grafana", name: "Grafana", icon: "grafana" },
    ],
    githubUrl: "https://github.com/santo/devops-monitoring-platform",
    liveUrl: "#",
  },
];
