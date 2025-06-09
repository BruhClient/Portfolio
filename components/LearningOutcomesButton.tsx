import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Brain, Check, X } from "lucide-react";
import { LearningOutcome } from "@/types/project";

const CustomX = () => (
  <div className="bg-red-400 w-fit rounded-full p-1">
    <X size={10} color="black" />
  </div>
);

const CustomCheck = () => (
  <div className="bg-green-400 w-fit rounded-full p-1">
    <Check size={10} color="black" />
  </div>
);
const LearningOutcomesButton = ({
  learningOutcomes,
}: {
  learningOutcomes: LearningOutcome;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs flex-1" size={"sm"}>
          <Brain /> Learning Outcomes
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Learning Outcomes</DialogTitle>
          <DialogDescription className="text-start">
            {learningOutcomes.description}
          </DialogDescription>
          <div className="pt-3 space-y-3">
            {learningOutcomes.outcomes.map((text) => (
              <div
                className="flex gap-3 items-center text-xs text-start"
                key={text}
              >
                <CustomCheck />
                {text}
              </div>
            ))}

            {/* {learningOutcomes.aoe.map((text) => (
            <div
              className="flex gap-3 items-center text-xs text-start"
              key={text}
            >
              <CustomX />
              {text}
            </div>
          ))} */}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LearningOutcomesButton;
