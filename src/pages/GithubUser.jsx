import { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const API_URL = `https://api.github.com/users/${username}`

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="p-4">
      {
        data && (
          <div style={{marginTop: '1.5rem'}}>
            <img style={{height: '10rem'}} src={data.avatar_url} alt="user avatar" />
            <p>{data.login}</p>
            <p>{data.name}</p>
          </div>
        )
      }
    </div>
  )
}

export default GithubUser;