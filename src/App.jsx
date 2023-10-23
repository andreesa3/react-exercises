import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import ShowGithubUser from "./pages/ShowGithubUser";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  )
}

export default App;
