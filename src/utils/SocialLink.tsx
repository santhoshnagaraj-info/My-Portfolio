import Image from "next/image";
import { socialLinks, type SocialLink } from "@/config/social-links";

interface SocialLinksProps {
  links?: string[];
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  links,
  className = "",
  iconSize = 24,
}: SocialLinksProps) {
  const selectedLinks: SocialLink[] = links
    ? socialLinks.filter((link) => links.includes(link.id))
    : socialLinks;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {selectedLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.id === "mail" ? undefined : "_blank"}
          rel={link.id === "mail" ? undefined : "noopener noreferrer"}
          aria-label={link.label}
        >
          <Image
            src={link.icon}
            alt={link.label}
            width={iconSize}
            height={iconSize}
          />
        </a>
      ))}
    </div>
  );
}