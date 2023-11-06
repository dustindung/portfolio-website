"use client";
import { useThemeSwitch } from "@/context/ThemeSwitchContext";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toogleTheme } = useThemeSwitch();

  return (
    <button
      className="fixed bottom-5 right-5 flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 shadow-2xl rounded-full transition-all
    hover:scale-110
    focus:scale-110
    dark:bg-gray-950"
      onClick={toogleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
