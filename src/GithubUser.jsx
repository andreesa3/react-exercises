import useFetch from "./useFetch";

const GithubUser = ({ username }) => {
  const data = useFetch(username);

  return (
    <div className="p-4">
      {data && (
        <div className="mt-5 bg-gray-300 p-5 max-w-max">
          <img className="h-52" src={data.avatar_url} alt="user avatar" />
          <p className="pt-1 font-extrabold italic">{data.login}</p>
          <p className="text-2xl">{data.name}</p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
