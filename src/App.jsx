import { useState } from 'react'

function App() {

  const sayHello = (name) => {
    return <h1>Hello {name}</h1>
  }

  return (
    <>
    {/* La variabile name non appare a schermo ma abbiamo solo "Hello " con spazio vuoto*/}
    {sayHello()}
    </>
  )
}

export default App
