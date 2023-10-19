import { useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(c => c + 1);
  };

  const decrement = () => {
    setCount(c => c - 1);
  };

  const reset = () => {
    setCount(0)
  }

  return { count, increment, decrement, reset };
}

// Usare il custom hook in un componente
const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={increment}>Aumenta</button>
      <button onClick={decrement}>Diminuisci</button>
      <button onClick={reset}>Resetta</button>
    </div>
  );
}

export default Counter;
