"use client";

import Clock from "./_components/Clock";
import DarkModeToggle from "./_components/DarkModeToggle";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <DarkModeToggle />
      <Clock />
    </div>
  );
};

export default Home;
