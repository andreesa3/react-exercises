import { useState, useEffect } from "react"

const useFetch = (API_URL) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { data }

}

export default useFetch;