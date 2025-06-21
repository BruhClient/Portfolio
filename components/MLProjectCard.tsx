import { MLProject } from "@/types/project";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MotionDiv } from "./motion-wrapper";
import { cardVariants } from "@/lib/utils";
import { Tech } from "./data/TechItemsData";
import { Github } from "lucide-react";
import LearningOutcomesButton from "./LearningOutcomesButton";

const MLProjectCard = ({ project }: { project: MLProject }) => {
  const {
    videoLink,
    title,
    startDate,
    endDate,
    description,
    techs,
    githubUrl,
    learningOutcomes,
  } = project;

  console.log(videoLink);
  return (
    <MotionDiv
      variants={cardVariants}
      className="rounded-lg w-full bg-card border-2 border-muted shadow-l h-fit overflow-hidden"
    >
      <video autoPlay muted playsInline loop>
        <source src={videoLink} type="video/mp4"></source>
      </video>
      <div className="px-4 py-3">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">
          {startDate} - {endDate}
        </div>
        <div className="text-sm text-muted-foreground pt-1 min-h-[150px]">
          {description}
        </div>
        <div className="flex gap-1 flex-wrap">
          {techs.map((item: Tech) => (
            <div
              className="bg-muted w-fit text-xs font-medium px-2 py-1 rounded-lg"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-3 items-center flex-wrap">
          <Button size={"sm"} asChild></Button>
          <Button size={"sm"} asChild>
            <Link href={githubUrl} className="text-xs" target="_blank">
              <Github /> Source
            </Link>
          </Button>
          <LearningOutcomesButton learningOutcomes={learningOutcomes} />
        </div>
      </div>
    </MotionDiv>
  );
};

export default MLProjectCard;
