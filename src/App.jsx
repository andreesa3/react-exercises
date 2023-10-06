function App() {

  // The sayHello function expects a 'name' parameter, but if it's not provided,
  // 'name' will be undefined.
  const sayHello = (name) => {
    return <h1>Hello {name}</h1>;
  }

  return (
    <>
    {/* The 'name' parameter is not provided here, so it will be undefined. */}
    {sayHello()} {/* This will render "Hello undefined" */}
    </>
  )
}

export default App
