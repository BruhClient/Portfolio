import { IconCloud } from "@/components/magicui/icon-cloud";
import { Badge } from "./ui/badge";
import { SparklesText } from "./magicui/sparkles-text";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "drizzle",
  "shadcnui",
  "dotenv",
  "auth0",
  "threedotjs",
];

export function WebDevIconCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex flex-col justify-center w-full items-center text-center">
      <div className="flex justify-center items-center  gap-4 flex-col">
        <Badge>My Projects</Badge>
        <SparklesText sparklesCount={8}>
          <div className="text-5xl font-semibold">Web Development</div>
        </SparklesText>
        <div className="text-lg max-w-[800px] text-muted-foreground ">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </div>
      </div>

      <div className="max-w-full overflow-hidden ">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
