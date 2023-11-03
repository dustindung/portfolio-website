"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const ProjectList = () => {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
