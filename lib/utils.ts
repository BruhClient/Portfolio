import PersonalProjectData from "@/data/WebsiteProjectsData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const containerVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const cardVariants = {
  initial: {
    opacity: 0,

    x: -20,
  },
  visible: {
    opacity: 1,

    x: 0,
  },
};

export const smoothScroll = (
  e: React.MouseEvent<HTMLButtonElement>,
  id: string
) => {
  e.preventDefault(); // Prevent default anchor behavior
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
