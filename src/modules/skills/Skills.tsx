import { Monitor, Server, Database, Cloud, Layers } from "lucide-react";

interface TechStackItem {
  id: string;
  title: string;
  icon: string;
  items: string[];
}


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



const iconMap = { monitor: Monitor, server: Server, database: Database, cloud: Cloud, layers: Layers };

export default function Skills() {
  return (
    <section id="skills" className="px-[10%] py-[4%] grid grid-cols-1 items-center w-full h-screen-[50%] bg-transparent backdrop-blur-md border border-gray-400">
        <p className="text-green-600 font-semibold text-sm gap-[3%]">Technical Skills</p>
        <h2 className="text-3xl font-bold text-gray-900">
          Technologies I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {techStackData.map((stack) => {
            const Icon = iconMap[stack.icon as keyof typeof iconMap];
            return (
              <div
                key={stack.id} className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <Icon size={28} className="text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{stack.title}</h3>
                <p className="text-sm text-gray-500">{stack.items.join(", ")}</p>
              </div>
            );
          })}
        </div>
    </section>
  );
}

