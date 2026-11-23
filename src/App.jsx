import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increaseBy, decreaseBy } from "./redux/slices/counterSlice.js";

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className="text-white bg-blue-500 p-4 rounded-md cursor-pointer hover:bg-blue-700">
      {children}
    </button>
  );
}

function Counter({ children }) {
  return (
    <div className="bg-black w-[25vw] h-[25vh] min-w-60 min-h-50 rounded-md flex flex-row items-center justify-center gap-4">
      {children}
    </div>
  );
}

function InputBy({ value, onChange }) {
  return (
    <div className="flex flex-col">
      <input type="number" min="0" value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-2 rounded-md bg-white" />
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
  const [payload, setPayload] = useState(0);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Counter>
        <div className="flex flex-col items-center gap-4">
          <InputBy value={payload} onChange={setPayload} />
          <div className="flex flex-row items-center gap-4">
            <Button onClick={() => payload === "" || Number(payload) === 0 ? dispatch(decrement()) : dispatch(decreaseBy(Number(payload)))}>-</Button>
            <NumberDisplay count={count} />
            <Button onClick={() => payload === "" || Number(payload) === 0 ? dispatch(increment()) : dispatch(increaseBy(Number(payload)))}>+</Button>
          </div>
        </div>
      </Counter>
    </main>
  );
}

export default App;