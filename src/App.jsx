import GithubUsers from "./GithubUsers";
import { useState } from "react";

const App = () => {

  const [username, setUsername] = useState('');

  return (
    <>
      <GithubUsers username={username} setUsername={setUsername} />
    </>
  )
}

export default App;
