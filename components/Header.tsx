"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "motion/react";
import { BoxReveal } from "./magicui/box-reveal";
const Header = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="space-y-2 flex-1">
        <div className="md:text-5xl text-3xl font-bold">
          Hi , Im Travis{" "}
          <motion.span
            style={{ display: "inline-block" }}
            animate={{
              rotate: [0, 20, -10, 20, -10, 0], // keyframes
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </div>
        <BoxReveal>
          <div className="text-muted-foreground text-sm md:text-lg font-semibold">
            Im a student at Nanyang Technological University , studying Data
            Science and AI . I love making AI-powered apps that help people.
          </div>
        </BoxReveal>
      </div>
      <Avatar className="w-24 h-24 ">
        <AvatarImage src="/profile.jpeg" className="object-cover" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
