import Image from "next/image";
import Link from "next/link";
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
        <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" 
        className="p-2 border border-gray-600 bg-gray-300 hover:bg-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all ">
          <Image src={link.icon} alt={link.label} width={20} height={20} className="backdrop-blur-lg"/>
        </Link>
      ))}
    </div>
  );
}

