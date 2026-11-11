import { useState } from 'react'
import Button from './Button.jsx'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0);

  function handleCount(variant) {
    setCount(prevCount => {
      if (variant === "plus") {
        return Math.min(prevCount + 1, 10);
      }
      else if (variant === "minus") {
        return Math.max(prevCount - 1, 0);
      }
    })
  }

  return (
    <body className="flex min-h-screen items-center justify-center">
      <div className="bg-black w-[25vw] h-[25vh] rounded-md flex flex-row items-center justify-center gap-4">
        <Button variant="minus" onClick={handleCount} />
        <Counter count={count} />
        <Button variant="plus" onClick={handleCount} />
      </div>
    </body>
  )
}

export default App