import Link from "next/link";
import { Code2, Download } from "lucide-react";
import { navLinks } from "@/data/misc";
import Image from "next/image";
import { RESUME } from "@/constants/resume";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-15% border border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-between px-5">

        {/* LEFT: Logo */}
        <Link
          href="#home"
          className="flex items-left gap-2 p-3 sm:text-2xl font-bold italic text-gray-900"
        >
          <Code2 className="text-green-600 sm:mt-0 lg:mt-1" size={22} />
          Santhosh Nagaraj
        </Link>

        {/* MIDDLE: NAV (hidden on mobile) */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="transition-colors hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Desktop icons + resume */}
        <div className="flex items-right gap-6">

          {/* Social icons (hidden on mobile if you want cleaner UI) */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="https://github.com/santhoshnagaraj-info"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image src="/icons/github.svg" alt="GitHub" width={22} height={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/santhoshnagaraj-info/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image src="/icons/Linkedin.svg" alt="LinkedIn" width={22} height={22} />
            </Link>
          </div>

          {/* Resume button (desktop) */}
          <a
            href={RESUME.file}
            download={RESUME.downloadName}
            className="hidden md:flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 transition"
          >
            Resume <Download size={14} />
          </a>

          {/* MOBILE: Only download icon */}
          <a
            href={RESUME.file}
            download={RESUME.downloadName}
            className="flex items-center justify-center rounded-lg bg-green-700 p-2 text-white hover:bg-green-800 transition md:hidden"
          >
            <Download size={14} />
          </a>

        </div>
      </div>
    </header>
  );
}