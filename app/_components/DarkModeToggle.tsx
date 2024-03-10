import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Button from "./atoms/Button/Button";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button onClick={toggleDarkMode} className="inline-block">
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
