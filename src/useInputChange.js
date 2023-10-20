import { useState } from "react"

const useInputChange = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(d => {
      return { 
        ...d, 
        [name]: value 
      }
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(data);
  }

  return { data, handleChange, handleFormSubmit }

}

export default useInputChange;