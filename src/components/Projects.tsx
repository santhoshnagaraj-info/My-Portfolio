import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import { techIconMap } from "@/constants/tech-icons";

export default function Projects() {
  return (
    <section id="projects" className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between justify-items-center mb-8">
          <div>
            <p className="text-green-600 font-semibold text-sm mb-2">FEATURED PROJECTS</p>
            <h2 className="text-3xl font-bold text-gray-900">Some things I've built</h2>
          </div>
          <Link href="#" className="hidden sm:flex items-center gap-1 text-green-600 font-medium text-sm hover:gap-2 transition-all">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {projectsData.map((project) => (
            <div key={project.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-md transition-shadow">
              <div className="relative h-44 bg-gray-800">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.description}</p>

                <div className="flex items-center gap-2 mb-4 text-amber-400">
                  {project.technologies.map((tech) => {
                    const { icon: Icon, color } = techIconMap[tech.icon];

                      return (
                          <div key={tech.id} title={tech.name} className=" p-1 flex items-center gap-5 justify-center">
                          <Icon size={18} style={ {color} }/>
                          </div>
                      );
                  })}               
                </div>

                <div className="flex items-center justify-between text-sm">
                  <Link href={project.githubUrl} target="_blank" className="flex items-center gap-1.5">
                    <Image src="/icons/github.svg" alt="GitHub" width={30} height={30} className="p-1 border border-gray-700 rounded-md"/>
                  </Link>
                  <Link href={project.liveUrl} target="_blank" className="flex items-center gap-1.5 text-green-600 font-medium hover:gap-2 transition-all">
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