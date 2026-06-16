import { User, MapPin, Briefcase, Mail, Clock, Sparkles } from "lucide-react";
import { aboutInfoData, aboutTagsData } from "@/data/about";

const iconMap = { user: User, "map-pin": MapPin, briefcase: Briefcase, mail: Mail, clock: Clock, sparkles: Sparkles };

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <p className="text-green-600 font-semibold text-sm mb-2">ABOUT ME</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Who am I?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 lg:gap-20">
          <div>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              I'm a software developer passionate about building
              high-performance, scalable, and user-friendly applications. I
              enjoy solving complex problems, designing clean architectures,
              and continuously learning new technologies.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
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

          <div className="space-y-3 sm:space-y-4">
            {aboutInfoData.map((info) => {
              const Icon = iconMap[info.icon as keyof typeof iconMap];
              return (
                <div key={info.id} className="flex items-start sm:items-center gap-3 min-w-0">
                  <Icon size={16} className="text-gray-400 mt-0.5 sm:mt-0 shrink-0" />
                  <span className="text-gray-500 lg:text-sm sm:text-xs w-24 sm:w-28 shrink-0">{info.label}</span>
                  <span className={`lg:text-sm sm:text-xs font-medium ${info.highlight ? "text-green-600" : "text-gray-500"}`}>
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