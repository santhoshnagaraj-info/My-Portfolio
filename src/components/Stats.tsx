import Image from "next/image";
import { Code, GitBranch, Trophy, Star } from "lucide-react";
import { statsData } from "@/data/misc";

const iconMap = { code: Code, "git-branch": GitBranch, trophy: Trophy, star: Star };

export default function Stats() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
          {statsData.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={stat.id} className="flex items-center gap-3">
                <Icon size={24} className="text-green-600" />
                <div>
                  <p className="font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}