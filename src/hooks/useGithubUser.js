import useSWR from 'swr'

const useGithubUser = (API_URL, username) => {

  if (username) {
    const { data, error, isLoading, mutate } = useSWR(API_URL)

    const handleRefresh = () => {
      mutate()
    }

    return { data, error, isLoading, handleRefresh}
  }

  return { data: null, error: null, isLoading: false }

}

export default useGithubUser;