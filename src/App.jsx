import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import Welcome from "./pages/Welcome";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser username="andreesa3" />} />
      </Routes>
    </>
  )
}

export default App;
