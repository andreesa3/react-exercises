import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1)
  }

  const removeOne = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1 style={{backgroundColor: 'lightblue', padding: '1rem', maxWidth: '1rem'}}>{count}</h1>
      <button onClick={addOne}>Add</button>
      <button onClick={removeOne}>Remove</button>
    </>
  )
}

export default Counter;