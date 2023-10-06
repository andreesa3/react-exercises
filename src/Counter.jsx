import CounterDisplay from "./CounterDisplay";

const Counter = ({counter, setCounter}) => {
  return (
    <>  
      <CounterDisplay counter={counter}/>
      <button onClick={setCounter}>Click</button>
    </>
  )
}

export default Counter;