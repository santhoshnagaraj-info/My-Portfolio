import { TechStackItem } from "@/types/techStack";

export const techStackData: TechStackItem[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "monitor",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express", "NestJS", "Java", "Spring Boot", "REST APIs"],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: "cloud",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Nginx"],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "layers",
    items: ["System Design", "Microservices", "Caching", "Queues", "CI/CD", "Scalability"],
  },
];