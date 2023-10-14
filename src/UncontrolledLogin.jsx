const UncontrolledLogin = () => {
  const handleFormData = (e) => {
    e.preventDefault();

    // Standard
    // const username = e.target.elements.namedItem('username').value;
    // const password = e.target.elements.namedItem('password').value;
    // const remember = e.target.elements.namedItem('remember').checked;
    
    // Non standard
    // const username = e.target.username.value;
    // const password = e.target.password.value;
    // const remember = e.target.remember.checked;

    // const data = {
    //   username,
    //   password,
    //   remember
    // }

    const formData = new FormData(e.target);

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      remember: formData.get('remember') === 'on' ? true : false
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