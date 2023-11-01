import useSWR from 'swr'

const useGithubUser = (API_URL, username) => {
  const fetcher = (url) => fetch(url).then(res => res.json());

  if (username) {
    const { data, error, isLoading } = useSWR(API_URL, fetcher)
    return { data, error, isLoading }
  }

  return { data: null, error: null, isLoading: false }

}

export default useGithubUser;