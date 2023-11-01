import useSWR from 'swr'

const useGithubUser = (API_URL, username) => {
  const fetcher = (url) => fetch(url).then(res => res.json());

  if (username) {
    const { data, error, isLoading, mutate } = useSWR(API_URL, fetcher)

    const handleRefresh = () => {
      mutate()
    }

    return { data, error, isLoading, handleRefresh}
  }

  return { data: null, error: null, isLoading: false }

}

export default useGithubUser;