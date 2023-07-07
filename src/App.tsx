import { useState } from 'react'
import Button from '@components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
        React + Vite + ESLint + Prettier + Tailwind CSS
      </h1>
      <p className="mb-8 text-lg">
        A boilerplate for building modern web applications with React, Vite, ESLint, Prettier, and
        Tailwind CSS.
      </p>
      <Button text={`Click me! Count is ${count}`} onClick={() => setCount((count) => count + 1)} />
    </div>
  )
}

export default App
