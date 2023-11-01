import { useState } from "react"
import useSWR from 'swr';

const useGithubUser = (API_URL) => {
  const [loading, setLoading] = useState(false)

  const fetcher = () => fetch(API_URL).then(res => res.json())

  const { data, error } = useSWR('api/endpoint', fetcher);

  return { data, error, loading }

}

export default useGithubUser;