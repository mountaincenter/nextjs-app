"use client";

import React from "react";
import { useTimer } from "react-timer-hook";
import TextAtom from "../_components/atoms/Text/TextAtom";

interface TimerComponentProps {
  expiryTimestamp: Date;
}

const TimerComponent = ({ expiryTimestamp }: TimerComponentProps) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <TextAtom size="medium">Timer Demo</TextAtom>
      <TextAtom size="large">
        <div>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <div>
          <span>{totalSeconds}</span>
        </div>
      </TextAtom>
      <TextAtom size="small">
        <p className="mt-8 mb-8">
          status:{isRunning ? "Running" : "Not running"}
        </p>
        <div className="flex items-center justify-center gap-20">
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 300);
              restart(time);
            }}
          >
            Restart
          </button>
        </div>
      </TextAtom>
    </div>
  );
};

export default TimerComponent;
