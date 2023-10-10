import { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome () {
  const [name, setName] = useState('');

  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleNameInput} />
      <Welcome name={name}/>
    </>
  )
}