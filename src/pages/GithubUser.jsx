import useGithubUser from "../hooks/useGithubUser";

const GithubUser = ({ username }) => {
  const API_URL = `https://api.github.com/users/${username}`
  const { data, error, isLoading } = useGithubUser(API_URL, username)

  return (
    <div className="p-4">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {
        data && (
          <div style={{ marginTop: '1.5rem' }}>
            <img style={{ height: '10rem' }} src={data.avatar_url} alt="user avatar" />
            <p>{data.login}</p>
            <p>{data.name}</p>
          </div>
        )
      }
    </div>
  )
}

export default GithubUser;