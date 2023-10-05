import { useState } from 'react'

function App() {

  const sayHello = (name) => name;
  const jsxExpression = <h1>Andrea</h1>

  return (
    <>
      {sayHello(jsxExpression)}
    </>
  )
}

export default App
