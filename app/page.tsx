import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id='about' className="snap-center">
        <About />
      </section>

      <section id='workexperience' className="snap-center">
        <WorkExperience />
      </section>

      <section id='skills' className="snap-start">
        <Skills />
      </section>

      <section id='projects' className="snap-start">
        <Projects />
      </section>

      <section id='contact' className="snap-start">
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-10 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/up.svg"
              alt="Up arrow icon"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}


