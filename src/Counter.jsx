import { useState } from "react";
import { useEffect, useRef } from "react";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  const addOne = () => {
    setCounter(counter + 1);
  }
  const removeOne = () => {
    setCounter(counter - 1);
  }

  useEffect(() => {
    const direction = counter > initialValue ? 'Up' : counter < initialValue ? 'Down' : null;
    const prevDirection = directionRef.current;

    if (direction !== prevDirection) {
      console.log(direction)
    }

    directionRef.current = direction;
  }, [counter])

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addOne}>Add</button>
      <button onClick={removeOne}>Remove</button>
    </>
  )
}

export default Counter;