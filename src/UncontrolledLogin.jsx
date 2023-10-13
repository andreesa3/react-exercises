const UncontrolledLogin = () => {
  const handleFormData = (e) => {
    e.preventDefault();

    // const username = e.target.elements.namedItem('username').value;
    // const password = e.target.elements.namedItem('password').value;
    // const remember = e.target.elements.namedItem('remember').checked;


    // VANTAGGI 

    /*  1. Semplifica l'accesso ai valori del form. */
    const formData = new FormData(e.target);

    /*  2. Distingue i tipi di input in maniera autonoma senza dover specificare */
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      remember: formData.get('remember') === 'on' ? true : false
    }

    // Svantaggi:

    /* 1. Potrebbe essere incompatibile con versioni piû vecchie di browser */
    /* 2. Potrebbe dare problemi con form di grandi dimensioni */
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