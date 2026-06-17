import type { TechIcon } from "@/constants/tech-icons";

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