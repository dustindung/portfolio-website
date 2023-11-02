"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const transformProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale: transformProgress,
        opacity: transformProgress,
      }}
      className="group relative bg-gray-200 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden mb-3
    sm:pr-8 sm:h-80 sm:mb-8
    last:mb-0
    hover:bg-gray-300/75 transition"
    >
      <div
        className="pt-4 pb-7 px-5 flex flex-col h-full
      group-even:ml-[19rem]
      sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
        <ul
          className="mt-4 flex flex-wrap gap-2 
        sm:mt-auto"
        >
          {tags.map((tag) => (
            <li
              className="bg-black/70 text-white px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 transition

        group-even:right-[initial] group-even:-left-40
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        "
      />
    </motion.article>
  );
};

export default Project;
