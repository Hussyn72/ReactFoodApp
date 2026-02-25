import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <center>
      <div className="counter">
        <h1>{count}</h1>
        <button
          className="increment-btn"
          onClick={() => {
            let increment = count + 1;
            setCount(increment);
          }}
        >
          Increament
        </button>
        <button
          className="decrement-btn"
          onClick={() => {
            if (count === 0) return;
            let Decrement = count - 1;
            setCount(Decrement);
          }}
        >
          Decreament
        </button>
      </div>
    </center>
  );
};

export default Counter;
