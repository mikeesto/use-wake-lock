import { useState, useEffect } from "react";

export const useWakeLock = () => {
  const [wakeLock, setWakeLock] = useState(null);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [wakeLockError, setWakeLockError] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => timer && clearTimeout(timer);
  }, [timer]);

  const cleanup = () => {
    setWakeLock(null);
    setWakeLockActive(false);
    setWakeLockError("");
  };

  const toggleWakeLock = async (duration = 0) => {
    // Check if duration is a number
    if (typeof duration !== "number") throw Error("Duration must be a number");

    if (!wakeLockActive) {
      try {
        // Set wake lock
        const tempWakeLock = await window.navigator.wakeLock.request("screen");

        if (duration !== 0) {
          const tempTimer = setTimeout(() => {
            tempWakeLock.release();
            cleanup();
          }, duration);
          setTimer(tempTimer);
        }

        setWakeLock(tempWakeLock);
        setWakeLockActive(true);
        setWakeLockError("");
      } catch (err) {
        setWakeLockError(`${err.name}, ${err.message}`);
        console.error(`${err.name}, ${err.message}`);
      }
    } else {
      // Release wake lock
      wakeLock.release();
      cleanup();
    }
  };

  return { toggleWakeLock, wakeLockActive, wakeLockError };
};
