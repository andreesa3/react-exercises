import { useState } from "react";
import { useEffect } from "react";

const GithubUser = ({ username, setUsername }) => {
  const API_URL = `https://api.github.com/users/${'andreesa3'}`

  const [data, setData] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])
  
  return (
    <>
      <form className="flex justify-center flex-col align-middle h-10 border-red-600">
        <label htmlFor="username" className="font-bold text-xl">Inserisci nome utente</label>
        <input type="text" className="border-2 block" name="username" value={username} onChange={handleUsername} />
      </form>
      {
        // data && (
        //   data.map(item => {
        //     return (
        //       <img src={item.}
        //     )
        //   })
        // )
      }
    </>
  )
}

export default GithubUser;