import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import IssueTracker from "@/public/issue-tracker.jpeg";
import GameHub from "@/public/game-hub.jpeg";
import NasaProject from "@/public/nasa-project.jpeg";
import Hostify from "@/public/hostify.jpeg";
import { experiences1, experiences2, experiences3 } from "./experiences";

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
    title: "Younet Group",
    location: "Ho Chi Minh",
    description: React.createElement(experiences3),
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Internet Marketing",
    location: "Freelance",
    description: React.createElement(experiences2),
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021",
  },
  {
    title: "Yet Company",
    location: "Ho Chi Minh",
    description: React.createElement(experiences1),
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Saigon Technology University",
    location: "Ho Chi Minh",
    description: "Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
] as const;

export const projectsData = [
  {
    title: "Issue Tracker",
    description:
      "Issue Tracker is a web application that allows users to create manage and track issues. Users can sort or filter issues by various criteria assign other users to issues and view a dashboard with charts to display the status of issue",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Prisma",
      "NextAuth.js",
    ],
    imageUrl: IssueTracker,
    githubUrl: "https://github.com/dustindung/issue-tracker",
    website: "https://issue-tracker-ten-kohl.vercel.app/",
  },
  {
    title: "Game-Hub",
    description:
      "Game-hub is a video game discovery app built with Vite, React, TypeScript, Chakra UI and the RAWG API",
    tags: [
      "Vite-React",
      "TypeScript",
      "Chakra UI",
      "API Integration",
      "React Query",
      "Zustand",
      "React Router",
    ],
    imageUrl: GameHub,
    githubUrl: "https://github.com/dustindung/Game-hub",
    website: "https://game-hub-zeta-sand.vercel.app/",
  },
  {
    title: "NASA Project",
    description:
      "This project is a full-stack JavaScript application that allows users to schedule a mission launch for interstellar travel to one of the Kepler Exoplanets. The application is built with React, NodeJS, Express, MongoDB, Mongoose, REST API, MVC pattern, Morgan, Jest, GitHub Actions, Docker and deployed to AWS.",
    tags: [
      "React",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "Morgan",
      "Jest",
    ],
    imageUrl: NasaProject,
    githubUrl: "https://github.com/dustindung/nasa-project",
    website:
      "http://ec2-54-254-247-36.ap-southeast-1.compute.amazonaws.com:8000/",
  },
  {
    title: "Hostify",
    description:
      "Hostify is a beautiful responsive and fast website for an imaginary cloud hosting provider.",
    tags: ["HTML", "CSS"],
    imageUrl: Hostify,
    githubUrl: "https://github.com/dustindung/Hostify",
    website: "https://hostify-pearl.vercel.app/",
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
