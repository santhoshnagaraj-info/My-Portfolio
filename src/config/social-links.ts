export interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    icon: "/icons/github.svg",
    url: "https://github.com/santhoshnagaraj-info",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: "/icons/Linkedin.svg",
    url: "https://www.linkedin.com/in/santhoshnagaraj-info/",
    label: "LinkedIn",
  },
  {
    id: "mail",
    icon: "/icons/mail.svg",
    url: "mailto:santhoshnagaraj.info@gmail.com",
    label: "Email",
  },
];

