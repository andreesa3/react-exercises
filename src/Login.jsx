import { useState } from "react";

const Login = () => {
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

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log('data', data)
  }

  return (
    <>
    <form onSubmit={handleInputSubmit}>
      <input type="text" name="username" value={data.username} onChange={handleInputChange} />
      <input type="password" name="password" value={data.password} onChange={handleInputChange} />
      <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
      <button>Submit</button>
      <button onClick={handleResetForm}>Reset</button>
    </form>
    </>
  )
}

export default Login;