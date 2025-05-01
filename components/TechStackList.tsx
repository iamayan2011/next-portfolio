
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { techIcons } from "@/data";


interface TechStackListProps {
  abvList: string[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
        delayChildren: 2,
      staggerChildren: 0.5,  // 500ms between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show:   { opacity: 1, y:  0   },
};

export const TechStackList: React.FC<TechStackListProps> = ({ abvList }) => {
  return (
    <motion.div
      className="flex items-center gap-4 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {abvList.map((abv) => {
        const info = techIcons.find((t) => t.abv === abv);
        if (!info) return null;

        return (
          <motion.div
            key={info.abv}
            variants={itemVariants}
            className="flex items-center gap-2 text-sm rounded-4xl p-2 px-3 bg-gradient-to-r from-[#04071D] to-[#543486]"
          >
            <Image
              src={info.icon}
              alt={info.name}
              width={20}
              height={20}
            />
            <span>{info.name}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
