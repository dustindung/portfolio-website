"use client";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { useThemeSwitch } from "@/context/ThemeSwitchContext";

const Experience = () => {
  const { ref, inView } = useSectionInView("Experience");
  const { theme } = useThemeSwitch();

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
              background:
                theme === "light" ? "#e5e7eb" : "rgba(255,255,255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "10px",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255,255,255, 0.5)",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: theme === "light" ? "white" : "#1f2937",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{experience.title}</h3>
            <p className="!mt-0 !font-normal">{experience.location}</p>
            <p
              className="!mt-1 !font-normal text-gray-700
            dark:text-white/70"
            >
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
