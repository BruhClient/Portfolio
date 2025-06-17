"use client";

import React from "react";
import { MotionDiv } from "./motion-wrapper";
import { WebsiteProjectCard } from "./Cards";
import WebsiteProjectsData from "@/components/data/WebsiteProjectsData";

const WebsiteProjects = () => {
  return (
    <div>
      <MotionDiv
        className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] gap-4"
        transition={{ staggerChildren: 0.1 }}
        viewport={{
          amount: 0.1,
        }}
        initial={"initial"}
        whileInView={"visible"}
      >
        {WebsiteProjectsData.map((project) => {
          return <WebsiteProjectCard key={project.title} project={project} />;
        })}
      </MotionDiv>
    </div>
  );
};

export default WebsiteProjects;
