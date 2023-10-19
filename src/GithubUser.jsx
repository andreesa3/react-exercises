const GithubUser = ({obj}) => {
  return (
    <>
      <div className="mt-5 bg-gray-300 p-5 max-w-max">
        <img className="h-52" src={obj.avatar_url} alt="user avatar" />
        <p className="pt-1 font-extrabold italic">{obj.login}</p>
        <p className="text-2xl">{obj.name}</p>
      </div>
    </>

  )
}

export default GithubUser;