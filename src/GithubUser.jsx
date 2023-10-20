import useFetch from "./useFetch";

const GithubUser = ({ username }) => {
  const API_URL = `https://api.github.com/users/${username}`

  const { data, error, loading, fetchData } = useFetch(API_URL)

  return (
    <div className="p-4">
      {loading && <h2 className="text-xl">Loading...</h2>}
      {error && <p>Utente non trovato</p>}
      {
        data ? (
          <div className="mt-5 bg-gray-300 p-5 max-w-max">
            <img className="h-52" src={data.avatar_url} alt="user avatar" />
            <p className="pt-1 font-extrabold italic">{data.login}</p>
            <p className="text-2xl">{data.name}</p>
          </div>
        ) : (
          <button className="border mt-3 border-black py-1 px-2 hover:bg-black hover:text-white" onClick={fetchData}>Mostra utente</button>
        )
      }
    </div>
  )
}

export default GithubUser;