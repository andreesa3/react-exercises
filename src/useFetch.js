import { useState, useEffect } from "react";

const useFetch = (username) => {
  const API_URL = `https://api.github.com/users/${username}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [username]);

  return data;
};

export default useFetch;
