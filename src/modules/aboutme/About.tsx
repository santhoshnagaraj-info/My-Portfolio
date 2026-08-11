
import { User, MapPin, Briefcase, Mail, Clock, Lightbulb, Code, Blocks, BookOpen } from "lucide-react";

const iconMap = { user: User, "map-pin": MapPin, briefcase: Briefcase, mail: Mail, clock: Clock, lightbulb: Lightbulb, code: Code, blocks: Blocks, "book-open": BookOpen };


interface AboutInfoItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  highlight?: boolean;
}

interface AboutTag {
  id: string;
  icon: string;
  label: string;
}

const aboutInfoData: AboutInfoItem[] = [
  { id: "name", icon: "user", label: "Name:", value: "Santhosh Nagaraj" },
  { id: "location", icon: "map-pin", label: "Location:", value: "India" },
  { id: "experience", icon: "briefcase", label: "Experience:", value: "Fresher / Open to Opportunities" },
  { id: "email", icon: "mail", label: "Email:", value: "santhoshnagaraj.info@gmail.com" },
  { id: "availability", icon: "clock", label: "Availability:", value: "Open for Work", highlight: true },
];

const aboutTagsData: AboutTag[] = [
  { id: "problem-solver", icon: "lightbulb", label: "Problem Solver" },
  { id: "clean-code", icon: "code", label: "Clean Code" },
  { id: "system-design", icon: "blocks", label: "System Design" },
  { id: "continuous-learner", icon: "book-open", label: "Continuous Learner" },
];

export default function About() {
  return (
    <section id="about" className="px-[10%] py-[5%] grid grid-cols-1 items-center w-full h-screen-[50%] bg-transparent backdrop-blur-md border border-gray-400">
        <p className="text-green-600 text-base">ABOUT ME</p>
        <h2 className="font-bold text-gray-900 text-[200%] lg:text-[300%]">Who am I?</h2>

        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-[5%] lg:gap-[10%]">
          <div>
            <p className="py-5 text-gray-600 text-base lg:text-lg">
              I'm a software developer passionate about building high-performance, scalable, and user-friendly applications. I enjoy solving complex problems, designing clean architectures, and continuously learning new technologies.
            </p>

            <div className=" gap-2 flex flex-wrap">
              {aboutTagsData.map((tag) => {
                const Icon = iconMap[tag.icon as keyof typeof iconMap];
                return (
                  <span key={tag.id} className="px-3 py-1.5 lg:text-base text-sm flex items-center gap-4 text-gray-700 border border-gray-200 rounded-lg">
                    <Icon size={14} className="text-green-600" />
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="py-5 space-y-3 pb-10">
            {aboutInfoData.map((info) => {
              const Icon = iconMap[info.icon as keyof typeof iconMap];
              return (
                <div key={info.id} className="flex items-start sm:items-center gap-3">
                  <Icon size={16} className="text-gray-400 p-3 shrink-0" />
                  <span className=" text-xs lg:text-lg font-medium text-gray-700 shrink-0">{info.label}</span>
                  <span className={`text-xs lg:text-lg font-medium ${info.highlight ? "text-green-600" : "text-gray-700"}`}>
                    {info.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

    </section>
  );
}