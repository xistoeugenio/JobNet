import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useJobs = () => {
  const url ='/api/jobs';
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useJobs;
