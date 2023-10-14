import { useEffect, useRef } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      console.log('Mounting for the first time!')
    } 
    inputRef.current.focus()
  }, [])
  

  return (
    <>
      <input type="text" ref={inputRef}/>
    </>
  )
}

export default FocusableInput;