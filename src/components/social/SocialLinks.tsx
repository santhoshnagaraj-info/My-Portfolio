// components/social/SocialLinks.tsx

import Image from "next/image";
import Link from "next/link";
import {
  SOCIAL_LINKS,
  type SocialLinkId,
} from "@/config/social-links";

interface SocialLinksProps {
  links?: SocialLinkId[];
  className?: string;
}

export function SocialLinks({
  links,
  className = "",
}: SocialLinksProps) {
  const items = links
    ? links.map((id) => SOCIAL_LINKS[id])
    : Object.values(SOCIAL_LINKS);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className="rounded-lg border border-gray-600 bg-gray-50 p-2 shadow-sm transition-all hover:border-green-500 hover:shadow-md"
        >
          <Image
            src={link.icon}
            alt=""
            width={20}
            height={20}
          />
        </Link>
      ))}
    </div>
  );
}