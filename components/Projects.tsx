import React from "react";
import { Badge } from "./ui/badge";
import { Folder, Github, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BoxReveal } from "./magicui/box-reveal";

const projects = [
  {
    name: "PythagoraiAI",
    imageUrl: "/projects/pythagorai.png",
    date: "2023 - 2024",
    description:
      "Inspired by Anki Flashcards , I decided to build my own flash card app that allows users to do tests with flashcards . What sets mine apart is the integration of PDF upload with AI generation.",
    skills: ["NextJS", "Typescript"],
    liveUrl: "https://pythagorai-ai.vercel.app",
    githubUrl: "sdf",
  },
  {
    name: "CoachAI",
    imageUrl: "/projects/coachai.png",
    date: "2023 - 2024",
    description:
      "Devloped a 'AI companion' type app that uses real time voice and user generated prompts for learning . It uses VAPI API under the hood . ",
    skills: ["NextJS", "Typescript"],
    liveUrl: "https://coach-ai-iota.vercel.app",
    githubUrl: "asdasd",
  },
  {
    name: "Notefinity",
    imageUrl: "/projects/notefinity.png",
    date: "2023 - 2024",
    description:
      "Developed a notetaking app that integrates AI using Pinecone and Langcain , creating a full RAG chatbot. It also comes with a community feature to comment and share notes securely.",
    skills: ["NextJS", "Typescript"],
    liveUrl: "https://notefinity-chi.vercel.app",
    githubUrl: "",
  },
  {
    name: "QuizPDF",
    imageUrl: "/projects/quizpdf.png",
    date: "2023 - 2024",
    description:
      "Integrates PDF upload with OpenAI API. Users can either write prompts to generate questions or upload PDF files",
    skills: ["NextJS", "Typescript"],
    liveUrl: "https://www.quizpdf.net",
    githubUrl: "",
  },
];
const Projects = () => {
  return (
    <div id="projects">
      <div className="flex justify-center flex-col w-full items-center text-center gap-2">
        <Badge>
          <Folder />
          My Projects
        </Badge>
        <div className="text-4xl font-bold">Check out my latest work</div>
        <BoxReveal>
          <div>
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </div>
        </BoxReveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-1 pt-6">
        {projects.map(
          ({
            name,
            imageUrl,
            date,
            description,
            skills,
            liveUrl,
            githubUrl,
          }) => (
            <div
              key={name}
              className="border-2 rounded-sm shadow-lg flex flex-col gap-2 pb-3"
            >
              <Link href={liveUrl}>
                <Image
                  src={imageUrl ?? ""}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
              </Link>

              <div className="px-4 h-full flex flex-col gap-2">
                <div>
                  <div className="font-bold text-lg">{name}</div>
                  <div className="text-muted-foreground text-sm font-semibold">
                    {date}
                  </div>
                </div>

                <div className="text-muted-foreground text-sm text-balance flex-1 ">
                  {description}
                </div>
                <div className="flex gap-1 flex-wrap pt-1">
                  {skills.map((skill) => (
                    <Badge variant={"secondary"} key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap ">
                  {liveUrl && (
                    <Button size={"sm"} className="text-xs" asChild>
                      <Link href={liveUrl}>
                        <Globe />
                        Website
                      </Link>
                    </Button>
                  )}
                  {githubUrl && (
                    <Button
                      size={"sm"}
                      className="text-xs"
                      variant={"outline"}
                      asChild
                    >
                      <Link href={githubUrl}>
                        <Github />
                        Source
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
