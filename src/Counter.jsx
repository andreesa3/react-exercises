import { useState } from "react";

const Counter = ({initialValue, n}) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {

    /* Quando passiamo una funzione, React garantisce che gli aggiornamenti vengano applicati
     correttamente, anche se ce ne sono di più in modo simultaneo. Garantisce che gli aggiornamenti 
     vengano applicati nell'ordine in cui sono stati chiamati e che le transizioni di stato siano coerenti. */

    setCounter(c => c + n);

    /* Quando passiamo un valore diretto, React non fornisce le stesse garanzie e potremmo riscontrare
    comportamenti imprevisti quando ci sono più aggiornamento in un breve intervallo di tempo. */
    
    // setCounter(counter + n);
    
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}

export default Counter;