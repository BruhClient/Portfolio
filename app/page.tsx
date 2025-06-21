import BentoGrid from "@/components/BentoGrid";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import WebsiteProjects from "@/components/WebsiteProjects";
import { WebDevIconCloud } from "@/components/WebDevIconCloud";
import { MachineLearningIconCloud } from "@/components/MachineLearingWebCloud";
import MLProjects from "@/components/MLProjects";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4 box-border gap-10 px-3 ">
      <Header />
      <BentoGrid />

      <WebDevIconCloud />
      <WebsiteProjects />
      <MachineLearningIconCloud />
      <MLProjects />
      <Contact />
    </div>
  );
}
