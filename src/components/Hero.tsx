import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TextType from "@/utils/TextType";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-16 pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col order-2 md:order-1">
            <p className="mb-2 font-light text-green-600 text-sm sm:text-base">Hi, I'm</p>
            <h1 className="mb-4 font-extrabold text-gray-900 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              Santhosh Nagaraj
            </h1>
            <h2 className="mb-4 text-lg sm:text-xl lg:text-2xl font-semibold">
              <TextType />
            </h2>
            <p className="mb-8 text-gray-600 text-sm sm:text-base max-w-md">
              I build scalable web applications and backend systems with clean
              code and modern technologies.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-green-700 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-green-800 transition-colors"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
              >
                Contact Me
                <Image src="/icons/mail.svg" alt="Email" width={20} height={20} />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/santhoshnagaraj-info"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all"
              >
                <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/santhoshnagaraj-info/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all"
              >
                <Image src="/icons/Linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link
                href="mailto:santhoshnagaraj.info@gmail.com"
                className="p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all"
              >
                <Image src="/icons/mail.svg" alt="Email" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 md:order-2 w-full h-64 sm:h-80 md:h-180 lg:h-171 rounded-2xl opacity-90">
            <Image
              src="/images/hero-page-picture.jpg"
              alt="Santo - Software Engineer"
              fill
              priority
              className="object-cover object-top pb-30"
            />
          </div>

        </div>
      </div>
    </section>
  );
}