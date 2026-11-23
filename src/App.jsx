import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice.js";

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className="text-white bg-blue-500 p-4 rounded-md cursor-pointer hover:bg-blue-700">
      {children}
    </button>
  );
}

function Counter({ children }) {
  return (
    <div className="bg-black w-[25vw] h-[25vh] min-w-50 min-h-30 rounded-md flex flex-row items-center justify-center gap-4">
      {children}
    </div>
  );
}

function NumberDisplay({ count }) {
  return (
    <span className="text-white text-6xl w-20 text-center">{count}</span>
  );
}

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Counter>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <NumberDisplay count={count} />
        <Button onClick={() => dispatch(increment())}>+</Button>
      </Counter>
    </main>
  );
}

export default App;