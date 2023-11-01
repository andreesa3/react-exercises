import useSWR from 'swr'

const useGithubUser = (API_URL) => {
  const fetcher = (url) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(API_URL, fetcher)


  return { data, error, isLoading }

}

export default useGithubUser;