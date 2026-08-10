import Skills from "@/modules/skills/Skills";

import Hero from "@/modules/hero/Hero";
import About from "@/modules/aboutme/About";
import Projects from "@/modules/projects/Projects";
import Stats from "@/modules/archive.CTA/Stats";
import CTA from "@/modules/archive.CTA/CTA";


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <div className="">
          <Hero />
          <About/>
        </div>
        <Skills/>
        <Projects/>
        <CTA/>
        <Stats/>
      </main>
    </>
  );
}

// dark-coding.1920x1080.webm