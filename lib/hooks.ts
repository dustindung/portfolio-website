import { useActiveSection } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Section } from "./types";

export const useSectionInView = (section: Section, threshold = 0.8) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(section);
  }, [inView]);

  return { ref, inView };
};
