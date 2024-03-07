import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Button from "./atoms/Button";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // クライアントサイドでのみ実行される useEffect
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button onClick={toggleDarkMode} className="inline-block">
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
