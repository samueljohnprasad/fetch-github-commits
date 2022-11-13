import { useEffect, useState } from "react";
import { TIME_TO_REFRESH } from "../constants";

type TimerTypes = {
  handleRefresh: () => void;
  refresh: boolean;
};
export const useTimer = ({ refresh, handleRefresh }: TimerTypes) => {
  const [seconds, setSeconds] = useState(TIME_TO_REFRESH);

  useEffect(() => {
    if (!refresh) return;
    let intervalId: NodeJS.Timer;
    if (seconds === 0) {
      setSeconds(TIME_TO_REFRESH);
      handleRefresh();
    } else {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds, refresh, handleRefresh]);

  const resetTimer = () => {
    setSeconds(TIME_TO_REFRESH);
  };
  return {
    resetTimer,
    seconds,
  };
};
