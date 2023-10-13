import Login from "./Login"
import UncontrolledLogin from "./UncontrolledLogin"

const App = () => {
  const onLogin = (e, data) => {
    e.preventDefault();
    console.log('data', data)
  }

  return (
    <>
      <Login event={onLogin} />
      <UncontrolledLogin />
    </>
  )
}

export default App;
