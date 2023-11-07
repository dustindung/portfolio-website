"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaGithubSquare, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  website,
}: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const transformProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  //sm:h-80
  return (
    <motion.article
      ref={ref}
      style={{
        scale: transformProgress,
        opacity: transformProgress,
      }}
      className="group relative bg-gray-200 max-w-[55rem] rounded-lg border border-black/5 overflow-hidden mb-3
    sm:pr-8 sm:mb-8 
    last:mb-0
    hover:bg-gray-300/75 transition
    dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div
        className="pt-4 pb-7 px-5 flex flex-col sm:min-h-[25rem]
        sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
        sm:group-even:ml-[19rem]"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p
          className="mt-2 text-gray-700 leading-relaxed
        dark:text-white/70"
        >
          {description}
        </p>
        <div className="flex gap-4 my-4">
          <a
            href={githubUrl}
            target="_blank"
            className="text-gray-700 text-[1.5rem] transition
          focus:scale-110 
          hover:scale-110 hover:text-gray-950
          active:scale-105
          dark:bg-opacity-10 dark:text-white/60"
          >
            <FaGithubSquare />
          </a>
          <a
            href={website}
            target="_blank"
            className="text-gray-700 text-[1.4rem] transition
          focus:scale-110 
          hover:scale-110 hover:text-gray-950
          active:scale-105
          dark:bg-opacity-10 dark:text-white/60"
          >
            <FaLink />
          </a>
        </div>
        <ul
          className="mt-4 flex flex-wrap gap-2 
        sm:!mt-auto "
        >
          {tags.map((tag) => (
            <li
              className="bg-black/70 text-white px-3 py-1 rounded-full text-[0.65rem] uppercase tracking-wider
              dark:text-white/70"
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
        className="hidden absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        sm:block
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 transition

        group-even:right-[initial] group-even:-left-40
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        "
      />
    </motion.article>
  );
};

export default Project;
