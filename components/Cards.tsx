"use client";

import { MotionDiv } from "./motion-wrapper";
import { cardVariants } from "@/lib/utils";
import Link from "next/link";
import { Project } from "@/types/project";
import { Button } from "./ui/button";
import { Brain, Github, Globe } from "lucide-react";
import { Tech } from "@/data/TechItemsData";
import { useRouter } from "next/navigation";
import LearningOutcomesButton from "./LearningOutcomesButton";

export const WebsiteProjectCard = ({
  project: {
    title,
    startDate,
    heroImage,
    endDate,
    githubUrl,
    techs,
    liveWebsiteUrl,
    description,
    learningOutcomes,
  },
}: {
  project: Project;
}) => {
  const router = useRouter();
  return (
    <MotionDiv
      variants={cardVariants}
      viewport={{
        margin: "200px",
      }}
      className=" rounded-lg w-full overflow-hidden bg-card border-2 border-muted shadow-lg"
    >
      <img
        src={heroImage}
        alt=""
        className="w-full max-h-[300px] object-cover cursor-pointer "
        onClick={() => {
          router.push(liveWebsiteUrl);
        }}
      />
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
          <Button size={"sm"} asChild>
            <Link href={githubUrl} className="text-xs" target="_blank">
              <Globe /> Live Website
            </Link>
          </Button>
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
