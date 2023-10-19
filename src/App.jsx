import GithubUser from "./GithubUser";
import { useState } from "react";

const App = () => {

  const [username, setUsername] = useState('');

  return (
    <>
      <GithubUser username={username} setUsername={setUsername} />
    </>
  )
}

export default App;
