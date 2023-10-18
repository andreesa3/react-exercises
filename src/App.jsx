import LanguageContext from "./LanguageContext";
import Container from "./Container";
import Clock from './Clock';
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageSelector = (e) => {
    setLanguage(e.target.value)
  }


  return (
    <>
      <div>
        <select name="languageSelector" id="" onChange={handleLanguageSelector}>
          <option value="it">IT</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
        <Container title={<h1 className="text-3xl font-extrabold border-b-2 mb-4 py-2">My Blog</h1>}>
          <LanguageContext.Provider value={language}>
            <Clock />
          </LanguageContext.Provider>
        </Container>
      </div>
    </>
  )
}

export default App;
