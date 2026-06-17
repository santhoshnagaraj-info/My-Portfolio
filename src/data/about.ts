import { AboutInfoItem, AboutTag } from "@/types/about";

export const aboutInfoData: AboutInfoItem[] = [
  { id: "name", icon: "user", label: "Name:", value: "Santhosh Nagaraj" },
  { id: "location", icon: "map-pin", label: "Location:", value: "India" },
  { id: "experience", icon: "briefcase", label: "Experience:", value: "Fresher / Open to Opportunities" },
  { id: "email", icon: "mail", label: "Email:", value: "santhoshnagaraj.info@gmail.com" },
  { id: "availability", icon: "clock", label: "Availability:", value: "Open for Work", highlight: true },
];

export const aboutTagsData: AboutTag[] = [
  { id: "problem-solver", icon: "lightbulb", label: "Problem Solver" },
  { id: "clean-code", icon: "code", label: "Clean Code" },
  { id: "system-design", icon: "blocks", label: "System Design" },
  { id: "continuous-learner", icon: "book-open", label: "Continuous Learner" },
];