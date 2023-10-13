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
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="remember" />
        <button>Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  )
}

export default UncontrolledLogin;