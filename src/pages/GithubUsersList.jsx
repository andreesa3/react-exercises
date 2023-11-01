import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const GithubUserList = () => {
  const [usersList, setUsersList] = useState([]);
  const [username, setUsername] = useState('');

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
          <input type="text" className="border-2 block p-1 mt-2" name="username" value={username} onChange={handleUsername} placeholder="andreesa3" />
          <button disabled={username.length <= 0} className="border py-1 px-4 my-3 bg-black text-white hover:bg-gray-800" type="submit">Invia</button>
        </form>
        <ul className="flex flex-wrap gap-10">
          {
            usersList.length > 0 && (
              usersList.map((username, index) => (
                <li key={index}>
                  <Link to={`/users/${username}`}>{username}</Link>
                </li>
              ))
            )
          }
        </ul>

        <Outlet />
      </div>
    </>

  )
}

export default GithubUserList;