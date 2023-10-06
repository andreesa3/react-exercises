import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const addOne = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <Counter counter={counter} setCounter={addOne}/>
    </>
  )
}

export default App;