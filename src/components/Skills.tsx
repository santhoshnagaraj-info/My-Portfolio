import { Monitor, Server, Database, Cloud, Layers } from "lucide-react";
import { techStackData } from "@/data/techStack";

const iconMap = { monitor: Monitor, server: Server, database: Database, cloud: Cloud, layers: Layers };

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 m-2 -px-2">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-green-600 font-semibold text-sm mb-2">SKILLS</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Technologies I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {techStackData.map((stack) => {
            const Icon = iconMap[stack.icon as keyof typeof iconMap];
            return (
              <div
                key={stack.id}
                className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <Icon size={28} className="text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{stack.title}</h3>
                <p className="text-sm text-gray-500">{stack.items.join(", ")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}