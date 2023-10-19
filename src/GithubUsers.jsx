import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUsers = ({ username, setUsername }) => {
  const API_URL = `https://api.github.com/users/${username}`


  const [data, setData] = useState(null);
  const [usersList, setUsersList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const fetchData = async () => {
    try {
      const existingUser = usersList.find(item => item.login === username);
      if (!existingUser) {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
        setUsersList(d => [...d, result]);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await fetchData();
    console.log(newArr)
    setUsername('');
  }

  return (
    <>
      <div className="p-4">
        <form className="border-red-600" onSubmit={handleSubmitForm}>
          <label htmlFor="username" className="font-bold text-xl">Inserisci nome utente</label>
          <input type="text" className="border-2 block p-1 mt-2" name="username" value={username} onChange={handleUsername} placeholder="andreesa3" />
          <button className="border py-1 px-4 my-3 bg-black text-white hover:bg-gray-800" type="submit">Invia</button>
        </form>
        <ul className="flex justify-center flex-wrap gap-10">
          {
            data && (
              usersList.map((item, index) => {
                return <li key={index}><GithubUser obj={item} /></li>
              })
            )
          }
        </ul>
      </div>
    </>
  )
}

export default GithubUsers;