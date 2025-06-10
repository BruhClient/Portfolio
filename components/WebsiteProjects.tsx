"use client";

import React from "react";
import { MotionDiv } from "./motion-wrapper";
import { WebsiteProjectCard } from "./Cards";
import WebsiteProjectsData from "@/data/WebsiteProjectsData";

const WebsiteProjects = () => {
  return (
    <div>
      <MotionDiv
        className="columns-1 sm:columns-2 md:columns-3 max-w-[1400px]"
        transition={{ staggerChildren: 0.1 }}
        viewport={{
          margin: "-200px",
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
