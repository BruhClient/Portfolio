import { Tech } from "@/components/data/TechItemsData";

enum ProjectType {
  Website,
  Bot,
}

export type Project = {
  title: string;
  description: string;
  heroImage: string;
  subText: string;
  techs: Tech[];
  githubUrl: string;
  liveWebsiteUrl: string;
  startDate: string;
  endDate: string;
  learningOutcomes: LearningOutcome;
};

export type LearningOutcome = {
  description: string;
  aoe: string[];
  outcomes: string[];
};
