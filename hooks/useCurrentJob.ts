import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useCurrentJob = (id: any) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/${id}/job`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentJob;
