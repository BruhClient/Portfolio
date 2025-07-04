"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const certifications = [
  {
    name: "Machine Learning Specialization",
    date: "May 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/2QGHBS99OHJW",
    source: "Deeplearning.AI ( Coursera )",
    imageLink: "/certifications/deeplearningai.jpeg",
  },
  {
    name: "Microsoft Excel Specialization",
    date: "May 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/TLPNFWUZQS41",
    source: "Microsoft ( Coursera )",
    imageLink: "/certifications/microsoft.jpg",
  },
  {
    name: "Python for Data Science and AI",
    date: "May 2025",
    link: "https://www.credly.com/badges/3444b593-2ef7-4828-863f-8c796220081a/linked_in_profile",
    source: "IBM ( Coursera )",
    imageLink: "/certifications/IBM.png",
  },
  {
    name: "Prompt Engineering for ChatGPT",
    date: "April 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/FEUNLAHLPXL9",
    source: "Vanderblit University ( Coursera )",
    imageLink: "/certifications/vb.png",
  },
];

const Certifications = () => {
  const router = useRouter();
  return (
    <div className="space-y-2">
      <div className="font-bold text-lg">/Certifications</div>
      <div className="space-y-3">
        {certifications.map(({ name, imageLink, source, date, link }) => (
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

export default Certifications;
