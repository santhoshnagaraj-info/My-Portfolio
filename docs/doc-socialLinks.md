# Reusable Social Links Component

A simple reusable Social Links component for a Next.js + TypeScript project.

## Folder Structure

```text
src/
├── components/
│   └── SocialLinks.tsx
└── config/
    └── socialLinks.ts

public/
└── icons/
    ├── github.svg
    ├── Linkedin.svg
    └── mail.svg
```

---

## 1. `socialLinks.ts`

Keep all social-link information in one place.

```ts
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
```

**Important:** Use the actual URL. Do not use Markdown inside `url`.

---

## 2. `SocialLinks.tsx`

```tsx
import Image from "next/image";
import {
  socialLinks,
  type SocialLink,
} from "@/config/socialLinks";

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
    ? socialLinks.filter((link) =>
        links.includes(link.id)
      )
    : socialLinks;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {selectedLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.id === "mail" ? undefined : "_blank"}
          rel={
            link.id === "mail"
              ? undefined
              : "noopener noreferrer"
          }
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
```

---

## 3. Usage

### Show all

```tsx
<SocialLinks />
```

### Show one

```tsx
<SocialLinks links={["github"]} />
```

### Show two

```tsx
<SocialLinks links={["linkedin", "mail"]} />
```

### Show custom size

```tsx
<SocialLinks
  links={["github", "linkedin"]}
  iconSize={32}
/>
```

### Add custom Tailwind classes

```tsx
<SocialLinks
  links={["github", "linkedin"]}
  className="mt-6 justify-center"
/>
```

---

## 4. Adding a New Social Link

Add a new object to `socialLinks.ts`:

```ts
{
  id: "instagram",
  icon: "/icons/instagram.svg",
  url: "https://www.instagram.com/yourusername/",
  label: "Instagram",
}
```

Then use:

```tsx
<SocialLinks links={["instagram"]} />
```

Or:

```tsx
<SocialLinks />
```

to show all links.

---

## Main Idea

**`socialLinks.ts` = data**

**`SocialLinks.tsx` = reusable component**

This allows you to use **1, 2, 3, or all social links** anywhere in your application without duplicating code.
