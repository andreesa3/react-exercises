import { useState } from "react";

const GithubUser = ({ username, setUsername }) => {
  const API_URL = `https://api.github.com/users/${username}`

  const [data, setData] = useState(null);

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setUsername('');
    await fetchData();
  }

  return (
    <div className="p-4">
      <form className="border-red-600" onSubmit={handleSubmitForm}>
        <label htmlFor="username" className="font-bold text-xl">Inserisci nome utente</label>
        <input type="text" className="border-2 block p-1 mt-2" name="username" value={username} onChange={handleUsername} placeholder="andreesa3"/>
        <button className="border py-1 px-4 my-3 bg-black text-white hover:bg-gray-800" type="submit">Invia</button>
      </form>
      {
        data && (
          <div className="mt-5 bg-gray-300 p-5 max-w-max">
            <img className="h-52" src={data.avatar_url} alt="user avatar" />
            <p className="pt-1 font-extrabold italic">{data.login}</p>
            <p className="text-2xl">{data.name}</p>
          </div>
        )
      }
    </div>
  )
}

export default GithubUser;