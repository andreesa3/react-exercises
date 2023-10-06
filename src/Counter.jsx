import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1)
  }

  return (
    <>  
      <h2>{counter}</h2>
      <button onClick={addOne}>Click</button>
    </>
  )
}

export default Counter;