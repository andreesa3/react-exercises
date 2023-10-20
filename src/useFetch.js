import { useState, useEffect } from "react"

const useFetch = (API_URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { data }

}

export default useFetch;