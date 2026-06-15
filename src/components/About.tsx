import { User, MapPin, Briefcase, Mail, Clock, Sparkles } from "lucide-react";
import { aboutInfoData, aboutTagsData } from "@/data/about";

const iconMap = { user: User, "map-pin": MapPin, briefcase: Briefcase, mail: Mail, clock: Clock, sparkles: Sparkles };

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-green-600 font-semibold text-sm mb-2">ABOUT ME</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Who am I?</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6">
              I'm a software developer passionate about building
              high-performance, scalable, and user-friendly applications. I
              enjoy solving complex problems, designing clean architectures,
              and continuously learning new technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              {aboutTagsData.map((tag) => {
                const Icon = iconMap[tag.icon as keyof typeof iconMap];
                return (
                  <span
                    key={tag.id}
                    className="flex items-center gap-2 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5"
                  >
                    <Icon size={14} className="text-green-600" />
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {aboutInfoData.map((info) => {
              const Icon = iconMap[info.icon as keyof typeof iconMap];
              return (
                <div key={info.id} className="flex items-center gap-3">
                  <Icon size={16} className="text-gray-400" />
                  <span className="text-gray-500 w-28">{info.label}</span>
                  <span className={info.highlight ? "text-green-600 font-medium" : "text-gray-900 font-medium"}>
                    {info.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}