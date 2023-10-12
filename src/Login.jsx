import { useState } from "react";

const Login = ({ event }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setData(d => {
      return {
        ...d,
        [name]: value
      }
    })

  }

  const handleResetForm = (e) => {
    e.preventDefault();

    setData({
      username: '',
      password: '',
      remember: false
    });
  }

  return (
    <>
      <form onSubmit={(e) => event(e, data)}>
        <input type="text" name="username" value={data.username} onChange={handleInputChange} />
        <input type="password" name="password" value={data.password} onChange={handleInputChange} />
        <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
        <button disabled={data.username.length <= 0 || data.password.length <= 0 ? true : false}>Submit</button>
        <button onClick={handleResetForm}>Reset</button>
      </form>
    </>
  )
}

export default Login;