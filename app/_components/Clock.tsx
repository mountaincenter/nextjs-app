import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="font-bold text-center text-black dark:text-white
      text-xl sm:text-3xl md:text-5xl lg:text-8xl xl:text-10xl
      w-full
      "
    >
      {time}
    </p>
  );
};

export default Clock;
