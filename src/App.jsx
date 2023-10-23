import { Routes, Route, Link } from "react-router-dom";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ShowGithubUser from "./pages/ShowGithubUser";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/users/andreesa3'>GithubUser</Link>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  )
}

export default App;