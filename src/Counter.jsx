const Counter = ({counter, setCounter}) => {
  return (
    <>  
      <h2>{counter}</h2>
      <button onClick={setCounter}>Click</button>
    </>
  )
}

export default Counter;