import mountain from "@/public/mountain.jpg";
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
    description: "Description 1",
    icon: React.createElement(LuGraduationCap),
    date: "Date 1",
  },
  {
    title: "Title 2",
    location: "Location 2",
    description: "Description 2",
    icon: React.createElement(CgWorkAlt),
    date: "Date 2",
  },
] as const;

export const projectsData = [
  {
    title: "Project Title 1",
    description: "Project Description 1",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    imageUrl: mountain,
  },
  {
    title: "Project Title 2",
    description: "Project Description 2",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    imageUrl: mountain,
  },
] as const;

export const skillsData = ["HTML", "CSS", "JavaScript", "TypeScript"] as const;
