import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TextType from "@/utils/TextType";


export default function Hero() {
  return (
    <section id="home" className="w-auto h-full bg-gray-70 flex items-center mt-25 -mb-15">
      <div className="max-w-auto w-full lg:px-15 px-8 justify-between mb-12">

        <div className="grid items-center gap-15 md:grid-cols-2 ml-13">

          <div className="pl-5">
            <p className="mb-2 font-extralight text-green-600 mt-20 text-base">Hi, I'm</p>
            <h1 className="mb-4 font-extrabold text-gray-900 text-8xl">Santo</h1>
            <h2 className="mb-4 text-2xl font-semibold"><TextType/></h2>
            <p className="mb-8 text-gray-600 text-base">I build scalable web applications and backend systems with cleancode and modern technologies.</p>


            <div className="mb-8 flex items-center gap-4 sm:text-sm lg:text-base">
              <Link
                href="#projects" className="flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-medium text-white transition-colors hover:text-black">View Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#contact" className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100">Contact Me
                <Image src="/icons/mail.svg" alt="Email" width={24} height={24}/>
              </Link>
            </div>


            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/santhoshnagaraj-info"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-500 rounded-lg"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/santhoshnagaraj-info/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-500 rounded-lg"
              >
                <Image
                  src="/icons/Linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="mailto:santhoshnagaraj.info@gmail.com" className="p-2 border border-gray-500 rounded-lg">
                <Image
                  src="/icons/mail.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="relative sm:w-40 sm:h-45 lg:w-201 lg:h-190 flex items-center justify-center overflow-hidden lg:-ml-14 lg:-mt-20 opacity-90">
            <Image src="/images/hero-page-picture.jpg" alt="Santo - Software Engineer" fill priority className="w-full h-full"/></div>
          </div>
        
      </div>
    </section>
  );
}


