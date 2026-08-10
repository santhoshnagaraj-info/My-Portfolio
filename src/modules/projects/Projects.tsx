import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
// constants/tech-icons.ts


import { SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiKubernetes, SiPrometheus, SiGrafana, SiReact} from "react-icons/si";


export const techIconMap = {
  nextjs: {
    icon: SiNextdotjs,
    color: "#000000",
  },
  react: {
    icon: SiReact,
    color: "#61DAFB",
  },
  typescript: {
    icon: SiTypescript,
    color: "#3178C6",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  docker: {
    icon: SiDocker,
    color: "#2496ED",
  },
  kubernetes: {
    icon: SiKubernetes,
    color: "#326CE5",
  },
  prometheus: {
    icon: SiPrometheus,
    color: "#E6522C",
  },
  grafana: {
    icon: SiGrafana,
    color: "#F46800",
  },
} as const;

export type TechIcon = keyof typeof techIconMap;

export interface Technology {
  id: string;
  name: string;
  icon: TechIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl: string;
}

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
    image: "/projects/fitflow-gym-coral.jpeg",
    technologies: [
      { id: "nextjs", name: "Next.js", icon: "nextjs" },
      { id: "react", name: "React", icon: "react" },
      { id: "tailwindcss", name: "Tailwind CSS", icon: "tailwindcss" },
    ],
    githubUrl: "https://github.com/santhoshnagaraj-info/FitFlow-Gym",
    liveUrl: "https://fitflow-gym-coral.vercel.app/",
  },
  {
    id: "periyaflavours-restaurant",
    title: "periyaflavours-restaurant",
    description: "Production-grade periyaflavours-restaurant app with order processing.",
    image: "/projects/periyaflavours-restaurant.png",
    technologies: [
      { id: "nextjs", name: "Next.js", icon: "nextjs" },
      { id: "react", name: "React", icon: "react" },
      { id: "tailwindcss", name: "Tailwind CSS", icon: "tailwindcss" },
    ],
    githubUrl: "https://github.com/santhoshnagaraj-info/PeriyaFlavours-Temp",
    liveUrl: "https://periyaflavours-restaurant.vercel.app/",
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

export default function Projects() {
  return (
    <section id="projects" className="px-[10%] py-[5%] grid grid-cols-1 items-center w-full h-screen-[50%] bg-transparent backdrop-blur-md border border-gray-400">
      <div className="">
        <div className="flex justify-between justify-items-center">
          <div>
            <p className="text-green-600 font-semibold text-md ">FEATURED PROJECTS</p>
            <h2 className="text-[300%] font-bold text-gray-900">Some things I've built</h2>
          </div>
          <Link href="#" className="hidden sm:flex items-center gap-[3%] text-green-600 font-medium text-sm hover:gap-2 transition-all">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {projectsData.map((project) => (
            <div key={project.id} className="border border-gray-100 rounded-xl overflow-hidden hover:scale-105 shadow-md transition-shadow">
              <div className="relative h-44 bg-gray-800">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-5 bg-transparent backdrop-blur-md">
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.description}</p>

                <div className="flex items-center justify-between text-sm backdrop-blur-xl">
                  <Link href={project.githubUrl} target="_blank" className="flex items-center gap-1.5">
                    <Image src="/icons/github.svg" alt="GitHub" width={30} height={30} className="p-1 border border-gray-700 rounded-md"/>
                  </Link>

                  <div className="flex items-left text-amber-400">
                  {project.technologies.map((tech) => {
                    const { icon: Icon, color } = techIconMap[tech.icon];

                      return (
                          <div key={tech.id} title={tech.name} className=" p-1 flex items-center gap-8 justify-center">
                          <Icon size={21} style={ {color} }/>
                          </div>
                      );
                  })}               
                </div>

                  <Link href={project.liveUrl} target="_blank" className="flex items-center gap-1.5 font-medium hover:gap-2 transition-all">
                    Live Demo <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}