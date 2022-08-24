import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

const useProducts = (url) => {
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProducts;
