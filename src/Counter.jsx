import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    return setCounter(counter => counter + 1);
  }
  const decrement = () => {
    return setCounter(counter => counter - 1);
  };

  const reset = () => {
    return setCounter(counter => counter = 0);
  };

  return (
    <>
      <CounterDisplay counter={counter}/>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter;