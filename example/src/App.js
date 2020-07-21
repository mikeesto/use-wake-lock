import React from "react";
import { useWakeLock } from "use-wake-lock";

const App = () => {
  const { toggleWakeLock, wakeLockActive, wakeLockError } = useWakeLock();
  return (
    <>
      <h2>useWakeLock examples</h2>
      <h4>Toggle wake lock manually</h4>
      <input
        name="wakelock"
        type="checkbox"
        checked={wakeLockActive}
        onChange={() => toggleWakeLock()}
      />
      <span>{wakeLockActive ? "on" : "off"}</span>
      <span> {wakeLockError}</span>
      <h4>
        Click to turn wake lock on. After a set period (in this example - 5
        seconds) the wake lock will be released
      </h4>
      <button onClick={() => toggleWakeLock(5000)}>Turn wake lock on</button>
      <span>{wakeLockActive ? " on" : " off"}</span>
      <span> {wakeLockError}</span>
    </>
  );
};
export default App;
