import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/____travisang____?igsh=NXFwaXI5amxjdmtm&utm_source=qr",
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/BruhClient",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/travis-ang-457a2b348",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@codemadesimple1",
  },
];
const SocialLinks = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      {socialLinks.map((link) => (
        <Button key={link.name} size={"icon"} variant={"outline"} asChild>
          <Link href={link.href}>
            <link.icon />
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
