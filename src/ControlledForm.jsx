import useInputChange from "./useInputChange";

// Usare il custom hook in un componente
const ControlledForm = () => {
  const { data, handleChange, handleFormSubmit } = useInputChange();

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="username" placeholder="username" onChange={handleChange} value={data.username} />
      <input type="password" name="password" placeholder="password" onChange={handleChange} value={data.password} />
      <button>Invia</button>
    </form>
  );
}

export default ControlledForm;