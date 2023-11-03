"use client";
import { Section } from "@/lib/types";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface Context {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<Context | null>(null);

const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<Section>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null)
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );

  return context;
};
