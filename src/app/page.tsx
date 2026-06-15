
import Hero from "@/components/Hero";
import About from "@/components/About"
import Skills from "@/components/Skills";
import Projects from "@/components/Projects"
import Stats from "@/components/Stats"
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Stats/>
        <CTA/>
      </main>
    </>
  );
}