import Login from "./Login"

const App = () => {

  const onLogin = (e, data) => {
    e.preventDefault();
    console.log('data', data)
  }

  return (
    <>
      <Login event={onLogin} />
    </>
  )
}

export default App;
