import About from "@/components/About";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import { UserDock } from "@/components/UserDock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center w-full px-4">
      <div className="md:pt-12 pt-5 max-w-[750px] space-y-8 pb-36">
        <Navbar />
        <Header />
        <SocialLinks />
        <About />
        <Education />
        <Certifications />
        <Awards />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <UserDock />
    </div>
  );
}
