import Login from "./Login";

const onLogin = (e, data) => {
  e.preventDefault();
  console.log(data)
}

const App = () => {
  return (
    <>
      <Login event={onLogin}/>
    </>
  )
}

export default App;
