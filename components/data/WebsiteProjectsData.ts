import { Project } from "@/types/project";

export default [
  {
    title: "CoachAI",
    description:
      "Utilises VAPI SDKs to create a fully functional AI tutor app with session history . This application also includes embedded checkout and flexible payments .",
    heroImage: "/CoachAI.png",
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
    liveWebsiteUrl: "https://coach-ai-iota.vercel.app/",
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
    githubUrl: "https://github.com/BruhClient/Notefinity.git",
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
    githubUrl: "https://github.com/BruhClient/QuizPDF.git",
    startDate: "June 2025",
    endDate: "June 2025",
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
    githubUrl: "https://github.com/BruhClient/ManiacalAI.git",
    startDate: "March 2025",
    endDate: "March 2025",
    learningOutcomes: {
      description:
        "One of my first projects that holds a special place in my heart. I elevated the functionality of a Tutorial by adding secure sharing functionality via sharing links .",
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
  {
    title: "My Cook Pal",
    description:
      "Recipe App with search functionality . Users can also save their favourite recipes and see similiar recommended recipes . ",
    heroImage: "/MyCookPal.png",
    techs: ["NextJS", "Shadcn", "Tailwind"],
    liveWebsiteUrl: "https://my-cook-pal.vercel.app/",
    githubUrl: "https://github.com/BruhClient/my-cook-pal.git",
    startDate: "Nov 2024",
    endDate: "Nov 2024",
    learningOutcomes: {
      description:
        "This was my first deployed project . I learned how to implement Shadcn UI themes and work with local storage . I also learned basic caching and page routing .",
      outcomes: [
        "Save functionality using Client API",
        "Working with Public Spoonacular API",
      ],
      aoe: [
        "UI was very minimal",
        "Generating of PDF text could have been done better",
      ],
    },
  },
  {
    title: "Full Court Data",
    description:
      "NBA Statistic Website that tracks player stats and upcoming games . This utilises RapidAI's NBA API to its fullest capabilities . This project includes interactive charts and comment system for games .",
    heroImage: "/FullCourtData.png",
    techs: ["NextJS", "Shadcn", "Tailwind"],
    liveWebsiteUrl: "https://full-court-data.vercel.app/",
    githubUrl: "https://github.com/BruhClient/FullCourtData.git",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    learningOutcomes: {
      description:
        "This project made me dive deep into APIs and caching . I also worked with recharts and Shadcn Charts . This was also the first time i implemented comments and likes .",
      outcomes: ["RapidAPI's NBA API", "Comments"],
      aoe: [
        "UI was very minimal",
        "Generating of PDF text could have been done better",
      ],
    },
  },
] as Project[];
