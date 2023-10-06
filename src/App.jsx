function App() {
  const sayHello = (name) => {
    return <h1>Hello {name}</h1>
  }

  return (
    <>
    {sayHello('Andrea')}
    </>
  )
}

export default App
