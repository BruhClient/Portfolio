import { IconCloud } from "@/components/magicui/icon-cloud";
import { Badge } from "./ui/badge";
import { SparklesText } from "./magicui/sparkles-text";

const slugs = [
  "pytorch",
  "scikitlearn",
  "pandas",
  "numpy",
  "langchain",
  "openai",
  "tensorflow",
  "python",
  "kaggle",
  "huggingface",
  "git",
  "github",
  "visualstudiocode",
  "opencv",
  "nvidia",
  "flask",
  "dotenv",
];

export function MachineLearningIconCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex flex-col justify-center w-full items-center text-center">
      <div className="flex justify-center items-center  gap-4 flex-col">
        <SparklesText sparklesCount={8}>
          <div className="text-5xl font-semibold">Machine Learning and AI</div>
        </SparklesText>
        <div className="text-lg max-w-[800px] text-muted-foreground ">
          This is what i've been focusing on right now . This are some of my
          projects that im most proud of .
        </div>
      </div>

      <div className="max-w-full overflow-hidden flex justify-center items-center">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
