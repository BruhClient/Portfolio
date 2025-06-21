import { MLProject, Project } from "@/types/project";

export default [
  {
    title: "Emotion Detector",
    description:
      "Utilises VAPI SDKs to create a fully functional AI tutor app with session history . This application also includes embedded checkout and flexible payments .",
    videoLink: "/ML/emotion_detector.mp4",
    techs: [
      "NextJS",
      "Drizzle ORM",
      "Auth JS",
      "Stripe",
      "Shadcn",
      "Tailwind",
      "Framer Motion",
      "Figma",
      "Open AI",
    ],

    githubUrl: "https://github.com/BruhClient/CoachAI.git",
    startDate: "May 2025",
    endDate: "June 2025",
    learningOutcomes: {
      description:
        "This project brought me out of my comofort zone . I had to think about different scenarios in voice chat to allow for the duration of the call to be properly recorded . Implementing stripe payemnts for such an app proved quite difficult . Upgrading this app to include more voices is definitely not off the table.",
      outcomes: [
        "Voice Chat with VAPI",
        "Embedded Payemnt with Stripe",
        "Soft UI",
      ],
      aoe: ["Animations felt lacklaster and could use a bit of work"],
    },
  },
] as MLProject[];
