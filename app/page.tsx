import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen md:h-screen min-h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start min-h-screen">
        <Hero />
      </section>

      <section id="about" className="snap-center min-h-screen">
        <About />
      </section>

      <section id="workexperience" className="snap-center min-h-screen">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start min-h-screen">
        <Skills />
      </section>

      <section id="projects" className="snap-start min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="snap-start min-h-screen">
        <ContactMe />
      </section>

      {/* Mobile safe sticky footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 sm:bottom-10 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/up.svg"
              alt="Up arrow icon"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}