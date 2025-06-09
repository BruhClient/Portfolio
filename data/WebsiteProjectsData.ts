import { Project } from "@/types/project";

export default [
  {
    title: "QuizPDF",
    description:
      "AI Platform that generates quizes , either open ended or multiple choice , based on user prompts . What sets this apart is the integration of PDF upload that can generate insightful question based on PDF Content.",
    heroImage: "/QuizPDF.png",
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
    liveWebsiteUrl: "https://www.quizpdf.net",
    githubUrl: "Hello",
    startDate: "June 2025",
    endDate: "Present",
    learningOutcomes: {
      description:
        "I faced a problem where the Open AI API took too long to load the quiz . I implemented text chunking for the first time and experimented with variation in prompts to archieve better results.",
      outcomes: [
        "Text Chunking",
        "Adding Variations to each prompt for each chunk for better results",
      ],
      aoe: [
        "UI was basic and not user friendly at times",
        "Caching of Infinite Queries could have been done better",
      ],
    },
  },
  {
    title: "Notefinity",
    description:
      "AI SAAS Application that combines AI with traditional notetaking . It comes with a rich text editor and support for community engagements . User can talk directly to their notes using AI Chat . ",
    heroImage: "/Notefinity.png",
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
    liveWebsiteUrl: "https://notefinity-chi.vercel.app/",
    githubUrl: "Hello",
    startDate: "May 2025",
    endDate: "May 2025",
    learningOutcomes: {
      description:
        "This project was a significant improvement from my other projects . I implemented optimistic updates and caching which resulted in instant responses . I also dabbled in Vector Databases via Pinecone for Semantic Search and Ai Chat.",
      outcomes: [
        "Semantic Search with Pinecone",
        "Pinecone with Vercel API SDK",
        "Optimistic updates , especially with infinite queries",
      ],
      aoe: ["Animations felt lacklaster and could use a bit of work"],
    },
  },
  {
    title: "ManiacalAI",
    description:
      "AI PDF Summariser with integration with AI Chat . Users can choose to share their summarised PDFs with robust encryption using bcrypt js.",
    heroImage: "/ManiacalAI.png",
    techs: [
      "NextJS",
      "Prisma ORM",
      "Auth JS",
      "Stripe",
      "Shadcn",
      "Tailwind",
      "Open AI",
    ],
    liveWebsiteUrl: "https://www.maniacalai.com",
    githubUrl: "Hello",
    startDate: "June 2025",
    endDate: "Present",
    learningOutcomes: {
      description:
        "One of my first projects that holds a special place in my heart. I elevated the functionality of Tutorial by adding secure sharing functionality via sharing links .",
      outcomes: [
        "Open AI API",
        "PDF Parsing using Langchain",
        "Bcrypt hashing for passwords",
      ],
      aoe: [
        "UI was very minimal",
        "Generating of PDF text could have been done better",
      ],
    },
  },
] as Project[];
