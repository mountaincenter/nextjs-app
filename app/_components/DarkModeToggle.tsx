import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

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
    <button
      onClick={toggleDarkMode}
      className="absolute top-10 right-20 p-2 rounded-full bg-gray-200 dark:bg-gray-600"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default DarkModeToggle;
