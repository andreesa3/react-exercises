import { useEffect, useRef } from "react";
import {Button} from 'react-bootstrap'

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, [])


  return (
    <>
      <input className="text-danger" type="text" ref={inputRef} />
      <Button onClick={() => alert('bottone cliccato')} variant="success">Cliccami</Button>
    </>
  )
}

export default FocusableInput;