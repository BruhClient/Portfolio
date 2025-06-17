import { Tech } from "@/components/data/TechItemsData";
import React from "react";
import TechItemsData from "@/components/data/TechItemsData";
import { LucideIcon } from "lucide-react";

const Tag = ({ tech }: { tech: Tech }) => {
  const [icon, label] = TechItemsData.find((data) => data[1] === tech)!;

  const Icon = icon as LucideIcon;
  return (
    <div className="flex items-center gap-2 bg-muted w-fit px-3 text-sm py-2 rounded-lg shrink-0">
      {<Icon />}
      {label}
    </div>
  );
};

export default Tag;
