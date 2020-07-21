# useWakeLock

### A React hook for the Screen Wake Lock API. Can be used to prevent a device&#x27;s screen from turning off.

[![NPM](https://img.shields.io/npm/v/use-wake-lock.svg)](https://www.npmjs.com/package/use-wake-lock) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This hook uses the native Screen Wake Lock API that was released in Chrome v84. As this is a newly released feature, you may first want to check [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock/request#Browser_compatibility).

```bash
npm install --save use-wake-lock
```

## Usage

TODO: An example page is available [here](). The source code for the example can be found [here]().

### Toggle wake lock

Checkbox (or similar) that can be toggled to turn wake lock on or off.

```jsx
import React from "react";
import { useWakeLock } from "use-wake-lock";


const Example = () => {
  const { toggleWakeLock, wakeLockActive } = useWakeLock();

  return (
    <input
      name="wakelock"
      type="checkbox"
      checked={wakeLockActive}
      onChange={() => toggleWakeLock()}
    />
    <span>{wakeLockActive ? "on" : "off"}</span>
  );
};
```

### Turn wake lock on and turn it off automatically after Y milliseconds

Button (or similar) that can be clicked to turn wake lock on. After a set period, provided in milliseconds, the wake lock is released.

```jsx
import React from "react";
import { useWakeLock } from "use-wake-lock";


const Example = () => {
  const { toggleWakeLock, wakeLockActive } = useWakeLock();

  return (
    <button onClick={() => toggleWakeLock(300000)>Keep screen on for 5 minutes</button>
    <span>{wakeLockActive ? " on" : " off"}</span>
  );
};
```

## API

The hook provides three values:

- `toggleWakeLock`: A function you can call to toggle the wake lock. It accepts an optional parameter that is the duration (in milliseconds) that the wake lock should be active for.
- `wakeLockActive`: A boolean indicating whether the wake lock is active. The default value is false.
- `wakeLockError`: A string containing any errors when using the Wake Lock API. The most common error is if the browser does not support the API. The default value is an empty string.

## License

MIT.
