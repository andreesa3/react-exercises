import { Routes, Route, Link } from "react-router-dom";
import Counter from "./pages/Counter";
import GithubUserList from "./pages/GithubUsersList";
import NotFound from "./pages/NotFound";
import ShowGithubUser from "./pages/ShowGithubUser";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/users'>GithubUser</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<div>Add a user and select it</div>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;