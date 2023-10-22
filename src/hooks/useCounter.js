import { useState } from 'react';

const useCounter = (initialCount) => {
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

export default useCounter;