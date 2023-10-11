import Login from "./Login"

const App = () => {
  const onLogin = () => {
    console.log('data', data)
  }

  return (
    <>
      <Login event={onLogin} />
    </>
  )
}

export default App;