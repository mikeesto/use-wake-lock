import React from 'react'
import { useMyHook } from 'use-wake-lock'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App