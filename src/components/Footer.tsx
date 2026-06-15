import Image from "next/image";
import Link from "next/link";
import { Code2, MapPin, ArrowUp } from "lucide-react";
import { socialLinks, footerLinkGroups } from "@/data/misc";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <Code2 className="text-green-500" size={20} />
            Santo
          </div>
          <p className="text-sm mb-4">
            Building scalable solutions and turning ideas into reality.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                target="_blank"
                className="w-8 h-8 flex items-center justify-center border border-gray-600 bg-gray-400 rounded-lg hover:border-green-500 transition-colors"
              >
                <Image src={`/icons/${link.icon}.svg`} alt={link.label} width={14} height={14} />
              </Link>
            ))}
          </div>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.id}>
            <h4 className="text-white font-semibold mb-3">{group.title}</h4>
            <ul className="space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-semibold mb-3">Let's Connect</h4>
          <p className="text-sm mb-3">
            I'm always open to discussing new projects and opportunities.
          </p>
          <p className="text-sm mb-1">santhoshnagaraj.info@gmail.com</p>
          <p className="text-sm flex items-center gap-1.5">
            <MapPin size={14} /> India
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm max-w-7xl mx-auto">
        <p>© 2026 Santo. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS.</p>
        <button className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <ArrowUp href="#home" size={16} />
        </button>
      </div>
    </footer>
  );
}

