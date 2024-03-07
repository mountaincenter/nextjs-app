"use client";

import Clock from "./_components/Clock";
import Today from "./_components/Today";
import DarkModeToggle from "./_components/DarkModeToggle";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <DarkModeToggle />
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-16 lx:gap-20">
        <Today />
        <Clock />
      </div>
    </div>
  );
};

export default Home;
