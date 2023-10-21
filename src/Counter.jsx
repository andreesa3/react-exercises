import useCounter from './useCounter'

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
