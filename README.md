# use-wake-lock

> A React hook for the Screen Wake Lock API that prevents the device&#x27;s screen from turning off

[![NPM](https://img.shields.io/npm/v/use-wake-lock.svg)](https://www.npmjs.com/package/use-wake-lock) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-wake-lock
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-wake-lock'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [mikeesto](https://github.com/mikeesto)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
