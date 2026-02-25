import { useState } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="countertwo">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          let increment = count + 1;
          setCount(increment);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          if (count === 0) return;
          let decrement = count - 1;
          setCount(decrement);
        }}
      >
        Decreament
      </button>
    </div>
  );
};

export default CounterTwo;
