import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    // Inseriamo un valore immediato se vogliamo fare un'operazione semplice come addizione, sottrazione, ecc...
    // setCounter(counter + 1)
    // Usiamo la funzione quando vogliamo fare delle operazioni più complesse
    // setCounter(counter => {
    //   if (counter < 10) {
    //     return counter + 1;
    //   } else {
    //     return counter = 0;
    //   }
    // })
  }

  return (
    <>  
      <h2>{counter}</h2>
      <button onClick={addOne}>Click</button>
    </>
  )
}

export default Counter;