import { useState } from "react";
import Counter from "./Counter.jsx";
import Button from "./Button.jsx";
import NumberDisplay from "./NumberDisplay.jsx";

function App() {
  const [count, setCount] = useState(0);

  function counting(variant) {
    setCount((prevCount) => {
      if (variant === "plus") {
        return Math.min(prevCount + 1, 10);
      }
      else if (variant === "minus") {
        return Math.max(prevCount - 1, 0);
      }
      return prevCount;
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Counter>
        <Button variant="minus" onClick={counting} />
        <NumberDisplay count={count} />
        <Button variant="plus" onClick={counting} />
      </Counter>
    </main>
  );
}

export default App;