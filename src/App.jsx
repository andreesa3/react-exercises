import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
      </Routes>
    </>
  )
}

export default App;
