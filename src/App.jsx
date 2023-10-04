import Hello from "./Hello";

const App = () => {
  return (
    <>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      {/* Il componente viene ripetuto tante quante
       volte lo inseriamo, mostrando il proprio contenuto 
      che può essere configurato in modo diverso */}
    </>
  )
}

export default App;