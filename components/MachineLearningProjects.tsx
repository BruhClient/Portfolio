"use client";

import React from "react";
import { MotionDiv } from "./motion-wrapper";

const MachineLearningProjects = () => {
  return (
    <div>
      <MotionDiv
        className="columns-1 sm:columns-2 md:columns-3 max-w-[1400px]"
        transition={{ staggerChildren: 0.1 }}
        viewport={{
          margin: "200px",
          once: true,
        }}
        initial={"initial"}
        whileInView={"visible"}
      ></MotionDiv>
    </div>
  );
};

export default MachineLearningProjects;
