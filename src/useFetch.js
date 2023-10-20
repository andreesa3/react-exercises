import { useState } from "react"

const useFetch = (API_URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setData(result);
        }, 500)
        setLoading(false)
      }
    } catch (error) {
      setError(error)
    }
  }

  return { data, error, loading, fetchData }

}

export default useFetch;