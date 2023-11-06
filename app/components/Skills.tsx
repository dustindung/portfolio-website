"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center
    sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill) => (
          <li
            className="bg-white border border-black/10 rounded-xl px-5 py-3
            dark:bg-opacity-10 dark:text-white/80"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
