import React, { useState, useEffect } from "react";

const Today = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const year = String(now.getFullYear());
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
      const weekday = weekdays[now.getDay()];
      setToday(`${year}年${month}月${day}日(${weekday})`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <p
      className="font-bold text-center text-black dark:text-white
      text-3xl sm:text-5xl md:text-5xl lg:text-8xl xl:text-8xl
      w-full
      "
    >
      {today}
    </p>
  );
};

export default Today;
