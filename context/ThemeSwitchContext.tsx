"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface Context {
  theme: Theme;
  toogleTheme: () => void;
}

const ThemeSwitchContext = createContext<Context | null>(null);

const ThemeSwitchProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeSwitchContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};

export default ThemeSwitchProvider;

export const useThemeSwitch = () => {
  const context = useContext(ThemeSwitchContext);

  if (context === null)
    throw new Error(
      "useThemeSwitch must be used within an ThemeSwitchProvider"
    );

  return context;
};
