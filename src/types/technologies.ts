export interface Technology {
  id: string;
  name: string;
  icon: string;
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