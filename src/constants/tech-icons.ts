// constants/tech-icons.ts


import { SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiKubernetes, SiPrometheus, SiGrafana, SiReact} from "react-icons/si";


export const techIconMap = {
  nextjs: {
    icon: SiNextdotjs,
    color: "#000000",
  },
  react: {
    icon: SiReact,
    color: "#61DAFB",
  },
  typescript: {
    icon: SiTypescript,
    color: "#3178C6",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  docker: {
    icon: SiDocker,
    color: "#2496ED",
  },
  kubernetes: {
    icon: SiKubernetes,
    color: "#326CE5",
  },
  prometheus: {
    icon: SiPrometheus,
    color: "#E6522C",
  },
  grafana: {
    icon: SiGrafana,
    color: "#F46800",
  },
} as const;

export type TechIcon = keyof typeof techIconMap;