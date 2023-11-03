"use client";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28
    sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to <span className="underline">my portfolio website!</span> I’m
        Dustin, <span className="font-medium">a web developer</span> who loves
        to create <span className="underline italic">beautiful</span> and{" "}
        <span className="underline italic">functional</span> websites. My core
        stack is{" "}
        <span className="font-medium">
          React, NextJS, Nodejs, MySQL, and MongoDB.
        </span>{" "}
        I also have some knowledge of{" "}
        <span className="font-medium">Prisma</span> and{" "}
        <span className="font-medium">TypeScript</span>. I’m passionate about
        staying <span className="italic">up-to-date</span> with the latest web
        development trends and technologies, and I’m always looking for new
        challenges to tackle. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing
        workouts in the gym{" "}
        <span className="italic">
          (I'm still on my journey to get 6 packs, LOL).
        </span>{" "}
        I also enjoy <span className="font-medium">learning new things</span>.
      </p>
    </section>
  );
};

export default About;
