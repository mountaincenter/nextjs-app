"use client";

import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import TextAtom from "../_components/atoms/Text/TextAtom";

interface TimerComponentProps {}

interface UseTimerReturnType {
  seconds: number;
  minutes: number;
  hours?: number;
  days?: number;
  start?: () => void;
  pause: () => void;
  resume: () => void;
  restart: (expiryTimestamp: Date) => void;
}

const WORK_DURATION = 25 * 60;
const SHORT_BREAK_DURATION = 5 * 60;
const LONG_BREAK_DURATION = 5 * 60;
const CYCLES_PER_SET = 4;

const TimerComponent: React.FC<TimerComponentProps> = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentCycle, setCurrentCycle] = useState<number>(1);
  const [currentSet, setCurrentSet] = useState<number>(1);

  const getInitialTimestamp = (): Date => {
    const now = new Date();
    if (isBreakTime()) {
      now.setSeconds(
        now.getSeconds() +
          (currentCycle === CYCLES_PER_SET
            ? LONG_BREAK_DURATION
            : SHORT_BREAK_DURATION),
      );
    } else {
      now.setSeconds(now.getSeconds() + WORK_DURATION);
    }
    return now;
  };

  const isBreakTime = (): boolean => {
    return currentCycle > 1 && currentCycle % CYCLES_PER_SET === 1;
  };

  const handleTimerExpiration = (): void => {
    if (isBreakTime()) {
      setCurrentSet((prevSet) => prevSet + 1);
      setCurrentCycle(1);
    } else {
      setCurrentCycle((prevCycle) => prevCycle + 1);
    }
    restart(getInitialTimestamp());
  };

  const { seconds, minutes, pause, resume, restart }: UseTimerReturnType =
    useTimer({
      expiryTimestamp: getInitialTimestamp(),
      autoStart: false,
      onExpire: handleTimerExpiration,
    });

  useEffect(() => {
    if (isRunning) {
      resume();
    } else {
      pause();
    }
  }, [isRunning, resume, pause]);

  const startTimer = (): void => {
    setIsRunning(true);
  };

  const stopTimer = (): void => {
    setIsRunning(false);
  };

  const resetTimer = (): void => {
    setCurrentCycle(1);
    setCurrentSet(1);
    restart(getInitialTimestamp());
    stopTimer();
  };

  const fromatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TextAtom size="medium">Pomodoro Timer</TextAtom>
      <TextAtom size="large">
        <span>{fromatTime(minutes * 60 + seconds)}</span>
      </TextAtom>
      <TextAtom size="small">
        <p>
          Set: {currentSet} | Cycle: {currentCycle} / {CYCLES_PER_SET} |{" "}
          {isBreakTime() ? "Break Time" : "Work Time"}
        </p>
        <div className="flex items-center justify-center gap-20">
          <button onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button onClick={stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </TextAtom>
    </div>
  );
};

export default TimerComponent;
