export interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

export interface StatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: NavLink[];
}