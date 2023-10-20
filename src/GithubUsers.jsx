import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUsers = ({ username, setUsername }) => {
  const [usersList, setUsersList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const existingUser = usersList.find(item => item === username);
    if (!existingUser) {
      setUsersList(d => [...d, username]);
    }
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
        <ul className="flex flex-wrap gap-10">
          {
            usersList.length > 0 && (
              usersList.map((item, index) => {
                return <li key={index}><GithubUser username={item} /></li>
              })
            )
          }
        </ul>
      </div>
    </>
  )
}

export default GithubUsers;