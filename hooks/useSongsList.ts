import useSWR from 'swr';
import { fetcher } from '@/libs/fetcher';

const useSongList = () => {
  const { data, error, isLoading } = useSWR('/api/videos', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    error,
    isLoading
  };
};

export default useSongList;
