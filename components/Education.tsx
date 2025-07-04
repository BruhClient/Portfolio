"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const educationPaths = [
  {
    name: "Nanyang Technological University",
    date: "2025 - Present",
    link: "https://www.ntu.edu.sg",
    qualification: "Bachelor Degree in Data Science and AI",
    imageLink: "/education/ntu.png",
  },
  {
    name: "Jurong Pioneer Junior College",
    date: "2020 - 2022",
    link: "https://www.jpjc.moe.edu.sg",
    qualification: "Cambridge A Levels Certification",
    imageLink: "/education/jpjc.jpg",
  },
  {
    name: "Hua Yi Secondary School",
    date: "2016 - 2020",
    link: "https://www.huayisec.moe.edu.sg",
    qualification: "Cambridge O Levels Certification",
    imageLink: "/education/hyss.jpg",
  },
];

const Education = () => {
  const router = useRouter();
  return (
    <div className="space-y-2">
      <div className="font-bold text-lg">/Education</div>
      <div className="space-y-3">
        {educationPaths.map(
          ({ name, imageLink, qualification, date, link }) => (
            <motion.div
              onClick={() => router.push(link)}
              key={name}
              className="flex justify-between items-center group cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2">
                  <AvatarImage className="object-contain" src={imageLink} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold flex items-center gap-2 relative">
                    {name}
                    <AnimatePresence>
                      <motion.div
                        variants={{
                          rest: { opacity: 0, x: -5 },
                          hover: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight size={17} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">
                    {qualification}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-muted-foreground text-sm">
                {date}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Education;
