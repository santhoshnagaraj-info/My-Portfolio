import { SocialLink, StatItem, NavLink, FooterLinkGroup } from "@/types/misc";

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "system-design", label: "System Design", href: "#system-design" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { id: "github", icon: "/icons/github.svg", url: "https://github.com/santhoshnagaraj-info", label: "GitHub" },
  { id: "linkedin", icon: "/icons/Linkedin.svg", url: "https://www.linkedin.com/in/santhoshnagaraj-info/", label: "LinkedIn" },
  { id: "mail", icon: "/icons/mail.svg", url: "mailto:santhoshnagaraj.info@gmail.com", label: "Email" },
];

export const statsData: StatItem[] = [
  { id: "projects", icon: "code", value: "15+", label: "Projects Built" },
  { id: "commits", icon: "git-branch", value: "500+", label: "GitHub Commits" },
  { id: "technologies", icon: "trophy", value: "20+", label: "Technologies" },
  { id: "opportunities", icon: "star", value: "Open to", label: "New Opportunities" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: "quick-links",
    title: "Quick Links",
    links: [
      { id: "about", label: "About", href: "#about" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "system-design", label: "System Design", href: "#system-design" },
      { id: "blog", label: "Blog", href: "#blog" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { id: "resume", label: "Resume", href: "#" },
      { id: "github", label: "My GitHub", href: "https://github.com/santhoshnagaraj-info" },
      { id: "blog", label: "Blog Posts", href: "#blog" },
      { id: "skills", label: "Tech Stack", href: "#skills" },
    ],
  },
];


