import { useState } from 'react'

function App() {

  const sayHello = (name) => {
    return <h1>Hello {name}</h1>
  }

  return (
    <>
    {/* L'espressione JSX verrà interpretata da React e mandata a schermo
     come figlio diretto di h1 */}
    {sayHello(<span>Andrea</span>)}
    </>
  )
}

export default App
