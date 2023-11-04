import building from "@/public/building.jpg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Title 1",
    location: "Location 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, obcaecati! Nam totam tenetur reiciendis quisquam! Error at distinctio ducimus qui.",
    icon: React.createElement(LuGraduationCap),
    date: "Date 1",
  },
  {
    title: "Title 2",
    location: "Location 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, obcaecati! Nam totam tenetur reiciendis quisquam! Error at distinctio ducimus qui.",
    icon: React.createElement(CgWorkAlt),
    date: "Date 2",
  },
] as const;

export const projectsData = [
  {
    title: "Project Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis non sit, dolores sapiente minus dignissimos repellendus excepturi doloribus cum?",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    imageUrl: building,
  },
  {
    title: "Project Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis non sit, dolores sapiente minus dignissimos repellendus excepturi doloribus cum?",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    imageUrl: building,
  },
  {
    title: "Project Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis non sit, dolores sapiente minus dignissimos repellendus excepturi doloribus cum?",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    imageUrl: building,
  },
  {
    title: "Project Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis non sit, dolores sapiente minus dignissimos repellendus excepturi doloribus cum?",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    imageUrl: building,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
