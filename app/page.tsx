import BentoGrid from "@/components/BentoGrid";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import PersonalProjects from "@/components/PersonalProjects";
import ProfessionalWork from "@/components/ProfessionalWork";
import TechScrollBar from "@/components/Proficencies";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <div className="w-full flex justify-center py-4 px-3">

      <div className="max-w-[1200px] w-full flex flex-col gap-10">
        <Header />
        <BentoGrid />
        <TechScrollBar />
        <ProfessionalWork />
        <PersonalProjects />
        <WorkExperience />
        <Contact />
     
      </div>
      
    </div>
  );
}
