import React from "react";
import { Toggle } from "./Toggle";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={toggleTheme}>
      <Toggle enabledColor="bg-gray-300" disabledColor="bg-black"/>
    </div>
  );
};