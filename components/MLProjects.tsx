"use client";

import React from "react";
import { MotionDiv } from "./motion-wrapper";
import { WebsiteProjectCard } from "./WebsiteProjectCard";
import WebsiteProjectsData from "@/components/data/WebsiteProjectsData";
import MLProjectsData from "./data/MLProjectsData";
import MLProjectCard from "./MLProjectCard";

const MLProjects = () => {
  return (
    <div>
      <MotionDiv
        className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] gap-4"
        transition={{ staggerChildren: 0.1 }}
        viewport={{
          margin: "-50px",
        }}
        initial={"initial"}
        whileInView={"visible"}
      >
        {MLProjectsData.map((project) => {
          return <MLProjectCard key={project.title} project={project} />;
        })}
      </MotionDiv>
    </div>
  );
};

export default MLProjects;
