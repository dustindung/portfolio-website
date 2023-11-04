"use client";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const { ref, inView } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28
    sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience) => (
          <VerticalTimelineElement
            key={experience.title}
            visible={inView}
            contentStyle={{
              background: "#e5e7eb",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "10px",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{experience.title}</h3>
            <p className="!mt-0 !font-normal">{experience.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
