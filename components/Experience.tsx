"use client";
import React from "react";
import { motion } from "motion/react";
import { TechStackList } from "./TechStackList";

const Experience = () => {
  return (
    <motion.div
    id="experience"
      className="mb-20"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
    >
      <h1 className="heading">
        Work <span className="text-purple">Experience</span>
      </h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-left"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      >
        <div className="gap-y-5 px-5 mt-20">
          <h1 className="text-3xl font-bold">Lumu Oy</h1>
          <div className="mt-1 flex justify-between text-purple">
            <p className="text-xl italic">Full Stack Intern</p>
            <p className="text-xl italic">Oct&apos;24 - Present</p>
          </div>

          <ul className="p-5 text-lg list-disc">
            <li>
              Working closely with founders on 2 products: News Summarizer app &
              Fashion-Tech Saas.
            </li>
            <li>
              Developed the entire front-end &{" "}
              <span className="text-purple font-bold">UI/UX</span> of the app in{" "}
              <span className="font-bold text-purple">Flutter.</span> Increased
              user retention by 70%.
            </li>
            <li>
              Developed 50+ components using{" "}
              <span className="text-purple font-bold">
                React, Typescript and Tailwind CSS.
              </span>{" "}
              Used <span className="font-bold text-purple">Node, Express </span>
              for backend.
            </li>
            <li>
              Enhanced the UX by leveraging{" "}
              <span className="text-purple font-bold">
                Framer Motion.
              </span>
              
            </li>
            <li>
              Used <span className="font-bold text-purple">Azure</span> and{" "}
              <span className="font-bold text-purple">
                Google Cloud Platform
              </span>{" "}
              for authentication, storage, push notifications & other cloud
              requirements.
            </li>
          </ul>
        </div>
        <div className="flexStart mt-">
          <TechStackList
            abvList={[
              "react",
              "tailwind",
              "typescript",
              "framer",
              "daisy",
              "node",
              "express",
              "flutter",
              "flutterflow",
              "dart",
              "gcp",
              "azure",
            ]}
          ></TechStackList>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
