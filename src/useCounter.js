import { useState, useCallback } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return { count, increment, decrement, reset };
}

export default useCounter;
