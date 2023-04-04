import useSwr from "swr";

import fetcher from "@/libs/fetcher"

const useCurrentUser = () => {
  // Use the "useSwr" hook to fetch the current user data from the "/api/current" endpoint using the "fetcher" function
  const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher)

  return {
    data,
    error,
    isLoading,
    mutate
  }
}

export default useCurrentUser;
