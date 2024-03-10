import React from "react";
import HomeLink from "../_components/Home";
import TimerComponent from "./TimerComponent";

const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="flex gap-2 absolute top-10 right-5 mx:right-10 lg:right-20 ">
        <HomeLink />
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-16 lx:gap-20">
        <TimerComponent />
      </div>
    </div>
  );
};

export default Timer;
