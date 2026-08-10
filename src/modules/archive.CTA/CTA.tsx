import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="blog" className="px-[10%] py-[2%] grid grid-cols-1 items-center w-full h-screen-[15%] bg-transparent backdrop-blur-md border border-gray-400">
      <div className="">
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-green-600 rounded-lg">
              <Mail size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Let's build something amazing together</h3>
              <p className="text-gray-400 text-sm">I'm currently open to new opportunities.</p>
            </div>
          </div>

          <Link
            href="#contact"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}


