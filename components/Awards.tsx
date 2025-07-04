"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const awards = [
  {
    name: "Edusave Award For Archievement , Good Leadership and Service",
    date: "2019",
    link: "https://www.moe.gov.sg",
    source: "Singapore Ministry of Education",
    imageLink: "/awards/moe.jpeg",
  },
  {
    name: "Edusave Award for Academic Achievement",
    date: "2020 , 2022",
    link: "https://www.moe.gov.sg",
    source: "Singapore Ministry of Education",
    imageLink: "/awards/moe.jpeg",
  },
  {
    name: "National Youth Archievement Award 2019 ( Silver Level )",
    date: "2019",
    link: "https://nyaa.org",
    source: "Singapore Nation Youth Achievemnt Award Council",
    imageLink: "/awards/nyaa.png",
  },
];

const Awards = () => {
  const router = useRouter();
  return (
    <div className="space-y-2">
      <div className="font-bold text-lg">/Awards</div>
      <div className="space-y-3">
        {awards.map(({ name, imageLink, source, date, link }) => (
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
                  {source}
                </div>
              </div>
            </div>
            <div className="font-semibold text-muted-foreground text-sm">
              {date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
