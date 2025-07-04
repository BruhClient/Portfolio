import React from "react";
import { Badge } from "./ui/badge";

const skills = [
  "NextJS",
  "React",
  "React Native",
  "Typescript",
  "SQL",
  "Python",
  "Pytorch",
  "Flask",
  "Django",
];
const Skills = () => {
  return (
    <div className="space-y-2">
      <div className="font-bold text-lg">/Skills</div>
      <div className="flex gap-1 flex-wrap">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
