const UncontrolledLogin = () => {
  const handleFormData = (e) => {
    e.preventDefault();

    const username = e.target.elements.namedItem('username').value;
    const password = e.target.elements.namedItem('password').value;
    const remember = e.target.elements.namedItem('remember').checked;

    const data = {
      username,
      password,
      remember
    }

    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleFormData}>
        <input className="border-2 border-gray-600 m-2 p-1" type="text" name="username" />
        <input className="border-2 border-gray-600 p-1" type="password" name="password" />
        <input className="m-2" type="checkbox" name="remember" />
        <button className="bg-green-300 py-1 px-2 mr-2">Submit</button>
        <button className="bg-blue-300 py-1 px-2" type="reset">Reset</button>
      </form>
    </>
  )
}

export default UncontrolledLogin;