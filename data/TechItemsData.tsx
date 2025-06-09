import { DiReact, DiPython, DiPostgresql } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiDrizzle,
  SiShadcnui,
  SiFlask,
  SiTailwindcss,
  SiSanity,
} from "react-icons/si";
import { IoPrismOutline } from "react-icons/io5";
import {
  TbBrandAuth0,
  TbBrandFramerMotion,
  TbBrandThreejs,
} from "react-icons/tb";
import { BsStripe } from "react-icons/bs";
import { PiOpenAiLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";

const iconSize = 16;

const techItems = [
  [DiReact, "React"],
  [RiNextjsLine, "NextJS"],
  [BiLogoTypescript, "TypeScript"],
  [SiDrizzle, "Drizzle ORM"],
  [IoPrismOutline, "Prisma ORM"],
  [SiShadcnui, "Shadcn"],
  [TbBrandAuth0, "Auth JS"],
  [DiPython, "Python"],
  [SiFlask, "Flask"],
  [TbBrandThreejs, "Three JS"],
  [SiTailwindcss, "Tailwind"],
  [BsStripe, "Stripe"],
  [SiSanity, "Sanity"],
  [DiPostgresql, "Postgres"],
  [FaFigma, "Figma"],
  [TbBrandFramerMotion, "Framer Motion"],
] as const;

export type Tech = (typeof techItems)[number][1];

export default techItems;
