import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter)
  }, [counter])

  const increment = () => {
    return setCounter(counter + 1);
  }
  const decrement = () => {
    return setCounter(counter - 1);
  };

  const reset = () => {
    return setCounter(0);
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