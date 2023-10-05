import Welcome from "./Welcome";

const name = <strong>Marco</strong>;

const App = () => {
  return (
    <>
      <Welcome name={name} age={21}/>
    </>
  )
}

export default App;